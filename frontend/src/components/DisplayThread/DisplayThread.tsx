import React from "react";
import { useSelector} from 'react-redux'
import PropTypes from 'prop-types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Card, CardContent, Typography} from '@material-ui/core'
import { Thread } from "../../store/threads/types";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        card: {
            minWidth: 400
        },
        meta: {
            fontSize: 14,
        }
    })
)



const DisplayThread = (props: { thread: { title: React.ReactNode; author: string; date: string; content: React.ReactNode; }; }) => {
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

// DisplayThread.propTypes = {
//     thread: {
//         author: PropTypes.string,
//         content: PropTypes.string,
//         date: PropTypes.string,
//         comments: PropTypes.array
//     }
// }

export default DisplayThread;