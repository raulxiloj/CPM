-- Consultas 

-- 1. Desplegar los paises de cada continente y el numero de preguntas que han contestado de cualquier encuesta
SELECT p.nombre, COUNT(rp.id_pregunta) AS Preguntas_contestadas
FROM pais p LEFT JOIN res_pais rp
ON p.id_pais = rp.id_pais
GROUP BY p.nombre
ORDER BY p.nombre;

-- 2. Desplegar el nombre de cada jefe seguido de sus subalternos, para todos los profesionales **
SELECT t1.area, t1.profesional, CASE WHEN p.nombre IS NULL THEN 'KING PRESIDENT' ELSE p.nombre END AS jefe
FROM 
(SELECT a.id_area, a.nombre AS area, p.id_profesional, p.nombre AS profesional, a.jefe
FROM profesional_area pa INNER JOIN area a
ON pa.id_area = a.id_area INNER JOIN profesional p
ON pa.id_profesional = p.id_profesional) T1 LEFT JOIN profesional p
ON T1.jefe = p.id_profesional
ORDER BY jefe;

-- 3. Desplegar todos los profesionales, y su salario cuyo salario es mayor al promedio del salario de los profesiones en su misma area
SELECT nombre, salario,area, promedio
FROM(
SELECT p.nombre, p.salario, a.nombre AS area
FROM profesional_area pa INNER JOIN profesional p
ON pa.id_profesional = p.id_profesional INNER JOIN area a
ON pa.id_area = a.id_area) T1 INNER JOIN
(SELECT a.nombre AS area2, ROUND(AVG(p.salario),2) AS promedio
FROM profesional_area pa INNER JOIN profesional p
ON pa.id_profesional = p.id_profesional INNER JOIN area a
ON pa.id_area = a.id_area
GROUP BY a.nombre) T2 
ON T1.area = T2.area2
WHERE salario > promedio;

-- 4. Desplegar el nombre de los paises que han contestado encuestas, ordenados del pais que mas aciertos ha tenido hasta el que menos aciertos ha tenido
SELECT p.nombre,SUM(dr.res_correcta) AS correctas
FROM pais p INNER JOIN res_pais rp
ON p.id_pais = rp.id_pais INNER JOIN detallerespuesta dr 
ON dr.id_encuesta = rp.id_encuesta AND dr.id_pregunta = rp.id_pregunta AND dr.id_respuesta = rp.id_respuesta
GROUP BY p.nombre
ORDER BY correctas DESC;

-- 5. Desplegar el nombre del pais y el area de todos los paises que tienen mas de siete fornteras ordernarlos por el de mayor area
SELECT p.nombre AS pais, COUNT(p2.nombre) AS frontera, p.area
FROM frontera f INNER JOIN pais p 
ON f.id_pais = p.id_pais INNER JOIN pais p2
ON f.id_frontera = p2.id_pais
GROUP BY p.nombre, p.area
HAVING COUNT(p2.nombre) > 7
ORDER BY p.area DESC;

-- 6. Desplegar el nombre del profesional, su salario, su comision y el total de salario (sueldo mas comision) de todos los profesionales con comision mayor que el 25% de su salario
SELECT nombre, salario, CASE WHEN comision IS NULL THEN 0 ELSE comision END AS comision, CASE WHEN comision IS NULL THEN salario ELSE salario + comision END as total
FROM profesional
WHERE comision > salario*0.25;

-- 7. Desplegar los paises cuya poblacion sea mayor a la poblacion de los paises centroamericanos juntos
SELECT nombre, poblacion
FROM pais 
WHERE poblacion > (SELECT SUM(poblacion)
                   FROM pais p INNER JOIN region r 
                   ON p.region = r.id_region
                   WHERE r.nombre = 'Centro America');

-- 8. Desplegar todos los jefes de cada profesional que no esten en el mismo departamento que el del profesional que atiende al inventor 'Pasteur' 
SELECT p.nombre, a.nombre
from area a INNER JOIN profesional p
ON a.jefe = p.id_profesional
WHERE 
    a.id_area <> (SELECT pa.id_area
    FROM detalleinvento d INNER JOIN invento i
    ON d.id_invento = i.id_invento INNER JOIN inventor i2 
    ON d.id_inventor = i2.id_inventor INNER JOIN profesional p
    ON i.profesional = p.id_profesional INNER JOIN profesional_area pa
    ON p.id_profesional = pa.id_profesional
    WHERE i2.nombre = 'Pasteur')
    AND p.nombre <> 'KING PRESIDENT';


-- 9. Desplegar el nombre de todos los inventos inventados en el mismo anio que BENZ invento algun invento ****
SELECT i.nombre AS invento, i2.nombre AS inventor, i.anio
FROM detalleinvento d INNER JOIN invento i 
ON d.id_invento = i.id_invento INNER JOIN inventor i2 
ON d.id_inventor = i2.id_inventor
WHERE anio = (SELECT anio
              FROM detalleinvento d INNER JOIN invento i 
              ON d.id_invento = i.id_invento INNER JOIN inventor i2 
              ON d.id_inventor = i2.id_inventor
              WHERE i2.nombre = 'Benz');

-- 10. Desplegar los nombres y el numero de habitantes de todas las islas que tienen un area mayor o igual al area de Japon *****
-- ISLA?

-- 11. Desplegar todos los paises con el nombre de cada pais con el cual tiene una frontera
SELECT p.nombre AS pais, p2.nombre AS frontera
FROM frontera f INNER JOIN pais p 
ON f.id_pais = p.id_pais INNER JOIN pais p2
ON f.id_frontera = p2.id_pais
ORDER BY p.nombre;

-- 12. Desplegar el nombre del profesional su salario y su comision de los empleados cuyo salario es mayor que el doble de su comision
SELECT nombre, salario, CASE WHEN comision IS NULL THEN 0 ELSE comision END AS comision, CASE WHEN comision IS NULL THEN salario ELSE salario + comision END as total
FROM profesional
WHERE salario > comision*2;
