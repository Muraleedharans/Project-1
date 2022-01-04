import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `<h2>{{ title }}</h2>
                <ul>
                    <li *ngFor= "let course of courses">
                        {{ course }}
                    </li>
                </ul>
            `
})
export class CoursesComponent implements OnInit {

  title = "list of Courses";
  courses;

  constructor(service: CoursesService) { 
    this.courses=service.getCourse();
  }

  ngOnInit(): void {
  }

}
