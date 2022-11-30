import { Component, OnInit } from '@angular/core';
import { HttpLoaderService } from 'src/app/services/http-loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public httpLoaderService: HttpLoaderService) { }

  ngOnInit(): void {
  }

}
