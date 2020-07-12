import { Component, OnInit ,Output, EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.sass']
})
export class AddCommentComponent implements OnInit {

  @Output() updateComment = new EventEmitter<object>()
  @Input() author
  commentText:string

  constructor() { }

  ngOnInit(): void {
  }

  addComment() {
    const comment = {
    commentAuthor: this.author,
    commentText: this.commentText
  }
    this.updateComment.emit(comment)

    // create comment and send it to post component -> app component
  }

}
