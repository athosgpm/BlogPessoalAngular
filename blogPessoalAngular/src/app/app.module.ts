import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './template/menu/menu.component';
import { RodapeComponent } from './template/rodape/rodape.component';
import { EntrarComponent } from './screens/entrar/entrar.component';
import { CadastrarComponent } from './screens/cadastrar/cadastrar.component';
import { UserPageComponent } from './screens/user-page/user-page.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TemaComponent } from './screens/tema/tema.component';
import { TemaEditComponent } from './screens/edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './screens/delete/tema-delete/tema-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    UserPageComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
