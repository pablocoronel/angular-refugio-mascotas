import { Component, OnInit } from "@angular/core";
import { MascotasService } from "../shared/mascotas.service";
import { Mascota } from "../shared/mascota";
import { Router } from "@angular/router";

@Component({
  selector: "app-mascotas-listar",
  templateUrl: "./mascotas-listar.component.html",
  styleUrls: ["./mascotas-listar.component.css"]
})
export class MascotasListarComponent implements OnInit {
  constructor(
    private mascotasService: MascotasService,
    private router: Router
  ) {}

  // listado de mascotas
  public mascotas: Array<Mascota> = [];

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe(data => {
      this.mascotas = data;
    });
  }

  delete(id: number) {
    const index = this.mascotas.findIndex(mascota => mascota.id == id);

    const confirmation: boolean = confirm(
      "¿Borrar la mascota ".concat(this.mascotas[index].nombre).concat(" ?")
    );

    if (confirmation) {
      this.mascotasService.deleteMascota(id).subscribe(data => {
        this.mascotas.splice(index, 1);
      });
    }
  }
}
