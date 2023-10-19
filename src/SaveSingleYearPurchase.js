import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function SaveSingleYearPurchase() {
  return (
    <div>
      <Typography variant="h6" gutterBottom>Save Money For A Single Purchase</Typography>
      <Typography variant="body1" gutterBottom>
        If I save X dollars every month, how long will it take me 
        to buy something that costs A dollars in B months? 
        The interest rate is C%.
      </Typography>
      <br/>
      <Button variant="outlined">Submit</Button>
      <br/><br/>
      <Typography variant="body1" gutterBottom>
        ...It will take you Y months.
      </Typography>
    </div>
  );
}

export default SaveSingleYearPurchase;
