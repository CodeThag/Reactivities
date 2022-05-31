import { Grid, List, ListItem } from '@mui/material';
import React from 'react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[]
}

export default function ActivityDashboard({ activities }: Props) {

    return (
        <Grid container>
            <ActivityList activities={activities} />
        </Grid>
    );
}