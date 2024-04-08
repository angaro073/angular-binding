import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <main>
    <div>
      <ul>
        <li>
          <a href="text-interpolation">TextInterpolationComponent</a>
        </li>
        <li>
          <a href="property-binding">PropertyBindingComponent</a>
        </li>
        <li>
          <a href="attribute-binding">AttributeBindingComponent</a>
        </li>
        <li>
          <a href="input-binding">InputBindingComponent</a>
        </li>
        <li>
          <a href="output-binding">OutputBindingComponent</a>
        </li>
        <li>
          <a href="two-way-binding">TwoWayBindingComponent</a>
        </li>
        <li>
          <a href="event-binding">EventBindingComponent</a>
        </li>
      </ul>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  </main>
  `
})
export class AppComponent {
  title = 'tests-project';
}
