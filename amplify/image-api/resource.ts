import { defineBackend } from '@aws-amplify/backend';
import { generateImage } from '../functions/generateImage/resource';

export const backend = defineBackend({
  generateImage
});