import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-dialogeditcomponent',
  templateUrl: './dialogeditcomponent.component.html',
  styleUrls: ['./dialogeditcomponent.component.css']
})
export class DialogeditcomponentComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  updateClient!: Client;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      date_naissance: ['', Validators.required]
    });

    this.firstFormGroup.controls.prenom.setValue(this.data.client.prenom);
    this.firstFormGroup.controls.nom.setValue(this.data.client.nom);
    this.secondFormGroup.controls.date_naissance.setValue(this.data.client.date_naissance);
  }

    // tslint:disable-next-line:typedef
    get f1() { return this.firstFormGroup.controls; }

    // tslint:disable-next-line:typedef
    get f2() { return this.secondFormGroup.controls; }

    // tslint:disable-next-line:typedef
    submit() {
      this.updateClient = new Client(this.f1.prenom.value, this.f1.nom.value, this.f2.date_naissance.value);
      this.updateClient.id = this.data.client.id;
      this.clientService.updateClient(this.updateClient)
        .subscribe(res => {
          console.log(`updated ${this.updateClient}`);
        });
    }
}
