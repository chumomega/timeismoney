import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function SaveMultiYearPurchase() {
  return (
    <div>
      <Typography variant="h6" gutterBottom>Save Money For A Multi Year Purchase</Typography>
      <Typography variant="body1" gutterBottom>
        How much do I need to save per month for X months to afford something 
        that costs A dollars every month for B months starting D months 
        from now? The interest rate is C%.
      </Typography>
      <br/>
      <Button variant="outlined">Submit</Button>
      <br/><br/>
      <Typography variant="body1" gutterBottom>
        ...Y dollars per month.
      </Typography>
    </div>
  );
}

export default SaveMultiYearPurchase;
