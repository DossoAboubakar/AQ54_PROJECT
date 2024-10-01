"use client";

import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaChartBar } from 'react-icons/fa';
import CustomTable from './views/default_view';
import SensorDataByDayView from './views/values_by_date_view';
import { PrimeReactProvider } from 'primereact/api';
import SensorDataByRangeView from './views/values_by_range_view';
import StationAveragesValuesView from './views/average_values_view';

export default function Dashboard() {
  const [selectedView, setSelectedView] = useState('Main');

  const views = [
    { name: 'Main', id: 'Main', icon: <FaHome /> },
    { name: 'Données/jour', id: '2', icon: <FaUser /> },
    { name: 'Données/Periode', id: '3', icon: <FaCog /> },
    { name: 'Valeurs moyennes/capteurs', id: 'avg', icon: <FaChartBar /> },
  ];

  const renderView = () => {
    switch (selectedView) {
      case 'Main':
        return <CustomTable />;
      case '2':
        return <SensorDataByDayView />;
      case '3':
        return <SensorDataByRangeView/>;
      case 'avg':
        return <StationAveragesValuesView/>;
      default:
        return <CustomTable />;
    }
  };

  return (
    <>
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ width: '250px', background: '#333', color: '#fff', padding: '20px' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>AQ54 BOARD</h1>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {views.map(view => (
              <li
                key={view.id}
                onClick={() => setSelectedView(view.id)}
                style={{
                  padding: '10px 20px',
                  margin: '10px 0',
                  background: selectedView === view.id ? '#444' : '#333',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                role="button"
                aria-label={`View ${view.name}`}
              >
                <span style={{ marginRight: '10px' }}>{view.icon}</span>
                {view.name}
              </li>
            ))}
          </ul>
        </div>

        <PrimeReactProvider>
          <div style={{ flex: 1, padding: '20px' }}>
            {renderView()}
          </div>
        </PrimeReactProvider>
      </div>
    </>
  );
}
