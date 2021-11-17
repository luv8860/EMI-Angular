import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  httpPut(datat: NgForm) {
    console.log(String(datat.value.pid))
    this.http.put<any>('http://localhost:8080/api/v1/products/'+datat.value.pid, {
      active: datat.value.active,
      princlpleAmount: datat.value.pamt,
      productID: datat.value.pid,
      productName: datat.value.pname,
      rateOfInterest: datat.value.proi,
      tenure: datat.value.ptenure,
      updatedBy: datat.value.pupdated,
    }).subscribe(data => {
      if (data.responseCode == "200")
        alert("Data Inserted");
      else {
        const msg = data.responseMessage.split(':')
        alert(msg)
      }
    },
      (error) => {
        alert("Request Failed")
      })
  }

}
