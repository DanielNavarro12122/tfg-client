import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { IPageUsuario, IUsuario, IUsuario2Send } from '../interfaces/usuario-interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  sURL = API_URL + '/usuario';




  getPage(rpp: number, page: number, order: string, direction: string, filter: string): Observable<IPageUsuario> {
    let strOrderUrl: string = "";
    let filterStr: string = "";
    if (order) {
      strOrderUrl += "&sort=" + order + "," + direction;
    }
    if (filter) {
      filterStr += "&filter=" + filter;
    }
    page--;
    return this.http.get<IPageUsuario>(this.sURL + "/page" + "?size=" + rpp + "&page=" + page + strOrderUrl + filterStr, httpOptions);
  }




  getOne(id: number): Observable<IUsuario> {
    return this.http.get<IUsuario>(this.sURL + "/" + id, httpOptions);
  }

  newOne(oUsuario: IUsuario2Send): Observable<number> {
    return this.http.post<number>(this.sURL + "/", oUsuario, httpOptions);
  }

  updateOne(oUsuario: IUsuario): Observable<number> {
    return this.http.put<number>(this.sURL + "/" + oUsuario.id, oUsuario, httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + "/" + id, httpOptions);
  }
  
}
