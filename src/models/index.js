// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Products } = initSchema(schema);

export {
  Products
};