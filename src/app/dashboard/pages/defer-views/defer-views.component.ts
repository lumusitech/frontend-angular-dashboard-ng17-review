import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  selector: 'dashboard-defer-views',
  standalone: true,
  imports: [CommonModule, TitleComponent, HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {}
