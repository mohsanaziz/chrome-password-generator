import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'maz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  passwordGeneratorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.passwordGeneratorForm = this.formBuilder.group({
      length: [2048],
      symbols: [true],
      number: [true],
      lowerCase: [true],
      upperCase: [true],
      similar: [true]
    });
  }
}
