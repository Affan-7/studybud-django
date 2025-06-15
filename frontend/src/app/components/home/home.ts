import { Component } from '@angular/core';
import { Feed } from '../feed/feed';
import { Topics } from '../topics/topics';
import { Activity } from '../activity/activity';

@Component({
  selector: 'app-home',
  imports: [ Feed, Topics, Activity],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
