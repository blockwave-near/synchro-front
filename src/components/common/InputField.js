import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import {styled} from '@mui/material/styles';
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
  width: 640px;
  height: 48px;
  font-weight: 400;
  color: ${grey[900]};
  background: #F5F5F5;
  border-radius: 10px;
  padding: 20px;

  .MuiFilledInput-input {
    padding: 0;
  }

  &:hover {
    background: ${grey[100]};
    border-color: ${grey[400]};
  }

  &:focus {
    outline: 3px solid ${blue[100]};
  }
`

const StyledInputAdornment = styled(InputAdornment)`
  p {
    font-weight: 500;
    font-size: 18px;
    color: #C4C4C4;
  }
`

const StyledFormHelperText = styled(FormHelperText)`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #777777;
  justify-content: flex-end;

  p {
    text-decoration: underline;
  }
`

function InputField() {
    const [values, setValues] = React.useState(0);

    console.log(values);

    const handleChange = (prop) => (event) => {
        setValues(event.target.value.replace(/(^0+)/, ""));
    };

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <div>
                <FormHelperText id="filled-weight-helper-text">Amount</FormHelperText>
                <FormControl variant="filled">
                    <StyledInputElement
                        id="filled-adornment-weight"
                        disableUnderline={true}
                        value={values.USDT}
                        type="number"
                        onChange={handleChange('USDT')}
                        endAdornment={<StyledInputAdornment position="end">USDT</StyledInputAdornment>}
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                            'aria-label': 'USDT',
                        }}
                    />
                </FormControl>
                <StyledFormHelperText id="filled-weight-helper-text">Wallet:&nbsp;<p>{values}</p></StyledFormHelperText>
            </div>
        </Box>
    );
}

export default InputField;
