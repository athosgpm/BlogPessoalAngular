import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './screens/cadastrar/cadastrar.component';
import { TemaDeleteComponent } from './screens/delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './screens/edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './screens/entrar/entrar.component';
import { TemaComponent } from './screens/tema/tema.component';
import { UserPageComponent } from './screens/user-page/user-page.component';

const routes: Routes = [

  {path:"",redirectTo: "entrar", pathMatch: "full"},
  {path:"entrar", component: EntrarComponent},
  {path:"cadastrar", component: CadastrarComponent},
  {path:"userPage", component: UserPageComponent },
  {path:"tema", component: TemaComponent},
  
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
