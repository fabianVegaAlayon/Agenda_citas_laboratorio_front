import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Affiliate } from '../affiliate';
import { AffiliateService } from '../afiliate.service';

@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.component.html',
  styleUrls: ['./affiliate.component.css']
})
export class AffiliateComponent implements OnInit {

  constructor(private affiliateService: AffiliateService) { }
  columnas: string[] = ['Id', 'Nombre', 'Edad', 'Email', 'Borrar', 'Modificar'];

  affiliate: any;

  aff =
    {
      id:0,
      name: 'fulano',
      age: 0,
      mail: 'f@any.com'
    }

  ngOnInit(): void {
    this.getAllAffiliates();
  }

  affiliateSaveform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl()
  });

  getAllAffiliates() {
    this.affiliateService.getList().subscribe((result: any) => this.affiliate = result);
  }

  insertAffiliate() {
    this.affiliateService.postAffiliate(this.aff).subscribe((datos: any) => {
      if (datos != null) {
        alert('Registro Insertado Correctamente');
        this.getAllAffiliates();
      }
    });
  }

  deleteAffiliate(id: number) {
    this.affiliateService.deleteAffiliate(id).subscribe((datos: any) => {
      if (datos == 'Affiliate Delete Success') {
        alert(datos)
        this.getAllAffiliates();
      }
    })
  }

  updateAffiliate() {
    this.affiliateService.putAffiliate(this.aff).subscribe((datos: any) => {
      if (datos == 'Affiliate Updated') {
        alert(datos);
        this.getAllAffiliates();
      } else {
        alert(datos);
      }
    })
  }

  selectAffiliate(id: number) {
    this.affiliateService.getById(id).subscribe((result: any) => { this.aff = result[0] });
  }

  thereAreRecords()
  {
    return true;
  }
}
