import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface NewsItem {
  key: string;
  url: string;
  description: string;
  image: string;
  name: string;
  source: string;
  date: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: NewsItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews() {
    this.http.get<any>('http://localhost:8181/economy/tr/getNews').subscribe(
      (response) => {
        if (response.success) {
          this.newsList = response.result;
        } else {
          console.error('Haberler alınamadı.');
        }
      },
      (error) => {
        console.error('Hata oluştu:', error);
      }
    );
  }
}
