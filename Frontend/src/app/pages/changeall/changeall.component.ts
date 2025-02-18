import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changeall', // Bileşen için seçici
  templateUrl: './changeall.component.html',
  styleUrls: ['./changeall.component.css']
})
export class ChangeallComponent {

    currency: string = "";
    amount: string = "";
    conversionResult: any = null;
  
    constructor(private router: Router, private http: HttpClient) {}
  
    push() {
      // Miktarı bir tamsayıya dönüştür
      let amountInteger: number = parseInt(this.amount, 10);
    
      let bodyData = {
        currency: this.currency,
        amount: amountInteger,
      };
    
      // HTTP POST isteği gönderme
      this.http.post("http://localhost:8181/currency/all", bodyData).subscribe(
        (resultData: any) => {
          debugger;
          console.log(resultData);
          if (resultData && resultData.result && resultData.result.data) {
            this.conversionResult = resultData.result.data;
          } else {
            // Sonuçta beklenen veri bulunamadı
            console.error("Beklenen veri bulunamadı.");
          }
        },
        (error: any) => {
          // Hata durumunda işlemler
          console.error("HTTP isteği sırasında bir hata oluştu:", error);
        }
      );
    }
    
}
