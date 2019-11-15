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
      data.forEach(data => {
        data.adoptado = false;
      });

      this.mascotas = data;
    });
  }

  onPersonAdopt(message: { adopted: boolean; id: number }) {
    const index: number = this.mascotas.findIndex(
      mascota => mascota.id == message.id
    );

    this.mascotas[index].adoptado = true;
  }
}
