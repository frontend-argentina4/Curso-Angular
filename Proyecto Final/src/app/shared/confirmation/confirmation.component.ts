import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmationComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close()
  }

}
