import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';
import axios from 'axios';

interface SensorData {
  id: number;
  date: string;
  aux1_value: number;
  aux2_value: number;
  aux3_value: number;
  co_value: number;
  ext_value: number;
  intT_value: number;
  laT_value: number;
  lon_value: number;
  no2_value: number;
  O3_value: number;
  pm10_value: number;
  pm25_value: number;
  rh_value: number;
}

export default function SensorDataByRangeView() {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]); // yyyy-mm-dd
  const [endDate, setEndDate] = useState<string>(new Date().toISOString().split('T')[0]); // yyyy-mm-dd
  const [selectedStation, setSelectedStation] = useState('SMART188');

  const fetchSensorData = async (station: string, start: string, end: string) => {
    setLoading(true);
    try {
      const response = await axios.get<SensorData[]>(`http://localhost:3001/api/sensorDataByRange/${station}/${start}/${end}`);
      setSensorData(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données des capteurs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSensorData(selectedStation, startDate, endDate);
  }, [selectedStation, startDate, endDate]);

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('fr-FR'); // Format français (jj/mm/aaaa hh:mm)
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
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '30px', fontStyle: 'italic', marginBottom: '10px' }}>
          <i className="fa fa-check-circle" style={{ marginRight: '10px' }}></i>
          Choisissez une plage de dates et une station :
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <label style={{ marginRight: '5px' }}>De :</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
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

          <label style={{ marginRight: '5px' }}>À :</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{
              backgroundColor: 'black', // Couleur de fond en noir
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
              value={sensorData} 
              scrollable 
              scrollHeight="600px" 
              stripedRows 
              filterDisplay="row" 
            >
              {/* Column for the row number */}
              <Column
                header="No"
                body={(_, { rowIndex }) => rowIndex + 1}  // Display the row index starting from 1
                style={{ minWidth: '100px' }}
              />
              <Column 
                field="aux1_value" 
                header="AUX1" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par AUX1"
              />
              <Column 
                field="aux2_value" 
                header="AUX2" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par AUX2"
              />
              <Column 
                field="aux3_value" 
                header="AUX3" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par AUX3"
              />
              <Column 
                field="co_value" 
                header="CO" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par CO"
              />
              <Column 
                field="ext_value" 
                header="Temp. Ext." 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par Temp. ext."
              />
              <Column 
                field="intT_value" 
                header="Temp. Int." 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par Temp. int."
              />
              <Column 
                field="laT_value" 
                header="Latitude" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par Latitude"
              />
              <Column 
                field="lon_value" 
                header="Longitude" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par Longitude"
              />
              <Column 
                field="no2_value" 
                header="NO2" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par NO2"
              />
              <Column 
                field="O3_value" 
                header="O3" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par O3"
              />
              <Column 
                field="pm10_value" 
                header="PM10" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par PM10"
              />
              <Column 
                field="pm25_value" 
                header="PM2.5" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par PM2.5"
              />
              <Column 
                field="rh_value" 
                header="Humidité" 
                style={{ minWidth: '200px' }} 
                sortable 
                filter 
                filterPlaceholder="Filtrer par Humidité"
              />
              <Column 
                field="date" 
                header="Date/Heure" 
                style={{ minWidth: '200px' }} 
                body={(rowData) => formatDateTime(rowData.date)} 
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
