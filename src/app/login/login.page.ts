import { Component, OnInit } from '@angular/core';
import { BeersService } from '../sdk/custom/beers.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  brews: object;
  loading = true;
  // tslint:disable-next-line: ban-types
  // tslint:disable-next-line: variable-name
  constructor(private http: BeersService) { }
  ngOnInit() {
    this.http.getBeer().subscribe(data => {
      this.brews = data;
      this.loading = false;
      console.log(this.brews);
    });
   }
}
