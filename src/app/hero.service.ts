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

  constructor(private messageService: MessageService) { }
}
