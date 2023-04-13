import { Component, OnInit } from '@angular/core';

import { IJob } from 'src/app/portfolio/about-me/job-card/job-card.interfaces';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})

export class AboutMeComponent implements OnInit {

  age = 25;
  nationality = 'Indian';
  email = 'abhishekdeshmukh74@gmail.com';
  phone = '+91 8007916705';
  // address = '#8, Bhuvaneshwari apt, Lamkhede mala, Nashik, Maharashtra, India';

  bio = 'I am a full stack developer with experience in building dynamic websites using modern technologies with best practices. Packs a punch with a deep understanding of cutting edge technology and business practices to build great software products, strategies, and experiences. Professionally connected with the web development industry and information technology for many years while putting those technologies to practice to make the human life easier. I value teamwork as well as individual contribution to the development of the organization with innovative ideas in the IT industry. Please find below more information of my work experience';

  jobs: IJob[] = [
    {
      title: 'ForceClose',
      role: 'Full stack Developer',
      description: `CMS development using PHP & Android Development using Android Studio.
      SEO auditing and penetration testing`,
      companyUrl: 'https://forceclose.com',
      companyAriaLabel: 'ForceClose',
      tooltipTitle: 'Go to ForceClose website'
    },
    {
      title: 'Extentia',
      role: 'Software Professional',
      description: `API development for chatbots, voice assistants & web app with nodeJs and
       front-end development with Angular`,
      companyUrl: 'https://extentia.com',
      companyAriaLabel: 'Extentia',
      tooltipTitle: 'Go to Extentia website'
    },
    {
      title: 'Odek AppCraft',
      role: 'Product Engineer',
      description: 'API development for web app using nodeJs & Front-end development with Angular with SQL server',
      companyUrl: 'https://odek.co.za',
      companyAriaLabel: 'Odek AppCraft',
      tooltipTitle: 'Go to Odek website'
    },
    {
      title: 'Credit Suisse',
      role: 'Exempt Non Officer',
      description: 'Front end applications development in ReactJS for various banking use cases and API development in Java',
      companyUrl: 'https://www.credit-suisse.com/in/en.html',
      companyAriaLabel: 'Credit Suisse',
      tooltipTitle: 'Go to Credit Suisse website'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
