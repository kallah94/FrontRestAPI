import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Agence } from '../models/agence';
import { Compte } from '../models/compte';
import { AgenceService } from '../services/agence.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditAgenceDialogComponent } from './edit-agence-dialog/edit-agence-dialog.component';
import { DeleteagencedialogComponent } from './deleteagencedialog/deleteagencedialog.component';
import { Router } from '@angular/router';
import { DialogDetailComponent } from './dialog-detail/dialog-detail.component';


@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit, AfterViewInit {
  agences: Agence[] | undefined;
  agence!: Agence;
  comptes: Compte[] | undefined;
  displayedColumns: string[] = ['id', 'nom', 'addresse', 'telephone', 'action'];
  dataSource = new MatTableDataSource<Agence>();
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  private upDate = new Subject<void>();
  update$ = this.upDate.asObservable();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private agenceService: AgenceService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refresh();
    this.update$.subscribe(() => { this.refresh(); });
    this.firstFormGroup = this.formBuilder.group({
      nom: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      telephone: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      adresse: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  setUpdate() {
    this.upDate.next();
  }

  // tslint:disable-next-line:typedef
  openDialogEdit(id: number) {
    this.agenceService.getAgenceById(id)
      .subscribe(res => {
        const agence = res;
        console.log('Result ', agence.id);
        const dialogRef = this.dialog.open(EditAgenceDialogComponent, {
          width: '700px',
          data: {
            agence: {
              id: agence.id,
              nom: agence.nom,
              addresse: agence.adresse,
              telephone: agence.telephone
            }
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
          if (result) {
            this.setUpdate();
          }
        });
      });
  }

  // tslint:disable-next-line:typedef
  openDialogDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteagencedialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.agenceService.deleteAgence(id)
          .subscribe(res => {
            console.log(res);
            this.setUpdate();
          });
      }
    });
  }

  // tslint:disable-next-line:typedef
  openDialogDetail(id: number) {
    this.agenceService.getAgenceById(id)
      .subscribe(res => {
        const agence = res;
        const dialogRef = this.dialog.open(DialogDetailComponent, {
          width: '300px',
          data: {
            agence: {
              id: agence.id,
              nom: agence.nom,
              addresse: agence.adresse,
              telephone: agence.telephone
            }
          }
        });
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
    this.agenceService.getAll().subscribe((res) => {
      this.agences = res;
      this.dataSource.data = this.agences;
    });
  }

  // tslint:disable-next-line:typedef
  get f1() { return this.firstFormGroup.controls; }

  // tslint:disable-next-line:typedef
  get f2() { return this.secondFormGroup.controls; }

  // tslint:disable-next-line:typedef
  get f3() { return this.thirdFormGroup.controls; }
  // tslint:disable-next-line:typedef
  submit() {
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid) {
      return;
    }
    const agence = new Agence(this.f1.nom.value, this.f3.adresse.value, this.f2.telephone.value);
    console.log('Submitted Agence: ', agence);
    this.agenceService.createAgence(agence)
      .subscribe(res => {
        console.log(res.body);
      });
    this.setUpdate();
  }
}
