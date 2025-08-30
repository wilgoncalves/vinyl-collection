import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vinyl } from '../models/Vinyls';

@Injectable({
  providedIn: 'root',
})
export class VinylService {
  private apiUrl = `${environment.ApiUrl}/vinyl`;

  constructor(private http: HttpClient) {}

  GetVinyls(): Observable<Vinyl[]> {
    return this.http.get<Vinyl[]>(this.apiUrl);
  }

  GetVinyl(id: number): Observable<Vinyl> {
    return this.http.get<Vinyl>(`${this.apiUrl}/${id}`);
  }

  AddVinyl(vinyl: Vinyl): Observable<Vinyl> {
    // const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Vinyl>(`${this.apiUrl}`, vinyl);
  }

  EditVinyl(vinyl: Vinyl): Observable<Vinyl> {
    return this.http.put<Vinyl>(`${this.apiUrl}/${vinyl.id}`, vinyl);
  }

  DeleteVinyl(id : number, vinyl: Vinyl): Observable<Vinyl> {
    return this.http.delete<Vinyl>(`${this.apiUrl}/${vinyl.id}?id=${id}`);
  }
}
