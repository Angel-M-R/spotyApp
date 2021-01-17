import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = []
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService) {
    this.error = false;
    this.loading = false;
    this.spotify.getNewReleases().subscribe((data:any) =>{
      this.nuevasCanciones = data;
      this.loading = false;
    }, (e)=>{
      this.loading=false;
      this.error=true;
      this.mensajeError = e.error.error.message;
      console.log(e)
    })

  }

  ngOnInit(): void {
  }

}
