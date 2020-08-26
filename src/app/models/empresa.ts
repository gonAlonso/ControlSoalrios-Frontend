import { Solario } from './solarios';
import { Operario } from './operario';

export class Empresa {

  public estado: string;
  public tipoBono: string;
  public _id: string;
  public nombre: string;
  public cif: string;
  public tlf: string;
  public nombreFiscal: string;
  public direccion: string;
  public fechaRegistro: string;
  public solarios: Solario[];
  public operarios: Operario[];
  public historicoEstados: string[];
}
