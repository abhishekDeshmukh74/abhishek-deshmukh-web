import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  standalone: false
})

export class ContactMeComponent implements OnInit {

  email = 'abhishekdeshmukh74@gmail.com';
  phone = '+91 8007916705';
  address = '#8, Bhuvaneshwari apt, Lamkhede mala, Nashik, Maharashtra, India';

  constructor() { }

  ngOnInit() { }

}
