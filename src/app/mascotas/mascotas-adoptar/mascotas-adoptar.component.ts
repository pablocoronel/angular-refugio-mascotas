import { Component, OnInit } from "@angular/core";
import { MascotasService } from "../shared/mascotas.service";
import { Mascota } from "../shared/mascota";

@Component({
  selector: "app-mascotas-adoptar",
  templateUrl: "./mascotas-adoptar.component.html",
  styleUrls: ["./mascotas-adoptar.component.css"]
})
export class MascotasAdoptarComponent implements OnInit {
  constructor(private mascotasService: MascotasService) {}

  public mascotas: Array<Mascota> = [];

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe(data => {
      this.mascotas = data;
    });
  }
}
