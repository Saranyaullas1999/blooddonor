import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdonor',
  templateUrl: './searchdonor.component.html',
  styleUrls: ['./searchdonor.component.css']
})
export class SearchdonorComponent implements OnInit {

  constructor() { }
  bloodgroup=""

  readValue=()=>{
    let data={
      "bloodgroup":this.bloodgroup
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
