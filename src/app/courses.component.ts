import { Component } from '@angular/core';
import { getOrCreateInjectable } from '../../node_modules/@angular/core/src/render3/di';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <button class="btn btn-primary" [class.active]="isActive">Click Me!</button>
  `
})
export class CoursesComponent {
  isActive = false;

  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  // }

}