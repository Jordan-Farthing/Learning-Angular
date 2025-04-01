import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit {

  @Input({
    required: true
  })
  course:Course;

  @Input()
  cardIndex:number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, {read: ElementRef})
  image: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.image)
  }

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
