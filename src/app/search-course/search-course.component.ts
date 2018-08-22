import { Component, OnInit } from '@angular/core';
import { SearchPipe } from '../shared/search-course.pipe';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  searchKeyWords: string;

  constructor() { }

  ngOnInit() {
  }

  myFunction() {
    console.log(this.searchKeyWords);
  }

}
