import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  list(): Course[] {
    return [
      {
        _id: '1',
        name: 'Angular',
        category: 'JavaScript framework',
      },
      {
        _id: '2',
        name: 'React',
        category: 'JavaScript framework',
      },
      {
        _id: '3',
        name: 'Vue.js',
        category: 'JavaScript framework',
      },
    ];
  }
}
