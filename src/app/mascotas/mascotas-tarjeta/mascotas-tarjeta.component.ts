import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Mascota } from "../shared/mascota";

@Component({
  selector: "app-mascotas-tarjeta",
  templateUrl: "./mascotas-tarjeta.component.html",
  styleUrls: ["./mascotas-tarjeta.component.css"]
})
export class MascotasTarjetaComponent implements OnInit {
  constructor() {}

  // de padre a hijo
  @Input() mascota: Mascota;
  // adopted: boolean = false;
  adopted = {
    adopted: false,
    id: 0
  };

  // de hijo a padre
  @Output() adoptClicked: EventEmitter<Object> = new EventEmitter<Object>();

  ngOnInit() {}

  adopt() {
    // seteo del msj
    this.adopted.adopted = true;
    this.adopted.id = this.mascota.id;

    // enviar el msj
    this.adoptClicked.emit(this.adopted);
  }
}
