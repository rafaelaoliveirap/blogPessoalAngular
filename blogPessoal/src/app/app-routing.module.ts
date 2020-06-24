import { ListaPostComponent } from './lista-post/lista-post.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';


const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'editar/:id', component: EditarComponent},
  { path: 'delete/:id', component: DeletarComponent},
  { path: 'login', component: LoginComponent},
  { path: 'lista-post', component: ListaPostComponent },
  { path: 'cadastrar', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
