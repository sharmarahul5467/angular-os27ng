import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, RecipeComponent, RecipeDetailComponent, RecipeListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
