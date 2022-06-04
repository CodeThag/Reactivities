import { LoadingButton } from '@mui/lab';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, ButtonGroup, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}
export default function ActivityList({ activities, selectActivity, deleteActivity, submitting }: Props) {
    const[target, setTarget] = useState('');

    function handleDeleteActivity(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);    
        deleteActivity(id);
    }

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
                                <Button  variant="outlined" color="success" size="small">View</Button>
                                <LoadingButton
                                    name={activity.id}
                                    size="small"
                                    endIcon={<DeleteIcon />}
                                    loading={submitting && target === activity.id}
                                    loadingPosition="end"
                                    onClick={(e) => handleDeleteActivity(e, activity.id)}
                                    variant="contained" 
                                    color="error" 
                                >Delete</LoadingButton>
                            </ButtonGroup>
                        </CardActions>
                    </Card>
                );
            })}
        </Stack>
    );
}