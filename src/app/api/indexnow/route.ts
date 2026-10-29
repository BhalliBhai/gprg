import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const host = 'gprg.bhalli.dev'; // Replace with your domain
    const key = '9100569ec9fc4fa8ad0fa5bcc35cda23';     // Your IndexNow API Key
    const keyLocation = `https://${host}/${key}.txt`;

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList: [url],
      }),
    });

    if (response.ok || response.status === 200) {
      return NextResponse.json({ success: true, message: 'URL submitted successfully to IndexNow' });
    } else {
      return NextResponse.json({ success: false, status: response.status }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}