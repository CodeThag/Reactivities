import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { Link as RouterLink } from "react-router-dom";


const ActivityDetails = () => {

    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent />;

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
                    <Button
                        component={RouterLink}
                        to={`/manage/${activity.id}`}
                        size="small" variant="outlined" 
                        color="warning">Edit</Button>
                    <Button 
                        component={RouterLink}
                        to="/activities"
                        size="small" variant="outlined" 
                        color="error">Cancel</Button>
                </ButtonGroup>
            </CardActions>
        </Card>);
}

export default observer(ActivityDetails);