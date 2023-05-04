import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function FilterRegion({setValueRegion}) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Region</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onClick={() => setValueRegion("Europe")} value="europe" control={<Radio />} label="Europe" />
        <FormControlLabel onClick={() => setValueRegion("Asia")} value="asia" control={<Radio />} label="Asia" />
        <FormControlLabel onClick={() => setValueRegion("Africa")} value="africa" control={<Radio />} label="Africa" />
        <FormControlLabel onClick={() => setValueRegion("Americas")} value="americas" control={<Radio />} label="Americas" />
        <FormControlLabel onClick={() => setValueRegion("Oceania")} value="oceania" control={<Radio />} label="Oceania" />
        <FormControlLabel onClick={() => setValueRegion("Antarctic")} value="antarctic" control={<Radio />} label="Antarctic" />
      </RadioGroup>
    </FormControl>
  );
}