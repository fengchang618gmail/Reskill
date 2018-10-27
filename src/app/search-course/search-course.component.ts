import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SearchPipe } from '../shared/search-course.pipe';
import { CoursesService } from '../courses.service';
import { Course } from '../course-item/course-item-model';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  searchKeyWord: string;
  courses: Array<Course>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchKeyWord = params['searchKeyWord'];

      this.onSearch(0, 3);
   });
  }

  onSearch(start: number, limit: number) {
    if (this.searchKeyWord.trim()) {
      this.coursesService.getCourses(this.searchKeyWord, start, limit).subscribe(courses => {
      this.courses = courses.body;
        console.log(this.courses);
      }, error => {
        console.log(error);
      });
    } else {
      this.courses = [];
      console.log(this.courses);
    }
  }

  showMoreCourse(event) {
    if (event === 'show-more-courses') {
      this.onSearch(0, 10);
    }
  }

}
