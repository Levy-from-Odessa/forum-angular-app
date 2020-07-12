import { Component  ,OnInit,Output,EventEmitter} from '@angular/core';
import {parse} from 'angular-html-parser'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  userName = ''
  posts = []
  addPost = false


  userChanged (userName) {
    this.userName = userName

  }
  toggleAddPost(){
    console.log(!this.addPost)
    this.addPost = !this.addPost
  }
  updatePost(post) {
    let newPosts = []
    const dataPosts = JSON.parse(localStorage.getItem('posts'))
    dataPosts == null ? newPosts = [] : newPosts=dataPosts


    console.log(parse(post.postText).rootNodes)

    newPosts.push(post)
    console.log(newPosts);
    localStorage.setItem('posts',JSON.stringify(newPosts))
    this.posts = newPosts
    this.toggleAddPost()
  }

  updateComment(comment,index){
    let newPosts = []
    const dataPosts = JSON.parse(localStorage.getItem('posts'))
    dataPosts == null ? newPosts = [] : newPosts=dataPosts

    newPosts[index].comments.push(comment)
    console.log(newPosts);
    localStorage.setItem('posts',JSON.stringify(newPosts))


    this.posts= newPosts

    console.log(this.posts)

  }

  ngOnInit(): void {

    this.posts = JSON.parse(localStorage.getItem('posts'))


  }


}
