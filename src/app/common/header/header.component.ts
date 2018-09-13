import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AthenticationService } from '../../common/services/athentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _router:Router, public _authService: AthenticationService) { }

  ngOnInit() {
  }

  logout(){
    this._authService.logout();
    this._router.navigate(['/login']);
  }

}
