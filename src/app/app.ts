import {Component, signal} from '@angular/core';
import {Header} from './components/header/header';
import {UserInput} from './components/user-input/user-input';
import {InvestmentResult} from './components/investment-result/investment-result';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResult],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
