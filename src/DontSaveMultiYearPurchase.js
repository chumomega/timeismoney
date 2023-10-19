import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function DontSaveMultiYearPurchase() {
  return (
    <div>
      <Typography variant="h6" gutterBottom>I Have Money For A Multi Year Purchase</Typography>
      <Typography variant="body1" gutterBottom>
        If I leave X dollars alone, how long will it take me to buy 
        something that costs A dollars every month for B months starting 
        D months from now? The interest rate is C%.
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

export default DontSaveMultiYearPurchase;
