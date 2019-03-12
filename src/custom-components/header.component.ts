import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() header = new EventEmitter<string>();

  headerNav: Array<string> = ['Home', 'About', 'Podcasts', 'Gear', 'Contact'];

  constructor() { }

  ngOnInit() {
  }

  setHeader(h: string){
    this.header.emit(h.toLowerCase());
  }

}
