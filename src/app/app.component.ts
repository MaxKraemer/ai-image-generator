import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  title = 'OpenAI Image API';
  imageUrl: any;

  constructor(private openaiService: ApiService) {}

  ngOnInit() {
    this.generateImage();
  }

  generateImage() {
    const prompt = 'a cat sitting on a couch';
    const model = 'image-alpha-001';
    this.openaiService.generateImage(prompt, model).subscribe((data) => {
      this.imageUrl = data;
      console.log(this.imageUrl);
    });
  }
}
