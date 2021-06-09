import { Injectable } from '@angular/core';
import {Hero} from './Hero';
import {HeroList} from './mock-heros';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeros(): Observable<Hero[]> {
    const heros = of(HeroList);
    this.messageService.add('HeroService: fetched heros')
    return heros;
  }

  getHero(id: number): Observable<Hero>{
    const hero = HeroList.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero)
  }

  constructor(private messageService: MessageService) { }
}
