import { Component } from '@angular/core';
export interface Post {
  title:string;
  text:string;
  id?:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogComponents';
  posts: Post[]=[{title:'Вивчаю компоненти', text:'Створюю проект "Блог"', id:1},
          {title:'Вивчаю директиви', text:'Все ще створюю "Блог"', id:2}]
  deletePost(post: Post) {
    this.posts = this.posts.filter(p => p !== post);
  }
  updatePosts(post:Post){
    this.posts.unshift(post);
  }
  trackById(index: number, post: Post): number {
    return post.id || 0;
  }
}
