import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Bookings from './bookings';
import Refunds from "./refunds";
import Chauffeurs from "./chauffeurs";
import CSR from "./csr";
import IssueTypes from "./issue-type";
import Feedback from "./feedback";
import Queries from "./queries";
import CarSelection from "../components/car-selection";

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
                    <Tab label="Chauffeurs" {...a11yProps(1)} />
                    <Tab label="Refunds" {...a11yProps(2)} />
                    <Tab label="CSR" {...a11yProps(3)} />
                    <Tab label="Issue Types" {...a11yProps(4)} />
                    <Tab label="Feedback" {...a11yProps(5)} />
                    <Tab label="Queries" {...a11yProps(6)} />
                    <Tab label="Cost Calculator" {...a11yProps(7)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Bookings/>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <Chauffeurs/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Refunds/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <CSR/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <IssueTypes/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Feedback/>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Queries/>
            </TabPanel>
            <TabPanel value={value} index={7}>
                <CarSelection isCalculator={true}/>
            </TabPanel>
        </div>
    );
}