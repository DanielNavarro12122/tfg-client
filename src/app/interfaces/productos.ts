import { ITipoProducto } from "./tipo-producto";

export interface IFile {
    file: File
}
export interface IProducto {
    id: number,
    nombre: string,
    existencias: number,
    precio: any,
    descuento: number,
    tipoproducto: ITipoProducto,

    compras: number,
    carritos: number
}
export interface IProducto2Send {
    id: number,
    nombre: string,
    existencias: number,
    precio: number,
    imagen: number,    
    descuento: number,
    //tipoproducto: I2Send
}

export interface IPageProducto {
    content: IProducto[];
    totalElements: number,
    totalPages: number
}