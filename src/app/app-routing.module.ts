import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SearchCourseComponent } from './search-course/search-course.component';

const appRoutes: Routes = [
    { path: 'course-search', component: SearchCourseComponent },
    { path: 'course-detail/:id', component: CourseDetailComponent },
    { path: '',   redirectTo: '/course-search', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
