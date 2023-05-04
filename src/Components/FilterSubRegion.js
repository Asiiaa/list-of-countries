import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function FilterSubRegion({collections, setValueSubRegion}) {
  // const subregionCollections = collections.map((country) => country.subregion)
  // const subregionCollectionsFilter = Array.from(new Set(subregionCollections))
  // console.log(subregionCollectionsFilter)
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Subregion</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {/* {
            subregionCollectionsFilter
                .map((country) => (
                <FormControlLabel key={Math.random()} onClick={() => setValueSubRegion(country)} control={<Radio />} label={country} />
            ))
        } */}

        <FormControlLabel onClick={() => setValueSubRegion("Northern Europe")} value="Northern Europe" control={<Radio />} label="Northern Europe" />
        <FormControlLabel onClick={() => setValueSubRegion("Southern Asia")} value="Southern Asia" control={<Radio />} label="Southern Asia" />
        <FormControlLabel onClick={() => setValueSubRegion("Central Europe")} value="Central Europe" control={<Radio />} label="Central Europe" />
        <FormControlLabel onClick={() => setValueSubRegion("Western Asia")} value="Western Asia" control={<Radio />} label="Western Asia" />
        <FormControlLabel onClick={() => setValueSubRegion("Southern Africa")} value="Southern Africa" control={<Radio />} label="Southern Africa" />
        <FormControlLabel onClick={() => setValueSubRegion("Eastern Asia")} value="Eastern Asia" control={<Radio />} label="Eastern Asia" />
        <FormControlLabel onClick={() => setValueSubRegion("Western Europe")} value="Western Europe" control={<Radio />} label="Western Europe" />
        <FormControlLabel onClick={() => setValueSubRegion("South America")} value="South America" control={<Radio />} label="South America" />
        <FormControlLabel onClick={() => setValueSubRegion("Australia and New Zealand")} value="Australia and New Zealand" control={<Radio />} label="Australia and New Zealand" />
        <FormControlLabel onClick={() => setValueSubRegion("Central America")} value="Central America" control={<Radio />} label="Central America" />
        <FormControlLabel onClick={() => setValueSubRegion("Western Africa")} value="Western Africa" control={<Radio />} label="Western Africa" />
        <FormControlLabel onClick={() => setValueSubRegion("Southeast Europe")} value="Southeast Europe" control={<Radio />} label="Southeast Europe" />
        <FormControlLabel onClick={() => setValueSubRegion("Southern Europe")} value="Southern Europe" control={<Radio />} label="Southern Europe" />
        <FormControlLabel onClick={() => setValueSubRegion("Eastern Africa")} value="Eastern Africa" control={<Radio />} label="Eastern Africa" />
        <FormControlLabel onClick={() => setValueSubRegion("North America")} value="North America" control={<Radio />} label="North America" />
        <FormControlLabel onClick={() => setValueSubRegion("Caribbean")} value="Caribbean" control={<Radio />} label="Caribbean" />
        <FormControlLabel onClick={() => setValueSubRegion("Eastern Europe")} value="Eastern Europe" control={<Radio />} label="Eastern Europe" />
        <FormControlLabel onClick={() => setValueSubRegion("Micronesia")} value="Micronesia" control={<Radio />} label="Micronesia" />
        <FormControlLabel onClick={() => setValueSubRegion("Melanesia")} value="Melanesia" control={<Radio />} label="Melanesia" />
        <FormControlLabel onClick={() => setValueSubRegion("Northern Africa")} value="Northern Africa" control={<Radio />} label="Northern Africa" />
        <FormControlLabel onClick={() => setValueSubRegion("South-Eastern Asia")} value="South-Eastern Asia" control={<Radio />} label="South-Eastern Asia" />
        <FormControlLabel onClick={() => setValueSubRegion("Polynesia")} value="Polynesia" control={<Radio />} label="Polynesia" />
        <FormControlLabel onClick={() => setValueSubRegion("Middle Africa")} value="Middle Africa" control={<Radio />} label="Middle Africa" />
        <FormControlLabel onClick={() => setValueSubRegion("Central Asia")} value="Central Asia" control={<Radio />} label="Central Asia" />
      </RadioGroup>
    </FormControl>
  );
}