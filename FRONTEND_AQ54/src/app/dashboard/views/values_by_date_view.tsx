import React, { useState, useEffect, useCallback } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';
import axios from 'axios';

interface SensorData {
  AUX1: number;
  AUX2: number;
  AUX3: number;
  co: number;
  extT: number;
  intT: number;
  lat: number;
  lon: number;
  no2: number;
  o3: number;
  pm10: number;
  pm25: number;
  rh: number;
  utc_timestamp: string;
}

export default function SensorDataByDayView() {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]); 
  const [selectedStation, setSelectedStation] = useState('SMART188');

  const formatDate = (date: string) => {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    return formattedDate;
  };

  const fetchSensorData = useCallback(async (station: string, date: string) => {
    setLoading(true);
    const formattedDate = formatDate(date); 
    try {
      const response = await axios.get<SensorData[]>(`http://localhost:3001/api/sensorDataByDay/${station}/${formattedDate}`);
      setSensorData(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données des capteurs:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSensorData(selectedStation, selectedDate);
  }, [selectedStation, selectedDate, fetchSensorData]);

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split('T')[0]; // Format yyyy-mm-dd
    return formattedDate;
  };

  const getButtonStyle = (station: string) => ({
    backgroundColor: selectedStation === station ? 'blue' : 'grey',
    color: 'white',
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  });

  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '40px', fontStyle: 'italic', marginRight: '20px' }}>
          <i className="fa fa-check-circle" style={{ marginRight: '10px' }}></i>
          Choisissez une date et une station :
        </h2>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            outline: 'none',
            marginRight: '20px',
          }}
        />

        <button style={getButtonStyle('SMART188')} onClick={() => setSelectedStation('SMART188')}>
          SMART188
        </button>
        <button style={getButtonStyle('SMART189')} onClick={() => setSelectedStation('SMART189')}>
          SMART189
        </button>
      </div>

      <div className="card" style={{ height: '80vh' }}>
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
            <p style={{ marginTop: '20px' }}>Chargement des données en cours...</p>
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
              <Column 
                field="id" 
                header="No" 
                style={{ minWidth: '100px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par ID"
              />
              <Column 
                field="AUX1" 
                header="AUX1" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par AUX1"
              />
              <Column 
                field="AUX2" 
                header="AUX2" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par AUX2"
              />
              <Column 
                field="AUX3" 
                header="AUX3" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par AUX3"
              />
              <Column 
                field="co" 
                header="CO" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par CO"
              />
              <Column 
                field="extT" 
                header="Ext. Temp" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par Temp. ext."
              />
              <Column 
                field="intT" 
                header="Int. Temp" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par Temp. int."
              />
              <Column 
                field="lat" 
                header="Latitude" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par Latitude"
              />
              <Column 
                field="lon" 
                header="Longitude" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par Longitude"
              />
              <Column 
                field="no2" 
                header="NO2" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par NO2"
              />
              <Column 
                field="o3" 
                header="O3" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par O3"
              />
              <Column 
                field="pm10" 
                header="PM10" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par PM10"
              />
              <Column 
                field="pm25" 
                header="PM2.5" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par PM2.5"
              />
              <Column 
                field="rh" 
                header="Humidity" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par Humidité"
              />
              <Column 
                field="utc_timestamp" 
                header="Date/Heure" 
                style={{ minWidth: '200px' }} 
                body={(rowData) => formatDateTime(rowData.utc_timestamp)}
                sortable 
                filter 
                filterPlaceholder="Filtrer par date"
              />
            </DataTable>
          </div>
        )}
      </div>
    </div>
  );
}
