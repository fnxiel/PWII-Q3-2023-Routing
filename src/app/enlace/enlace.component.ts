import { Component, Input, OnInit } from '@angular/core';
import { IEnlace } from './IEnlace';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent implements OnInit {
  @Input() enlace: IEnlace = {
    id: 0,
    titulo: '',
    contenido: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
