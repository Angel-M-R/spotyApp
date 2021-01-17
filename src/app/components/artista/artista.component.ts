import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  loading: boolean = true;
  artista: any={}
  topTracks: any;
  constructor(private router:ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe((params:any) => {
      this.spotify.getArtista(params['id']).subscribe(data=>{
        this.artista=data
        this.loading = false;
      });
      this.getTopTracks(params['id']);
    })
   }

   getTopTracks(id:string){
     this.spotify.getTopTracks(id).subscribe(data=>{
       this.topTracks=data;
     })
   }

  ngOnInit(): void {
  }

}
