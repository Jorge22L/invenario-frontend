export interface Categoria {
  metadata:          Metadatum[];
  categoriaResponse: CategoriaResponse;
}

export interface CategoriaResponse {
  categoria: CategoriaElement[];
}

export interface CategoriaElement {
  idcategoria: number;
  nombre:      string;
  descripcion: string;
}

export interface Metadatum {
  date: string;
  code: string;
  type: string;
}
