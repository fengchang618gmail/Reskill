import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../course-item/course-item-model';
import { SearchPipe } from '../shared/search-course.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Array<Course> = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

}
