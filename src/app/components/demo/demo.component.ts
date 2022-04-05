import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '@labshare/base-ui-services';
import { EventKey, EventService } from 'ngx-event-service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  username = '';
  group = new FormGroup({
    text: new FormControl(''),
  })

  constructor(private eventService: EventService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userManager.getUser().then(user => {
      if (user) {
        this.username = user.profile.name as string;
      }
    })
  }

  submit() {
    const key = new EventKey<string>('demo');
    this.eventService.get(key).next(this.group.value.text);
  }

  testAuth() {
    console.log('Client app', this.authService);
  }

  setV() {
  }

}
