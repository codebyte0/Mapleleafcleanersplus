import { useState, useEffect } from 'react';
import axios from 'axios';

const useCityName = () => {
  const [cityName, setCityName] = useState('Edmonton'); // Default value

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get('https://ipinfo.io?token=a2b26e919e08a9');
        const { city, country } = response.data;

        // If the user is in Canada, use the city name; otherwise, set default to Edmonton and St. Albert
        if (country === 'CA') {
          setCityName(city);
        } else {
          setCityName('Edmonton and St. Albert');
        }
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, []);

  return cityName;
};

export default useCityName;
