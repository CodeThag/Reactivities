import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import { ChangeEvent, FunctionComponent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

const ActivityForm: FunctionComponent = () => {

    const { activityStore } = useStore();
    const { selectedActivity, closeForm, loading, createActivity, updateActivity } = activityStore;

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

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
                            <Button onClick={() => closeForm()} size="small" variant="outlined" color="error">Cancel</Button>
                        </div>
                    </div>
                </Box>
            </CardContent>
        </Card>);
}

export default observer(ActivityForm);