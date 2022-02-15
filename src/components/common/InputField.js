import * as React from 'react';
import Box from '@mui/material/Box';

import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';


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
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <FilledInput
                        id="filled-adornment-weight"
                        value={values.weight}
                        onChange={handleChange('weight')}
                        endAdornment={<InputAdornment position="end">USDT</InputAdornment>}
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
                </FormControl>
            </div>
        </Box>
    );
}

export default InputField;
