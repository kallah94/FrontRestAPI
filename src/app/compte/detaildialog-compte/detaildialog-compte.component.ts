import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detaildialog-compte',
  templateUrl: './detaildialog-compte.component.html',
  styleUrls: ['./detaildialog-compte.component.css']
})
export class DetaildialogCompteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
