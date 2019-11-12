import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Mascota } from "./mascota";

@Injectable({
  providedIn: "root"
})
export class MascotasService {
  private baseUrl: string = "http://localhost:8090/mascotas";

  constructor(private httpClient: HttpClient) {}

  // obtener mascotas
  public getMascotas() {
    return this.httpClient.get<Array<Mascota>>(`${this.baseUrl}`);
  }

  // guardar nueva mascota
  public addMascota(mascota: Mascota){
    return this.httpClient.post<Mascota>(`${this.baseUrl}`, mascota);
  }
}
