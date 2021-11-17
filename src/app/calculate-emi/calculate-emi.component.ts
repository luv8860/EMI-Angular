import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

interface result {
  responseCode: String,
  responseMessage: String,
  responseBody: String,
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-calculate-emi',
  templateUrl: './calculate-emi.component.html',
  styleUrls: ['./calculate-emi.component.css']
})
export class CalculateEmiComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  httpGet(datat: NgForm) {
    console.log(String(datat.value.pid))
    this.http.get<result>('http://localhost:8080/api/v1/products/emi/' + datat.value.pid).subscribe(data => {
      if (data.responseCode == "200")
        alert("Emi to be paid "+data.responseBody);
      else {
        const msg=data.responseMessage.split(':')
        alert(msg[1])
      }
    },
      (error) => {
        alert("Request Failed")
      })
  }
}
