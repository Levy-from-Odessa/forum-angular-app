import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FormsModule }   from '@angular/forms';



import { AppComponent } from './app.component';
import { EnterComponent } from './enter/enter.component';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddCommentComponent } from './add-comment/add-comment.component';



@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    CommentComponent,
    PostComponent,
    AddPostComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
