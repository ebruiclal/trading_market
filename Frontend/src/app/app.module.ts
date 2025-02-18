// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MainComponent } from './pages/main/main.component';
import { DataService } from './pages/main/data.service'; 
import { SelectpageComponent } from './pages/selectpage/selectpage.component';
import { ChangeComponent } from './pages/change/change.component';
import { ChangeallComponent } from './pages/changeall/changeall.component';
import { DailytraderComponent } from './pages/dailytrader/dailytrader.component';
import { NewsComponent } from './pages/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MainComponent,
    SelectpageComponent,
    ChangeComponent,
    ChangeallComponent,
    DailytraderComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
