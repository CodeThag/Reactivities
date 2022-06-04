import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    deleteActivity: (id: string) => void;
}

function ActivityDashboard({  deleteActivity }: Props) {

    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore;

    // The && denotes that if everything on the left is fine execute right
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item md={8}>
                <ActivityList />
            </Grid>
            <Grid item md={4}>
                {selectedActivity && !editMode &&
                    <ActivityDetails />}
                {editMode &&
                    <ActivityForm />}
            </Grid>
        </Grid>
    );
}

export default observer(ActivityDashboard);