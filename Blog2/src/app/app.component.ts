import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogComponents';
  posts: Post[] = [
    {title: 'Вивчаю компоненти', text: 'Створюю проект "Блог"', id: 1, date: new Date()},
    {title: 'Вивчаю директиви', text: 'Все ще створюю "Блог"', id: 2, date: new Date()}
  ]
  search: string = '';

  updatePost(post: Post) {
    this.posts.unshift(post)
  }

  deletePost(post: Post) {
    this.posts = this.posts.filter(p => p !== post);
  }
  trackByFn(index: number, post: Post): number {
    return post.id || 0; // Using post.id as the unique identifier
  }
}
