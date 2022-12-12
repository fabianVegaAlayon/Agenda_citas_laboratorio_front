import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Affiliate } from 'src/app/models/Affiliate';
import { AffiliateService } from 'src/app/services/affiliate/affiliate.service';

@Component({
  selector: 'app-update-affiliate',
  templateUrl: './update-affiliate.component.html',
  styleUrls: ['./update-affiliate.component.css']
})
export class UpdateAffiliateComponent implements OnInit {
  affiliate: Affiliate;
  constructor(private router: Router, private affiliateService: AffiliateService) { }

  ngOnInit(): void {
    this.fillFieldsAffiliate();
  }

  cancelButton() {
    this.router.navigate(["affiliate"]);
  }


  fillFieldsAffiliate() {
    let idAffiliate = localStorage.getItem("id");
    this.affiliateService.getById(+idAffiliate).subscribe((result: Affiliate) => { this.affiliate = result });
  }

  updateAffiliate() {
    this.affiliateService.putAffiliate(this.affiliate).subscribe((datos: any) => {
    }
    )
    alert('Affiliado actualizado')
    this.router.navigate(["affiliate"]);
  }


}
