import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {

 isSubmitted = false;


   

  // Warehouse
  Warehouse: any = ['warehouse1', 'warehouse2', 'warehouse3'];
  Type: any =['typeA','typeB', "typeG"];
  Product: any=['Product1']
  constructor(public fb: FormBuilder) { }

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    warehouse: [null, [Validators.required ]],
    type: [null, [Validators.required ]],
    product: [null, [Validators.required ]]
  })


  // Choose Warehouse using select dropdown
  changeWarehouse(e) {
    console.log(e.value)
  
  }
   changeType(e) {
    console.log(e.value)
  
  }
   changeProduct(e) {
    console.log(e.value)
  
  }
  // Getter method to access formcontrols
  get warehouseName() {
    return this.registrationForm.get('warehouseName');
  }
   get typeName() {
    return this.registrationForm.get('typeName');
  }
  get productName() {
    return this.registrationForm.get('typeName');
  }





  



   onSubmit() {
    this.isSubmitted = false;
    if (!this.registrationForm.valid) {
      return ;
    } else {
      alert(JSON.stringify(this.registrationForm.value))
    }

  }
}



