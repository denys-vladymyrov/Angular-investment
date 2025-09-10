import {Component} from '@angular/core';
import {Header} from './components/header/header';
import {UserInput} from './components/user-input/user-input';
import {InvestmentResults} from './models';



@Component({
  selector: 'app-root',
  imports: [Header, UserInput],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  calculateInvestmentResults(data: InvestmentResults) {
    const {initialInvestment, annualInvestment, expectedReturn, duration} = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    console.log(annualData);
    return annualData;
  }
}
