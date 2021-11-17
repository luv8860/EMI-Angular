import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css'],
})
export class InsertProductComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  httpPost(datat: NgForm) {
    console.log(String(datat.value.pid))
    this.http.post<any>('http://localhost:8080/api/v1/products/', {
      active: datat.value.active,
      createdBy: datat.value.pcreated,
      princlpleAmount:datat.value.pamt,
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
