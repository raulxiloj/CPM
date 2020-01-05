OPTIONS (SKIP=1)
LOAD DATA
CHARACTERSET UTF8
INFILE '../Data/inventos.csv'
INTO TABLE temp1
FIELDS TERMINATED BY "," OPTIONALLY ENCLOSED BY '"'
TRAILING NULLCOLS
(
    invento,
    inventor,
    profesional_asignado,
    jefe_area,
    fecha_contrato "TO_DATE(:fecha_contrato,'DD-MON-YY')",
    salario,
    comision,
    area_investigacion,
    ranking,
    anio_invento,
    pais_invento,
    pais_inventor,
    region_pais,
    capital,
    poblacion,
    area,
    frontera,
    norte "CASE WHEN :norte IS NOT NULL THEN 1 ELSE 0 END",
    sur "CASE WHEN :sur IS NOT NULL THEN 1 ELSE 0 END",
    este "CASE WHEN :este IS NOT NULL THEN 1 ELSE 0 END",
    oeste "CASE WHEN :oeste IS NOT NULL THEN 1 ELSE 0 END" 
)