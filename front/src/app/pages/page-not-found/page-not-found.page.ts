import { Component, OnInit } from '@angular/core';

import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.page.html',
  styleUrl: './page-not-found.page.scss'
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
