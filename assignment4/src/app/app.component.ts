import { Component } from '@angular/core';
import { ListService } from "app/service/list.service";
import { DropDownService } from "app/service/drop-down.service";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class RootComponent {

  arrayList: any[] = [];
  genderArray: any[] = [];

  userForm: FormGroup;

  constructor(private _listService: ListService, private _dropDownService: DropDownService, private fb: FormBuilder) { }

  ngOnInit() {

    this.userForm = this.fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      'lastName': ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      'age': ['', Validators.compose([Validators.required, this.checkIfNumber])],
      'genderType': [null, Validators.required]
    });
    this.genderArray = this._dropDownService.getDropDown();
  };


  checkIfNumber(fieldControl: FormControl) {
    if (isNaN(fieldControl.value)) {
      return { validNumber: true };
    } else {
      return fieldControl.value.length < 3 ? null : { validNumber: true }
    }
  };

  submit(values) {
    let model = {
      name: values.name,
      lastName: values.lastName,
      age: values.age,
      gender: values.genderType
    };
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
  };

  resetForm() {
    console.log(this.userForm);
    this.userForm.reset();
  }
}
