import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../store/index'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import DisplayThread from '../DisplayThread/DisplayThread'
import ThreadService from '../../services/thread.service'
import { updateThreads } from "../../store/threads/actions";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            marginTop: 20,
            marginLeft: "25%",
            marginRight: "25%"
        },
        list: {
            padding: 10
        }
        
    })
)

export const Home = () => {
    const threadService = new ThreadService();
    const dispatch = useDispatch();
    const classes = useStyles();
    const threadState = useSelector((state: RootState) => state.threads)

    useEffect(() => {
        async function getThreads() {
            const resp = await threadService.getAllThreads();
            dispatch(updateThreads(resp.data))
        }
        getThreads();
    }, [])


    return (
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

    )
}


