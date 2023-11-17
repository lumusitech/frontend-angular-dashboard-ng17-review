import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'dashboard-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()" />

    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `,
  styles: ``,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change detenction: ${this.frameworkAsSignal().name}`
  );

  // Signal way of declaring a property
  public frameworkAsSignal = signal({
    type: 'signal with onPush strategy - zoneless',
    name: 'Angular',
    releaseDate: '2016',
  });

  // Traditional way of declaring a property
  public frameworkAsProperty = {
    type: "traditional way with zone.js can't be changed with onPush strategy",
    name: 'Angular',
    releaseDate: '2016',
  };

  constructor() {
    setTimeout(() => {
      // change detection with zone.js
      // using onPush this property can't be changed
      // this.frameworkAsProperty.name = 'React';

      // But with signal we can change it and is all so rapid
      this.frameworkAsSignal.update((v) => ({
        ...v,
        name: 'React',
      }));

      console.log('ready!');
    }, 3000);
  }
}
