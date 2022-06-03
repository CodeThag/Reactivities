import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

const ActivityDetails = ({ activity, cancelSelectActivity, openForm }: Props) => {

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
                    <Button onClick={() => cancelSelectActivity()} size="small" variant="outlined" color="error">Cancel</Button>
                </ButtonGroup>
            </CardActions>
        </Card>);
}

export default ActivityDetails;