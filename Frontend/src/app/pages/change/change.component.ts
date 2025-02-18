import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent {
  currency: string = "";
  amount: string = "";
  desiredCurrency: string = "";
  conversionResult: any = null; // Değişiklik: Dönüşüm sonucunu saklamak için bir değişken tanımlıyoruz

  constructor(private router: Router, private http: HttpClient) {}

  push() {
    // Convert amount to integer
    let amountInteger: number = parseInt(this.amount, 10);

    let bodyData = {
      currency: this.currency,
      amount: amountInteger,
      desiredCurrency: this.desiredCurrency
    };

    // Sending HTTP POST request
    this.http.post("http://localhost:8181/currency/desired", bodyData).subscribe(
      (resultData: any) => {
        debugger;
        console.log(resultData);
        this.conversionResult = resultData; // Değişiklik: API'den gelen veriyi saklıyoruz
      }
    );
  }
}
