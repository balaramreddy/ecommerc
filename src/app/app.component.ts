import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testapp';
  show = true; 

  toggle() {
    this.show = !this.show; 
  }
}
