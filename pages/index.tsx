import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid
        container
        spacing={2}>
        <Grid
          item
          xs={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pending"></CardHeader>
            <CardContent>
              {/* AGREGAR NUEVA ENTRADA */}
              {/* Listado de las entradas */}
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="In progress"></CardHeader>
          </Card>
        </Grid>
        <Grid
          item
          xs={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completed"></CardHeader>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
