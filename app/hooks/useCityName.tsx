import { useState, useEffect } from 'react';
import axios from 'axios';

const useEdmontonAreaDetection = () => {
  const [displayName, setDisplayName] = useState('Edmonton, St. Albert and surrounding areas');

  const edmontonCities = [
    'Edmonton',
    'St. Albert',
    'Spruce Grove',
    'Stony Plain',
    'Strathcona County',
    'Beaumont',
    'Morinville',
    'Fort Saskatchewan',
    'Leduc',
    'Sherwood Park',
    'Devon',
    'Gibbons',
    'Calmar',
    'Bon Accord',
    'Legal',
    'Redwater',
    'Graminia',
    'Karachi'
  ];

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await axios.get('https://ipinfo.io?token=a2b26e919e08a9');
        const { city } = response.data;

        console.log('Detected city:', city);

        if (city && edmontonCities.includes(city)) {
          setDisplayName(city);
          console.log('Matched city:', city);
        } else {
          console.log('No match found, setting default display name.');
        }
      } catch (error) {
        console.error('Location detection failed:', error);
        setDisplayName('Location detection failed');
      }
    };

    detectLocation();
  }, []);

  return { displayName };
};

export default useEdmontonAreaDetection;
