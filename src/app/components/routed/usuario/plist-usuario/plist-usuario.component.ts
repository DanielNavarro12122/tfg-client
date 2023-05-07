import { Component, OnInit, ViewChild } from '@angular/core';
import { IPageUsuario, IUsuario } from 'src/app/interfaces/usuario-interfaces';
import { PaginationService } from 'src/app/servicio/pagination-service.service';
import { UsuariosService } from 'src/app/servicio/usuarios.service';

@Component({
  selector: 'app-plist-usuario',
  templateUrl: './plist-usuario.component.html',
  styleUrls: ['./plist-usuario.component.css']
})
export class PlistUsuarioComponent implements OnInit {
  @ViewChild('content') content: any;

  aUsuarios: IUsuario[];
  pageSize: number;
  page: number;
  currentSortField: string;
  currentSortDirection: string;
  strFilter: string;
  strFilteredMessage: string;
  aPosts: IUsuario[];
  nTotalElements: number;
  totalPages: number;
  barraPaginacion: string[];

  constructor(
    private oUsuarioService: UsuariosService,
    private oPaginationService: PaginationService,

  ) { }

  ngOnInit(): void { this.getPage();}



  getPage = () => {
      this.oUsuarioService.getPage(this.pageSize, this.page, this.currentSortField, this.currentSortDirection, this.strFilter).subscribe((oPage: IPageUsuario) => {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado por " + this.strFilter;
        }
        
        this.aUsuarios = oPage.content;
        this.nTotalElements = oPage.totalElements;
        this.totalPages = oPage.totalPages;
        this.barraPaginacion = this.oPaginationService.pagination(this.totalPages, this.page);
      })
  }

  delete = (id:number, nombre:string) =>{
    this.oUsuarioService.removeOne(id).subscribe((data: number) => {
      console.log("borrado: " + nombre);
      
    });

  }
  openDelete = (id:number, nombre:string)=>{

  }



}
