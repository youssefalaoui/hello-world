import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
    });

    // this.service.getPosts().subscribe(
    //   // next(response: any) {
    //   //   console.log(response);
    //   // },
    //   // error(msg: any) {
    //   //   alert('An unexpected error occured.');
    //   //   console.log('Error: ', msg);
    //   // },

    //   (response) => {
    //     this.posts = response;
    //   },
    //   (error) => {
    //     alert('An unexpected error occured.');
    //     console.log(error);
    //   }
    // );
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    // optimistic update
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post).subscribe({
      next: (newPost: any) => {
        post.id = newPost.id;
      },
      error: (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {
          //alert('this post has already been created');
        } else {
          throw error;
        }
      },
    });
  }

  updatePost(post: any) {
    this.service.update(post, { isRead: true }).subscribe({
      next: (updatedPost) => {
        console.log(updatedPost);
      },
    });
  }

  deletePost(post: any) {
    //this.service.delete(post.id).subscribe();
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe({
      next: () => null,
      error: (error: AppError) => {
        this.posts.splice(0, 0, post);
        if (error instanceof NotFoundError)
          alert('this post has already been deleted');
        else throw error;
      },
    });
  }
}
