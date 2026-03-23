import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-from-patient',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './from-patient.html',
  styleUrl: './from-patient.css'
})

export class FromPatient {

  patient = {

    nom: '',
    prenom: '',
    age: '',
    adresse: '',
    telephone: ''

  };

  ajouterPatient() {

    console.log(this.patient);

    alert("Patient ajouté avec succès");

  }

}
