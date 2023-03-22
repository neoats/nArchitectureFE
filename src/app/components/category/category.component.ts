import { Component, enableProdMode, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../modals/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  currentCategory: Category;
  dataLoaded = false;
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.getCategories();
    enableProdMode();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(
      (response) => {
        console.log('Categories response:', response);
        this.categories = response.data;
      },
      (error) => {
        console.log('Categories error:', error);
      }
    );
  }
  setCurrentCategory(category: Category) {
    console.log(category.categoryName);
    this.currentCategory = category;
  }
  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active border-dark rounded-3';
    } else {
      return 'list-group-item';
    }
  }
  getAllCategoryClass() {
    if (!this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
