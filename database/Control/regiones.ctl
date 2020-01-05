OPTIONS (SKIP=1)
LOAD DATA
CHARACTERSET UTF8
INFILE '../Data/regiones.csv'
INTO TABLE temp3
FIELDS TERMINATED BY ","
TRAILING NULLCOLS
(
    nombre_region,
    region_padre
)