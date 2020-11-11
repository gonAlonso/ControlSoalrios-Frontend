import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  public verifiedOK: boolean
  public errMsg: string

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute) {
      this.verifiedOK = false
    }

  ngOnInit(): void {
    this.errMsg = "Realizando operacion"

    const token = this.route.snapshot.params.token
    this.verify( token ).subscribe(
      ok => {
        this.verifiedOK = true
      },
      err => {
        this.errMsg = err.error.mensaje
      }
    )
  }


  public verify(token): Observable<any> {
    return this.httpClient.get( `${environment.url}verify/${token}` );
  }

}
