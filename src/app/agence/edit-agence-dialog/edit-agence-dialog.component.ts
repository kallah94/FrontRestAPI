import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Agence } from 'src/app/models/agence';
import { AgenceService } from 'src/app/services/agence.service';

@Component({
  selector: 'app-edit-agence-dialog',
  templateUrl: './edit-agence-dialog.component.html',
  styleUrls: ['./edit-agence-dialog.component.css']
})
export class EditAgenceDialogComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  updatedAgence!: Agence;
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private agenceService: AgenceService
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      nom: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      telephone: ['', Validators.required]
    });

    this.thirdFormGroup = this.formBuilder.group({
      adresse: ['', Validators.required],
    });

    this.firstFormGroup.controls.nom.setValue(this.data.agence.nom);
    this.thirdFormGroup.controls.adresse.setValue(this.data.agence.addresse);
    this.secondFormGroup.controls.telephone.setValue(this.data.agence.telephone);
  }

  // tslint:disable-next-line:typedef
  get f1() { return this.firstFormGroup.controls; }

  // tslint:disable-next-line:typedef
  get f2() { return this.secondFormGroup.controls; }

  // tslint:disable-next-line:typedef
  get f3() { return this.thirdFormGroup.controls; }

  // tslint:disable-next-line:typedef
  submit() {
    this.updatedAgence = new Agence(this.f1.nom.value,
      this.f3.adresse.value, this.f2.telephone.value);
    this.updatedAgence.id = this.data.agence.id;
    this.agenceService.updateAgence(this.updatedAgence)
      .subscribe(res => {
        console.log(` updated  ${res}`);
      });
  }
}
