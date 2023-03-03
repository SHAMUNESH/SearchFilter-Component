import { Component } from "@angular/core";

@Component({
  selector: "app-admin-movie",
  templateUrl: "./admin-movie.component.html",
  styleUrls: ["./admin-movie.component.css"],
})
export class AdminMovieComponent {

  // Search Filters KEYWORDS
  searchKey:string = "";
  searchPair : string = ""
  public searchGenre:string = "";
  public searchTerm : string = "";


  // Movie Data
  movies: any = [
    { name: "Spider Man", genre: "Action", duration: "2h 30",thumbnail: "../../assets/spiderman.png" },
    { name: "Rush Hour", genre: "Comedy", duration: "2h 30", thumbnail : "../../assets/rushhour.jpeg"},
    { name: "Vikram", genre: "Thriller", duration: "3h 10",thumbnail: "../../assets/vikram.jpg" },
    { name: "Boss Baby", genre: "Animation", duration: "1h 20", thumbnail: "../../assets/bossbaby.jpeg" },
    { name: "KGF 1", genre: "Drama", duration: "1h 20",thumbnail: "../../assets/kgf1.jpeg" },
    { name: "KGF 2", genre: "Drama", duration: "2h 30",thumbnail: "../../assets/kgf2.webp" },
    { name: "Spider Man 2", genre: "Drama", duration: "2h 30",thumbnail: "../../assets/spiderman2.jpeg" },
    { name: "Avengers Endgame", genre: "Action", duration: "3h 10" ,thumbnail: "../../assets/avendgame.jpeg"},
  ];

  searchMovieName = [
    'Avengers Endgame',
    'Boss Baby',
    'KGF 1',
    'KGF 2',
    'Rush Hour',
    'Spider Man',
    'Spider Man 2',
    'Vikram',
  
  ]

  updateList(i: any) {
    this.movies = this.movies.filter((data: any) => {
      if (i !== data.name) {
        return true;
      }else{
        return false;
      }
    });
  }


  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.searchKey = this.searchTerm;
    console.log(this.searchTerm);
  }
  searchgenre(event:any){
    
    this.searchPair = this.searchGenre;
    console.log(this.searchGenre);
  }
}
