import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import {RootState} from '../../store/index'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import DisplayThread from '../DisplayThread/DisplayThread'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            marginTop: 20,
            marginLeft: "15%",
            marginRight: "15%"
        },
        list: {
            padding: 10
        }
        
    })
)

export const Home = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const threadState = useSelector((state: RootState) => state.threads)

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


