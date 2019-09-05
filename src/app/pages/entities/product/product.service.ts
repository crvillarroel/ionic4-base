import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
//import { createRequestOption } from 'src/app/shared';
import { Product } from './product.model';

import { Apollo } from 'apollo-angular';
import { QUERY_ALL, QUERY_BY_ID, MUTATION_INSERT, MUTATION_UPDATE, MUTATION_DELETE } from './product.service.graphql';
import { Entities } from './entities.model';
import { ApolloQueryResult } from 'apollo-client';

@Injectable({ providedIn: 'root'})
export class ProductService {
  private resourceUrl = ApiService.API_URL + '/products';

  constructor(protected http: HttpClient, private apollo: Apollo) { }

  create(product: Product): Observable<any> {
    return this.apollo.mutate({
      mutation: MUTATION_INSERT,
      variables: {
        name: product.name,
        categoryId: 1 //TODO No category by default. product.category.id
      }
    });
  }

  update(product: Product): Observable<any> {
    return this.apollo.mutate({
      mutation: MUTATION_UPDATE,
      variables: product
    });
  }

  find(id: number): Observable<ApolloQueryResult<Entities>> {
    return this.apollo.query<Entities>({
      query: QUERY_BY_ID,
      variables: {
        id: id
      },
      fetchPolicy: "cache-first"
    });
  }

  query(req?: any): Observable<ApolloQueryResult<Entities>> {
    return this.apollo.query<Entities>({
      query: QUERY_ALL,
      fetchPolicy: "cache-first"
    });
  }

  delete(id: number): Observable<any> {
    return this.apollo.mutate({
      mutation: MUTATION_DELETE,
      variables: {
        id: id
      }
    });
  }
}
