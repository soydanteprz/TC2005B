-- Delete_entregan_material
-- Description: Trigger for delete in table entregan
DELIMITER $$

CREATE TRIGGER `delete_entregan_material` BEFORE DELETE ON `entregan` FOR EACH ROW
BEGIN
    DECLARE material_count INT;

    -- Get the current material count
    SELECT COUNT(*) INTO material_count FROM materiales WHERE clave = OLD.clave;

    -- If the material count is 0, delete the material entry as well
    IF material_count = 0 THEN
        DELETE FROM materiales WHERE clave = OLD.clave;
    END IF;
END$$

DELIMITER ;

