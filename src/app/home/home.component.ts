import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService,private http: HttpClient) { 
  }
greet = {};
interval: any;
  ngOnInit() {

    this.refreshData();
    this.interval = setInterval(() => { 
        this.refreshData(); 
    }, 5000)    
  }
  refreshData(){
  this.http.get('http://api.apixu.com/v1/current.json?key=d2b270ed025f47ed975204834181402&q=Detroit').subscribe(data => {
    this.greet = data;}) }

}
