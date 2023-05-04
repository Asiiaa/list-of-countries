import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function DisableElevation({setValue, value}) {
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button value='dependent' onClick={() => setValue('dependent')}>Dependent</Button>
      <Button value='independent' onClick={() => setValue('independent')}>Independent</Button>
    </ButtonGroup>
  );
}