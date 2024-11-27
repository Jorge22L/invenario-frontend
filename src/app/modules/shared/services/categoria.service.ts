import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';
import { catchError, map, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl: string = `http://localhost:8080/api/v1`

  constructor(private http: HttpClient) { }

  /**
   * Obtiene todas las categorias
   * @returns categorias
   */
  getCategorias()
  {
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria>(url)
    .pipe(
      map( response => response.categoriaResponse.categoria || []),
      catchError( () => of([]))
    )
  }
}
