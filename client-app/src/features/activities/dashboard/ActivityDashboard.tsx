import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityList from './ActivityList';

function ActivityDashboard() {

    const { activityStore } = useStore();

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore]);

    
    if (activityStore.loadingInitial) return <LoadingComponent content='Loading App' />

    // The && denotes that if everything on the left is fine execute right
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item md={8}>
                <ActivityList />
            </Grid>
            <Grid item md={4}>
                <h2>Activity Filters</h2>
            </Grid>
        </Grid>
    );
}

export default observer(ActivityDashboard);