import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {


  @Input() commentTitle
  @Input() commentAuthor
  @Input() commentText


  constructor() { }

  ngOnInit(): void {
  }

}
