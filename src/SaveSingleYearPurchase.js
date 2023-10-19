import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import HomeIcon from './HomeIcon';

function SaveSingleYearPurchase() {
  const [dollarsPerMonth, setDollarsPerMonth] = React.useState(50);
  const [totalCost, setTotalCost] = React.useState(5000);
  const [apr, setAPR] = React.useState(10);
  const [answer, setAnswer] = React.useState('?');

  const handleSubmit = (event) => {
    event.preventDefault();
    // manual nper calculation https://www.reddit.com/r/learnmath/comments/isejs0/excel_nper_calculations_manually/
    let periodicRate = (apr / 100) / 12

    let x = Math.log((-1*dollarsPerMonth/periodicRate - totalCost) / (-1*dollarsPerMonth/periodicRate))
    let y = Math.log(1 + periodicRate)

    setAnswer(x/y)
  };

  return (
    <div>
      <HomeIcon />
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>Save Money For A Single Year Purchase</Typography>
        <Typography variant="body1" component={'span'} gutterBottom>
          If I save <Input value={dollarsPerMonth} required={true} onChange={(event) => {setDollarsPerMonth(event.target.value)}}/> dollars
          every month, how long will it take me to buy something that
          costs <Input value={totalCost} required={true} onChange={(event) => {setTotalCost(event.target.value)}}/> dollars?
          The annual percentage rate (APR) is <Input value={apr} required={true} onChange={(event) => {setAPR(event.target.value)}}/>%.
        </Typography>
        <br/>
        <br/>
        <Button variant="outlined" type="submit">Submit</Button>
        <br/>
        <br/>
        <Typography variant="body1" gutterBottom>
          ...It will take you {answer} months.
        </Typography>
      </form>
    </div>
  );
}

export default SaveSingleYearPurchase;
