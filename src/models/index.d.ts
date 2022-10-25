import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type WishlistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReviewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Wishlist {
  readonly id: string;
  readonly itemLink?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Wishlist, WishlistMetaData>);
  static copyOf(source: Wishlist, mutator: (draft: MutableModel<Wishlist, WishlistMetaData>) => MutableModel<Wishlist, WishlistMetaData> | void): Wishlist;
}

export declare class Reviews {
  readonly id: string;
  readonly productsID: string;
  readonly Rating: number;
  readonly Comment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Reviews, ReviewsMetaData>);
  static copyOf(source: Reviews, mutator: (draft: MutableModel<Reviews, ReviewsMetaData>) => MutableModel<Reviews, ReviewsMetaData> | void): Reviews;
}

export declare class Products {
  readonly id: string;
  readonly Name: string;
  readonly Desc: string;
  readonly Image?: string | null;
  readonly Price: number;
  readonly Reviews?: (Reviews | null)[] | null;
  readonly Rating?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Products, ProductsMetaData>);
  static copyOf(source: Products, mutator: (draft: MutableModel<Products, ProductsMetaData>) => MutableModel<Products, ProductsMetaData> | void): Products;
}