import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient',
  imports: [CommonModule],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {

  title = 'Patient';

  patients = [
    { id: 1, prenom: 'Fatima', nom: 'Wane', email: 'fatima@mail.com' },
    { id: 2, prenom: 'Moussa', nom: 'Diop', email: 'moussa@mail.com' },
    { id: 3, prenom: 'Aby', nom: 'Diaw', email: 'aby@mail.com' }
  ];

  constructor(private route: Router) {}

  getSomme(a: number, b: number): number {
    return a + b;
  }

  getEmail(): string {
    return "sambapalaye@gmail.com";
  }

  getInfoPatient() {
    this.route.navigate(['/formulaire']);
  }
}