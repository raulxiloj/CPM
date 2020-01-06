-------------------------DISTRIBUCION-------------------------- 

-- Puntos cardinales
INSERT INTO punto VALUES (1,'Norte','N');
INSERT INTO punto VALUES (2,'Sur','S');
INSERT INTO punto VALUES (3,'Este','E');
INSERT INTO punto VALUES (4,'Oeste','O');
INSERT INTO punto VALUES (5,'Noreste','NE');
INSERT INTO punto VALUES (6,'Noroeste','NO');
INSERT INTO punto VALUES (7,'Sureste','SE');
INSERT INTO punto VALUES (8,'Suroeste','SO');
INSERT INTO punto VALUES (9,'Norte-Este-Oeste','NEO');
INSERT INTO punto VALUES (10,'Norte-Sur-Este','NSE');
INSERT INTO punto VALUES (11,'Norte-Sur-Oeste','NSO');
INSERT INTO punto VALUES (12,'Sur-Este-Oeste','SEO');
INSERT INTO punto VALUES (13, 'Norte-Sur-Este-Oeste','NSEO');

-- Region
INSERT INTO region (nombre)
SELECT nombre_region
FROM temp3
WHERE region_padre IS NULL;

INSERT INTO region(nombre,padre)
SELECT t.nombre_region, r.id_region
FROM temp3 t INNER JOIN region r
ON t.region_padre = r.nombre;

-- Pais
INSERT INTO pais(nombre,poblacion,area,region)
SELECT DISTINCT t.pais_inventor, t.poblacion, t.area, r.id_region
FROM temp1 t INNER JOIN region r 
ON t.region_pais = r.nombre
ORDER BY t.pais_inventor;

INSERT INTO pais(nombre)
SELECT DISTINCT frontera 
FROM temp1
WHERE frontera NOT IN (SELECT p.nombre
                  FROM temp1 t INNER JOIN pais p 
                  ON t.frontera = p.nombre);
                  
-- Capital
INSERT INTO capital(nombre,pais)
SELECT DISTINCT t.capital, p.id_pais
FROM temp1 t INNER JOIN pais p
ON t.pais_inventor = p.nombre;

-- Frontera
INSERT INTO frontera(id_pais,id_frontera,punto)
SELECT p.id_pais AS pais, p2.id_pais as frontera, 
CASE 
    WHEN t.norte = 1 AND t.sur = 0 AND t.este = 0 AND t.oeste = 0 THEN 1
    WHEN t.norte = 0 AND t.sur = 1 AND t.este = 0 AND t.oeste = 0 THEN 2
    WHEN t.norte = 0 AND t.sur = 0 AND t.este = 1 AND t.oeste = 0 THEN 3
    WHEN t.norte = 0 AND t.sur = 0 AND t.este = 0 AND t.oeste = 1 THEN 4
    WHEN t.norte = 1 AND t.sur = 0 AND t.este = 1 AND t.oeste = 0 THEN 5
    WHEN t.norte = 1 AND t.sur = 0 AND t.este = 0 AND t.oeste = 1 THEN 6
    WHEN t.norte = 0 AND t.sur = 1 AND t.este = 1 AND t.oeste = 0 THEN 7
    WHEN t.norte = 0 AND t.sur = 1 AND t.este = 0 AND t.oeste = 1 THEN 8
    WHEN t.norte = 1 AND t.sur = 0 AND t.este = 1 AND t.oeste = 1 THEN 9
    WHEN t.norte = 1 AND t.sur = 1 AND t.este = 1 AND t.oeste = 0 THEN 10
    WHEN t.norte = 1 AND t.sur = 1 AND t.este = 0 AND t.oeste = 1 THEN 11
    WHEN t.norte = 0 AND t.sur = 1 AND t.este = 1 AND t.oeste = 1 THEN 12
    WHEN t.norte = 1 AND t.sur = 1 AND t.este = 1 AND t.oeste = 1 THEN 13
END as cardinalidad
FROM temp1 t INNER JOIN pais p
ON t.pais_inventor = p.nombre INNER JOIN pais p2
ON t.frontera = p2.nombre
WHERE frontera IS NOT NULL
GROUP BY p.id_pais, p2.id_pais, CASE  WHEN t.norte = 1 AND t.sur = 0 AND t.este = 0 AND t.oeste = 0 THEN 1
                                    WHEN t.norte = 0 AND t.sur = 1 AND t.este = 0 AND t.oeste = 0 THEN 2
                                    WHEN t.norte = 0 AND t.sur = 0 AND t.este = 1 AND t.oeste = 0 THEN 3
                                    WHEN t.norte = 0 AND t.sur = 0 AND t.este = 0 AND t.oeste = 1 THEN 4
                                    WHEN t.norte = 1 AND t.sur = 0 AND t.este = 1 AND t.oeste = 0 THEN 5
                                    WHEN t.norte = 1 AND t.sur = 0 AND t.este = 0 AND t.oeste = 1 THEN 6
                                    WHEN t.norte = 0 AND t.sur = 1 AND t.este = 1 AND t.oeste = 0 THEN 7
                                    WHEN t.norte = 0 AND t.sur = 1 AND t.este = 0 AND t.oeste = 1 THEN 8
                                    WHEN t.norte = 1 AND t.sur = 0 AND t.este = 1 AND t.oeste = 1 THEN 9
                                    WHEN t.norte = 1 AND t.sur = 1 AND t.este = 1 AND t.oeste = 0 THEN 10
                                    WHEN t.norte = 1 AND t.sur = 1 AND t.este = 0 AND t.oeste = 1 THEN 11
                                    WHEN t.norte = 0 AND t.sur = 1 AND t.este = 1 AND t.oeste = 1 THEN 12
                                    WHEN t.norte = 1 AND t.sur = 1 AND t.este = 1 AND t.oeste = 1 THEN 13
                                    END;

-- Profesional
INSERT INTO profesional(nombre,salario,comision,fecha_contrato)
SELECT DISTINCT profesional_asignado, salario, comision, fecha_contrato
FROM temp1
WHERE profesional_asignado IS NOT NULl;

-- Invento
INSERT INTO invento(nombre,pais,anio,profesional)
SELECT DISTINCT invento, p.id_pais, t.anio_invento, pro.id_profesional
FROM temp1 t INNER JOIN pais p 
ON t.pais_invento = p.nombre INNER JOIN profesional pro
ON t.profesional_asignado = pro.nombre;

-- Inventor
INSERT INTO inventor(nombre,pais)
SELECT DISTINCT inventor, p.id_pais
FROM temp1 t INNER JOIN pais p
ON t.pais_inventor = p.nombre
WHERE inventor IS NOT NULL;

-- Detalle invento
INSERT INTO detalleinvento(id_invento,id_inventor)
SELECT  i.id_invento, i2.id_inventor
FROM temp1 t INNER JOIN invento i 
ON t.invento = i.nombre INNER JOIN inventor i2
ON t.inventor = i2.nombre INNER JOIN pais p
ON t.pais_inventor = p.nombre AND i2.pais = p.id_pais
GROUP BY i.id_invento, i2.id_inventor;

-- Area
INSERT INTO area (nombre,ranking,jefe)
SELECT area_investigacion,ranking,p.id_profesional
FROM
(SELECT DISTINCT area_investigacion,ranking
FROM temp1 
WHERE area_investigacion IS NOT NULL) T1 LEFT JOIN 
(SELECT DISTINCT profesional_asignado, jefe_area
FROM temp1
WHERE profesional_asignado IS NOT NULL) T2 
ON T1.area_investigacion = jefe_area LEFT JOIN profesional p
ON T2.profesional_asignado = p.nombre;

INSERT INTO area(nombre,jefe)
SELECT DISTINCT jefe_area,id_profesional
FROM temp1 t INNER JOIN profesional p
ON t.profesional_asignado = p.nombre
WHERE profesional_asignado = 'KING PRESIDENT';

-- Profesional area
INSERT INTO profesional_area(id_profesional,id_area)
SELECT DISTINCT p.id_profesional,a.id_area
FROM temp1 t INNER JOIN profesional p
ON t.profesional_asignado = p.nombre INNER JOIN area a
ON t.area_investigacion = a.nombre
WHERE profesional_asignado IS NOT NULL;

-- Encuesta
INSERT INTO encuesta(nombre)
SELECT DISTINCT nombre_encuesta
FROM temp2;

-- Pregunta
INSERT INTO pregunta (nombre)
SELECT DISTINCT pregunta
FROM temp2 t;

-- Encuesta-Pregunta
INSERT INTO encuesta_pregunta(id_encuesta,id_pregunta)
SELECT DISTINCT e.id_encuesta,p.id_pregunta
FROM temp2 t INNER JOIN encuesta e 
ON t.nombre_encuesta = e.nombre INNER JOIN pregunta p
ON t.pregunta = p.nombre;

-- Respuesta
INSERT INTO respuesta(nombre)
SELECT DISTINCT TRIM(SUBSTR(respuesta_posible,3,LENGTH(respuesta_posible)))
FROM temp2;

-- Detalle-Respuesta
INSERT INTO detallerespuesta(id_encuesta,id_pregunta,id_respuesta,res_correcta,letra)
SELECT DISTINCT e.id_encuesta, p.id_pregunta, r.id_respuesta, CASE WHEN TRIM(SUBSTR(respuesta_correcta,3,LENGTH(respuesta_correcta))) = r.nombre THEN 1 ELSE 0 END AS correcto, SUBSTR(t.respuesta_posible,1,1)
FROM temp2 t INNER JOIN pregunta p
ON t.pregunta = p.nombre INNER JOIN respuesta r 
ON TRIM(SUBSTR(respuesta_posible,3,LENGTH(respuesta_posible))) = r.nombre INNER JOIN encuesta e
ON t.nombre_encuesta = e.nombre
ORDER BY p.id_pregunta;

-- Respuesta-Pais
INSERT INTO res_pais(id_pais,id_encuesta,id_pregunta,id_respuesta)
SELECT id_pais,id_encuesta,id_pregunta,id_respuesta
FROM(
SELECT DISTINCT pa.id_pais AS pais,e.id_encuesta AS encuesta,p.id_pregunta AS pregunta, t.respuesta_pais AS res
FROM temp2 t INNER JOIN pregunta p 
ON t.pregunta = p.nombre INNER JOIN respuesta r 
ON TRIM(SUBSTR(respuesta_posible,3,LENGTH(respuesta_posible))) = r.nombre INNER JOIN encuesta e
ON t.nombre_encuesta = e.nombre INNER JOIN pais pa 
ON TRIM(t.pais) = pa.nombre) T1 INNER JOIN 
(SELECT DISTINCT e.id_encuesta, p.id_pregunta, pa.id_pais,respuesta_pais, r.id_respuesta
FROM temp2 t INNER JOIN encuesta e 
ON t.nombre_encuesta = e.nombre INNER JOIN pregunta p 
ON t.pregunta = p.nombre INNER JOIN detallerespuesta d
ON t.respuesta_pais = d.letra AND e.id_encuesta = d.id_encuesta AND p.id_pregunta = d.id_pregunta INNER JOIN respuesta r
ON r.id_respuesta = d.id_respuesta INNER JOIN pais pa 
ON TRIM(t.pais) = pa.nombre
ORDER BY p.id_pregunta) T2
ON T1.pais = T2.id_pais AND T1.encuesta = T2.id_encuesta AND T1.pregunta = T2.id_pregunta AND T1.res = T2.respuesta_pais;

-- COUNT de las tablas
SELECT 'Region', COUNT(*) FROM region
UNION
SELECT 'Pais', COUNT(*) FROM pais
UNION 
SELECT 'Capital', COUNT(*) FROM capital
UNION
SELECT 'Frontera', COUNT(*) FROM frontera
UNION
SELECT 'Profesional', COUNT(*) FROM profesional 
UNION 
SELECT 'Invento', COUNT(*) FROM invento
UNION
SELECT 'Inventor', COUNT(*) FROM inventor
UNION
SELECT 'Detalle_Invento', COUNT(*) FROM detalleinvento 
UNION 
SELECT 'Area', COUNT(*) FROM area
UNION
SELECT 'Profesional_Area', COUNT(*) FROM profesional_area
UNION
SELECT 'Pregunta', COUNT(*) FROM pregunta
UNION 
SELECT 'Encuesta-Pregunta', COUNT(*) FROM encuesta_pregunta
UNION
SELECT 'Respuesta', COUNT(*) FROM respuesta
UNION
SELECT 'Detalle-Respuesta', COUNT(*) FROM detallerespuesta 
UNION 
SELECT 'Respuesta-Pais', COUNT(*) FROM res_pais;