import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header, 
    Hero, 
    About, 
    Projects, 
    Contact, 
    Footer,
    Experience,
    Skills
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'my-portfolio';
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const x = e.clientX;
    const y = e.clientY;
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
  }
}