import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Affiliate } from '../../models/Affiliate';
import { AffiliateService } from 'src/app/services/affiliate/affiliate.service';
import { Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { UpdateAffiliateComponent } from '../update-affiliate/update-affiliate.component';


@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.component.html',
  styleUrls: ['./affiliate.component.css']
})
export class AffiliateComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'mail', 'options'];
  affiliate: Affiliate[];
  stats: any;
  id_affiliate: number;



  constructor(private affiliateService: AffiliateService, private route: Router) { }


  ngOnInit(): void {
    this.getAllAffiliates();
    console.log(this.id_affiliate)
  }

  getAllAffiliates() {
    this.affiliateService.getList().subscribe((result: Affiliate[]) => this.affiliate = result);
  }

  addAffiliate() {
    this.route.navigate(["addAffiliate"]);
  }

  deleteAffiliate(id: number) {
    console.log(id)
    this.affiliateService.deleteAffiliate(id).subscribe(
      {
        next: () => {
          alert('la petición fue exitosa')
        },
        error: () => {
          this.getAllAffiliates();
        }
      }

    );
    

  }

  getAffiliateId(id: number) {
    localStorage.setItem("id", id.toString());
    this.route.navigate(["updateAffiliate"]);

  }



}
