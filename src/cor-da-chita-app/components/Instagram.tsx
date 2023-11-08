

import { useEffect, useState } from 'react';
import { Image } from '@nextui-org/react';
import Link from 'next/link';


export default function Instagram() {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://graph.instagram.com/v12.0/me/media?fields=id,media_type,media_url,username,timestamp&access_token=${process.env.INSTAGRAM_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
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
      <Link href="/">oi</Link>
      <Image src="" alt="" />
    </div>
  );
}
