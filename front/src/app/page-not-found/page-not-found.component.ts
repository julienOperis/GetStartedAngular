import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent implements OnInit {

  public userConnecte: string = ''

  public constructor(private authService: AuthService) { }


  public ngOnInit(): void {
    this.authService.getUser$.pipe(
      tap((res) => {
        this.userConnecte = res
      })
    ).subscribe()
  }

}
