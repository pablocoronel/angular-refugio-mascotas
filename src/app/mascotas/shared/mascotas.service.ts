import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Mascota } from "./mascota";

@Injectable({
  providedIn: "root"
})
export class MascotasService {
  // ruta raiz de la API
  private baseUrl: string = "http://localhost:8090/mascotas";

  constructor(private httpClient: HttpClient) {}

  // obtener lista de mascotas
  public getMascotas() {
    return this.httpClient.get<Array<Mascota>>(`${this.baseUrl}`);
  }

  // guardar nueva mascota
  public addMascota(mascota: Mascota) {
    return this.httpClient.post<Mascota>(`${this.baseUrl}`, mascota);
  }

  // obtener mascota
  public getMascota(id: number) {
    return this.httpClient.get<Mascota>(`${this.baseUrl}/${id}`);
  }

  // actualizar mascota
  public updateMascota(mascota: Mascota) {
    return this.httpClient.put<Mascota>(`${this.baseUrl}`, mascota);
  }

  // borrar mascota
  public deleteMascota(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
