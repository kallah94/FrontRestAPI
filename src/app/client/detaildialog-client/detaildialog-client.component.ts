import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detaildialog-client',
  templateUrl: './detaildialog-client.component.html',
  styleUrls: ['./detaildialog-client.component.css']
})
export class DetaildialogClientComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
