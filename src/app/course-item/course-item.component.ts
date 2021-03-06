import { Component, Input, OnInit } from '@angular/core';
import { Course } from './course-item-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
