import { Component, OnInit , Input ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass']
})
export class AddPostComponent implements OnInit {
  @Output() updatePost = new EventEmitter<object>()
  @Input() author
  postTitle:string
  postText:string



  addPost() {
    const post = {postTitle: this.postTitle,
    postAuthor: this.author,
    postText: this.postText,
    comments: []
  }
    this.updatePost.emit(post)

    // create post from user input and send it to app component
  }



  constructor() { }

  ngOnInit(): void {
  }

}
