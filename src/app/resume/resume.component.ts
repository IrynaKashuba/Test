import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  fullName: string = `Kashuba Iryna`;
  date: string = `25/12/1984`;
  education: string = `LDTU`;
  work1: string = `1. bank ...`;
  work2: string = `2. bank ...`;
  work3: string = `3. FOP`;
  image: string = `assets/lotos.jpg`;
  hardSkill: string = `Word, Publisher, Fotoshop, 1C 7v., SAP`;
  softSkill: string = `sociable, friendly, ready to learn`;
}
