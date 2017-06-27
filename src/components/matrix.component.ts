import { Component, Input } from '@angular/core';

@Component({
  selector: 'xyz-matrix',
  template: `
  <pre>
    {{sourceData | json}}
  </pre>
  `
})
export class MatrixComponent {
  @Input() sourceData;
  constructor() { }
}
