import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Copyright from './Copyright';
import LoginForm from './LoginForm';

const Login = (props: any) => {

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>

        <LoginForm theme={theme} />
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </ThemeProvider>
    )
}

export default Login;