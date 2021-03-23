import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import {HeroList} from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heros = HeroList
  constructor() { }

  ngOnInit(): void {
  }

}
