import React from "react";
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Button, Card, CardContent, Typography, Toolbar, Container} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {RootState} from '../../store/index'


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        button: {
            margin: 5,
        },
        container: {
            marginTop: 20,
            marginLeft: "25%",
            marginRight: "25%"
        }
    })
)


const Profile = () => {
    const classes = useStyles();
    const history = useHistory();
    const userState = useSelector((state: RootState) => state.system)

    const back = () => {
        history.push('/home')
    }

    return (
        <Container
        className={classes.container}>
            <Toolbar>
                <Button
                className={classes.button}
                variant='contained'
                color='secondary'
                startIcon={<ArrowBackIcon/>}
                onClick={back}
                >
                    Back
                </Button>
            </Toolbar>
            <Typography variant='h3' gutterBottom>
                {
                    userState.username ? 
                    userState.username
                    :
                    'No one is logged in'
                }
            </Typography>
        </Container>
    )
}

export default Profile;