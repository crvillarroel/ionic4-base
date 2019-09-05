import { Component } from '@angular/core';
import { NavController, ToastController, Platform, IonItemSliding } from '@ionic/angular';
import { filter, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'page-product',
    templateUrl: 'product.html'
})
export class ProductPage {
    products: Product[];

    // todo: add pagination

    constructor(
        private navController: NavController,
        private productService: ProductService,
        private toastCtrl: ToastController,
        public plt: Platform
    ) {
        this.products = [];
    }

    ionViewWillEnter() { 
        this.loadAll();
    }

    async loadAll(refresher?) {
        console.log('ProductPage.loadAll', refresher);

        this.productService.query()
        .subscribe(async (result) => {
            console.debug('ProductPage.loadAll.productService.query result', result);

            this.products = result.data.product;
            if (typeof(refresher) !== 'undefined') {
                setTimeout(() => {
                    refresher.target.complete();
                }, 750);
            }
        },
        async (error) => {            
            console.error('ProductPage.loadAll.productService.query error', error);

            const toast = await this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
            toast.present();
        });
    }

    trackId(index: number, item: Product) {
        console.log('ProductPage.trackId', item);

        return item.id;
    }

    new() {
        console.log('ProductPage.new');

        this.navController.navigateForward('/tabs/entities/product/new');
    }

    edit(item: IonItemSliding, product: Product) {
        console.log('ProductPage.edit', product);

        this.navController.navigateForward('/tabs/entities/product/' + product.id + '/edit');
        item.close();
    }

    async delete(product) {
        console.log('ProductPage.delete', product);

        this.productService.delete(product.id).subscribe(async () => {
            const toast = await this.toastCtrl.create(
                {message: 'Product deleted successfully.', duration: 3000, position: 'middle'});
            toast.present();
            this.loadAll();
        }, async (error) => {
            console.error(error);
        
            (await this.toastCtrl.create({ message: 'Unable to delete. Please login', duration: 2000, cssClass: 'error' })).present();
        });
    }

    view(product: Product) {
        console.log('ProductPage.view', product);

        this.navController.navigateForward('/tabs/entities/product/' + product.id + '/view');
    }
}
