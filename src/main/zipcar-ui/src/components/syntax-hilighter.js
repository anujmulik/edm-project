import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import useClippy from 'use-clippy';
import Button from "@material-ui/core/Button";

SyntaxHighlighter.registerLanguage('sql', sql);

export const SyntaxHighliter = ({codeString}) => {
    return (
        <SyntaxHighlighter language="sql" style={docco}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));



export default function SimpleExpansionPanel({codeString, title}) {
    const classes = useStyles();
    const [ clipboard, setClipboard ] = useClippy();

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<FileCopyIcon />}
                            onClick={()=> setClipboard(codeString)}
                        >
                            Copy To Clipboard
                        </Button>
                        <SyntaxHighliter codeString={codeString}/>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}