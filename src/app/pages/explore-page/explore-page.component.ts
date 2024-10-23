import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedComponent } from '../../components/feed/feed.component';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../types/posts.types';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss']
})
export class ExplorePageComponent implements OnInit {
  posts: Post[] = [];
  country: string | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.country = params.get('country');
      if (this.country) {
        this.fetchData(this.country);
      }
    });
  }

  fetchData(country: string) {
    let formattedCountry = country.toLowerCase();
    this.http.get<{posts: Post[]}>(`http://localhost:3000/explore_${formattedCountry}`).subscribe((data:{posts: Post[]}) => {
      this.posts = data.posts;
    });
  }
}