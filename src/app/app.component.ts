import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() displayRecipe = true;
  constructor() {}
  onNavigate(eventData: string) {
    console.log(eventData);
    if (eventData === 'recipe') {
      this.displayRecipe = true;
    } else {
      this.displayRecipe = false;
    }
  }
}
