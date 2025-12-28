import { Component, OnInit } from '@angular/core';

import { CONSTANTS } from '@constants';
import { ISocialMediaConfig } from './home.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  firstName = 'Abhishek';
  lastName = 'Deshmukh';
  description = 'Web Developer & Programmer';
  description2 = 'Not Your Average Software Engineer ;)';

  socialMediaConfigs: ISocialMediaConfig[] = [
    // {
    //   icon: 'fa-facebook',
    //   url: `https://www.facebook.com/${CONSTANTS.USERNAMES.FACEBOOK}`,
    //   ariaLabel: 'Facebook',
    //   tooltipTitle: 'My Facebook profile'
    // },
    {
      icon: 'fa-linkedin',
      url: `https://www.linkedin.com/in/${CONSTANTS.USERNAMES.LINKEDIN}`,
      ariaLabel: 'Linkedin',
      tooltipTitle: 'My Linkedin profile'
    },
    {
      icon: 'fa-github',
      url: `https://www.github.com/${CONSTANTS.USERNAMES.GITHUB}`,
      ariaLabel: 'Github',
      tooltipTitle: 'My Github profile'
    },
    {
      icon: 'fa-instagram',
      url: `https://www.instagram.com/${CONSTANTS.USERNAMES.INSTAGRAM}`,
      ariaLabel: 'Instagram',
      tooltipTitle: 'My Instagram profile'
    },
    {
      icon: 'fa-youtube',
      url: `https://www.youtube.com/channel/${CONSTANTS.USERNAMES.YOUTUBE}`,
      ariaLabel: 'Youtube',
      tooltipTitle: 'My Youtube channel'
    },
    // {
    //   icon: 'fa-hackerrank',
    //   url: `https://www.hackerrank.com/${CONSTANTS.USERNAMES.HACKERRANK}`,
    //   ariaLabel: 'Hackerrank',
    //   tooltipTitle: 'My Hackerrank profile'
    // },
    // {
    //   icon: 'fa-twitter',
    //   url: `https://twitter.com/${CONSTANTS.USERNAMES.TWITTER}`,
    //   ariaLabel: 'Twitter',
    //   tooltipTitle: 'My Twitter profile'
    // },
  ];

  constructor() { }

  ngOnInit() { }

}
