import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Bookings from './bookings';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function MainScreen() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    //https://stackoverflow.com/questions/53219113/where-can-i-make-api-call-with-hooks-in-react

    const [cars, setCars] = useState(null);
    useEffect(() => {
        fetch('/api/cars/all')
            .then(results => results.json())
            .then(data => {
                setCars(data);
                console.log(JSON.stringify(data));
            });
    }, []); // <-- Have to pass in [] here!



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Bookings" {...a11yProps(0)} />
                    <Tab label="Tickets" {...a11yProps(1)} />
                    <Tab label="Refunds" {...a11yProps(2)} />
                    <Tab label="Escalation" {...a11yProps(3)} />
                    <Tab label="Customers" {...a11yProps(4)} />
                    <Tab label="Fines" {...a11yProps(5)} />
                    <Tab label="Payments" {...a11yProps(6)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Bookings/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
        </div>
    );
}