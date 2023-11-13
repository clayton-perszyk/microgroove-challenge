import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private namePlaceholder: string = '<FULL NAME>';

  constructor(private http: HttpClient) { }

  private url = `https://tagdiscovery.com/api/get-initials?name=${this.namePlaceholder}`;

  getInitialsByName(name: string) {
    const urlWithName: string = this.url.replace(this.namePlaceholder, name)
    return this.http.get(urlWithName, { responseType: 'text' });
  }
}
