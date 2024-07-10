import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser, UserModel } from 'mf-auth-lib';

@Component({
  selector: 'mf-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.less'
})
export class ProfilePageComponent implements OnInit {
  public user!: UserModel
  constructor(private _store: Store) {
  }
  ngOnInit(): void {
    this._store.select(selectUser).subscribe((result) => {
      if (result) {
        this.user = result
      }
    })
  }
}
