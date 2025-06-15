import { Component } from '@angular/core';
import { Topics } from '../topics/topics';
import { Feed } from '../feed/feed';
import { Activity } from '../activity/activity';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  imports: [Topics, Feed, Activity],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  userId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    // Now you can call /profile/1 from your service
    console.log('User ID:', this.userId);
  }
}
