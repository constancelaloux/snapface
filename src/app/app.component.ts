import { Component, OnInit } from '@angular/core';
import { interval, map, filter } from 'rxjs';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  interval$!: Observable<string>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      //On a que les valeurs divisibles par 3 qui passent
      //Filter les émissions et map pour les transformer
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? 
        `Je suis ${value} et je suis pair` : 
        `Je suis ${value} et je suis impair`)
    );
  }
}
