import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import HomeIcon from './HomeIcon';

function SaveMultiYearPurchase() {
  const [dollarsPerMonth, setDollarsPerMonth] = React.useState(50);
  const [numMonthsSaving, setNumMonthsSaving] = React.useState(20);
  const [numMonthsSpending, setNumMonthsSpending] = React.useState(10);
  const [numMonthsSpendingDelayed, setNumMonthsSpendingDelayed] = React.useState(10);
  const [apr, setAPR] = React.useState(10);
  const [answer, setAnswer] = React.useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // let periodicRate = (apr / 100) / 12

    // let x = Math.log((-1*dollarsPerMonth/periodicRate - totalCost) / (-1*dollarsPerMonth/periodicRate))
    // let y = Math.log(1 + periodicRate)

    // setAnswer(x/y)
  };

  return (
    <div>
      <HomeIcon />
      <Typography variant="h6" gutterBottom>Save Money For A Multi Year Purchase</Typography>
      <Typography variant="body1" component={'span'} gutterBottom>
        How much do I need to save per month for <Input value={numMonthsSaving} required={true}/> months to afford something 
        that costs <Input value={dollarsPerMonth} required={true}/> dollars every month for <Input value={numMonthsSpending} required={true}/> 
        months starting <Input value={numMonthsSpendingDelayed} required={true}/> months 
        from now? The annual percentage rate (APR) is <Input value={apr} required={true}/>%.
      </Typography>
      <br/>
      <Button variant="outlined">Submit</Button>
      <br/><br/>
      <Typography variant="body1" gutterBottom>
        ...{answer} dollars per month.
      </Typography>
    </div>
  );
}

export default SaveMultiYearPurchase;
