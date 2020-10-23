import { Bono } from './bono';

export class Usuario {
  public nombre: string;
  public _id: string;
  public estado: string;
  public dni: string;
  public email: string;
  public tlf: string;
  public fototipo: string;
  public fechaRegistro: string;
  //public estado: {enum: ["ACTIVO", "BAJA", "ELIMINADO", "IMPAGO"]};
  public bono: Bono;
}
