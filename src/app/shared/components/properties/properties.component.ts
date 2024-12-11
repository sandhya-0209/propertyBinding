import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit{
 productName : string = 'Electrical MultiPurpose Kettle';
 sports : string = 'olympics';
 name : string = 'Tennis';
 placeName : string = 'Mahabaleshwar';
 stateName : string = 'Maharashtra';

 festival1 : string = 'Diwali is also known as the <strong>Festival of Lights</strong> because families light oil lamps and candles to celebrate';
 festival2 : string = '<strong>Gudi Padwa</strong> is a Hindu festival that marks the start of the new year for <strong>Marathi and Konkani Hindus.</strong> '
 festival3: string = 'Rang Panchami is a <strong>festival of love and color</strong> that marks the end of the Holi festival. '

 userName : string = "Sandhya Dayanand Kulkarni";
 class : string = 'MSC(C.S.)(III-Sem)';
 collegeName : string = 'Swami Vivekanad College, Udgir'

 constructor(){

 }

 isFormNotValid : boolean = true;
 ngOnInit(): void {
    setTimeout(()=> {
      this.isFormNotValid = false
    },5000)
 }

}
