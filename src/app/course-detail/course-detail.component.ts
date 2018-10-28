import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Course } from '../course-item/course-item-model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: Observable<Course>;
  courses: Observable<Array<Course>>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.coursesService.getCourseById(this.id).subscribe(
        course => {
          this.course = course;
        }, error => {
          console.log(error);
        }
      );

      this.coursesService.getRecommendCourses(this.id, 0, 3).subscribe(
        courses => {
          this.courses = courses.body;
        }, error => {
          console.log(error);
        }
      );
   });

  }

  getCourseLink(course) {
    window.open(`https://www.coursera.org/learn/${course.slug}`, '_blank');
  }

}
