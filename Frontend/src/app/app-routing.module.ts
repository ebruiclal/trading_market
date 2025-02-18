import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { SelectpageComponent } from './pages/selectpage/selectpage.component'; // SelectpageComponent'i ekleyin
import { ChangeComponent } from './pages/change/change.component'; // SelectpageComponent'i ekleyin
import { ChangeallComponent } from './pages/changeall/changeall.component';
import { DailytraderComponent } from './pages/dailytrader/dailytrader.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'',
    children:  [
      {
        path:'main',
        component: MainComponent
      },
      {
        path:'select',
        component: SelectpageComponent // 
      },
      {
        path:'change',
        component: ChangeComponent // 
      },
      {
        path:'changeall',
        component: ChangeallComponent // 
      },
      {
        path:'dailytrader',
        component: DailytraderComponent // 
      },
      {
        path:'news',
        component: NewsComponent // 
      }

    ]
  },
  {
    path:'**',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
