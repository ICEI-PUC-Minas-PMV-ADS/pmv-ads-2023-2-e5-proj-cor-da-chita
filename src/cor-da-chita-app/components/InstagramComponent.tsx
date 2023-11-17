import React, { useEffect, useState } from 'react';
import { Image, Link } from '@nextui-org/react';
import { relative } from 'path';

const InstagramComponent: React.FC = () => {
  const [instagramData, setInstagramData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/instagram');
        const data = await response.json();
        // Filter out items without URLs (assuming video media items don't have URLs)
        const filteredData = data.data.filter((item: any) => item.media_type !== 'VIDEO');
        setInstagramData(filteredData.slice(0, 3)); // Take the first three image items
      } catch (error) {
        console.error('Error fetching Instagram data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-light py-10">
      <div className="text-center py-8">
        <h2>Siga o Cor da Chita no Instagram!</h2>
        <Link
          isExternal
          aria-label="Instagram Cor da Chita"
          color="foreground"
          href="https://www.instagram.com/cor.da.chita/"
        >
          <p className="font-semibold text-small">@Cor.Da.Chita</p>
        </Link>
      </div>
      <div className="flex flex-auto justify-around space-x-4 px-10">
        {instagramData.map((item: any) => (
          <a
            key={item.id}
            href={item.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col"
            style={{ maxWidth: '300px' }}
          >
            <div
              style={{
                width: '300px',
                height: '300px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={item.media_url}
                alt={`Instagram post by ${item.username}`}
                width="300"
                height="300"
                style={{ objectFit: 'contain', width: '100%', height: '100%', position: 'relative' }}
              />
            </div>
            <div className="mt-2">
              <span><p className="font-semibold capitalize text-small">{item.username}</p></span>
              <p className="text-sm text-left overflow-hidden overflow-ellipsis line-clamp-1">{item.caption}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramComponent;
