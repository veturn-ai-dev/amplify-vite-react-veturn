import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

interface RequestBody {
  prompt: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://main.d3qhharr5w9v34.amplifyapp.com',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Max-Age': '3600'
};

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  // Handle CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: 'Image generated successfully!',
    };
  }

  try {
    // Check for Authorization header
    const authHeader = event.headers['Authorization'] || event.headers['authorization'];
    if (!authHeader) {
      return {
        statusCode: 401,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Authorization header is required' }),
      };
    }

    const body: RequestBody = JSON.parse(event.body || '{}');
    
    // Your image generation logic here (e.g., call Replicate/Stable Diffusion)
    const mockImageUrl = `https://dummyimage.com/600x400/000/fff&text=${encodeURIComponent(body.prompt)}`;

    return {
      statusCode: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageUrl: mockImageUrl }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Image generation failed' }),
    };
  }
};