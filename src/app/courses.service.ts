import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getJSON(): Observable<any> {
    return this.http.get('./assets/mock-courses.json');
  }

  getCourseByName(name: string): Observable<any> {
    return this.http.get<any>('./assets/mock-courses.json').pipe(
      map(courses => courses.elements.find(course => course.name === name))
    );
  }

}
