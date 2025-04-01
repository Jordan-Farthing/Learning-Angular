import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;

    title = COURSES[0].description;
    price = 9.99243213252;
    startDate = new Date(2000,0,1);
    rate = 0.67;
    course = COURSES[0];

    @ViewChild('cardRef1', {read: ElementRef})
    card1: CourseCardComponent;
    
    @ViewChild('courseImage')
    containerDiv: ElementRef;

    constructor() {

        console.log("containerDiv", this.card1);
    }

    ngAfterViewInit(): void {
        console.log("containerDiv", this.card1);
    }

    onCourseSelected(course:Course){
        console.log("containerDiv", this.card1);
    }

}
