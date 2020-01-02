import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'maz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  passwordGeneratorForm: FormGroup;
  password: FormControl = new FormControl('');

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
    this.initForm();
  }

  /**
   * Initialize the form.
   */
  initForm() {
    this.passwordGeneratorForm = this.formBuilder.group({
      length: [2048],
      symbols: [true],
      number: [true],
      lowerCase: [true],
      upperCase: [true]
    });
  }

  /**
   * Generate the password.
   */
  generatePassword() {
    let password = '';
    let referenceString = '';

    if (this.passwordGeneratorForm.get('symbols').value) {
      referenceString += this.SYMBOLS.join('');
    }

    if (this.passwordGeneratorForm.get('number').value) {
      referenceString += this.NUMBER.join('');
    }

    if (this.passwordGeneratorForm.get('lowerCase').value) {
      referenceString += this.LOWERCASE.join('');
    }

    if (this.passwordGeneratorForm.get('upperCase').value) {
      referenceString += this.UPPERCASE.join('');
    }

    for (let index = 0; index < this.passwordGeneratorForm.get('length').value; index++) {
      password += referenceString.charAt(Math.floor(Math.random() * referenceString.length));
    }

    this.password.setValue(password);
  }

  /**
   * Clear the form.
   */
  clear() {
    this.passwordGeneratorForm.reset();
    this.initForm();
    this.password.reset();
  }
}
