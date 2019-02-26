import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BackendService } from "../backend.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  createForm(): any {
    this.loginForm = this.fb.group({
      name: ["user@kinvey.com", Validators.required],
      password: ["password", Validators.required]
    });
  }
  constructor(
    private service: BackendService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {}

  async login() {
    let { name, password } = this.loginForm.value;
    try {
      await this.service.login(name, password);
      this.router.navigate([""]);
    } catch {
      alert("auth error");
    }
  }

  async loginWithMIC() {
    try {
      await this.service.loginWithMIC("http://localhost:4200");
      this.router.navigate([""]);
    } catch {
      alert("auth error");
    }
  }
}
