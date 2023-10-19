import * as React from 'react';
import {useNavigate} from "react-router";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function LandingPage() {
  const navigate = useNavigate();
  const [purchaseType, setPurchaseType] = React.useState('a');
  const [savingType, setSavingType] = React.useState('a');

  const handlePurchaseTypeChange = (event) => {
    setPurchaseType((event.target).value);
  };

  const handleSavingTypeChange = (event) => {
    setSavingType((event.target).value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/timeismoney/${purchaseType}${savingType}`);
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom>Time Is Money</Typography>

      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel id="type-of-purchase-label">What type of purchase do you want to make?</FormLabel>
          <RadioGroup
            aria-labelledby="type-of-purchase-label"
            name="radio-buttons-group1"
            value={purchaseType}
            onChange={handlePurchaseTypeChange}
          >
            <FormControlLabel value="a" control={<Radio />} label="Single-Year Purchase (ie - trip, property, etc)" />
            <FormControlLabel value="b" control={<Radio />} label="Multi-Year Purchase (ie - college tuition, property, etc)" />
          </RadioGroup>
          <br/>
          <FormLabel id="type-of-saving-label">Do you want to save for this purchase or do you have the money set aside?</FormLabel>
          <RadioGroup
            aria-labelledby="type-of-saving-label"
            name="radio-buttons-group2"
            value={savingType}
            onChange={handleSavingTypeChange}
          >
            <FormControlLabel value="a" control={<Radio />} label="Save" />
            <FormControlLabel value="b" control={<Radio />} label="I have the money" />
          </RadioGroup>
          <br/>
          <Button variant="outlined" type="submit">Next</Button>
        </FormControl>
      </form>

    </div>
  );
}

export default LandingPage;
