import { Component, signal } from '@angular/core';
import {Header} from './components/header/header';
import {UserInput} from './components/user-input/user-input';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('investment');
}
