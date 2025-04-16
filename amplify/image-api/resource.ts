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
          allowedOrigins: ['*'],
          allowedMethods: ['POST'],
          allowedHeaders: ['*'],
        }
      }
    }
  }
});