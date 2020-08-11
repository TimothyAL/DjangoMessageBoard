import React, {useEffect, useMemo} from "react";
import { useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../store/index'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Container, TextField, Button} from '@material-ui/core'
import { updateCurrentAuthor, updateCurrentDate, updateCurrentID, updateCurrentTitle, updateCurrentContent } from "../../store/threads/actions";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '75%'
            }
        },
        title: {
            fontSize: '22',
        }
    })
)

const CreateThread = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const threadState = useSelector((state: RootState) => state.threads);
    const userState = useSelector((state: RootState) => state.system);

    useEffect(() => {
        function setValues() {
            dispatch(updateCurrentAuthor(userState.username))
            dispatch(updateCurrentID(-1))
            dispatch(updateCurrentDate(new Date().toLocaleString().toString()))
        }
        setValues();
        
    }, [])

    const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(updateCurrentTitle(e.target.value))
    }

    const handleContentChange = (content: string) => {
        dispatch(updateCurrentContent(content))
    }

    return (
        <>
            <Container className={classes.root}>
                <form noValidate autoComplete='off'>
                    <div>
                        <TextField fullWidth className={classes.title} id='title' label='Title of thread' value={threadState.currentThread.title} onChange={handleTitleChange} />
                    </div>

                </form>
                <ReactQuill value={threadState.currentThread.content} onChange={handleContentChange} />
                <Button color='primary' variant='contained'>
                    Submit Thread
                </Button>
            </Container>

        </>
    )

}

export default CreateThread;