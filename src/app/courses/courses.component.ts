import { Component, OnInit } from '@angular/core';


// decorator  function : tells Angular how this component works
@Component({
  selector: 'courses',
  templateUrl: './courses.component.html', // html markup
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
