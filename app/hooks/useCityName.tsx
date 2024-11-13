import { useState, useEffect } from 'react';
import axios from 'axios';

const useEdmontonAreaDetection = () => {
  const [displayName, setDisplayName] = useState('Edmonton, St. Albert and surrounding areas');

  const edmontonAreas = {
    'Edmonton': ['T5', 'T6'],
    'St. Albert': ['T8N'],
    'Spruce Grove': ['T7X'],
    'Stony Plain': ['T7Z'],
    'Strathcona County': ['T8A', 'T8B', 'T8C', 'T8E', 'T8H'],
    'Beaumont': ['T4X'],
    'Morinville': ['T8R'],
    'Fort Saskatchewan': ['T8L'],
    'Leduc': ['T9E'],
    'Sherwood Park': ['T8A', 'T8H'],
    'Devon': ['T9G'],
    'Gibbons': ['T0A'],
    'Calmar': ['T0C'],
    'Bon Accord': ['T0A'],
    'Legal': ['T0G'],
    'Redwater': ['T0A'],
    'Graminia': ['T0E'],
    'Toronto': ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9'],
    'Virginia': ['20171', '201', '220', '221', '222', '223', '224', '225', '226', '227', '228', '229', '230', '231', '232', '233', '234', '235', '236', '237', '238', '239']
  };

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await axios.get('https://ipinfo.io?token=a2b26e919e08a9');
        const { postal } = response.data;
  
        console.log("Detected postal:", postal);
        
        if (postal) {
          for (const [area, prefixes] of Object.entries(edmontonAreas)) {
            if (prefixes.some(prefix => postal.startsWith(prefix))) {
              setDisplayName(area);
              console.log("Matched area:", area);
              return;
            }
          }
        }
  
        console.log("No match found, setting default display name.");
        setDisplayName('No match found');
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
