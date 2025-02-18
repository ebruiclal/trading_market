import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dailytrader',
  templateUrl: './dailytrader.component.html',
  styleUrls: ['./dailytrader.component.css'],
})
export class DailytraderComponent implements OnInit {

  responseList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // HTTP GET isteği gönderme
    this.http.get<any>("http://localhost:8181/strategy/trader/day").subscribe(
      (resultData: any) => {
        console.log(resultData);
        if (resultData && resultData.responseList) {
          // API yanıtındaki responseList özelliğini diziye dönüştür
          this.responseList = [resultData.responseList];
        } else {
          console.error("API response data is missing or empty.");
        }
      },
      (error: any) => {
        console.error("HTTP isteği sırasında bir hata oluştu:", error);
      }
    );
    
  }
}
