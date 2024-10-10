import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Course } from './model/course';

const MOCK_DATA: Course[] = [
  { _id: '1', name: 'test1', category: 'Hydrogen' },
  { _id: '2', name: 'test2', category: 'Helium' },
];

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Course[] = MOCK_DATA;
  displayedColumns = ['name', 'category'];
}
