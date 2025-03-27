import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({
    required: true
  })
  course:Course;

  @Input()
  cardIndex:number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed(){
    console.log("card component - button clicked ...");

    this.courseEmitter.emit(this.course);
  }

  isImageVisibile(){
    return this.course && this.course.iconUrl
  }

  cardClasses(){
    if(this.course.category == 'BEGINNER'){
      return 'beginner';
    }
  }

  cardStyles(){
    return {'background-image': 'url(' + this.course.iconUrl + ')'}
  }

}
