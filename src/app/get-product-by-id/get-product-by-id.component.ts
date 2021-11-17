import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

interface result {
  responseCode: String,
  responseMessage: String,
  responseBody: any,
}


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-get-product-by-id',
  templateUrl: './get-product-by-id.component.html',
  styleUrls: ['./get-product-by-id.component.css']
})
@Injectable()
export class GetProductByIdComponent implements OnInit {

  constructor(private http: HttpClient) { }
  a:any=[]
  ngOnInit(): void {
  }
  httpGet(datat: NgForm) {
    console.log(String(datat.value.pid))
    this.http.get<result>('http://localhost:8080/api/v1/products/' + datat.value.pid).subscribe(data => {
      if (data.responseCode == "200"){
        this.a=[data.responseBody]
        console.log(this.a);
      }
        
      else {
        const msg=data.responseMessage.split(':')
        this.a=[]
        alert(msg[1])
      }
    },
      (error) => {
        alert("Request Failed")
      })
  }

}
