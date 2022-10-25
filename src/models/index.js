// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Wishlist, Reviews, Products } = initSchema(schema);

export {
  Wishlist,
  Reviews,
  Products
};