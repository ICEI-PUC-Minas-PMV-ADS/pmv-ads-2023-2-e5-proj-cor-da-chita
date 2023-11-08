export default async function GetInstaData() {
  try {
    const url = `https://graph.instagram.com/v12.0/me/media?fields=id,media_type,media_url,username,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data; 
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    throw error; 
  }
}
