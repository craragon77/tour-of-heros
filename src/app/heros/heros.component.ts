import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import {HeroList} from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Christopher Ray'
  // }
  herolist = HeroList;
  selectedHero ?: Hero;
  onSelect(hero: Hero) : void{
    this.selectedHero = hero;
  }
  

  
  constructor() { }
  
  ngOnInit(): void {
  }


}
