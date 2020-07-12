import { Component , Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent  {
  @Input() userName:string
  @Input() postTitle
  @Input() postAuthor
  @Input() postText
  @Input() comments
  @Output() updateComment = new EventEmitter<object>()

  addComment=false

  postUpdateComment(comment){
    this.updateComment.emit(comment)
    this.addComment=!this.addComment
    //get comment from addComment component and send it to app component
  }

  constructor() { }



}
