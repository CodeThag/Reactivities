import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useParams, useNavigate } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from 'uuid';

const ActivityForm: FunctionComponent = () => {

    const { activityStore } = useStore();
    const { loadingInitial, loading, createActivity, updateActivity, loadActivity } = activityStore;
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [activity, setActivity] = useState({
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(a => setActivity(a!) // Telling typescript that a will not be null
        );
    }, [id, loadActivity])

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            }

            createActivity(newActivity).then(() => 
                navigate(`/activities/${newActivity.id}`, { replace: true })
            );
        }else{
            updateActivity(activity).then(()=> 
            navigate(`/activities/${activity.id}`, { replace: true }))
        }
        
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }



    if (loadingInitial) return <LoadingComponent />;

    return (
        <Card sx={{ marginTop: 2 }} variant="outlined">
            <CardContent>
                <Box component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    onSubmit={handleSubmit}
                    autoComplete="off">
                    <div>
                        <TextField required fullWidth id="outlined-required" label="Title" name="title" value={activity.title} onChange={handleInputChange} />
                        <TextField required id="outlined-required" label="Description" multiline minRows={3} name="description" value={activity.description} onChange={handleInputChange} />
                        <TextField required id="outlined-required" label="Category" name="category" value={activity.category} onChange={handleInputChange} />
                        <TextField required id="outlined-required" label="Date" type="date" name="date" value={activity.date} onChange={handleInputChange} />
                        <TextField required id="outlined-required" label="City" name="city" value={activity.city} onChange={handleInputChange} />
                        <TextField required id="outlined-required" label="Venue" name="venue" value={activity.venue} onChange={handleInputChange} />

                        <div>
                            <LoadingButton
                                size="small"
                                type="submit"
                                endIcon={<SaveIcon />}
                                loading={loading}
                                loadingPosition="end"
                                variant="contained"
                            >Save</LoadingButton>
                            <Button size="small" variant="outlined" color="error">Cancel</Button>
                        </div>
                    </div>
                </Box>
            </CardContent>
        </Card>);
}

export default observer(ActivityForm);