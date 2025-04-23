import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

interface RequestBody {
  prompt: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://main.d3qhharr5w9v34.amplifyapp.com',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Max-Age': '3600'
};

const API_KEY = process.env.API_KEY || 'da2-qro26lk6vfgmlbeed46j4pl2we';

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  // Handle CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: '',
    };
  }

  try {
    // Check for API key
    const apiKey = event.headers['x-api-key'] || event.headers['X-API-Key'];
    if (!apiKey || apiKey !== API_KEY) {
      return {
        statusCode: 401,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Invalid API key' }),
      };
    }

    const body: RequestBody = JSON.parse(event.body || '{}');
    
    if (!body.prompt) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Prompt is required' }),
      };
    }

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
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Image generation failed' }),
    };
  }
};