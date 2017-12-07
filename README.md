[![Build Status](https://travis-ci.org/ETICINSATechnologies/ShareticCLIENT.svg?branch=master)](https://travis-ci.org/ETICINSATechnologies/ShareticCLIENT)
[![codecov](https://codecov.io/gh/ETICINSATechnologies/ShareticCLIENT/branch/master/graph/badge.svg)](https://codecov.io/gh/ETICINSATechnologies/ShareticCLIENT)

# Sharetic
An online open source formation platform (MOOC-like) for Junior-Enterprises.

**Frontend** : Angular 4 (Typescript/Javascript framework)

**Backend** : Symfony 2 (PHP framework)

## Structure

This project is splitted into two repositories (Frontend and Backend) :
- This repo (**ShareticCLIENT**) contains the source code of the Angular application.
- The repo [**ShareticREST**](https://github.com/ETICINSATechnologies/ShareticREST) contains the source code of the Symfony application (as a RESTful API).

They can be deployed on two different servers, just edit the config files if needed.

## ETIC INSA Technologies
This project is initiated by the Computer and Information Systems team of INSA Lyon's Junior-Enterprise.

## Contributors & Junior-Entreprises
**2017-18**
- Jindun Shao (Project Manager) - ETIC INSA Technologies
- Vincent Redouté (Head Frontend Dev) - ETIC INSA Technologies
- Alexandre Simon (Frontend Dev) - ETIC INSA Technologies
- Christophe Etienne (Frontend Dev) - ETIC INSA Technologies
- Alexandre van Beurden (Head Backend Dev) - ETIC INSA Technologies
- Youssef Oudghiri (Backend Dev) - ETIC INSA Technologies

**2016-17**

Marc Fallouh, Sacha Barkat, Jindun Shao, Anis Hamroun, Justin Gally - ETIC INSA Technologies

## Get started

### First step
- Clone the project (or fork it if you want to contribute : [How to contribute](https://github.com/ETICINSATechnologies/Plateforme-Formation/blob/master/HowToContribute.md))

### Frontend
- Install [Node.js with npm](https://nodejs.org/en/download/) if not done.
- Install *angular-cli* globally
```
$ npm install -g @angular/cli
```
- Open a terminale in the folder **formationCLIENT**
- Install all frontend packages with npm :
```
$ npm install
```
- Serve the application
```
$ ng serve --open
```
It will launch the server, watch your files, and rebuild the app as you make changes to those files.

### Backend
- Install [Composer](https://getcomposer.org/)
- Install PHP 7
- Install a MySQL/MariaDB server and launch it
- Open a terminale in the folder **shareticREST**
- Install all the dependencies by running the following Composer command:
```
$ composer install
```
- If everything went fine you can now start the application:
```
$ php app/console server:run
```
### To finish
Please write all your code and comments in english !
