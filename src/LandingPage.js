import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function LandingPage() {
  // const [value, setValue] = React.useState('female');

  // const handleChange = (event) => {
  //   setValue((event.target).value);
  // };

  return (
    <div>
      <Typography variant="h3" gutterBottom>Time Is Money</Typography>
      <FormControl>
        <FormLabel id="type-of-purchase-label">What type of purchase do you want to make?</FormLabel>
        <RadioGroup
          aria-labelledby="type-of-purchase-label"
          defaultValue="a"
          name="radio-buttons-group1"
        >
          <FormControlLabel value="a" control={<Radio />} label="Single-Year Purchase (ie - trip, property, etc)" />
          <FormControlLabel value="b" control={<Radio />} label="Multi-Year Purchase (ie - college tuition, property, etc)" />
        </RadioGroup>
        <br/>
        <FormLabel id="type-of-saving-label">Do you want to save for this purchase or do you have the money set aside?</FormLabel>
        <RadioGroup
          aria-labelledby="type-of-saving-label"
          defaultValue="a"
          name="radio-buttons-group2"
        >
          <FormControlLabel value="a" control={<Radio />} label="Save" />
          <FormControlLabel value="b" control={<Radio />} label="I have the money" />
        </RadioGroup>
        <br/>
        <Button variant="outlined">Submit</Button>
      </FormControl>
    </div>
  );
}

export default LandingPage;
