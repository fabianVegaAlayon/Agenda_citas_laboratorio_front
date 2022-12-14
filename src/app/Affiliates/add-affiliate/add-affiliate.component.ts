import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AffiliateService } from 'src/app/services/affiliate/affiliate.service';


@Component({
  selector: 'app-add-affiliate',
  templateUrl: './add-affiliate.component.html',
  styleUrls: ['./add-affiliate.component.css']
})
export class AddAffiliateComponent implements OnInit {

  aff =
    {
      id: 0,
      name: 'someone',
      age: 0,
      mail: 'someone@any.com'
    }

  constructor(private affiliateService: AffiliateService, private router: Router) { }

  ngOnInit(): void {
  }


  insertAffiliate() {
    console.log('entre al componente con la info' + this.aff.id + this.aff.name + this.aff.age + this.aff.mail)
    this.affiliateService.postAffiliate(this.aff).subscribe(datos => {


      alert('Registro Insertado Correctamente');
      this.router.navigate(["affiliate"]);
    });
  }

  cancelButton() {
    this.router.navigate(["affiliate"]);
  }

}
