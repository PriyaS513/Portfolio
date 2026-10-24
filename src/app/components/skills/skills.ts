import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    { name: 'Java', icon: 'fa-brands fa-java' }, //[cite: 6]
    { name: 'C++', icon: 'fa-solid fa-code' }, //[cite: 6]
    { name: 'Angular', icon: 'fa-brands fa-angular' }, //[cite: 6]
    { name: 'JavaScript', icon: 'fa-brands fa-js' }, //[cite: 6]
    { name: 'HTML5', icon: 'fa-brands fa-html5' }, //[cite: 6]
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt' }, //[cite: 6]
    { name: 'MySQL', icon: 'fa-solid fa-database' }, //[cite: 6]
    { name: 'OOPS', icon: 'fa-solid fa-cubes' }, //[cite: 6]
    { name: 'Postgress', icon: 'fa-solid fa-database' },
  ];
}
