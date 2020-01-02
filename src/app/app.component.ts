import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'maz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  passwordGeneratorForm: FormGroup;

  private readonly SYMBOLS: string[] = ['@', '#', '$', '%', '[', ']', '(', ')', '~', '*', '-', '_', ';'];
  private readonly NUMBER: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  private readonly LOWERCASE: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  private readonly UPPERCASE: string[] = this.LOWERCASE.map((lowercase: string) => lowercase.toUpperCase());

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.passwordGeneratorForm = this.formBuilder.group({
      length: [2048],
      symbols: [true],
      number: [true],
      lowerCase: [true],
      upperCase: [true]
    });
  }

  generatePassword() {
    let password = '';
    const superString = this.SYMBOLS.join('') + this.NUMBER.join('') + this.LOWERCASE.join('') + this.UPPERCASE.join('');

    for (let index = 0; index < this.passwordGeneratorForm.get('length').value; index++) {
      password += superString.charAt(Math.floor(Math.random() * superString.length));
    }
  }
}
