import React from "react";
import { useSelector} from 'react-redux'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Card, CardContent, Typography} from '@material-ui/core'
import { Thread } from "../../store/threads/types";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        card: {
            minWidth: 400,
            backgroundColor:  '#c6c9c9'
        },
        meta: {
            fontSize: 14,
        }
    })
)



const DisplayThread = (props: {thread: Thread}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography  color='textPrimary' variant='h5' gutterBottom>
                    {props.thread.title}
                </Typography>
                <Typography className={classes.meta} color='textSecondary'>
                    {props.thread.author + ', posted on ' + props.thread.date}
                </Typography>
                <Typography>
                    {props.thread.content}
                </Typography>
            </CardContent>
        </Card>
    )
}



export default DisplayThread;