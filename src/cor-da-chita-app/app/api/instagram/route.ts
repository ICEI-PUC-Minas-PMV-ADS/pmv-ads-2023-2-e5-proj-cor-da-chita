export async function GET(request: Request) {
  console.log('Received GET request to /api/instagram');

  if (request.method !== 'GET') {
    console.log('Method Not Allowed');
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const url = `https://graph.instagram.com/v12.0/me/media?fields=id,media_type,caption,permalink,media_url,username,timestamp&access_token=${process.env.INSTAGRAM_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
