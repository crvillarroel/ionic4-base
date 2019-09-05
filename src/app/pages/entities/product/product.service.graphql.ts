import gql from 'graphql-tag';

export const QUERY_ALL = gql`
query All {
  product(order_by: {id: asc}) {
    id
    name
    done
    measure
    category {
      id
    }
  }
}
`;

export const QUERY_BY_ID = gql`
query ById($id: Int) {
  product(where: {id: {_eq: $id}}) {
    id
    name
    done
    measure
    category {
      id
    }
  }
}
`;

export const QUERY_ALL_CATEGORIES = gql`  
query AllCategories {
  category(order_by: {name: asc}) {
    id
    name
  }
}
`;

export const MUTATION_INSERT = gql`
mutation Create($name: String!, $categoryId: Int) {
  insert_product(objects: {name: $name, category_id: $categoryId}) {
    returning {
      id
      name
      done
      category {
        id
      }
    }
  }
}
`;

export const MUTATION_UPDATE = gql`
mutation Update($id: Int, $done: Boolean) {
  update_product(where: {id: {_eq: $id}}, _set: {done: $done}) {
    returning {
      id
      done
    }
  }
}
`;

export const MUTATION_DELETE = gql`
mutation Delete($id: Int) {
  delete_product(where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      id
    }
  }
}
`;