import { Component, OnInit, Input } from "@angular/core";
import { Mascota } from "../shared/mascota";

@Component({
  selector: "app-mascotas-tarjeta",
  templateUrl: "./mascotas-tarjeta.component.html",
  styleUrls: ["./mascotas-tarjeta.component.css"]
})
export class MascotasTarjetaComponent implements OnInit {
  constructor() {}

  @Input() mascota: Mascota;

  ngOnInit() {}
}
