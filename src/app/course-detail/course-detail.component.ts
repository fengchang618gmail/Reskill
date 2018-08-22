import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../course-item/course-item-model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Observable<Course>;
  courses: Observable<Array<Course>>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.coursesService.getCourseById(this.id).subscribe(
        course => {
          this.course = course;
        }, error => {
          console.log(error);
        });

      this.coursesService.getRecommendCourses(this.id, 1, 3).subscribe(
        courses => {
          this.courses = courses.body;
        }, error => {
          console.log(error);
        }
      );
   });

  }

}
