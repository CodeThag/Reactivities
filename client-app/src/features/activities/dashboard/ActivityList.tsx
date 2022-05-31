import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activities: Activity[];
}
export default function ActivityList({ activities }: Props) {
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
                            <Button size="small">View</Button>
                        </CardActions>
                    </Card>
                );
            })}
        </Stack>
    );
}