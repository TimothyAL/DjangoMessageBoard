import React, {useEffect, useMemo} from "react";
import { useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../store/index'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Box, TextField} from '@material-ui/core'
import { updateCurrentAuthor, updateCurrentDate, updateCurrentID, updateCurrentTitle, updateCurrentContent } from "../../store/threads/actions";
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'


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

const CreateThread = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const threadState = useSelector((state: RootState) => state.threads);
    const userState = useSelector((state: RootState) => state.system);
    const editor = useMemo(() => withReact(createEditor()), [])

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

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(updateCurrentContent(e.target.value))
    }

    return (
        <>
            <Box className={classes.root}>
                <form noValidate autoComplete='off'>
                    <div>
                        <TextField id='title' label='Title of thread' value={threadState.currentThread.title} onChange={handleTitleChange} />
                    </div>
                    <div>
                        <Slate editor={editor} value={threadState.currentThread.content} onChange={handleContentChange} />
                    </div>
                </form>
            </Box>
        </>
    )

}

export default CreateThread;