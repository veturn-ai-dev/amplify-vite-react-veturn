// amplify/image-api/resource.ts
import { defineApi } from '@aws-amplify/backend';

export const api = defineApi({
  name: 'imageGenerationApi',
  paths: {
    '/generate-image': {
      post: {
        handler: './functions/generateImage.handler'
      }
    }
  }
});