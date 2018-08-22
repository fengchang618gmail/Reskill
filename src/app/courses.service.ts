import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courseUrl;

  constructor(private http: HttpClient) {
    this.courseUrl = `http://localhost:5000`;
  }

  getJSON(): Observable<any> {
    return this.http.get('./assets/mock-courses.json');
  }

  getCourses(searchKeyWord: string, start: number, limit: number): Observable<any> {
    const params: HttpParams = new HttpParams()
    .set('start', start.toString())
    .set('limit', limit.toString());
    return this.http.get(`${this.courseUrl}/coursesearch/${searchKeyWord}`, { params, observe: 'response' });
  }

  getRecommendCourses(courseId: string, start: number, limit: number): Observable<any> {
    const params: HttpParams = new HttpParams()
    .set('start', start.toString())
    .set('limit', limit.toString());
    return this.http.get(`${this.courseUrl}/recommend/${courseId}`, { params, observe: 'response' });
  }

  getCourseByName(name: string): Observable<any> {
    return this.http.get<any>('./assets/mock-courses.json').pipe(
      map(courses => courses.elements.find(course => course.name === name))
    );
  }

  getCourseById(id: string): Observable<any> {
    return this.http.get<any>(`${this.courseUrl}/course/${id}`);
  }

}
