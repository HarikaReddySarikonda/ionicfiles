import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
 
  public emailyz;
  public id;
  public invoice={
    "invoiceID":"",
    "date":"",
    "dueDate":"",
    "total":""
  }
  ngOnInit() {
   
  }

  func(){
    alert(this.invoice.invoiceID+" "+this.invoice.dueDate+" "+this.emailyz);

  }
}
