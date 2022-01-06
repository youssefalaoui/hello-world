import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log('GithubProfile Oninit');

    // let id  = this.route.snapshot.paramMap.get('username');
    // console.log(id);

    this.route.paramMap.subscribe({
      next: (params) => {
        console.log(params.get('username'));
      },
    });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' },
    });
  }
}
