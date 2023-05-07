import { ProductosService } from './servicio/productos.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeadComponent } from './components/head/head.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewCarritoComponent } from './components/routed/carrito/new-carrito/new-carrito.component';
import { PlistCarritoComponent } from './components/routed/carrito/plist-carrito/plist-carrito.component';
import { EditCarritoComponent } from './components/routed/carrito/edit-carrito/edit-carrito.component';
import { DeleteCarritoComponent } from './components/routed/carrito/delete-carrito/delete-carrito.component';
import { ViewCarritoComponent } from './components/routed/carrito/view-carrito/view-carrito.component';

import { NewCompraComponent } from './components/routed/compra/new-compra/new-compra.component';
import { PlistCompraComponent } from './components/routed/compra/plist-compra/plist-compra.component';
import { EditCompraComponent } from './components/routed/compra/edit-compra/edit-compra.component';
import { DeleteCompraComponent } from './components/routed/compra/delete-compra/delete-compra.component';
import { ViewCompraComponent } from './components/routed/compra/view-compra/view-compra.component';

import { NewFacturaComponent } from './components/routed/factura/new-factura/new-factura.component';
import { PlistFacturaComponent } from './components/routed/factura/plist-factura/plist-factura.component';
import { EditFacturaComponent } from './components/routed/factura/edit-factura/edit-factura.component';
import { DeleteFacturaComponent } from './components/routed/factura/delete-factura/delete-factura.component';
import { ViewFacturaComponent } from './components/routed/factura/view-factura/view-factura.component';

import { NewFileComponent } from './components/routed/file/new-file/new-file.component';
import { PlistFileComponent } from './components/routed/file/plist-file/plist-file.component';
import { EditFileComponent } from './components/routed/file/edit-file/edit-file.component';
import { DeleteFileComponent } from './components/routed/file/delete-file/delete-file.component';
import { ViewFileComponent } from './components/routed/file/view-file/view-file.component';

import { NewProductoComponent } from './components/routed/producto/new-producto/new-producto.component';
import { PlistProductoComponent } from './components/routed/producto/plist-producto/plist-producto.component';
import { EditProductoComponent } from './components/routed/producto/edit-producto/edit-producto.component';
import { DeleteProductoComponent } from './components/routed/producto/delete-producto/delete-producto.component';
import { ViewProductoComponent } from './components/routed/producto/view-producto/view-producto.component';

import { NewTipoproductoComponent } from './components/routed/tipoproducto/new-tipoproducto/new-tipoproducto.component';
import { PlistTipoproductoComponent } from './components/routed/tipoproducto/plist-tipoproducto/plist-tipoproducto.component';
import { EditTipoproductoComponent } from './components/routed/tipoproducto/edit-tipoproducto/edit-tipoproducto.component';
import { DeleteTipoproductoComponent } from './components/routed/tipoproducto/delete-tipoproducto/delete-tipoproducto.component';
import { ViewTipoproductoComponent } from './components/routed/tipoproducto/view-tipoproducto/view-tipoproducto.component';

import { NewUsuarioComponent } from './components/routed/usuario/new-usuario/new-usuario.component';
import { PlistUsuarioComponent } from './components/routed/usuario/plist-usuario/plist-usuario.component';
import { EditUsuarioComponent } from './components/routed/usuario/edit-usuario/edit-usuario.component';
import { DeleteUsuarioComponent } from './components/routed/usuario/delete-usuario/delete-usuario.component';
import { ViewUsuarioComponent } from './components/routed/usuario/view-usuario/view-usuario.component';

import { MenuComponent } from './components/shared/menu/menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ModalComponent } from './components/shared/modal/modal.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    NewCarritoComponent,
    PlistCarritoComponent,
    EditCarritoComponent,
    DeleteCarritoComponent,
    ViewCarritoComponent,
    NewCompraComponent,
    PlistCompraComponent,
    EditCompraComponent,
    DeleteCompraComponent,
    ViewCompraComponent,
    NewFacturaComponent,
    PlistFacturaComponent,
    EditFacturaComponent,
    DeleteFacturaComponent,
    ViewFacturaComponent,
    NewFileComponent,
    PlistFileComponent,
    EditFileComponent,
    DeleteFileComponent,
    ViewFileComponent,
    NewProductoComponent,
    PlistProductoComponent,
    EditProductoComponent,
    DeleteProductoComponent,
    ViewProductoComponent,
    NewTipoproductoComponent,
    PlistTipoproductoComponent,
    EditTipoproductoComponent,
    DeleteTipoproductoComponent,
    ViewTipoproductoComponent,
    NewUsuarioComponent,
    PlistUsuarioComponent,
    EditUsuarioComponent,
    DeleteUsuarioComponent,
    ViewUsuarioComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    ModalComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
