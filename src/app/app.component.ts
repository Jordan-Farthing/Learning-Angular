import { Component, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

    courses = COURSES;

    title = COURSES[0].description;
    price = 9.99243213252;
    startDate = new Date(2000,0,1);
    rate = 0.67;
    course = COURSES[0];

    @ViewChild(CourseCardComponent)
    card: CourseCardComponent;

    onCourseSelected(course:Course){
        console.log(this.card);
    }

}
