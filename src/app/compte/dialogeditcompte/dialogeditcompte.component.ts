import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Compte } from 'src/app/models/compte';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-dialogeditcompte',
  templateUrl: './dialogeditcompte.component.html',
  styleUrls: ['./dialogeditcompte.component.css']
})
export class DialogeditcompteComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  updateCompte!: Compte;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private compteService: CompteService
  ) {}

   ngOnInit(): void {
     this.firstFormGroup = this.formBuilder.group({
       solde: ['', Validators.required],
       decouverte: ['', Validators.required]
     });
     this.secondFormGroup = this.formBuilder.group({
       agenceCode: ['', Validators.required],
       clientId: ['', Validators.required]
     });

     this.firstFormGroup.controls.solde.setValue(this.data.compte.solde);
     this.firstFormGroup.controls.decouverte.setValue(this.data.compte.decouverte);
     this.secondFormGroup.controls.agenceCode.setValue(this.data.compte.agenceCode);
     this.secondFormGroup.controls.clientId.setValue(this.data.compte.clientId);

  }

    // tslint:disable-next-line:typedef
    get f1() { return this.firstFormGroup.controls; }

    // tslint:disable-next-line:typedef
    get f2() { return this.secondFormGroup.controls; }

  // tslint:disable-next-line:typedef
  submit(){
    this.updateCompte = new Compte(this.f1.solde.value, this.f1.decouverte.value, this.f2.agenceCode.value, this.f2.clientId.value);
    console.log(this.updateCompte);
    this.updateCompte.id = this.data.compte.id;
    this.compteService.updateCompte(this.updateCompte)
      .subscribe(res => {
        console.log(res.body);
      });
  }
}
