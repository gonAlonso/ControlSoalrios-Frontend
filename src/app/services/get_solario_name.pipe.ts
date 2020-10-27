import { Pipe, PipeTransform } from '@angular/core';
import { Empresa } from '../models/empresa';

@Pipe({
  name: 'getSolarioName',
  pure: true
})
export class GetSolarioNamePipe implements PipeTransform {

  transform(idsolario:string, empresa: Empresa): string {

    for( let elm of empresa.solarios) {
      if( elm._id == idsolario) return elm.nombre
    }

    return idsolario;
  }
}
