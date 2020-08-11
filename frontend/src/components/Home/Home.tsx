import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import {RootState} from '../../store/index'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Toolbar, Grid, Button} from '@material-ui/core'
import DisplayThread from '../DisplayThread/DisplayThread'
import ThreadService from '../../services/thread.service'
import { updateThreads } from "../../store/threads/actions";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            marginTop: 20,
            marginLeft: "25%",
            marginRight: "25%"
        },
        list: {
            padding: 10
        },
        button: {
            margin: 5,
        }
        
    })
)

export const Home = () => {
    const threadService = new ThreadService();
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const threadState = useSelector((state: RootState) => state.threads)

    useEffect(() => {
        async function getThreads() {
            const resp = await threadService.getAllThreads();
            console.log(resp.data)
            dispatch(updateThreads(resp.data))
        }
        getThreads();
    }, [])


    const createThread = () => {
        history.push('/createThread')
    }

    return (
        <>
            <Toolbar>
                    <Button 
                    className={classes.button}
                    variant='contained' 
                    color='secondary'
                    startIcon={<AddCircleIcon />}
                    onClick={createThread}>
                        Post a Thread
                    </Button>
                    <Button 
                    className={classes.button}
                    variant='contained' 
                    color='primary'
                    startIcon={<AccountCircleIcon />}>
                        My Profile
                    </Button>
                    
            </Toolbar>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    {
                        threadState.threads.length > 0 ?
                        threadState.threads.map((thread, i) => {
                            return(
                                <Grid item xs={12}>
                                    <DisplayThread thread={thread} key={i}/>
                                </Grid>
                                
                            )
                        })
                        :
                        null
                    }
                </Grid> 
            </div>
        </>
    )
}


