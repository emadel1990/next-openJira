import type { NextPage } from 'next';
import { Card, CardHeader, Grid } from '@mui/material';

import { Layout } from '../components/layouts';
import { EntryList, NewEntry } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid
        container
        spacing={2}>
        <Grid
          item
          xs={12}
          sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pending"></CardHeader>
            <NewEntry />
            {/* AGREGAR NUEVA ENTRADA */}
            <EntryList status="Pending" />
          </Card>
        </Grid>
        <Grid
          item
          xs={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="In progress"></CardHeader>
            <EntryList status="In Progress" />
          </Card>
        </Grid>
        <Grid
          item
          xs={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completed"></CardHeader>
            <EntryList status="Completed" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
