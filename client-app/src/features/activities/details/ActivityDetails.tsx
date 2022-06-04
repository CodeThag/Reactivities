import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';


const ActivityDetails = () => {

    const { activityStore } = useStore();
    const { selectedActivity: activity, openForm, cancelSelectedActivity } = activityStore;

    if(!activity) return <LoadingComponent />;

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={`/assets/categoryImages/${activity.category}.jpg`}
                alt={`${activity.category}`}
            />
            <CardContent>
                <Typography variant="h5" component="div">{activity.title}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">{activity.date.toString()}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {activity.description}
                </Typography>
            </CardContent>
            <CardActions>
                <ButtonGroup>
                    <Button onClick={() => openForm(activity.id)} size="small" variant="outlined" color="warning">Edit</Button>
                    <Button onClick={() => cancelSelectedActivity()} size="small" variant="outlined" color="error">Cancel</Button>
                </ButtonGroup>
            </CardActions>
        </Card>);
}

export default ActivityDetails;