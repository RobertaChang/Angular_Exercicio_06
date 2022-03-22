import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactDialogComponent } from '../react-dialog/react-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-react-home',
  templateUrl: './react-home.component.html',
  styleUrls: ['./react-home.component.css']
})
export class ReactHomeComponent {

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }
  /* public personalData: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ReactiveComponent>
  ) { }

  ngOnInit(): void {
    this.personalData = this.fb.group({
     name: ['', [Validators.required]],
     lastname: ['', [Validators.required]],
     username: ['', [Validators.required]],
     cpf: ['', [Validators.required]],
     tels: ['', [Validators.required]],
     adress: ['', [Validators.required]],
     comp: ['', [Validators.required]],
     password: ['', [Validators.required]],
     confpassword: ['', [Validators.required]]
    })
  } */
  personalData: FormGroup = this.fb.group({
    name: new FormControl ('',[
      Validators.required, 
      Validators.minLength(3)
    ]),
    lastname: new FormControl ('',[
      Validators.required, 
      Validators.minLength(3)
    ]),
    username: new FormControl ('',[
      Validators.required, 
      Validators.minLength(3)
    ]),
    cpf: new FormControl ('',[
      Validators.required,
      Validators.minLength(11)
    ]),
    tels: new FormControl ('',[
      Validators.required,
      Validators.minLength(9)
    ]),
    adress: new FormControl ('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    comp: new FormControl (''),
    password: new FormControl ('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]),
    confpassword: new FormControl ('',[
      Validators.required
    ])
  },
  {
    validators: this.MustMatch('password', 'confpassword')
  }
   )

   MustMatch(controlName: string, matchingControlName:string){
     return(formGroup:FormGroup) => {
       const control = formGroup.controls[controlName];
       const matchingControl = formGroup.controls[matchingControlName];
       if(matchingControl.errors && !matchingControl.errors['MustMatch']){
         return
       }
       if(control.value !== matchingControl.value){
         matchingControl.setErrors({MustMatch:true})
       }
       else{
         matchingControl.setErrors(null);
       }
     }

     
   }

  

  

  submit(): void {
    console.log(`Name = ${this.personalData.controls['name'].value}`)
    console.log(`Last Name = ${this.personalData.controls['lastname'].value}`)
    console.log(`Username = ${this.personalData.controls['username'].value}`)
    console.log(`Cpf = ${this.personalData.controls['cpf'].value}`)
    console.log(`Tels = ${this.personalData.controls['tels'].value}`)
    console.log(`Adress = ${this.personalData.controls['adress'].value}`)
    console.log(`Complemento = ${this.personalData.controls['comp'].value}`)
    console.log(`Password = ${this.personalData.controls['password'].value}`)
    console.log(`Confirmacao Senha = ${this.personalData.controls['confpassword'].value}`)



    let ref = this.dialog.open(ReactDialogComponent)

    ref.componentInstance.nome = this.personalData.controls['name'].value
    ref.componentInstance.sobrenome = this.personalData.controls['lastname'].value
    ref.componentInstance.nick = this.personalData.controls['username'].value
    ref.componentInstance.cpff = this.personalData.controls['cpf'].value
    ref.componentInstance.telef = this.personalData.controls['tels'].value
    ref.componentInstance.ender = this.personalData.controls['adress'].value
    ref.componentInstance.comple = this.personalData.controls['comp'].value
  }


  
  /* personalData: FormGroup;

constructor(private formBuilder: FormBuilder) {}

ngOnInit() {
  this.personalData = this.fb.group({
    confirmarSenha: ['', this.validarSenhas],
    password: ['']
  });
}

validarSenhas = (confirmarSenha: FormControl): ValidatorFn => {
  console.log(confirmarSenha.value);
  if (this.personalData) {
    console.log(this.personalData.get('password').value);
  }
  return null;
}*/



/* confirm(control: FormGroup) {
  return control.value === control.get('confirm_password').value ? null : {'nao_combina': true};
} */


/* static SenhasCombinam(controle: AbstractControl) {
  let senha = controle.get('senha').value;
  let confirmarSenha = controle.get('confirmarSenha').value;

  if (senha === confirmarSenha) return null;

  controle.get('confirmarSenha').setErrors({ senhasNaoCoincidem: true });
} */

}
