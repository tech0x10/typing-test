import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  useralphabets = ''
  generatedalphabets = '';
  randomletters() {
    this.useralphabets = '';
    let alphabets = 'abcdefghikjlmnopqrstuvwxyz';
    let rgletters = '';
    for (let i = 0; i < alphabets.length; i++) {
      let index = Math.floor(Math.random() * alphabets.length);
      rgletters += alphabets[index];
    }
    this.generatedalphabets = rgletters;
  }
  checkletter(useralphabet: string) {
    this.useralphabets = useralphabet
  }
  generateclass(original: string, entered: string) {
    if (!entered) {
      return 'default';
    }
    else if (entered === original) {
      return 'correct';
    }
    else if (entered !== original) {
      return 'notcorrect';
    }
  }
}
