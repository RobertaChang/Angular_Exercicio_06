import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-dialog',
  templateUrl: './td-dialog.component.html',
  styleUrls: ['./td-dialog.component.css']
})
export class TdDialogComponent implements OnInit {

  nome: string = ''
  sobrenome: string = ''
  nick: string = ''
  cpff: string = ''
  telef: string = ''
  ender: string = ''
  comple: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
