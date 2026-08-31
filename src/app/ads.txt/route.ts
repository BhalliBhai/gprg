export async function GET() {
  const content = `google.com, pub-0000000000000000, DIRECT, 0000000000000000`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}