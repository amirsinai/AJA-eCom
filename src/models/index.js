// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Reviews, Products } = initSchema(schema);

export {
  Reviews,
  Products
};