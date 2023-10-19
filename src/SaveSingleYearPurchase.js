import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

function SaveSingleYearPurchase() {
  const [dollarsPerMonth, setDollarsPerMonth] = React.useState(50);
  const [totalCost, setTotalCost] = React.useState(5000);
  const [numMonths, setNumMonths] = React.useState(10);
  const [apr, setAPR] = React.useState(10);
  const [answer, setAnswer] = React.useState(0);
  
  return (
    <div>
      <Typography variant="h6" gutterBottom>Save Money For A Single Year Purchase</Typography>
      <Typography variant="body1" gutterBottom>
        If I save <Input value={dollarsPerMonth} required={true}/> dollars every month, how long will it take me 
        to buy something that costs <Input value={totalCost} required={true}/> dollars in <Input value={numMonths} required={true}/> months? 
        The annual percentage rate (APR) is <Input value={apr} required={true}/>%.
      </Typography>
      <br/>
      <Button variant="outlined">Submit</Button>
      <br/>
      <br/>
      <Typography variant="body1" gutterBottom>
        ...It will take you {answer} months.
      </Typography>
    </div>
  );
}

export default SaveSingleYearPurchase;
