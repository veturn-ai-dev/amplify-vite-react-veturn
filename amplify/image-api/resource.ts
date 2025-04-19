import { defineApi } from '@aws-amplify/backend';
import { generateImage } from '../functions/generateImage/resource';

export const api = defineApi({
  name: 'imageGenerationApi',
  paths: {
    '/generate-image': {
      post: {
        handler: generateImage,
        // Enable CORS
        cors: {
          allowedOrigins: [
            'https://main.d3qhharr5w9v34.amplifyapp.com',
            'http://localhost:3000',
            'http://localhost:5173'
          ],
          allowedMethods: ['POST', 'OPTIONS'],
          allowedHeaders: ['Content-Type', 'Authorization'],
          allowCredentials: true
        },
        // Enable authorization
        authorization: {
          type: 'CUSTOM',
          function: {
            name: 'authorize',
            parameters: {
              token: {
                type: 'string',
                required: true
              }
            }
          }
        }
      }
    }
  }
});