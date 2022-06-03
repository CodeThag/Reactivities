import { Button, ButtonGroup, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}
export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
    return (
        <Stack spacing={2}>
            {activities.map((activity) => {
                return (
                    <Card variant='outlined' key={activity.id}>
                        <CardContent>
                            <Typography variant="h5" component="div">{activity.title}</Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">{activity.date.toString()}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {activity.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonGroup>
                                <Button onClick={() => selectActivity(activity.id)} variant="outlined" color="success" size="small">View</Button>
                                <Button onClick={() => deleteActivity(activity.id)} variant="outlined" color="error" size="small">Delete</Button>
                            </ButtonGroup>
                        </CardActions>
                    </Card>
                );
            })}
        </Stack>
    );
}