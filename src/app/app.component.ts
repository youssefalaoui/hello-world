import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'bla';
  task = {
    title: 'Review applications',
    assignee: null,
  };

  viewMode = 'map';
  courses: { id: number; name: string }[] = [];
  post = {
    title: 'Title',
    isFavorite: false,
  };
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed !', eventArgs);
  }
  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }
  onRemove(course: { id: number; name: string }) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onChange(course: { id: number; name: string }) {
    course.name = 'updated';
  }
  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ];
  }
  trackCourse(index: number, course: { id: number; name: string }) {
    return course ? course.id : undefined;
  }
}
