import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './Header';
import Container from '@mui/material/Container';
import Footer from './Footer';
import { List, ListItem } from '@mui/material';

function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:5001/api/activities").then(response => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <Header title='Reactivies' />

      <List>
        {activities.map((activity: any) => {
          return <ListItem key={activity.id}>{activity.title}</ListItem>
        })}
      </List>

      <Footer description='Mehn React is UI hard' title='Footer' />
    </Container>
  );
}

export default App;