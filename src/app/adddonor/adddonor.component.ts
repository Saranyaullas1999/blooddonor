import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddonor',
  templateUrl: './adddonor.component.html',
  styleUrls: ['./adddonor.component.css']
})
export class AdddonorComponent implements OnInit {

  constructor() { }

  name=""
  bloodgroup=""
  dob=""
  lastDonation=""
  prevDiseases=""
  vaccinationDate=""
  address=""
  pincode=""
  mobile=""
  email=""


  readValues=()=>{
    let data={
      "name":this.name,
  "bloodgroup":this.bloodgroup,
  "dob":this.dob,
  "lastDonation":this.lastDonation,
  "prevDiseases":this.prevDiseases,
  "vaccinationDate":this.vaccinationDate,
  "address":this.address,
  "pincode":this.pincode,
  "mobile":this.mobile,
  "email":this.email
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
