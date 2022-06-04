import React, { useEffect, useState } from 'react';
import Header from './Header';
import Container from '@mui/material/Container';
import Footer from './Footer';
import { Box } from '@mui/material';
import { Activity } from '../models/activity';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {

  const { activityStore } = useStore();

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    activityStore.loadActivities();
  }, []);

  function handleDeleteActivity(id: string) {
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(x => x.id !== id)]);
    });
  }

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading App' />

  return (
    <Container maxWidth="lg">
      <Header title='Reactivies' />
      <Box>
        <ActivityDashboard
          deleteActivity={handleDeleteActivity} />
      </Box>
      <Footer description='Mehn React is UI hard' title='Footer' />
    </Container>
  );
}

// Making the App component an observer of the ActivityStore
export default observer(App);