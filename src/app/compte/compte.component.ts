import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Compte } from '../models/compte';
import { CompteService } from '../services/compte.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogeditcompteComponent } from './dialogeditcompte/dialogeditcompte.component';
import { DialogdialogcompteComponent } from './dialogdialogcompte/dialogdialogcompte.component';
import { DetaildialogCompteComponent } from './detaildialog-compte/detaildialog-compte.component';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit, AfterViewInit {
comptes: Compte[] | undefined;
displayedColumns: string[] = ['id', 'solde', 'decouverte', 'actions'];
dataSource = new  MatTableDataSource<Compte>();
firstFormGroup!: FormGroup;
secondFormGroup!: FormGroup;
private upDate = new Subject<void>();
update$ = this.upDate.asObservable();

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

  constructor(
    private compteService: CompteService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }



  ngOnInit(): void {
    this.refresh();
    this.update$.subscribe(() => { this.refresh(); });

    this.firstFormGroup = this.formBuilder.group({
      solde: ['', Validators.required],
      decouverte: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      agenceId: ['', Validators.required],
      clientId: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  setUpdate() {
    this.upDate.next();
  }

    // tslint:disable-next-line:typedef
  openDialogEdit(id: number) {
    this.compteService.getCompteById(id)
      .subscribe(res => {
        const compte = res;
        const dialogRef = this.dialog.open(DialogeditcompteComponent,{
          data: {
            compte: {
              id: compte.id,
              solde: compte.solde,
              decouverte: compte.decouverte,
              agenceCode: compte.agenceId,
              clientId: compte.clientId
            }
          }
        });

        dialogRef.afterClosed().subscribe( result => {
          console.log(`Dialog result: ${result}`);
          if (result) {
            this.setUpdate();
          }
        });
      });
  }

  // tslint:disable-next-line:typedef
  openDialogDetail(id: number) {
    this.compteService.getCompteById(id)
      .subscribe(res => {
        const compte = res;
        const dialogRef = this.dialog.open( DetaildialogCompteComponent, {
          width: '300px',
          data : {
            compte: {
              solde: compte.solde,
              decouverte: compte.decouverte,
              agenceCode: compte.agenceId,
              clientId: compte.clientId
            }
          }
        });
      });
  }
  // tslint:disable-next-line:typedef
  openDialogDelete(id: number) {
    const dialogRef = this.dialog.open(DialogdialogcompteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.delete(id);
      }
    });
    this.setUpdate();
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
    this.compteService.getAll().subscribe((res) => {
      this.comptes = res;
      this.dataSource.data = this.comptes;
    });
  }

  delete(id: number): void {
    this.compteService.deleteCompte(id)
    .subscribe( res => {
      console.log(res);
    });
  }


    // tslint:disable-next-line:typedef
    get f1() { return this.firstFormGroup.controls; }

    // tslint:disable-next-line:typedef
    get f2() { return this.secondFormGroup.controls; }

    submit(): void {
      if (this.firstFormGroup.invalid || this.secondFormGroup.invalid) {
        return ;
      }
      const compte = new Compte(this.f1.solde.value, this.f1.decouverte.value, this.f2.agenceId.value, this.f2.clientId.value);
      console.log('submitted compte :', compte);
      this.compteService.createCompte(compte)
        .subscribe(res => console.log(res.body));
      this.setUpdate();
    }
}
