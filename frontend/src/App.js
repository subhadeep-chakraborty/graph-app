import React from "react";
import EMChart from "./components/EMChart";
import { useEffectiveMass } from "./hooks/useEffectiveMass";
import "./App.css";

function App() {
  const { data, loading, error } = useEffectiveMass();

  return (
    <div className="app-page">
      <div className="app-container">
        <header className="app-header">
          <h1>Effective Mass Dashboard</h1>
          <p className="app-subtitle">
            Effective Mass vs Frequency graph
          </p>
        </header>

        {loading && <p>Loading data...</p>}
        {error && <p className="error-text">{error}</p>}

        {!loading && !error && (
          <>
            {/* Mode Info */}
            <div className="app-info">
              <strong>Mode 1:</strong> 43.9 Hz
            </div>

            {/* Data count */}
            <p className="app-data-count">
              {data.length} frequency samples
            </p>

            {/* Chart */}
            <div className="chart-wrapper">
              <EMChart data={data} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;