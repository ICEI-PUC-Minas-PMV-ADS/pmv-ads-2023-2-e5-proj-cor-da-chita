import React, { useEffect, useState } from 'react';
import { Image } from '@nextui-org/react';

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
    <div className="w-full">
      <div className="flex flex-auto justify-around space-x-4">
        {instagramData.map((item) => (
          <a
            key={item.id}
            href={item.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center"
          >
            <div
              style={{
                width: '300px', // Adjust the width as needed
                height: '300px', // Fixed height for the square
                overflow: 'hidden',
              }}
            >
              <Image
                src={item.media_url}
                alt={`Instagram post by ${item.username}`}
                width="300"
                height="300"
                layout="responsive"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
            <div className="mt-2">
              <p className="font-semibold">{item.username}</p>
              <p className="text-sm">{item.caption}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramComponent;
