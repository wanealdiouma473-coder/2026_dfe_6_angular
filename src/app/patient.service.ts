import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientsSubject = new BehaviorSubject<any[]>([]);
  public patients$ = this.patientsSubject.asObservable();

  private apiUrl = 'http://127.0.0.1:3000/patients';

  constructor(private http: HttpClient) {}

  loadPatients() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (patients) => this.patientsSubject.next(patients),
      error: (error) => console.error('Erreur chargement patients', error)
    });
  }

  addPatient(patient: any): Observable<any> {
    return this.http.post(this.apiUrl, patient);
  }

  getPatients(): any[] {
    return this.patientsSubject.value;
  }
}