import {Component, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InvestmentResults} from '../../models';

@Component({
  selector: 'app-user-input',
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.html',
  styleUrl: './user-input.scss'
})
export class UserInput {
  calculate = output<InvestmentResults>()
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    })
  }
}
