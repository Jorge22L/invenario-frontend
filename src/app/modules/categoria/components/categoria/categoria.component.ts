import { Component, inject, Input, OnInit } from '@angular/core';
import { CategoriaService } from '../../../shared/services/categoria.service';
import { Categoria, CategoriaElement } from '../../../shared/interfaces/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
})
export class CategoriaComponent implements OnInit{

  constructor(private categoriaService: CategoriaService){}

  @Input()
  public categorias: CategoriaElement[] = []

  paginatedData: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 1;

  ngOnInit(): void {
    this.getCategorias()
  }
  fetchData(): void {
    // this.categoriaService.getPaginatedData(this.currentPage, this.itemsPerPage).subscribe(
    //   (data) => {
    //     this.paginatedData = data.results;
    //     this.totalItems = data.totalItems;
    //   },
    //   (error) => {
    //     // Handle error
    //   }
    // );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchData();
  }

  // Obtener todas las categorias
  getCategorias() :void
  {
    this.categoriaService.getCategorias()
    .subscribe({
      next: (cat: CategoriaElement[]) => {
        this.categorias = cat
        console.log(cat)
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
}
