import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from 'src/app/BackEndAPI/model/Postagem';
import { Tema } from 'src/app/BackEndAPI/model/Tema';
import { User } from 'src/app/BackEndAPI/model/User';
import { AuthService } from 'src/app/BackEndAPI/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  postagem: Postagem = new Postagem()
  postagens: Postagem[]

  tema: Tema = new Tema()
  temas: Tema[]
  idTema: number

  usuario: User = new User()
  idUsuario = environment.id

  constructor(
    private router: Router, 
 //   private postagemService: PostagemService, 
  //  private temaService: TemaService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/entrar'])
    }

//    this.getTemas()
//    this.getPostagens()
  }
/*
  getTemas() {
    this.temaService.findAll().subscribe((resp: Tema[]) => {
      this.temas = resp
    })
  }

  getTema() {
    this.temaService.findById(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getPostagens() {
    this.postagemService.findAll().subscribe((resp: Postagem[]) => {
      this.postagens = resp
    })
  }

  getPostagensByUser() {
    this.authService.getUser(this.idUsuario).subscribe((resp: User) => {
      this.usuario = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagemService.create(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getPostagens()
    })
  }
 */

}
