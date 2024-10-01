

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

- JavaScript / JSX
- Framework :NextJS 
- Appels API :Axios/HttpService

### Backend

- Node.js / NestJS
- Base de données  POSTGRES
- ORM : TypeORM
- Conteneurisation : Docker

## Installation

### Pré-requis

- Docker
- Node.js (v14+)
- Postgres


### Étapes d'installation

1. Cloner le dépôt :
   git clone https://github.com/DossoAboubakar/AQ54_PROJECT
   cd AQ54_PROJECT

2. Installation des dépendances :
   Pour le back-end :
   cd BACKEND_API_AQ54
   npm install
   

   Pour le front-end :
   cd FRONTEND_AQ54
   npm install
   

3. Configurer les variables d'environnement :

   Créer un fichier `.env` dans les dossiers `frontend` et `backend` avec les paramètres suivants :

   - Pour le back-end :
      APP_PORT=3001
      DB_HOST=db          
      DB_PORT=5432        
      DB_USERNAME=postgres
      DB_PASSWORD=postgres 
      DB_NAME=AQ54_DB 

   - Pour le front-end : none

4. Lancer l'application :

   Lancer Docker pour conteneuriser l'application :
      docker compose up --build
  

   Ou démarrer manuellement les serveurs :
   - Démarrer le back-end :
     cd BACKEND_API_AQ54
     npm run start:dev
     

   - Démarrer le FRONTEND_AQ54 :
     cd frontend
     npm run start
     

5. Accéder à l'application :

   Ouvrez votre navigateur et accédez aux addresses du frontend et du backend renvoyées par le conteneur docker.

## API Endpoints

- GET : /api/stationAverageData/:stationId : Récupère les données moyennes des capteurs pour une station donnée.
- GET : /api/defaultSensorsValues/station : Récupère les données de capteurs ( Données selon le jour selectionné ) .
- GET : /api/sensorDataByRange/station/firstDate/lastDate : Récupère les données de capteurs selon un interval de jour choisi.
- GET : /api/sensorDataByDay/station/date : Récupère les données de capteurs selon le jour choisi.

## Structure des Données de Capteurs

Les données des capteurs incluent les champs suivants :
- AUX1, AUX2, AUX3
- co (monoxyde de carbone)
- extT (température extérieure)
- intT (température intérieure)
- no2 (dioxyde d'azote)
- o3 (ozone)
- pm10, pm25 (particules fines)
- rh (humidité relative)
- utc_timestamp
