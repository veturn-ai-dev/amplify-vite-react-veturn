import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

type RequestBody = {
  prompt: string;
};

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const body: RequestBody = JSON.parse(event.body || '{}');
    
    // Your image generation logic here (e.g., call Replicate/Stable Diffusion)
    const mockImageUrl = `https://dummyimage.com/600x400/000/fff&text=${encodeURIComponent(body.prompt)}`;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ imageUrl: mockImageUrl }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Image generation failed' }),
    };
  }
};