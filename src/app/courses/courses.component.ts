import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

// decorator  function : tells Angular how this component works
@Component({
  selector: 'courses',
  templateUrl: './courses.component.html', // html markup
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  title = 'List of courses';
  imageUrl = 'https://fakeimg.pl/640x360';
  colSpan = 2;
  isActive = true;

  courses;
  email = 'me@example.com';

  course = {
    title: 'The complete Angular Course',
    rating: 4.9888,
    students: 34455,
    price: 130.44,
    releaseDate: new Date(2021, 12, 19),
  };

  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
  officia deserunt mollit anim id est laborum.`;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {}

  getTitle() {
    return this.title;
  }

  onSave($event: any) {
    $event.stopPropagation();
    console.log('Button was clicked ', $event);
  }

  onDivClicked() {
    console.log('Div was clicked');
  }

  // onKeyUp($event: KeyboardEvent) {
  //   if ($event.key === 'Enter') console.log('ENTER was pressed');
  // }
  onKeyUp() {
    console.log(this.email);
  }
}
