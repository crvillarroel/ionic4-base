import { BaseEntity } from 'src/model/base-entity';

export class Product implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public done?: boolean,
        public measure?: number,
        public categoryId?: number,
        public category_id?: number,
        //public category: Category;
    ) {
    }
}
