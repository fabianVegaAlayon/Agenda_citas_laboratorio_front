import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Affiliate } from '../../models/Affiliate';
import { AffiliateService } from 'src/app/services/affiliate/affiliate.service';
import { Router } from '@angular/router';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.component.html',
  styleUrls: ['./affiliate.component.css']
})
export class AffiliateComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'mail', 'options'];
  affiliate: Affiliate[];
  stats: any;
  @ViewChild(MatTable) affiliatesTable: MatTable<Affiliate>;

  constructor(private affiliateService: AffiliateService, private route: Router) { }


  ngOnInit(): void {
    this.getAllAffiliates();
  }

  getAllAffiliates() {
    this.affiliateService.getList().subscribe((result: Affiliate[]) => this.affiliate = result);
  }

  addAffiliate()
  {
    this.route.navigate(["addAffiliate"]);
  }

  deleteAffiliate(id: number) {
    console.log(id)
    this.affiliateService.deleteAffiliate(id).subscribe(
      {
        next:() => {
          alert('la petición fue exitosa')
          this.affiliatesTable.viewChange;
        }, 
        error: () =>{
          alert('ocurrió un error al hacer la petición')
          this.affiliatesTable.viewChange;
        }
      }
    
    );
  }

 



  }
