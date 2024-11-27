import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {

  @Input() currentPage: number = 1
  @Input() itemsPerPage: number = 1
  @Input() totalItems: number = 1
  @Output() pageChanged: EventEmitter<number> = new EventEmitter()

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage)
  }

  changePage(page: number): void{
    if(page >= 1 && page <= this.totalPages){
      this.currentPage = page
      this.pageChanged.emit(page)
    }
  }

}
