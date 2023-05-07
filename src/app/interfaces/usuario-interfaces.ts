import { I2Send } from "./model-interfaces";

export interface IUsuario {
    id: number,
    nombre: string,
    descuento: number,
    email: string,
    direccion1: string,
    direccion2: string,
    direccion3: string,
    direccion4: string,
    tipousuario: boolean,
}

export interface IPageUsuario {
    content: IUsuario[];
    totalElements: number,
    totalPages: number
}

export interface IUsuario2Send {
    nombre: string,
    contraseña: string,
    email: string
}