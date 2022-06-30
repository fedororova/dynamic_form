import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-yakutsk-page',
  styleUrls: ['./yakutsk-page.component.css'],
  templateUrl: './yakutsk-page.component.html',
})
export class YakutskPageComponent implements OnInit {
  myFirstReactiveForm: FormGroup;

  public data = {
    name: "Население Якутска на 1 января 2022 года составляет 330615 человек." ,
		name2: "На 1 января 2021 года по численности населения город находился на 59-м месте из 1116 городов Российской Федерации.",
		name3: "Якутск — многонациональный город. Большинство составляют якуты (саха) — 141 тыс. чел. и русские — 113 тыс. чел. Также проживают эвенки, эвены и другие.",
  };

  constructor(private fb: FormBuilder){}

  public ngOnInit(): void {
    let izm = JSON.parse(localStorage.getItem('str'));
  }

  public save(): void {
    const str: string = JSON.stringify(this.data);
    localStorage.setItem('key',str);
  }
}
