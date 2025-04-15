// amplify/backend.ts
import { defineBackend } from '@aws-amplify/backend';
import { api } from './image-api/resource';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  api,
  auth,
  data
});
