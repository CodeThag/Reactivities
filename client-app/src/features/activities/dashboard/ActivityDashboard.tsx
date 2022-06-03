import { Grid } from '@mui/material';
import React from 'react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEditActivity: (activity:Activity) => void;
    deleteActivity:(id: string) => void;
}

export default function ActivityDashboard({ activities, selectedActivity, selectActivity, cancelSelectActivity,
    editMode, openForm, closeForm, createOrEditActivity, deleteActivity }: Props) {

    // The && denotes that if everything on the left is fine execute right
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item md={8}>
                <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} />
            </Grid>
            <Grid item md={4}>
                {selectedActivity && !editMode &&
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm} />}
                {editMode &&
                    <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEditActivity={createOrEditActivity} />}
            </Grid>
        </Grid>
    );
}