import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import HomeIcon from './HomeIcon';

function SaveMultiYearPurchase() {
  const [dollarsPerMonth, setDollarsPerMonth] = React.useState(50);
  const [numMonthsSpending, setNumMonthsSpending] = React.useState(10);
  const [numMonthsSpendingDelayed, setNumMonthsSpendingDelayed] = React.useState(10);
  const [apr, setAPR] = React.useState(10);
  const [answer, setAnswer] = React.useState("?");

  const handleSubmit = (event) => {
    event.preventDefault();
    let periodicRate = (apr / 100) / 12

    // Future Value of an Annuity =C (( (1+i)^n - 1 ) / i), where C is the regular payment, i is the annual interest rate or discount rate in decimal, and n is the number of years or periods
    let fv_of_costs = dollarsPerMonth * ((Math.pow((1+periodicRate), numMonthsSpending) - 1) / periodicRate)
    console.log(`fv_of_costs is ${fv_of_costs}`)

    let num_periods_saving = Number(numMonthsSpending) + Number(numMonthsSpendingDelayed)
    console.log(`num_periods_saving is ${num_periods_saving}`)

    let denom = (Math.pow((1+periodicRate), num_periods_saving) - 1) / periodicRate
    console.log(`denom is ${denom}`)
    let amt_to_save = fv_of_costs / denom

    setAnswer(amt_to_save)
  };

  return (
    <div>
      <HomeIcon />
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>Save Money For A Multi Year Purchase</Typography>
        <Typography variant="body1" component={'span'} gutterBottom>
          How much do I need to save per month to afford something 
          that costs <Input value={dollarsPerMonth} type="number" required={true} onChange={(event) => {setDollarsPerMonth(event.target.value)}}/>
          dollars every month for <Input value={numMonthsSpending} type="number" required={true} onChange={(event) => {setNumMonthsSpending(event.target.value)}}/> 
          months. I have <Input value={numMonthsSpendingDelayed} type="number" required={true} onChange={(event) => {setNumMonthsSpendingDelayed(event.target.value)}}/>
          months before I need to start making the payments.
          The annual percentage rate (APR) is <Input value={apr} type="number" required={true} onChange={(event) => {setAPR(event.target.value)}}/>%.
        </Typography>
        <br/>
        <Button variant="outlined" type="submit">Submit</Button>
        <br/><br/>
        <Typography variant="body1" gutterBottom>
          ...{answer} dollars per month.
        </Typography>
      </form>
    </div>
  );
}

export default SaveMultiYearPurchase;
