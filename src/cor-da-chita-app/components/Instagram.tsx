import { useEffect, useState } from 'react';
import getInstaData from '../app/api/instagram/instagram'; 

export default function Instagram() {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInstaData(); // Call the function directly
        setFeed(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching Instagram data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div className="flex justify-center bg-light">
      {/* Render your Instagram feed data here
      {feed && feed.data.map(item => (
        <div key={item.id}>
          <img src={item.media_url} alt={item.username} />
        </div>
      ))} */}
    </div>
  );
}
