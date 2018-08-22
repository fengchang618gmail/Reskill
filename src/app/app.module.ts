import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularMaterialModule } from './shared/angular-material.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';

import { CoursesService } from './courses.service';
import { CourseDetailComponent } from './course-detail/course-detail.component';

import { SearchPipe } from './shared/search-course.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchCourseComponent,
    CoursesListComponent,
    CourseItemComponent,
    CourseDetailComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
