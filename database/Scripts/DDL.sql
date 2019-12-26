-- Creacion de las tablas 

-- Tablas temporales
CREATE TABLE temp1(
    invento VARCHAR2(150),
    inventor VARCHAR2(100),
    profesional_asignado VARCHAR2(100),
    jefe_area VARCHAR2(100),
    fecha_contrato DATE,
    salario NUMBER,
    comision NUMBER,
    area_investigacion VARCHAR2(100),
    ranking NUMBER,
    anio_invento NUMBER,
    pais_invento VARCHAR2(100),
    pais_inventor VARCHAR2(100),
    region_pais VARCHAR2(100),
    capital VARCHAR2(100),
    poblacion NUMBER,
    area NUMBER,
    frontera VARCHAR2(100),
    norte NUMBER(1),
    sur NUMBER(1),
    este NUMBER(1),
    oeste NUMBER(1)
);

CREATE TABLE temp2(
    nombre_encuesta VARCHAR2(80),
    pregunta VARCHAR2(250),
    respuesta_oficial VARCHAR2(100),
    respuesta_correcta VARCHAR2(100),
    pais VARCHAR2(100),
    respuesta_pais VARCHAR2(1)
);

CREATE TABLE temp3(
    nombre_region VARCHAR2(100),
    region_padre VARCHAR2(50)
);

-- Tablas Diseno

DESCRIBE temp1;
DESCRIBE temp2;
DESCRIBE temp3;

DROP TABLE temp1;
DROP TABLE temp2;
DROP TABLE temp3;