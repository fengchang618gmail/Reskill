import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../course-item/course-item-model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Array<Course> = [];
  @Input() searchKeyWord: string;
  @Output() showMore = new EventEmitter<string>();

  constructor(
    private coursesService: CoursesService,
  ) { }

  ngOnInit() {
  }

  showMoreCourses() {
    this.showMore.emit('show-more-courses');
  }

}
