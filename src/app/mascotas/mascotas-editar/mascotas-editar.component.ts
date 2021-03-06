import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MascotasService } from "../shared/mascotas.service";
import { FormBuilder, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: "app-mascotas-editar",
  templateUrl: "./mascotas-editar.component.html",
  styleUrls: ["./mascotas-editar.component.css"]
})
export class MascotasEditarComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private mascotasService: MascotasService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  // campos
  public mascotaForm = this.fb.group({
    id: ["", [Validators.required, Validators.pattern("[0-9]+")]],
    nombre: ["", [Validators.required, this.secondNameValidator]],
    tipo: ["", Validators.required],
    edad: [
      "",
      [Validators.required, Validators.pattern("[0-9]+"), this.ageValidator]
    ],
    descripcion: ["", Validators.required],
    imagen: [""]
  });

  ngOnInit() {
    console.log(this.mascotaForm)
    let id: string = this.route.snapshot.paramMap.get("id");

    this.mascotasService.getMascota(parseInt(id)).subscribe(data => {
      this.mascotaForm.setValue(data);
    });
  }

  onSubmit() {
    this.mascotasService
      .updateMascota(this.mascotaForm.value)
      .subscribe(data => {
        this.router.navigate(["/mascotas-listar"]);
      });
  }

  // validaciones
  ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value < 0 || control.value > 120) {
      return { ageValidator: true };
    }

    return null;
  }

  secondNameValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const name: String = control.value;

    if (name.includes(" ")) {
      return { secondNameValidator: true };
    }

    return null;
  }
}
