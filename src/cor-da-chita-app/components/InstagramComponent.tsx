import React, { useEffect } from 'react';

const InstagramComponent: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/instagram');
        const data = await response.json();
        console.log(data);
        // Handle the data in your component state or perform any actions
      } catch (error) {
        console.error('Error fetching Instagram data:', error);
      }
    };

    fetchData();
  }, []);

  return <div>Your Instagram component content here</div>;
};

export default InstagramComponent;