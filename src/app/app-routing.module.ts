import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlistProductoComponent } from './components/routed/producto/plist-producto/plist-producto.component';

import { DeleteUsuarioComponent } from './components/routed/usuario/delete-usuario/delete-usuario.component';
import { EditUsuarioComponent } from './components/routed/usuario/edit-usuario/edit-usuario.component';
import { NewUsuarioComponent } from './components/routed/usuario/new-usuario/new-usuario.component';
import { PlistUsuarioComponent } from './components/routed/usuario/plist-usuario/plist-usuario.component';
import { ViewUsuarioComponent } from './components/routed/usuario/view-usuario/view-usuario.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },

  { path: 'usuario/plist', component: PlistUsuarioComponent},
  { path: 'usuario/view', component: ViewUsuarioComponent},
  { path: 'usuario/delete', component: DeleteUsuarioComponent},
  { path: 'usuario/new', component: NewUsuarioComponent},
  { path: 'usuario/edit', component: EditUsuarioComponent},

  { path: 'productos/plist', component: PlistProductoComponent},


  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
