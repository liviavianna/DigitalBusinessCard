import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Button from '@mui/material/Button';
import theme from '../theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

export default function Info () {
    return (
        <ThemeProvider theme={theme}>
        <div className='info'>
            <h1>Livia Vianna</h1>
            <h4>Frontend Developer</h4>
            <div className="buttons">
                <Stack spacing={2} direction="row">
                    <Button style={{width: '115px', height: '34px'}} color="secondary" variant="contained"startIcon={<FaEnvelope />}> Email</Button>
                    <Button href="https://www.linkedin.com/in/livia-vianna-ba870b234/"style={{width: '115px', height: '34px'}} variant="contained" disableElevation startIcon={<FaLinkedin />}>LinkedIn</Button>
                </Stack>
            </div>
        </div>
        </ThemeProvider>
    )
}
