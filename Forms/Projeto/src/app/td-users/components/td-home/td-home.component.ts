import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TdDialogComponent } from '../td-dialog/td-dialog.component';

@Component({
  selector: 'app-td-home',
  templateUrl: './td-home.component.html',
  styleUrls: ['./td-home.component.css']
})
export class TdHomeComponent {

  constructor(
    private dialog: MatDialog
  ) { }

  @ViewChild('f') form: any;

  name: string = ''
  lastname: string = ''
  username: string = ''
  cpf: string = ''
  tels: string = ''
  adress: string = ''
  comp: string = ''
  password: string = ''
  confpassword: string = ''

  data = {
    password: '',
    confpassword: '',
  };

  submit(): void {
    console.log(`Name = ${this.name}`)
    console.log(`Last Name = ${this.lastname}`)
    console.log(`UserName = ${this.username}`)
    console.log(`Cpf = ${this.cpf}`)
    console.log(`Tel = ${this.tels}`)
    console.log(`Adress = ${this.adress}`)
    console.log(`Comp = ${this.comp}`)
    console.log(`Password = ${this.password}`)
    console.log(`Conf Password = ${this.confpassword}`)



    let ref = this.dialog.open(TdDialogComponent)

    ref.componentInstance.nome = this.name
    ref.componentInstance.sobrenome = this.lastname
    ref.componentInstance.nick = this.username
    ref.componentInstance.cpff = this.cpf
    ref.componentInstance.telef = this.tels
    ref.componentInstance.ender = this.adress
    ref.componentInstance.comple = this.comp
  }
}
