import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SearchCourseComponent } from './search-course/search-course.component';

const appRoutes: Routes = [
    { path: 'training/:searchKeyWord', component: SearchCourseComponent },
    { path: 'training-detail/:id', component: CourseDetailComponent },
    // { path: '',   redirectTo: '/course-search/skill', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
