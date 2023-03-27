-- LAB21 - SQL
-- Author: Dante Pérez
--          Ricardo Rosales
--          Miguel Tena

--  La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.
SELECT SUM(Cantidad) AS SumaCantidades, SUM(cantidad * materiales.precio * (1 + materiales.impuesto / 100)) AS Importetotal
FROM entregan
JOIN materiales ON entregan.clave = materiales.clave
WHERE YEAR(entregan.fecha) = 1997;




-- Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.
-- time complexity: O(n)
SELECT p.RazonSocial AS 'RazonSocial', COUNT(*) AS NumEntregas, SUM(Cantidad*precio*(1+PorcentajeImpuesto)) AS ImporteTotal -- 1+PorcentajeImpuesto es el precio con impuesto
FROM Proveedores p -- Proveedores
INNER JOIN Entregan e ON p.RFC = e.RFC -- Entregan
INNER JOIN Materiales m ON e.Clave = m.Clave 
GROUP BY p.RazonSocial;

-- Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.
SELECT 
  materiales.clave, 
  materiales.descripcion, 
  SUM(entregan.cantidad) AS CantidadTotalEntregada, 
  MIN(entregan.cantidad) AS MinimaCantidadEntregada, 
  MAX(entregan.cantidad) AS MaximaCantidadEntregada, 
  SUM(entregan.cantidad * materiales.precio * (1 + materiales.impuesto / 100)) AS ImporteTotalEntregas,
  AVG(entregan.cantidad) AS 'promedio'
FROM materiales
JOIN entregan ON materiales.clave = entregan.clave AND entregan.cantidad> 400
GROUP BY materiales.clave  
ORDER BY `promedio` ASC;


-- Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
--Time complexity: O(n)
SELECT p.RazonSocial AS Proveedor, m.Clave, m.Descripcion, avg_cant.CantidadPromedio
FROM Proveedores p
JOIN (
    SELECT e.RFC, e.Clave, AVG(e.Cantidad) AS CantidadPromedio
    FROM Entregan e
    GROUP BY e.RFC, e.Clave
) avg_cant ON p.RFC = avg_cant.RFC
JOIN Materiales m ON avg_cant.Clave = m.Clave
WHERE avg_cant.CantidadPromedio >= 500
ORDER BY p.RazonSocial, m.Clave

-- Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.
SELECT 
  CASE 
    WHEN avg_cant.CantidadPromedio < 370 THEN 'Menor a 370' 
    WHEN avg_cant.CantidadPromedio > 450 THEN 'Mayor a 450' 
    ELSE 'Entre 370 y 450' 
  END AS Grupo, 
  p.RazonSocial AS Proveedor, 
  m.Clave, 
  m.Descripcion, 
  avg_cant.CantidadPromedio
FROM Proveedores p
JOIN Materiales m 
ON EXISTS (
  SELECT 1
  FROM Entregan e
  WHERE e.RFC = p.RFC AND e.Clave = m.Clave
)
JOIN (
  SELECT 
    RFC, 
    Clave, 
    AVG(Cantidad) AS CantidadPromedio 
  FROM Entregan 
  GROUP BY RFC, Clave
) avg_cant 
ON p.RFC = avg_cant.RFC AND m.Clave = avg_cant.Clave
WHERE avg_cant.CantidadPromedio < 370 OR avg_cant.CantidadPromedio > 450
ORDER BY Grupo, p.RazonSocial, m.Clave;


-- insert 5 new materials
INSERT INTO materiales (clave, descripcion, precio, impuesto, PorcentajeImpuesto) VALUES
(99, 'Material 1', 100, 66, 4),
(98, 'Material 2', 200, 66, 4),
(97, 'Material 3', 300, 66, 4),
(96, 'Material 4', 400, 66, 4),
(95, 'Material 5', 500, 66, 4);


-- Clave y descripción de los materiales que nunca han sido entregados.
SELECT clave, descripcion
FROM materiales
WHERE clave NOT IN (
    SELECT clave
    FROM entregan
);

-- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.
SELECT 
  p.RFC, 
  p.RazonSocial 
FROM 
  proveedores p 
  JOIN entregan e ON p.RFC = e.RFC 
  JOIN proyectos pr ON e.Numero = pr.Numero 
WHERE 
  pr.Denominacion = 'Vamos México'
INTERSECT
SELECT 
  p.RFC, 
  p.RazonSocial 
FROM 
  proveedores p 
  JOIN entregan e ON p.RFC = e.RFC 
  JOIN proyectos pr ON e.Numero = pr.Numero 
WHERE 
  pr.Denominacion = 'Querétaro Limpio';

-- Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.
SELECT m.descripcion
FROM materiales m
WHERE
    NOT EXISTS (SELECT 1
    FROM Entregan e
    WHERE e.clave = m.clave
    AND e.numero = 'CIT Yucatán');

-- Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.
SELECT 
  p.RazonSocial, 
  AVG(e.cantidad) AS 'Promedio de cantidad entregada'
FROM 
  proveedores p 
  JOIN entregan e ON p.RFC = e.RFC 
GROUP BY 
  p.RazonSocial 
HAVING 
  AVG(e.cantidad) > (SELECT AVG(cantidad) FROM entregan WHERE RFC = 'VAGO780901');

-- RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.
SELECT 
  p.RFC, 
  p.RazonSocial
FROM
    proveedores p
    JOIN entregan e ON p.RFC = e.RFC
    JOIN proyectos pr ON e.Numero = pr.Numero
    WHERE
    pr.Denominacion = 'Infonavit Durango'
    AND (SELECT SUM(cantidad) FROM entregan WHERE RFC = p.RFC AND YEAR(fecha) = 2000) > (SELECT SUM(cantidad) FROM entregan WHERE RFC = p.RFC AND YEAR(fecha) = 2001);