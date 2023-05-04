import * as React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons({setValueSort}) {
    return (
        <Stack direction="row" spacing={2}>
        <Button onClick={() => setValueSort('population')} variant="outlined">Population</Button>
        <Button onClick={() => setValueSort('area')} variant="outlined">Area</Button>
        <Button onClick={() => setValueSort('reset')} variant="outlined" color="error">Reset</Button>
        </Stack>
    );
}