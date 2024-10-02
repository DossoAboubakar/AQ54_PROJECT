# AQ54

AQ54 est une application web conçue pour la visualisation et la gestion des données de capteurs environnementaux. Elle permet de récupérer, traiter, et afficher des données en temps réel à partir de capteurs via des API externes, tout en offrant une interface utilisateur intuitive pour interagir avec les stations de surveillance.

## Fonctionnalités

- Visualisation des données environnementales (CO, NO2, O3, PM10, PM2.5, etc.) provenant de différentes stations de capteurs.
- Affichage des données sous forme de tableaux, avec reformattage des dates en `jj/mm/yyyy` et affichage des heures.
- API dynamique pour récupérer les données de capteurs selon une plage de dates définie par l'utilisateur.
- Gestion des stations de surveillance SMART188 et SMART189.
- Application en microservices avec front-end (NextJS) et back-end (NestJS) séparés.
- Support de l'importation des données via appels API externes et enregistrement dans une base de données POSTGRES.
- Déploiement via Docker pour une installation simple et rapide sur différents environnements.

## Technologies Utilisées

### Frontend

- Framework :NextJS
- Appels API :Axios/HttpService

### Backend

- NestJS
- ORM : TypeORM

### Base de donnée

- Base de données POSTGRES

### Contenurisation:

- docker et docker-compose

## Installation

### Pré-requis

- NodeJS
- Postgres
- Docker et Docker coompose

### Étapes d'installation

1. Cloner le dépôt :
   git clone https://github.com/DossoAboubakar/AQ54_PROJECT.git
   cd FRONTEND_AQ54

2. Configurer les variables d'environnement :

   Créer un fichier .env dans les dossiers frontend et backend avec les paramètres suivants :

   Pour le back-end :

   ```bash
   APP_PORT=3001 DB_HOST=db
   DB_PORT=5432
   DB_USERNAME=postgres DB_PASSWORD=postgres DB_NAME=AQ54_DB
   ```

   Pour le front-end :

   ```bash
      AVERAGE_DATA_URL=http://localhost:3001/api/stationAverageData
   ```

3. Lancer l'application :

   Lancer Docker pour conteneuriser l'application :
   S'assurer d'etre a la racine du projet : AQ54_PROJECT , 
   ```bash
   docker compose up
   ```

4. Accéder à l'application :

   Ouvrez votre navigateur et accédez aux addresses du frontend par le conteneur docker.
   Ou démarrer manuellement les serveurs :

   Démarrer le back-end : cd BACKEND_API_AQ54 npm run start:dev

   Démarrer le FRONTEND_AQ54 : cd frontend npm run start

## API Endpoints

Consulté le swagger disponible via le liens suivant
http://localhost:3001/api

## Structure des Données de Capteurs

Les données des capteurs incluent les champs suivants :

AUX1, AUX2, AUX3
co (monoxyde de carbone)
extT (température extérieure)
intT (température intérieure)
no2 (dioxyde d'azote)
o3 (ozone)
pm10, pm25 (particules fines)
rh (humidité relative)
utc_timestamp

```

```
