import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-100', cssClass]">
      <!-- ng-content allows receiving child components - High Order Component - HOC -->
      <ng-content />
    </section>
  `,
})
export class HeavyLoadersFastComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('Heavy loader fast builded');
  }
}
