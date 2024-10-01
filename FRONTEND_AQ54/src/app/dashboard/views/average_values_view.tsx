import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

interface SensorAverageData {
  id: number;
  date: string;
  co: number;
  temperature: number;
  tInt: number;
  no2: number;
  o3: number;
  pm10: number;
  pm25: number;
  rh: number;
}

export default function SensorAverageDataView() {
  const [sensorData, setSensorData] = useState<SensorAverageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStation, setSelectedStation] = useState<string>('283164601'); // Default to SMART188
  const [error, setError] = useState<string | null>(null);
  const [timeoutError, setTimeoutError] = useState<boolean>(false);

  // Méthode pour envoyer les données à votre backend pour les stocker
  const storeDataInDb = async (data: SensorAverageData[]) => {
    try {
      await axios.post('http://localhost:3000/api/store-sensor-data', data);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des données dans la base de données:', error);
    }
  };

  const fetchSensorAverageData = async (stationId: string) => {
    setLoading(true);
    setError(null);
    setTimeoutError(false);
    
    const url = `http://localhost:3001/api/stationAverageData/${stationId}`;

    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => {
        setLoading(false);
        setTimeoutError(true);
        reject(new Error('Requête expirée après 30 secondes.'));
      }, 30000)
    );

    try {
      const response = await Promise.race([axios.get<SensorAverageData[]>(url), timeout]) as { data: SensorAverageData[] };
      const limitedData = response.data.slice(0, 50); // Limitez les données à 50 éléments
      setSensorData(limitedData);

      // Sauvegarder les données dans la base de données
      storeDataInDb(limitedData);
      
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || 'Échec de la récupération des données. Veuillez réessayer.');
      } else {
        setError('Échec de la récupération des données. Veuillez réessayer.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSensorAverageData(selectedStation);
  }, [selectedStation]);

  const getButtonStyle = (station: string) => ({
    backgroundColor: selectedStation === station ? 'blue' : 'grey',
    color: 'white',
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  });

  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '30px', fontStyle: 'italic', marginRight: '20px' }}>
          <i className="fa fa-check-circle" style={{ marginRight: '10px' }}></i>
          Choisissez une station pour les données moyennes :
        </h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={getButtonStyle('283164601')} onClick={() => setSelectedStation('283164601')}>
            SMART188
          </button>
          <button style={getButtonStyle('283181971')} onClick={() => setSelectedStation('283181971')}>
            SMART189
          </button>
        </div>
      </div>

      <div className="card" style={{ height: '80vh' }}>
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
            <p style={{ marginTop: '20px' }}>Chargement des données en cours...</p>
          </div>
        ) : timeoutError ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <p style={{ color: 'red', marginTop: '20px' }}>La requête a expiré après 30 secondes.</p>
          </div>
        ) : error ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto', width: '130vh' }}>
            <DataTable 
              value={sensorData.map((data, index) => ({ ...data, id: index + 1 }))} 
              scrollable 
              scrollHeight="600px" 
              stripedRows 
              filterDisplay="row"
            >
              <Column field="id" header="No" style={{ minWidth: '100px' }} sortable />
              <Column field="date" header="Date" style={{ minWidth: '200px' }} sortable body={(rowData) => new Date(rowData.date).toLocaleString()} />
              <Column field="co" header="CO" sortable />
              <Column field="temperature" header="Température" sortable />
              <Column field="tInt" header="T. Int" sortable />
              <Column field="no2" header="NO2" sortable />
              <Column field="o3" header="O3" sortable />
              <Column field="pm10" header="PM10" sortable />
              <Column field="pm25" header="PM2.5" sortable />
              <Column field="rh" header="Humidité" sortable />
            </DataTable>
          </div>
        )}
      </div>
    </div>
  );
}
