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
    respuesta_posible VARCHAR2(150),
    respuesta_correcta VARCHAR2(100),
    pais VARCHAR2(120),
    respuesta_pais VARCHAR2(50)
);

CREATE TABLE temp3(
    nombre_region VARCHAR2(100),
    region_padre VARCHAR2(50)
);

-- COUNT de datos de las tablas temporales
SELECT 'inventos', COUNT(*) FROM temp1
UNION
SELECT 'encuestas', COUNT(*) FROM temp2 
UNION 
SELECT 'regiones', COUNT(*) FROM temp3;

-- DROP TABLES
DROP TABLE temp1;
DROP TABLE temp2;
DROP TABLE temp3;

-- TRUNCATE 
TRUNCATE TABLE temp1;
TRUNCATE TABLE temp2;
TRUNCATE TABLE temp3;

--------------------TABLAS DISENO--------------------

-- Tabla region
CREATE TABLE region(
    id_region NUMBER PRIMARY KEY,
    nombre VARCHAR2(120) NOT NULL,
    padre NUMBER,
    FOREIGN KEY (padre) REFERENCES region(id_region)
);

-- Tabla pais
CREATE TABLE pais(
    id_pais NUMBER PRIMARY KEY,
    nombre VARCHAR2(120) NOT NULL,
    poblacion NUMBER,
    area NUMBER,
    region,
    FOREIGN KEY (region) REFERENCES region(id_region)
);

-- Tabla capital
CREATE TABLE capital(
    id_capital NUMBER PRIMARY KEY,
    nombre VARCHAR2(100),
    pais NUMBER NOT NULL,
    FOREIGN KEY (pais) REFERENCES pais(id_pais) 
);

-- Puntos
CREATE TABLE punto(
    id_punto NUMBER PRIMARY KEY,
    nombre VARCHAR2(20),
    abreviatura VARCHAR2(5)
);

-- Tabla frontera
CREATE TABLE frontera(
    id_pais NUMBER NOT NULL,
    id_frontera NUMBER NOT NULL,
    punto NUMBER NOT NULL,
    FOREIGN KEY (id_pais) REFERENCES pais(id_pais),
    FOREIGN KEY (id_frontera) REFERENCES pais(id_pais),
    FOREIGN KEY (punto) REFERENCES punto(id_punto)
);

-- Tabla profesional
CREATE TABLE profesional(
    id_profesional NUMBER PRIMARY KEY,
    nombre VARCHAR2(100) NOT NULL,
    salario NUMBER NOT NULL,
    comision NUMBER,
    fecha_contrato DATE
);

-- Tabla invento
CREATE TABLE invento(
    id_invento NUMBER PRIMARY KEY,
    nombre VARCHAR2(100) NOT NULL,
    pais NUMBER NOT NULL,
    anio NUMBER NOT NULL,
    profesional NUMBER NOT NULL,
    FOREIGN KEY (pais) REFERENCES pais(id_pais),
    FOREIGN KEY (profesional) REFERENCES profesional(id_profesional)
);

-- Tabla inventor
CREATE TABLE inventor(
    id_inventor NUMBER PRIMARY KEY,
    nombre VARCHAR2(100) NOT NULL,
    pais NUMBER NOT NULL,
    FOREIGN KEY (pais) REFERENCES pais(id_pais)
);

--Tabla detalle invento
CREATE TABLE detalleInvento(
    id_invento NUMBER NOT NULL,
    id_inventor NUMBER NOT NULL,
    FOREIGN KEY (id_invento) REFERENCES invento(id_invento),
    FOREIGN KEY (id_inventor) REFERENCES inventor(id_inventor)
);

-- Tabla area
CREATE TABLE area(
    id_area NUMBER PRIMARY KEY,
    nombre VARCHAR2(100) NOT NULL,
    ranking NUMBER,
    jefe NUMBER,
    FOREIGN KEY (jefe) REFERENCES profesional (id_profesional),
    CONSTRAINT CHK_Date CHECK (ranking BETWEEN 0 AND 10)
);

-- Tabla profesional_area
CREATE TABLE profesional_area(
    id_profesional NUMBER NOT NULL,
    id_area NUMBER NOT NULL,
    FOREIGN KEY (id_profesional) REFERENCES profesional (id_profesional),
    FOREIGN KEY (id_area) REFERENCES area (id_area)
);

-- Tabla encuesta
CREATE TABLE encuesta(
    id_encuesta NUMBER PRIMARY KEY,
    nombre VARCHAR2(50)
);

-- Tabla pregunta
CREATE TABLE pregunta(
    id_pregunta NUMBER PRIMARY KEY,
    nombre VARCHAR2(250)
);

-- Tabla encuesta_pregunta
CREATE TABLE encuesta_pregunta(
    id_encuesta NUMBER NOT NULL,
    id_pregunta NUMBER NOT NULL,
    FOREIGN KEY (id_encuesta) REFERENCES encuesta (id_encuesta),
    FOREIGN KEY (id_pregunta) REFERENCES pregunta (id_pregunta),
    PRIMARY KEY (id_encuesta,id_pregunta)
);

-- Tabla respuesta
CREATE TABLE respuesta(
    id_respuesta NUMBER PRIMARY KEY,
    nombre VARCHAR2(200) NOT NULL
);

-- Tabla detallerespuesta
CREATE TABLE detallerespuesta(
    id_encuesta NUMBER,
    id_pregunta NUMBER,
    id_respuesta NUMBER,
    res_correcta NUMBER(1),
    letra VARCHAR2(1),
    FOREIGN KEY (id_encuesta) REFERENCES encuesta (id_encuesta),
    FOREIGN KEY (id_pregunta) REFERENCES pregunta(id_pregunta),
    FOREIGN KEY (id_respuesta) REFERENCES respuesta(id_respuesta),
    PRIMARY KEY (id_encuesta,id_pregunta,id_respuesta)
);

-- Tabla respuesta pais
CREATE TABLE res_pais(
    id_pais NUMBER,
    id_encuesta NUMBER,
    id_pregunta NUMBER,
    id_respuesta NUMBER,
    FOREIGN KEY (id_pais) REFERENCES pais(id_pais),
    FOREIGN KEY (id_encuesta) REFERENCES encuesta(id_encuesta),
    FOREIGN KEY (id_pregunta) REFERENCES pregunta(id_pregunta),
    FOREIGN KEY (id_respuesta) REFERENCES respuesta(id_respuesta),
    PRIMARY KEY (id_pais,id_encuesta,id_pregunta,id_respuesta)
);

-- AUTO INCREMENT (oracle 11g)

-- SEQUENCES
CREATE SEQUENCE region_seq START WITH 1;
CREATE SEQUENCE pais_seq START WITH 1;
CREATE SEQUENCE cap_seq START WITH 1;
CREATE SEQUENCE invento_seq START WITH 1;
CREATE SEQUENCE inventor_seq START WITH 1;
CREATE SEQUENCE prof_seq START WITH 1;
CREATE SEQUENCE area_seq START WITH 1;
CREATE SEQUENCE encuesta_seq START WITH 1;
CREATE SEQUENCE pregunta_seq START WITH 1;
CREATE SEQUENCE res_seq START WITH 1;

-- TRIGGERS
--region
CREATE TRIGGER region_trigger
BEFORE INSERT ON region
FOR EACH ROW 
BEGIN
    SELECT region_seq.NEXTVAL
    INTO :new.id_region
    FROM dual;
END;
--pais
CREATE TRIGGER pais_trigger
BEFORE INSERT ON pais
FOR EACH ROW 
BEGIN
    SELECT pais_seq.NEXTVAL
    INTO :new.id_pais
    FROM dual;
END;
--capital
CREATE TRIGGER cap_trigger
BEFORE INSERT ON capital
FOR EACH ROW 
BEGIN
    SELECT cap_seq.NEXTVAL
    INTO :new.id_capital
    FROM dual;
END;
--invento
CREATE TRIGGER invento_trigger
BEFORE INSERT ON invento
FOR EACH ROW 
BEGIN
    SELECT invento_seq.NEXTVAL
    INTO :new.id_invento
    FROM dual;
END;
--inventor
CREATE TRIGGER inventor_trigger
BEFORE INSERT ON inventor
FOR EACH ROW 
BEGIN
    SELECT inventor_seq.NEXTVAL
    INTO :new.id_inventor
    FROM dual;
END;
--profesional
CREATE TRIGGER prof_trigger
BEFORE INSERT ON profesional
FOR EACH ROW 
BEGIN
    SELECT prof_seq.NEXTVAL
    INTO :new.id_profesional
    FROM dual;
END;
--area
CREATE TRIGGER area_trigger
BEFORE INSERT ON area
FOR EACH ROW 
BEGIN
    SELECT area_seq.NEXTVAL
    INTO :new.id_area
    FROM dual;
END;
--encuesta
CREATE TRIGGER encuesta_trigger
BEFORE INSERT ON encuesta
FOR EACH ROW 
BEGIN
    SELECT encuesta_seq.NEXTVAL
    INTO :new.id_encuesta
    FROM dual;
END;
--pregunta
CREATE TRIGGER pregunta_trigger
BEFORE INSERT ON pregunta
FOR EACH ROW 
BEGIN
    SELECT pregunta_seq.NEXTVAL
    INTO :new.id_pregunta
    FROM dual;
END;
--respuesta
CREATE TRIGGER res_trigger
BEFORE INSERT ON respuesta
FOR EACH ROW 
BEGIN
    SELECT res_seq.NEXTVAL
    INTO :new.id_respuesta
    FROM dual;
END;

--------------------DROP TABLES--------------------
DROP TABLE res_pais;
DROP TABLE detallerespuesta;
DROP TABLE encuesta_pregunta;
DROP TABLE detallepregunta;
DROP TABLE respuesta;
DROP TABLE pregunta;
DROP TABLE encuesta;
DROP TABLE profesional_area;
DROP TABLE area;
DROP TABLE detalleinvento;
DROP TABLE inventor;
DROP TABLE invento;
DROP TABLE profesional;
DROP TABLE frontera;
DROP TABLE capital;
DROP TABLE pais;
DROP TABLE region;
DROP TABLE punto;

TRUNCATE TABLE punto;
TRUNCATE TABLE area;

-- DROP SEQUENCES 
DROP SEQUENCE area_seq;
DROP SEQUENCE cap_seq;
DROP SEQUENCE pais_seq;
DROP SEQUENCE region_seq;
DROP SEQUENCE invento_seq;
DROP SEQUENCE inventor_seq;
DROP SEQUENCE prof_seq;
DROP SEQUENCE encuesta_seq;
DROP SEQUENCE pregunta_seq;
DROP SEQUENCE res_seq;