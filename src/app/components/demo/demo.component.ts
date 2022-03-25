import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventKey, EventService } from 'ngx-event-service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {


  group = new FormGroup({
    text: new FormControl(''),
  })

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  submit() {
    const key = new EventKey<string>('demo');
    this.eventService.get(key).next(this.group.value.text);
  }

}
