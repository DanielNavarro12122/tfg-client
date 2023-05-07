import { SessionService } from './../../servicio/session.service';
import { PaginationService } from './../../servicio/pagination-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from './../../servicio/productos.service';
import { Component, Input, OnInit } from '@angular/core';
import { IProducto, IPageProducto } from 'src/app/interfaces/productos';
import { IUsuario } from 'src/app/interfaces/usuario-interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() id_tipoproducto: number = null;

  oProducto: IProducto;
  oProductoAll: any;

  id:number = null;

  aProductos: IProducto[];
  aPaginationBar: string[];
  nTotalElements: number;
  nTotalPages: number;
  nPage: number;
  nPageSize: number = 10;
  strResult: string = null;
  strFilter: string = "";
  strSortField: string = "";
  strSortDirection: string = "";
  strFilteredMessage: string = "";
  barraPaginacion: string[];
  oUserSession: IUsuario;
  

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oSessionService: SessionService,
    private oProductosService: ProductosService,
    private oPaginationService: PaginationService
  ) { 

    this.oUserSession = JSON.parse(localStorage.getItem("user"));
    //console.log(JSON.parse(localStorage.getItem("user")));
    //console.log(localStorage);
    

    if (this.oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } 
    
  }

  ngOnInit(): void {
    this.getPage();
    //console.log(this.oUserSession);
  }

  

  getPage = () => {
    console.log("buscando...", this.strFilter);
    this.oProductosService.getPage(this.nPageSize, 2, this.strFilter, this.strSortField, this.strSortDirection, this.id_tipoproducto).subscribe((oPage: IPageProducto) => {
      if (this.strFilter) {
        this.strFilteredMessage = "Listado filtrado: " + this.strFilter;
      } else {
        this.strFilteredMessage = "";
      }
      this.aProductos = oPage.content;   
      this.nTotalElements = oPage.totalElements;
      this.nTotalPages = oPage.totalPages;
      this.aPaginationBar = this.oPaginationService.pagination(this.nTotalPages, this.nPage);
    })
  }

}
