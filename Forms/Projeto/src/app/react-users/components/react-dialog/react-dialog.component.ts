import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-dialog',
  templateUrl: './react-dialog.component.html',
  styleUrls: ['./react-dialog.component.css']
})
export class ReactDialogComponent implements OnInit {

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
