import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MascotasService } from "../shared/mascotas.service";
import { FormBuilder, Validators } from "@angular/forms";

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
    nombre: ["", Validators.required],
    tipo: ["", Validators.required],
    edad: ["", [Validators.required, Validators.pattern("[0-9]+")]],
    descripcion: ["", Validators.required]
  });

  ngOnInit() {
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
}
