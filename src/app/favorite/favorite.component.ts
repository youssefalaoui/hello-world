import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean = true;
  @Output('change') click = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ newValue: this.isFavorite });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
