import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() like: string = 'empty';
  @Input() type: string = 'empty';
  likes: string[] = ['empty', 'like', 'love'];
  @Output() sendLike: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setLike(): void {
    let index = this.likes.indexOf(this.like) + 1;
    if(index >= 3)index = 0;
    this.like = this.likes[index];
    this.sendLike.emit(this.like);
  }

}
