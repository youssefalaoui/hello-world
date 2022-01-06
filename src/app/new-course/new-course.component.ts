import {
  FormArray,
  FormGroup,
  FormControl,
  AbstractControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
})
export class NewCourseComponent implements OnInit {
  form;
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl(),
  //   }),
  //   topics: new FormArray([]),
  // });

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }

  ngOnInit(): void {}

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
  removeTopic(topic: AbstractControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
