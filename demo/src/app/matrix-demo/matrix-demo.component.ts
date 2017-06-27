import { Component } from '@angular/core';
import { ExampleData } from '../services';
import {  } from 'my-ngx-library';

@Component({
  selector: 'matrix-demo',
  template: '<xyz-matrix [sourceData]="exampleData"></xyz-matrix>'
})
export class MatrixDemoComponent {
  exampleData = ExampleData.matrixExampleSource();
  constructor() { }

}
