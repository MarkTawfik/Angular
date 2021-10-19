import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.css']
})
export class SpecificComponent  {
 

   isSubmitted = false;


   

  // Warehouse
  Warehouse: any = ['warehouse1', 'warehouse2', 'warehouse3'];
  Type: any =['typeA','typeB', "typeG"]
  constructor(public fb: FormBuilder) { }

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    warehouse: [null, [Validators.required ]],
    type: [null, [Validators.required ]]
  })


  // Choose Warehouse using select dropdown
  changeWarehouse(e) {
    console.log(e.value)
  
  }
   changeType(e) {
    console.log(e.value)
  
  }
  // Getter method to access formcontrols
  get warehouseName() {
    return this.registrationForm.get('warehouseName');
  }
   get typeName() {
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

