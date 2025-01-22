import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AlertService } from './core/services/alert.service';
import { AsyncPipe } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { GlobalService } from './core/services/global.service';
providedIn: 'root'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,AsyncPipe,AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  //Angular 18 injection de depandence
  public alertService = inject(AlertService);
  public showAlert$ =  this.alertService.showAlert$
  public isLoggedIn:boolean; 
  constructor(public globalService: GlobalService) {}
  public ngOnInit(): void {
    
  }
  
}
