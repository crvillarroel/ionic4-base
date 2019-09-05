import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'page-product-update',
    templateUrl: 'product-update.html'
})
export class ProductUpdatePage implements OnInit {

    product: Product;
    isSaving = false;
    isNew = true;
    isReadyToSave: boolean;

    form = this.formBuilder.group({
        id: [],
        name: [null, [Validators.required]],
        measure: [null, []],
        categoryId: [null, []],
    });

    constructor(
        protected activatedRoute: ActivatedRoute,
        protected navController: NavController,
        protected formBuilder: FormBuilder,
        public platform: Platform,
        protected toastCtrl: ToastController,
        private productService: ProductService
    ) {

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });

    }

    ngOnInit() {
        this.activatedRoute.data.subscribe((response) => {
            this.updateForm(response.data);
            this.product = response.data;
            this.isNew = this.product.id === null || this.product.id === undefined;
        });
    }

    updateForm(product: Product) {
        this.form.patchValue({
            id: product.id,
            name: product.name,
            measure: product.measure,
            categoryId: product.categoryId,
        });
    }

    save() {
        console.log('ProductUpdatePage.save');

        this.isSaving = true;
        const product = this.createFromForm();
        if (!this.isNew) {
            this.subscribeToSaveResponse(this.productService.update(product));
        } else {
            this.subscribeToSaveResponse(this.productService.create(product));
        }
    }

    protected subscribeToSaveResponse(obj) {
        console.log('ProductUpdatePage.subscribeToSaveResponse', obj);

        obj.subscribe((res: HttpResponse<Product>) => this.onSaveSuccess(res), (res: HttpErrorResponse) => this.onError(res.error));
    }

    async onSaveSuccess(response) {
        console.log('ProductUpdatePage.onSaveSuccess', response);

        let action = 'updated';
        if (response.status === 201) {
          action = 'created';
        }
        this.isSaving = false;
        const toast = await this.toastCtrl.create({message: `Product ${action} successfully.`, duration: 2000, position: 'middle'});
        toast.present();
        this.navController.navigateBack('/tabs/entities/product');
    }

    previousState() {
        window.history.back();
    }

    async onError(error) {
        console.log('ProductUpdatePage.onError', error);

        this.isSaving = false;
        console.error(error);
        const toast = await this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
        toast.present();
    }

    private createFromForm(): Product {
        return {
            ...new Product(),
            id: this.form.get(['id']).value,
            name: this.form.get(['name']).value,
            measure: this.form.get(['measure']).value,
            categoryId: this.form.get(['categoryId']).value,
        };
    }

}
