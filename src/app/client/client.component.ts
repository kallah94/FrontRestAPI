import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Client } from '../models/client';
import { Compte } from '../models/compte';
import { ClientService } from '../services/client.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogeditcomponentComponent } from './dialogeditcomponent/dialogeditcomponent.component';
import { DialogdeletecomponentComponent } from './dialogdeletecomponent/dialogdeletecomponent.component';
import { DetaildialogClientComponent } from './detaildialog-client/detaildialog-client.component';


export interface ClientData {
  id: number;
  prenom: string;
  nom: string;
  date_naissance: string;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit, AfterViewInit {
  clients: Client[] | undefined;
  comptes: Compte[] | undefined;
  displayedColumns: string[] = ['id', 'prenom', 'nom', 'date_naissance', 'action'];
  dataSource = new MatTableDataSource<ClientData>();
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  private upDate = new Subject<void>();
  update$ = this.upDate.asObservable();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.refresh();
    this.update$.subscribe(() => { this.refresh(); });

    this.firstFormGroup = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      date_naissance: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  setUpdate() {
    this.upDate.next();
  }

  // tslint:disable-next-line:typedef
  openDialogEdit(id: number) {
    this.clientService.getClientById(id)
      .subscribe(res => {
        const client = res;
        const dialogRef = this.dialog.open(DialogeditcomponentComponent, {
          width: '700px',
          data: {
            client: {
              id: client.id,
              nom: client.nom,
              prenom: client.prenom,
              date_naissance: client.date_naissance
            }
          }
        });

        dialogRef.afterClosed().subscribe((result => {
          console.log(`Dialog result : ${result}`);
          if (result) {
            this.setUpdate();
          }
        }));
      });

  }

  // tslint:disable-next-line:typedef
  openDialogDetail(id: number) {
    this.clientService.getClientById(id)
      .subscribe( res => {
        const client = res;
        const dialogRef = this.dialog.open( DetaildialogClientComponent, {
          width: '300px',
          data: {
            client: {
              id: client.id,
              prenom: client.prenom,
              nom: client.nom,
              date_naissance: client.date_naissance
            }
          }
        });
      });
  }
  // tslint:disable-next-line:typedef
  openDialogDelete(id: number) {
    const dialogRef = this.dialog.open(DialogdeletecomponentComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.delete(id);
      }
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // tslint:disable-next-line:typedef
  refresh() {
    this.clientService.getAll().subscribe((res) => {
      this.clients = res;
      this.dataSource.data = this.clients;
    });
  }

  delete(id: number): void {
    this.clientService.deleteClient(id)
      .subscribe(res => {
        this.setUpdate();
      });
  }

  // tslint:disable-next-line:typedef
  get f1() { return this.firstFormGroup.controls; }

  // tslint:disable-next-line:typedef
  get f2() { return this.secondFormGroup.controls; }

  submit(): void {
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid) {
      return;
    }
    const client = new Client(this.f1.prenom.value, this.f1.nom.value, this.f2.date_naissance.value);
    console.log('Submitted client: ', client);
    this.clientService.createClient(client)
      .subscribe(res => {
        console.log(res.body);
        this.setUpdate();
      });
  }
}
