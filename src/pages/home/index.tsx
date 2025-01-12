import React, { useState } from 'react';
import { events } from './event-data/eventData';
import HorizontalTabs from '../../components/horizotal-tabs';
import TabPanel from '../../components/TabPanel';
import { makeStyles } from 'tss-react/mui';
import LogoImage from '../../assets/logoImage.jpg';
import GridView from './GridView';
import ListView from './ListView';
import { Typography } from '@mui/material';

const HomePage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { classes } = useStyles();

  const handleTabChange = (_event: React.ChangeEvent<any>, newTab: number) => {
    setSelectedTab(newTab);
  };

  const tabs = [
    {
      Icon: <span className="material-symbols-outlined">grid_view</span>,
      value: 0,
    },
    {
      Icon: <span className="material-symbols-outlined">list</span>,
      value: 1,
    },
  ];

  return (
    <div className={classes.homePageWrapper}>
      <div className={classes.logoContainer}>
        <img src={LogoImage} alt="Cover" className={classes.logo} />
      </div>

      <div className={classes.headerContainer}>
        <Typography variant="heading">Tickets for conferences</Typography>
        <div className={classes.tabsContainer}>
          <Typography variant="text" className={classes.view}>
            View:
          </Typography>
          <HorizontalTabs
            activeTab={selectedTab}
            onChange={handleTabChange}
            tabs={tabs}
          />
        </div>
      </div>

      <TabPanel currentValue={selectedTab} tabValue={0}>
        <GridView events={events} />
      </TabPanel>

      <TabPanel currentValue={selectedTab} tabValue={1}>
        <ListView events={events} />
      </TabPanel>
    </div>
  );
};

const useStyles = makeStyles()((theme) => {
  return {
    homePageWrapper: {
      padding: '4vh 6vw',
    },
    logoContainer: {
      width: 'auto',
      display: 'flex',
      justifyContent: 'center',
      padding: '3rem',
    },
    logo: {
      width: 'auto',
      height: '100%',
      maxHeight: '170px',
      [theme.breakpoints.down('lg')]: {
        maxWidth: '100%',
        height: 'auto',
      },
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      [theme.breakpoints.down('lg')]: {
        width: '100%',
        flexDirection: 'column',
      },
    },
    tabsContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    view: {
      marginRight: 16,
      paddingTop: 4,
    },
  };
});

export default HomePage;
