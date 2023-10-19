import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

function DontSaveSingleYearPurchase() {
  const [totalDollars, setTotalDollars] = React.useState(5000);
  const [totalCost, setTotalCost] = React.useState(5000);
  const [apr, setAPR] = React.useState(10);
  const [answer, setAnswer] = React.useState('?');

  const handleSubmit = (event) => {
    event.preventDefault();
    let periodicRate = (apr / 100) / 12

    let x = Math.log(totalCost / totalDollars)
    let y = Math.log(1 + periodicRate)

    setAnswer(x/y)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>I Have Money For A Single Year Purchase</Typography>
        <Typography variant="body1" component={'span'} gutterBottom>
          If I leave <Input value={totalDollars} required={true} onChange={(event) => {setTotalDollars(event.target.value)}}/> dollars alone, how long will it take me
          to buy something that costs <Input value={totalCost} required={true} onChange={(event) => {setTotalCost(event.target.value)}}/> dollars?
          The annual percentage rate (APR) is <Input value={apr} required={true} onChange={(event) => {setAPR(event.target.value)}}/> compounded monthly%.
        </Typography>
        <br/>
        <Button variant="outlined" type="submit">Submit</Button>
        <br/><br/>
        <Typography variant="body1" gutterBottom>
          ...It will take you {answer} months.
        </Typography>
      </form>
    </div>
  );
}

export default DontSaveSingleYearPurchase;
