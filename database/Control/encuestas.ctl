OPTIONS (SKIP=1)
LOAD DATA
CHARACTERSET UTF8
INFILE '../Data/encuestas.csv'
INTO TABLE temp2
FIELDS TERMINATED BY ","
(
    nombre_encuesta,
    pregunta,
    respuesta_posible,
    respuesta_correcta,
    pais,
    respuesta_pais
)