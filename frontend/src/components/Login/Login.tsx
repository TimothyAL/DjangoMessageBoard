import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Container, Box, TextField, Button} from '@material-ui/core';
import UserService from "../../services/user.service";
import { updateUsername, updatePassword } from "../../store/system/actions";
import {RootState} from '../../store/index'

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



const Login = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state: RootState) => state.system);
    const userService = new UserService();
    const classes = useStyles();

    const login = async () => {
        const resp = await userService.useLogin(userState.username, userState.password)
        if (resp.status !== 200) {
            console.log('request failed')
        }
        console.log(userState.username, userState.password)
    }

    const handleUsernameChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(updateUsername(event.target.value))
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(updatePassword(event.target.value))
    }

    return (
        <>
            <Container>
                <Box>
                    <form className={classes.root} noValidate autoComplete='off'>
                        <div>
                            <TextField id='username' label='Username' value={userState.username} onChange={handleUsernameChange}/>
                        </div>
                        <div>
                            <TextField id='password' label='Password' type='password' value={userState.password} onChange={handlePasswordChange}/>
                        </div>
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