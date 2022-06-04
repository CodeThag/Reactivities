import { LoadingButton } from '@mui/lab';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, ButtonGroup, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


function ActivityList() {
    const [target, setTarget] = useState('');
    const { activityStore } = useStore();
    const { activitiesByDate, deleteActivity, loading } = activityStore;

    function handleDeleteActivity(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Stack spacing={2}>
            {activitiesByDate.map((activity) => {
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
                                <Button onClick={() => activityStore.selectActivity(activity.id)}
                                    variant="outlined"
                                    color="success"
                                    size="small">View</Button>
                                <LoadingButton
                                    name={activity.id}
                                    size="small"
                                    endIcon={<DeleteIcon />}
                                    loading={loading && target === activity.id}
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

export default observer(ActivityList);