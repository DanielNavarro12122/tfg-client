import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { IProducto, IPageProducto } from 'src/app/interfaces/productos';
import { IUsuario } from 'src/app/interfaces/usuario-interfaces';
import { SessionService } from 'src/app/servicio/session.service';
import { ProductosService } from 'src/app/servicio/productos.service';
import { PaginationService } from 'src/app/servicio/pagination-service.service';
@Component({
  selector: 'app-plist-producto',
  templateUrl: './plist-producto.component.html',
  styleUrls: ['./plist-producto.component.css']
})
export class PlistProductoComponent implements OnInit {
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
  ) { }

  ngOnInit(): void {
    this.getPage();
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
