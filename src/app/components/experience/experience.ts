import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences = [
    {
      company: "NCDEX e Markets Ltd.", //[cite: 28]
      role: "Assistant Manager", //[cite: 28]
      duration: "Oct 2026 - Present", //[cite: 28]
      technologies: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Angular", "REST APIs", "Docker", "Git"], //[cite: 28]
      workDone: [
        "Deployed scalable Java & Spring Boot microservices and RESTful APIs.", //[cite: 28]
        "Handled PostgreSQL schema modeling, query optimization, and transaction handling.", //[cite: 28]
        "Worked on Projects like NAFED, NCCF, PM-Asha.", //[cite: 28]
      ]
    },
    {
      company: "NCDEX e Markets Ltd.", //[cite: 28]
      role: "Management Trainee", //[cite: 28]
      duration: "Oct 2025 - Oct 2026", //[cite: 28]
      technologies: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Angular", "REST APIs", "Docker", "Git"], //[cite: 28]
      workDone: [
        "Architected and deployed scalable Java & Spring Boot microservices and RESTful APIs.", //[cite: 28]
        "Handled PostgreSQL schema modeling, query optimization, and transaction handling.", //[cite: 28]
        "Built dynamic, responsive UI modules using Angular and connected them to secure backend endpoints.", //[cite: 28]
        "Utilized Docker for local environment containerization and seamless deployment workflows." //[cite: 28]
      ]
    },
    {
      company: "NCDEX e Markets Ltd.", //[cite: 28]
      role: "Software Engineer Intern", //[cite: 28]
      duration: "Mar 2025 - Oct 2025", //[cite: 28]
      technologies: ["Java", "PostgreSQL"], //[cite: 28]
      workDone: [
        "Contributed to core backend architecture and platform development.", //[cite: 28]
        "Assisted in Java development and PostgreSQL database management." //[cite: 28]
      ]
    },
    {
      company: "SoftCrowd", //[cite: 6]
      role: "Web Designer", //[cite: 6]
      duration: "09/01/2024 - 09/02/2024", //[cite: 6]
      technologies: ["HTML", "CSS", "JS", "Bootstrap"], //[cite: 6]
      workDone: [
        "Designed modern, responsive UI interfaces and web pages.",
        "Collaborated with cross-functional team members to deliver frontend layouts."
      ]
    },
    {
      company: "VB Engineers", //[cite: 6]
      role: "Web Developer", //[cite: 6]
      duration: "18/12/2023 - 18/01/2024", //[cite: 6]
      technologies: ["HTML", "CSS", "JS", "Express"], //[cite: 6]
      workDone: [
        "Developed core web components using HTML, CSS, and JavaScript.",
        "Integrated client-side layouts with Express backend services."
      ]
    }
  ];
}
