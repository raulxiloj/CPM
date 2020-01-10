# Comision de Patentes Mundial (CPM)

La necesidad de tener sistemas escalables y optimos depende principalmente de un buen diseño de base de datos, si bien 
existen sistemas antiguos que funcionan con una metodologia de almacenamiento de informacion en archivos planos con datos 
redundantes y no atomicos (impactando el rendimiento del propio sistema). Por lo anteior muchas organizaciones aceptan el 
reto de migrar sus sistemas a bases de datos normalizadas que les permita mejorar su rendimiento y su escalabilidad.

El objetivo de este proyecto es diseñar una base de datos y migrar toda la infromacion actual que se encuentran en archivos
planos al nuevo diseño. Y diseñar una aplicacion web simple en la cual se puedan ver los reportes de la organizacion y seguir
manteniendo el sistema. Toda la informacion se detalla mas en el enunciado del proyecto.

## Como funciona
Aplicacion web sencilla en la cual se pueden ver los reportes solicitados y tambien algunos cruds de las tablas mas importantes
<br>
<p align="center">
<img src="https://user-images.githubusercontent.com/30850990/72161347-90ba0b00-3385-11ea-970b-fd195ca3d973.gif">
</p>

## Instalacion 
1. Clonar el repositorio
```sh
git clone https://github/raulxiloj/CPM
```
2. Instalar los paquetes y dependencias del servidor (entrar a la carpeta server)
```sh
npm install
```
3. Para la base de datos, con tan solo correr los scrips DDL.sql e Inserts.sql ya se tendra toda la informacion

## Desarrollado con
* Frontend
  - [Angular](https://angular.io/)
  - [Angular material](https://material.angular.io/)
  - [Bootstrap](https://getbootstrap.com)
* Backend
  - [Nodejs](https://nodejs.org/es/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Oracle db ](https://www.oracle.com/database/)
    +  Version utilizada Oracle 11g
    
## Autor
Raul Xiloj
