import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Container, Box, TextField, Button} from '@material-ui/core';
import UserService from "../../services/user.service";
import { updateUsername } from "../../store/system/actions";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch'
            }
        }
    })
)

interface RootState {
    system: {
        username: string
    }
    
}

const Login = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state: RootState) => state.system);
    const userService = new UserService();
    const classes = useStyles();

    const login = async () => {
        const resp = await userService.useLogin(userState.username)
        if (resp.status !== 200) {
            console.log('request failed')
        }
        console.log(userState.username, resp)
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(updateUsername(event.target.value))
    }

    return (
        <>
            <Container>
                <Box>
                    <form className={classes.root} noValidate autoComplete='off'>
                        <TextField id='username' label='Username' value={userState.username} onChange={handleChange}/>
                    </form>
                    <Button variant='contained' color='primary'
                    onClick={login}>
                        Login
                    </Button>
                </Box>
            </Container>
        </>
    )
}

export default Login;