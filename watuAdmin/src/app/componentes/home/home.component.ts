import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.obtenerMascotas();
  }

  obtenerMascotas() {
    this.homeService.getMascotas().subscribe((data) => {
      console.log(data);
    });
  }
}
