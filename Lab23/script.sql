-- ======================
-- Lab23
-- Dante Pérez
-- Ricardo Rosales
-- Miguel Tena
-- ======================

-- Materiales(Clave, Descripción, Costo)
-- Proveedores(RFC, RazonSocial)
-- Proyectos(Numero,Denominacion)
-- Entregan(Clave, RFC, Numero, Fecha, Cantidad)

CREATE PROCEDURE `agregarproveedor`(IN `urfc` VARCHAR(15), IN `urazon` VARCHAR(100)) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
INSERT INTO proveedores VALUES (urfc, urazon);

CREATE PROCEDURE `entregas_proveedores`(IN `urfc` VARCHAR(15)) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
SELECT entregan.Clave, entregan.RFC, entregan.Numero, entregan.Fecha, entregan.Cantidad FROM entregan WHERE entregan.RFC = urfc;

CREATE PROCEDURE `entregas_proyectos`(IN `unumero` INT) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER
SELECT entregan.Clave, entregan.RFC, entregan.Numero, entregan.Fecha, entregan.Cantidad FROM entregan WHERE entregan.Numero = unumero;

