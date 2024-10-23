import { Component } from '@angular/core';
import { FeedComponent } from "../../components/feed/feed.component";
import { HttpClient } from '@angular/common/http';
import { Post } from '../../types/posts.types';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  posts: Post[] = [];

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
    this.http.get<{posts: Post[]}>('http://localhost:3000/friends').subscribe((data: {posts: Post[]}) => {
      this.posts = data.posts;
    });
  }
}
