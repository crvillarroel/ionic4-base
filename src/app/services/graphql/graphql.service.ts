import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  numeric: any,
};



/** expression to compare columns of type boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>,
  _gt?: Maybe<Scalars['Boolean']>,
  _gte?: Maybe<Scalars['Boolean']>,
  _in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Boolean']>,
  _lte?: Maybe<Scalars['Boolean']>,
  _neq?: Maybe<Scalars['Boolean']>,
  _nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

/** columns and relationships of "category" */
export type Category = {
   __typename?: 'category',
  description: Scalars['String'],
  id: Scalars['Int'],
  name: Scalars['String'],
};

/** aggregated selection of "category" */
export type Category_Aggregate = {
   __typename?: 'category_aggregate',
  aggregate?: Maybe<Category_Aggregate_Fields>,
  nodes: Array<Category>,
};

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
   __typename?: 'category_aggregate_fields',
  avg?: Maybe<Category_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Category_Max_Fields>,
  min?: Maybe<Category_Min_Fields>,
  stddev?: Maybe<Category_Stddev_Fields>,
  stddev_pop?: Maybe<Category_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Category_Stddev_Samp_Fields>,
  sum?: Maybe<Category_Sum_Fields>,
  var_pop?: Maybe<Category_Var_Pop_Fields>,
  var_samp?: Maybe<Category_Var_Samp_Fields>,
  variance?: Maybe<Category_Variance_Fields>,
};


/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Category_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "category" */
export type Category_Aggregate_Order_By = {
  avg?: Maybe<Category_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Category_Max_Order_By>,
  min?: Maybe<Category_Min_Order_By>,
  stddev?: Maybe<Category_Stddev_Order_By>,
  stddev_pop?: Maybe<Category_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Category_Stddev_Samp_Order_By>,
  sum?: Maybe<Category_Sum_Order_By>,
  var_pop?: Maybe<Category_Var_Pop_Order_By>,
  var_samp?: Maybe<Category_Var_Samp_Order_By>,
  variance?: Maybe<Category_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "category" */
export type Category_Arr_Rel_Insert_Input = {
  data: Array<Category_Insert_Input>,
  on_conflict?: Maybe<Category_On_Conflict>,
};

/** aggregate avg on columns */
export type Category_Avg_Fields = {
   __typename?: 'category_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "category" */
export type Category_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Category_Bool_Exp>>>,
  _not?: Maybe<Category_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Category_Bool_Exp>>>,
  description?: Maybe<Text_Comparison_Exp>,
  id?: Maybe<Integer_Comparison_Exp>,
  name?: Maybe<Text_Comparison_Exp>,
};

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
  /** unique or primary key constraint */
  CategoryNameKey = 'category_name_key',
  /** unique or primary key constraint */
  CategoryPkey = 'category_pkey'
}

/** input type for incrementing integer columne in table "category" */
export type Category_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Category_Max_Fields = {
   __typename?: 'category_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "category" */
export type Category_Max_Order_By = {
  description?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Category_Min_Fields = {
   __typename?: 'category_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "category" */
export type Category_Min_Order_By = {
  description?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
   __typename?: 'category_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Category>,
};

/** input type for inserting object relation for remote table "category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input,
  on_conflict?: Maybe<Category_On_Conflict>,
};

/** on conflict condition type for table "category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint,
  update_columns: Array<Category_Update_Column>,
};

/** ordering options when selecting data from "category" */
export type Category_Order_By = {
  description?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Category_Stddev_Fields = {
   __typename?: 'category_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "category" */
export type Category_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Category_Stddev_Pop_Fields = {
   __typename?: 'category_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "category" */
export type Category_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Category_Stddev_Samp_Fields = {
   __typename?: 'category_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "category" */
export type Category_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Category_Sum_Fields = {
   __typename?: 'category_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "category" */
export type Category_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

/** update columns of table "category" */
export enum Category_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Category_Var_Pop_Fields = {
   __typename?: 'category_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "category" */
export type Category_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Category_Var_Samp_Fields = {
   __typename?: 'category_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "category" */
export type Category_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Category_Variance_Fields = {
   __typename?: 'category_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "category" */
export type Category_Variance_Order_By = {
  id?: Maybe<Order_By>,
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export type Integer_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root',
  /** delete data from the table: "category" */
  delete_category?: Maybe<Category_Mutation_Response>,
  /** insert data into the table: "category" */
  insert_category?: Maybe<Category_Mutation_Response>,
  /** update data of the table: "category" */
  update_category?: Maybe<Category_Mutation_Response>,
};


/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp
};


/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>,
  on_conflict?: Maybe<Category_On_Conflict>
};


/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _inc?: Maybe<Category_Inc_Input>,
  _set?: Maybe<Category_Set_Input>,
  where: Category_Bool_Exp
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>,
  _gt?: Maybe<Scalars['numeric']>,
  _gte?: Maybe<Scalars['numeric']>,
  _in?: Maybe<Array<Maybe<Scalars['numeric']>>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['numeric']>,
  _lte?: Maybe<Scalars['numeric']>,
  _neq?: Maybe<Scalars['numeric']>,
  _nin?: Maybe<Array<Maybe<Scalars['numeric']>>>,
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "product" */
export type Product = {
   __typename?: 'product',
  barcode?: Maybe<Scalars['String']>,
  /** An object relationship */
  category?: Maybe<Category>,
  category_id?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  done?: Maybe<Scalars['Boolean']>,
  id: Scalars['Int'],
  measure?: Maybe<Scalars['numeric']>,
  name?: Maybe<Scalars['String']>,
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Bool_Exp>>>,
  _not?: Maybe<Product_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Product_Bool_Exp>>>,
  barcode?: Maybe<Text_Comparison_Exp>,
  category?: Maybe<Category_Bool_Exp>,
  category_id?: Maybe<Integer_Comparison_Exp>,
  description?: Maybe<Text_Comparison_Exp>,
  done?: Maybe<Boolean_Comparison_Exp>,
  id?: Maybe<Integer_Comparison_Exp>,
  measure?: Maybe<Numeric_Comparison_Exp>,
  name?: Maybe<Text_Comparison_Exp>,
};

/** ordering options when selecting data from "product" */
export type Product_Order_By = {
  barcode?: Maybe<Order_By>,
  category?: Maybe<Category_Order_By>,
  category_id?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  done?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  measure?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** select columns of table "product" */
export enum Product_Select_Column {
  /** column name */
  Barcode = 'barcode',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Description = 'description',
  /** column name */
  Done = 'done',
  /** column name */
  Id = 'id',
  /** column name */
  Measure = 'measure',
  /** column name */
  Name = 'name'
}

/** query root */
export type Query_Root = {
   __typename?: 'query_root',
  /** fetch data from the table: "category" */
  category: Array<Category>,
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate,
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>,
  /** fetch data from the table: "product" */
  product: Array<Product>,
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>,
};


/** query root */
export type Query_RootCategoryArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Category_Order_By>>,
  where?: Maybe<Category_Bool_Exp>
};


/** query root */
export type Query_RootCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Category_Order_By>>,
  where?: Maybe<Category_Bool_Exp>
};


/** query root */
export type Query_RootCategory_By_PkArgs = {
  id: Scalars['Int']
};


/** query root */
export type Query_RootProductArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Product_Order_By>>,
  where?: Maybe<Product_Bool_Exp>
};


/** query root */
export type Query_RootProduct_By_PkArgs = {
  id: Scalars['Int']
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "category" */
  category: Array<Category>,
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate,
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>,
  /** fetch data from the table: "product" */
  product: Array<Product>,
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>,
};


/** subscription root */
export type Subscription_RootCategoryArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Category_Order_By>>,
  where?: Maybe<Category_Bool_Exp>
};


/** subscription root */
export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Category_Order_By>>,
  where?: Maybe<Category_Bool_Exp>
};


/** subscription root */
export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type Subscription_RootProductArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Product_Order_By>>,
  where?: Maybe<Product_Bool_Exp>
};


/** subscription root */
export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['Int']
};

/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export type Text_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Maybe<Scalars['String']>>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};
export type CategoriesQueryVariables = {};


export type CategoriesQuery = (
  { __typename?: 'query_root' }
  & { categories: Array<(
    { __typename?: 'category' }
    & Pick<Category, 'id' | 'name' | 'description'>
  )> }
);

export type CategoryByPkQueryVariables = {
  id: Scalars['Int']
};


export type CategoryByPkQuery = (
  { __typename?: 'query_root' }
  & { category_by_pk: Maybe<(
    { __typename?: 'category' }
    & Pick<Category, 'id' | 'name' | 'description'>
  )> }
);

export type InsertCategoryMutationVariables = {
  id: Scalars['Int'],
  name: Scalars['String']
};


export type InsertCategoryMutation = (
  { __typename?: 'mutation_root' }
  & { insert_category: Maybe<(
    { __typename?: 'category_mutation_response' }
    & Pick<Category_Mutation_Response, 'affected_rows'>
  )> }
);

export type UpdateCategoryMutationVariables = {
  id: Scalars['Int'],
  name: Scalars['String']
};


export type UpdateCategoryMutation = (
  { __typename?: 'mutation_root' }
  & { update_category: Maybe<(
    { __typename?: 'category_mutation_response' }
    & Pick<Category_Mutation_Response, 'affected_rows'>
  )> }
);

export type DeleteCategoryMutationVariables = {
  id: Scalars['Int']
};


export type DeleteCategoryMutation = (
  { __typename?: 'mutation_root' }
  & { delete_category: Maybe<(
    { __typename?: 'category_mutation_response' }
    & Pick<Category_Mutation_Response, 'affected_rows'>
  )> }
);

export const CategoriesDocument = gql`
    query Categories {
  categories: category(order_by: {id: asc}) {
    id
    name
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CategoriesGQL extends Apollo.Query<CategoriesQuery, CategoriesQueryVariables> {
    document = CategoriesDocument;
    
  }
export const CategoryByPkDocument = gql`
    query CategoryByPk($id: Int!) {
  category_by_pk(id: $id) {
    id
    name
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CategoryByPkGQL extends Apollo.Query<CategoryByPkQuery, CategoryByPkQueryVariables> {
    document = CategoryByPkDocument;
    
  }
export const InsertCategoryDocument = gql`
    mutation InsertCategory($id: Int!, $name: String!) {
  insert_category(objects: {id: $id, name: $name}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertCategoryGQL extends Apollo.Mutation<InsertCategoryMutation, InsertCategoryMutationVariables> {
    document = InsertCategoryDocument;
    
  }
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: Int!, $name: String!) {
  update_category(where: {id: {_eq: $id}, name: {_eq: $name}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCategoryGQL extends Apollo.Mutation<UpdateCategoryMutation, UpdateCategoryMutationVariables> {
    document = UpdateCategoryDocument;
    
  }
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: Int!) {
  delete_category(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteCategoryGQL extends Apollo.Mutation<DeleteCategoryMutation, DeleteCategoryMutationVariables> {
    document = DeleteCategoryDocument;
    
  }