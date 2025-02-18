import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  userName: string ="";
  password: string ="";
  firstName: string ="";
  lastName: string ="";
  phoneNumber: string ="";
  mail: string ="";



  constructor(private router: Router,private http: HttpClient) {}
 
  Login() {
    let bodyData = {
      userName: this.userName,
      password: this.password,
    };
 
    this.http.post("http://localhost:8181/user/login", bodyData).subscribe(
      (resultData: any) => {
        debugger;
        this.router.navigate(['/select']); 
        // HTTP isteği sırasında hata oluştuğunda buraya düşer  
        // Hata durumunda gerekli işlemleri yapabilirsiniz
        alert('Başarıyla giriş yapıldı');
      },
      (error) => {

        alert("Kullanıcı bulunamadı");
      }

    );
    }
    Signup() {

      // Kontrol etmek istediğiniz uzantıları burada tanımlayın
  const allowedDomains = ['gmail.com', 'hotmail.com'];

  // E-posta adresinden uzantıyı ayıklayın
  const emailDomain = this.mail.split('@')[1];

  // Kontrol etmek istediğiniz uzantılardan biri değilse, kullanıcıya uyarı verin
  if (!allowedDomains.includes(emailDomain)) {
    alert('Lütfen geçerli bir e-posta adresi girin');
    return;
  }
      let bodyData = {
        userName: this.userName,
        firstName: this.firstName,
        lastName: this.lastName, 
        phoneNumber: this.phoneNumber,
        mail: this.mail,
        password: this.password,
      };
    
      // <input type="text" name="mail" [(ngModel)]="mail" [ngModelOptions]="{standalone: true}" placeholder="Email" required="">
    
      this.http.post("http://localhost:8181/user/signup", bodyData).subscribe(
        (resultData: any) => {
          debugger;
          console.log(resultData);
    
          if (resultData === 'OK') {
            // Eğer backend'den dönen cevap "OK" ise başarılı mesajını ekrana alert olarak göster
            alert('Başarıyla kayıt oldunuz.');
            
            // Sayfayı yenile
            window.location.reload();
          } else {
            // Eğer backend'den dönen cevap "OK" değilse, hata mesajını ekrana alert olarak göster veya gerekli işlemleri yap
            alert('Kayıt sırasında bir hata oluştu.');
          }
        },
        (error) => {
          // HTTP isteği sırasında hata oluştuğunda buraya düşer
          console.error('HTTP isteği sırasında bir hata oluştu:', error);
    
          // Hata durumunda gerekli işlemleri yapabilirsiniz
          alert('Kayıt sırasında bir hata oluştu.');
        }
      );
    }
    
    
}


