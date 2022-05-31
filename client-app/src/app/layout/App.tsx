import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Container from '@mui/material/Container';
import Footer from './Footer';
import { List, ListItem } from '@mui/material';
import { Activity } from '../models/activity';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("https://localhost:5001/api/activities").then(response => {
      setActivities(response.data);
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <Header title='Reactivies' />
      <ActivityDashboard activities={activities} />
      <Footer description='Mehn React is UI hard' title='Footer' />
    </Container>
  );
}

export default App;