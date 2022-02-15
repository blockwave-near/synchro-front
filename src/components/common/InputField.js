import * as React from 'react';
import Box from '@mui/material/Box';

import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';

const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    600: '#0072E5',
};

const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const StyledInputElement = styled(FilledInput)`
  width: 320px;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${grey[900]};
  background: ${grey[50]};
  border: 1px solid ${grey[300]};
  border-radius: 8px;
  padding: 12px 12px;

  &:hover {
    background: ${grey[100]};
    border-color: ${grey[400]};
  }

  &:focus {
    outline: 3px solid ${blue[100]};
  }
`


function InputField() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <FormHelperText id="filled-weight-helper-text">Amount</FormHelperText>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <StyledInputElement
                        id="filled-adornment-weight"
                        value={values.weight}
                        onChange={handleChange('weight')}
                        endAdornment={<InputAdornment position="end">USDT</InputAdornment>}
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                </FormControl>
            </div>
        </Box>
    );
}

export default InputField;
