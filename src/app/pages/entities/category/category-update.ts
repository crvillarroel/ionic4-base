import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
    selector: 'page-category-update',
    templateUrl: 'category-update.html'
})
export class CategoryUpdatePage implements OnInit {

    category: Category;
    isSaving = false;
    isNew = true;
    isReadyToSave: boolean;

    form = this.formBuilder.group({
        id: [],
        name: [null, [Validators.required]],
        description: [null, []],
    });

    constructor(
        protected activatedRoute: ActivatedRoute,
        protected navController: NavController,
        protected formBuilder: FormBuilder,
        public platform: Platform,
        protected toastCtrl: ToastController,
        private categoryService: CategoryService
    ) {

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });

    }

    ngOnInit() {
        this.activatedRoute.data.subscribe((response) => {
            this.updateForm(response.data);
            this.category = response.data;
            this.isNew = this.category.id === null || this.category.id === undefined;
        });
    }

    updateForm(category: Category) {
        this.form.patchValue({
            id: category.id,
            name: category.name,
            description: category.description,
        });
    }

    save() {
        this.isSaving = true;
        const category = this.createFromForm();
        if (!this.isNew) {
            this.subscribeToSaveResponse(this.categoryService.update(category));
        } else {
            this.subscribeToSaveResponse(this.categoryService.create(category));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<Category>>) {
        result.subscribe((res: HttpResponse<Category>) => this.onSaveSuccess(res), (res: HttpErrorResponse) => this.onError(res.error));
    }

    async onSaveSuccess(response) {
        let action = 'updated';
        if (response.status === 201) {
          action = 'created';
        }
        this.isSaving = false;
        const toast = await this.toastCtrl.create({message: `Category ${action} successfully.`, duration: 2000, position: 'middle'});
        toast.present();
        this.navController.navigateBack('/tabs/entities/category');
    }

    previousState() {
        window.history.back();
    }

    async onError(error) {
        this.isSaving = false;
        console.error(error);
        const toast = await this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
        toast.present();
    }

    private createFromForm(): Category {
        return {
            ...new Category(),
            id: this.form.get(['id']).value,
            name: this.form.get(['name']).value,
            description: this.form.get(['description']).value,
        };
    }

}
