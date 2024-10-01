import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';
import axios from 'axios';

interface SensorData {
  id: number;
  name: string;
  currentValue: number;
  currentValueDate: string;
  lastValue: number;
  lastValueDate: string;
}

export default function CustomTable() {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStation, setSelectedStation] = useState('SMART188');

  const fetchSensorData = async (station: string) => {
    setLoading(true);
    try {
      const response = await axios.get<SensorData[]>(`http://localhost:3001/api/defaultSensorsValues/${station}`);
      setSensorData(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données des capteurs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSensorData(selectedStation);
  }, [selectedStation]);

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const formattedTime = date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${formattedDate} à ${formattedTime}`;
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
          Choisissez la station souhaitée :
        </h2>
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
          <DataTable 
            value={sensorData.map((data, index) => ({ ...data, id: index + 1 }))} 
            scrollable 
            scrollHeight="600px" 
            stripedRows 
            filterDisplay="row" 
            responsiveLayout="scroll"
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
              field="name" 
              header="Sensor Name" 
              style={{ minWidth: '200px' }} 
              sortable 
              filter 
              filterPlaceholder="Filtrer par nom"
            />
            <Column 
              field="currentValue" 
              header="Current Value" 
              style={{ minWidth: '200px' }} 
              sortable 
              filter 
              filterPlaceholder="Filtrer par valeur"
            />
            <Column 
              field="currentValueDate" 
              header="Current Value Date" 
              style={{ minWidth: '200px' }} 
              body={(rowData) => formatDateTime(rowData.currentValueDate)}
              sortable 
              filter 
              filterPlaceholder="Filtrer par date"
            />
            <Column 
              field="lastValue" 
              header="Last Value" 
              style={{ minWidth: '200px' }} 
              sortable 
              filter 
              filterPlaceholder="Filtrer par valeur"
            />
            <Column 
              field="lastValueDate" 
              header="Last Value Date" 
              style={{ minWidth: '200px' }} 
              body={(rowData) => formatDateTime(rowData.lastValueDate)}
              sortable 
              filter 
              filterPlaceholder="Filtrer par date"
            />
          </DataTable>
        )}
      </div>
    </div>
  );
}
