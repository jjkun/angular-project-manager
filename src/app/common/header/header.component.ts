import { Component, OnInit } from '@angular/core';
import { AthenticationService } from '../services/athentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _authService: AthenticationService) { }

  ngOnInit() {
  }

}
