import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ProductsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Products {
  readonly id: string;
  readonly Name: string;
  readonly Desc: string;
  readonly Image?: string | null;
  readonly Price: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Products, ProductsMetaData>);
  static copyOf(source: Products, mutator: (draft: MutableModel<Products, ProductsMetaData>) => MutableModel<Products, ProductsMetaData> | void): Products;
}