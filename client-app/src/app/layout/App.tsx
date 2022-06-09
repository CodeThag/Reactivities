import React from 'react';
import Header from './Header';
import Container from '@mui/material/Container';
import Footer from './Footer';
import { Box } from '@mui/material';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {

  return (
    <Container maxWidth="lg">
      <Header title='Reactivies' />
      <Box>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/activities' element={<ActivityDashboard />} />
          <Route path='/activities/:id' element={<ActivityDetails />} />
          {/** Use this to add multi routes to the same element */}
          {['/create', '/manage/:id'].map(path => (
            <Route
              key={path} // optional: avoid full re-renders on route changes
              path={path}
              element={<ActivityForm />}
            />
          ))}
        </Routes>
      </Box>
      <Footer description='Mehn React is UI hard' title='Footer' />
    </Container>
  );
}

// Making the App component an observer of the ActivityStore
export default observer(App);