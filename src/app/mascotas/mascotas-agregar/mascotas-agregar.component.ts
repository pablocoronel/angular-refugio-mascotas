import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { MascotasService } from "../shared/mascotas.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-mascotas-agregar",
  templateUrl: "./mascotas-agregar.component.html",
  styleUrls: ["./mascotas-agregar.component.css"]
})
export class MascotasAgregarComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private mascotasService: MascotasService,
    private router: Router
  ) {}

  // campos
  public mascotaForm = this.fb.group({
    nombre: ["", [Validators.required, this.secondNameValidator]],
    tipo: ["", Validators.required],
    edad: [
      "",
      [Validators.required, Validators.pattern("[0-9]+"), this.ageValidator]
    ],
    descripcion: ["", Validators.required]
  });

  ngOnInit() {}

  onSubmit() {
    this.mascotasService.addMascota(this.mascotaForm.value).subscribe(data => {
      this.router.navigate(["/mascotas-listar"]);
    });
  }

  reset() {
    this.mascotaForm.reset();
  }

  // validaciones
  ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value < 0 || control.value > 120) {
      return { ageValidator: true };
    }

    return null;
  }

  secondNameValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const name: String = control.value;

    if (name.includes(" ")) {
      return { secondNameValidator: true };
    }

    return null;
  }
}
