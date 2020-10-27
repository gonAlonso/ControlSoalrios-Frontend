import { Pipe, PipeTransform } from '@angular/core';
import { Empresa } from '../models/empresa';

@Pipe({
  name: 'getOperarioName',
  pure: true
})
export class GetOperarioNamePipe implements PipeTransform {

  transform(idoperario:string, empresa: Empresa): string {

    for( let elm of empresa.operarios) {
      if( elm._id == idoperario) return elm.nombre;
    }

    return idoperario? idoperario: "No registrado";
  }
}
