import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import { ChangeEvent, FunctionComponent, useState } from "react";
import { Activity } from "../../../app/models/activity";

interface Props {
    closeForm: () => void;
    activity: Activity | undefined;
    createOrEditActivity: (activity: Activity) => void;
}

const ActivityForm: FunctionComponent<Props> = ({ closeForm, activity: selectedActivity, createOrEditActivity }) => {

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

    function handleSubmit() {
        console.log(activity);
        createOrEditActivity(activity);
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
                        <TextField required id="outlined-required" label="Title" fullWidth name="title" value={activity.title} onChange={handleInputChange} />
                        <TextField required id="outlined-required" label="Description" multiline minRows={3} name="description" value={activity.description} onChange={handleInputChange} />
                        <TextField required id="outlined-required" label="Category" name="category" value={activity.category} onChange={handleInputChange} />
                        <TextField required id="outlined-required" label="Date" name="date" value={activity.date} onChange={handleInputChange} />
                        <TextField required id="outlined-required" label="City" name="city" value={activity.city} onChange={handleInputChange} />
                        <TextField required id="outlined-required" label="Venue" name="venue" value={activity.venue} onChange={handleInputChange} />

                        <div>
                            <Button size="small" variant="outlined" color="warning" type="submit">Save</Button>
                            <Button onClick={() => closeForm()} size="small" variant="outlined" color="error">Cancel</Button>
                        </div>
                    </div>
                </Box>
            </CardContent>
        </Card>);
}

export default ActivityForm;