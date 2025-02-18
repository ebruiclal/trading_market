// main.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

interface ApiResponse {
  success: string;
  result: ApiResultItem[];
}

interface ApiResultItem {
  rate: number;
  lastprice: number;
  lastpricestr: string;
  hacim: number;
  hacimstr: string;
  min: number;
  minstr: string;
  max: number;
  maxstr: string;
  time: string;
  text: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  liveData: ApiResponse = { success: "", result: [] };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataService.getLiveData().subscribe((data: ApiResponse) => {
      this.liveData = data;
      console.log(data);
    });
  }
}
