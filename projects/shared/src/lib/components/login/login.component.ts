import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  registerForm:any;
  loginType:string = 'login';
  actionLabel:string = 'Login'
constructor(private fb:FormBuilder, private loginService:LoginService, private snackBar:MatSnackBar){
this.loginForm = this.fb.group({
  email:['',Validators.required],
  password:['',Validators.required]
})
this.registerForm = this.fb.group({
  name:['',Validators.required],
  email:['',Validators.required],
  password:['',Validators.required],
  reenterPassword:['',Validators.required],
  mobileNumber:['',Validators.required]
})
}

ngOnInit(): void {
  
}

login(){
  if(!this.loginForm.valid) return;
  let submitFormValue = this.loginForm.value
  let reqData = {
    "name":"",
    "email":submitFormValue.email,
    "password":submitFormValue.password,
    "mobile_number":"",
    "role":""
  }
  this.loginService.loginUser(reqData).subscribe((res:any)=>{
    this.snackBar.open(res.message, 'Close', {
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  })
}
register(){
this.loginType = 'register';
this.actionLabel = 'Register';
this.loginForm.reset()
}
backLogin(){
this.loginType = 'login';
this.actionLabel = 'Login';
this.registerForm.reset()
}

signUp(){
  if(!this.registerForm.valid) return;
  let submitFormValue = this.registerForm.value
  let reqData = {
    "name":submitFormValue.name,
    "email":submitFormValue.email,
    "password":submitFormValue.password,
    "mobile_number":submitFormValue.mobileNumber,
    "role":submitFormValue.email.includes('@admin.com') ? 'admin':'student'
  }
  this.loginService.registerUser(reqData).subscribe((res:any)=>{
    this.snackBar.open(res.message, 'Close', {
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  })

}
}
