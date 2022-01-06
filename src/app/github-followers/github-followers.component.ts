import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';

import { combineLatest, switchMap } from 'rxjs';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) {}

  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combined) => {
          let id = combined[0].get('id');
          let page = combined[1].get('page');
          return this.service.getAll();
        })
      )
      .subscribe({
        next: (followers) => {
          this.followers = followers;
        },
      });
  }
}
