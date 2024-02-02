import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.openai.com/v1/images/generations';

  constructor(private http: HttpClient) {}

  generateImage(prompt: string, model: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + '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');
    const body = {
      'model': model,
      'prompt': prompt,
      'num_images': 1,
      'size': '512x512',
      'response_format': 'url'
    };
    return this.http.post(this.apiUrl, body, { headers: headers });
  }

}




