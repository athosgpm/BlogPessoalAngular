import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './screens/cadastrar/cadastrar.component';
import { EntrarComponent } from './screens/entrar/entrar.component';
import { UserPageComponent } from './screens/user-page/user-page.component';

const routes: Routes = [

  {path:"",redirectTo: "entrar", pathMatch: "full"},
  {path:"entrar", component: EntrarComponent},
  {path:"cadastrar", component: CadastrarComponent},
  {path:"userPage", component: UserPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
