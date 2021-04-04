import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/BackEndAPI/model/Tema';
import { TemaService } from 'src/app/BackEndAPI/service/tema.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema();
  listaTemas: Tema[];

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if (environment.token === ''){
      this.router.navigate(['/entrar']);
    }
    this.findAllTemas();
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    });
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp;

      if (this.tema.descricao === null) {
        alert('Por favor, digite um tema.');
      } else {
        alert('Tema cadastrado com sucesso!');
        this.findAllTemas();
        this.tema = new Tema();
      }
    });
  }
}