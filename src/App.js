import React, { useState } from "react";
import EditableSection from "./EditableSection";
import WeatherCard from "./WeatherCard";
import data from "./test-data.json";
import "./styles/App.css";

const App = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [location, setLocation] = useState('');
 
  const filteredData = data.filter(item => Date.parse(item.date) >= Date.parse(startDate) && Date.parse(item.date) <= Date.parse(endDate) && item.town.toLocaleLowerCase() === location.toLocaleLowerCase() && item.weather !=null);
    return (
      <div className="App">
        <EditableSection
          startDate={startDate}
          endDate={endDate}
          location={location}
          onStartDateChange={(startDate) => setStartDate(startDate)}
          onEndDateChange={(endDate) => setEndDate(endDate)}
          onLocationChange={(e) => setLocation(e.target.value)}
        />
        <div className="editable-section">
          {filteredData.length ? filteredData.map((item) => (
            <WeatherCard
              date={item.date}
              weather={item.weather}
              location={item.location}
            />
          )) : 'No Data to Display'}
        </div>
      </div>
    );
  };

export default App;
