import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  imports: [CommonModule]
})
export class Projects {
  projects = [
    {
      title: "PAHMV's ERP System", //[cite: 6]
      role: "Frontend Developer", //[cite: 6]
      duration: "April 2024 - June 2024", //[cite: 6]
      description: "An ERP system for tracking student attendance and displaying daily events on a notice board.", //[cite: 6]
      technologies: ["React", "Django", "Firebase"], //[cite: 6]
      link: "https://school-website-blond.vercel.app/" //[cite: 6]
    },
    {
      title: "Travel Tracker", //[cite: 6]
      role: "Full Stack Web Developer", //[cite: 6]
      duration: "Nov 2023 - Dec 2023", //[cite: 6]
      description: "A website to track visited countries by displaying the world map and highlighting user-entered countries.", //[cite: 6]
      technologies: ["NodeJS", "Express JS", "PostgreSQL"], //[cite: 6]
      link: "https://github.com/PriyaS513/TravelTracker" //[cite: 6]
    },
    {
      title: "Personal Developer Portfolio", 
      role: "Frontend Developer", 
      duration: "Sept 2026", 
      description: "A responsive, modern personal developer portfolio featuring custom animations and a dark-theme UI to showcase my professional experience, skills, and projects.", 
      technologies: ["Angular", "TypeScript", "SCSS"], 
      link: "https://github.com/PriyaS513/Portfolio" 
    }
  ];
}