import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import HomeIcon from './HomeIcon';

function DontSaveMultiYearPurchase() {
  const [totalDollars, setTotalDollars] = React.useState(5000);
  const [dollarsPerMonth, setNumMonthsSaving] = React.useState(20);
  const [numMonthsSpending, setNumMonthsSpending] = React.useState(10);
  const [numMonthsSpendingDelayed, setNumMonthsSpendingDelayed] = React.useState(10);
  const [apr, setAPR] = React.useState(10);
  const [answer, setAnswer] = React.useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // let periodicRate = (apr / 100) / 12

    // let x = Math.log(totalCost / totalDollars)
    // let y = Math.log(1 + periodicRate)

    // setAnswer(x/y)
  };

  return (
    <div>
      <HomeIcon />
      <Typography variant="h6" gutterBottom>I Have Money For A Multi Year Purchase</Typography>
      <Typography variant="body1" component={'span'} gutterBottom>
        If I leave <Input value={totalDollars} required={true}/> dollars alone, how long will it take me to buy 
        something that costs <Input value={dollarsPerMonth} required={true}/> dollars every month 
        for <Input value={numMonthsSpending} required={true}/> months 
        starting <Input value={numMonthsSpendingDelayed} required={true}/> months from now?
        The annual percentage rate (APR) is <Input value={apr} required={true}/>%.
      </Typography>
      <br/>
      <Button variant="outlined">Submit</Button>
      <br/><br/>
      <Typography variant="body1" gutterBottom>
        ...It will take you {answer} months.
      </Typography>
    </div>
  );
}

export default DontSaveMultiYearPurchase;
