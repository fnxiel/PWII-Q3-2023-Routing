import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEnlace } from '../enlace/IEnlace';

@Component({
  selector: 'app-primerapantalla',
  templateUrl: './primerapantalla.component.html',
  styleUrls: ['./primerapantalla.component.css']
})
export class PrimerapantallaComponent implements OnInit {
  titulo: string = 'Primerapantalla';
  enlaces: IEnlace[] = [
    {
      id: 1,
      titulo: 'Google',
      contenido: 'Un famoso buscador'
    },
    {
      id: 2,
      titulo: 'Facebook',
      contenido: 'Una red social'
    },
    {
      id: 3,
      titulo: 'X',
      contenido: 'Antes era twitter'
    },
  ]
  enlaceFiltrados: IEnlace[] = this.enlaces;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.titulo = params['titulo'];

      this.enlaceFiltrados = this.enlaces.filter(enlace => enlace.id == params['id']);

  })
  }

}
