export class Pagination {
  #currentPage = 1;

  constructor( { initialPage = 1, total = 1, onChange} ) {
      this.#currentPage = initialPage;
      this.total = total;
      this.onChange = onChange;
  }
  /////////////////////////////////////////////
  get currentPage() {
      return this.#currentPage;
  }
  set currentPage(value) {
      this.#currentPage = value;
      if (this.onChange) {this.onChange(value)}
  }
  /////////////////////////////////////////////
  nextPage() {
      if (this.currentPage === this.total) return

      this.currentPage += 1; 
   }
  prevPage() { if(this.currentPage === 1) return

      this.currentPage -= 1;
   } 
  /////////////////////////////////////////////////
//    /*
  setPage(value) { if(value <= 0 || value > this.total) {
       this.currentPage = value;
  }
   else alert('incorrect page value')} 
   /////////////////////////////////////////
   firstPage() {this.currentPage = 1};
   lastPage() {this.currentPage = this.total};
//    */
// /*
  /////////////////////////////////////////////////
   onceBefore() { if(this.currentPage <= 1) return

       this.currentPage = this.currentPage - 1}

   twiceBefore() { if(this.currentPage <= 2) return

       this.currentPage = this.currentPage - 2}

   onceAfter() { if(this.currentPage >= this.total) return

       this.currentPage = this.currentPage + 1}
   twiceAfter() { if(this.currentPage >= this.total - 1) return

       this.currentPage = this.currentPage + 2}  
 //////////////////////////////////////////////////
//  */            
}