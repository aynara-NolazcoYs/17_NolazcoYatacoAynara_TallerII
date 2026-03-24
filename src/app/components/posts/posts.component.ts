import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-posts',
  standalone: true, // ✅ obligatorio
  imports: [CommonModule], // ✅ para ngIf y ngFor
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  error: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe({
      next: data => this.posts = data.slice(0, 5),
      error: err => this.error = err
    });
  }
}