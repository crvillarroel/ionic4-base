import { NgModule, Injectable } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserRouteAccessService } from '../../../services/auth/user-route-access.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { CategoryPage } from './category';
import { CategoryUpdatePage } from './category-update';
import { Category, CategoryService, CategoryDetailPage } from '.';

import { ApolloQueryResult } from 'apollo-client';
import { CategoryByPkQuery } from 'src/app/services/graphql/graphql.service';

@Injectable({ providedIn: 'root' })
export class CategoryResolve implements Resolve<Category> {
  constructor(private service: CategoryService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category> {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: ApolloQueryResult<CategoryByPkQuery>) => !response.loading),
        //FIXME There should be a better way
        map((result: ApolloQueryResult<CategoryByPkQuery>) => result.data.category_by_pk .data.category && result.data.product[0])
      );
    }
    return of(new Category());
  }
}

const routes: Routes = [
    {
      path: '',
      component: CategoryPage,
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    },
    {
      path: 'new',
      component: CategoryUpdatePage,
      resolve: {
        data: CategoryResolve
      },
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    },
    {
      path: ':id/view',
      component: CategoryDetailPage,
      resolve: {
        data: CategoryResolve
      },
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    },
    {
      path: ':id/edit',
      component: CategoryUpdatePage,
      resolve: {
        data: CategoryResolve
      },
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    }
  ];


@NgModule({
    declarations: [
        CategoryPage,
        CategoryUpdatePage,
        CategoryDetailPage
    ],
    imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        TranslateModule,
        RouterModule.forChild(routes)
    ]
})
export class CategoryPageModule {
}
