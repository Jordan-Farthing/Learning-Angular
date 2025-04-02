import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {

  @Input({
    required: true
  })
  course:Course;

  @Input()
  cardIndex:number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<ElementRef>;

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.images);
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
