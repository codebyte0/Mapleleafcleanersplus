import { useState, useEffect } from 'react';

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
    'Toronto': ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9'] // Added Toronto
  };

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipinfo.io?token=a2b26e919e08a9');
        const data = await response.json();
        
        if (data.postal) {
          // Get first 2-3 characters of postal code
          const postalPrefix = data.postal.substring(0, 2);
          
          // Check if postal code matches any of our areas
          for (const [area, prefixes] of Object.entries(edmontonAreas)) {
            if (prefixes.some(prefix => postalPrefix.startsWith(prefix))) {
              setDisplayName(area);
              console.log(area)
              return;
            }
          }
        }
        
        // If no match or no postal code, keep default message
      } catch (error) {
        console.error('Location check failed, using default area');
        setDisplayName('Edmonton, St. Albert and surrounding areas');
      }
    };

    detectLocation();
  }, []);

  return { displayName };
};

export default useEdmontonAreaDetection;