import React, { useEffect, useState } from 'react';

const InstagramComponent: React.FC = () => {
  const [instagramData, setInstagramData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/instagram');
        const data = await response.json();
        setInstagramData(data.data.slice(0, 3)); // Take the first three items
      } catch (error) {
        console.error('Error fetching Instagram data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {instagramData.map((item) => (
        <div key={item.id} style={{ marginRight: '10px' }}>
          <img src={item.media_url} alt={`Instagram post by ${item.username}`} style={{ width: '50%', height: 'auto' }} />
          <p style={{ textAlign: 'center' }}>{item.username}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramComponent;
