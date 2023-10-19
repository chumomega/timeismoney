import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

function DontSaveSingleYearPurchase() {
  const [totalDollars, setTotalDollars] = React.useState(5000);
  const [totalCost, setTotalCost] = React.useState(5000);
  const [apr, setAPR] = React.useState(10);
  const [answer, setAnswer] = React.useState(0);

  return (
    <div>
      <Typography variant="h6" gutterBottom>I Have Money For A Single Year Purchase</Typography>
      <Typography variant="body1" component={'span'} gutterBottom>
        If I leave <Input value={totalDollars} required={true}/> dollars alone, how long will it take me 
        to buy something that costs <Input value={totalCost} required={true}/> dollars? 
        The annual percentage rate (APR) is <Input value={apr} required={true}/>%.
      </Typography>
      <br/>
      <Button variant="outlined">Submit</Button>
      <br/><br/>
      <Typography variant="body1" gutterBottom>
        ...It will take you <Input value={answer} required={true}/> months.
      </Typography>
    </div>
  );
}

export default DontSaveSingleYearPurchase;
