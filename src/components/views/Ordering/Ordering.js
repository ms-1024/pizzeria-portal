import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Typography, CardActions, Grid } from '@material-ui/core';

const Content = [
  {id: '1', active: 87, status: 'cancelled', date: '15/05/2021', sum: 53.25},
  {id: '2', active: 120, status: 'new', date: '16/05/2021', sum: 82.99},
  {id: '3', active: 99, status: 'ready', date: '16/05/2021', sum: 29.98},
  {id: '4', active: 119, status: 'ready', date: '16/05/2021', sum: 78.45},
  {id: '5', active: 125, status: 'new', date: '16/05/2021', sum: 125.89},
  {id: '6', active: 130, status: 'new', date: '16/05/2021', sum: 140.99},
];

const Ordering = () => (
  <div className={styles.component}>
    <h1>Ordering view</h1>
    <Grid
      container
      direction="row"
      justify="space-around"
    >
      {Content.map(row =>
        <Card className={styles.root} style={{maxWidth: '350px', minWidth: '290px', background: '#e0e0e0', margin: '0 30px 30px 0'}} variant="outlined">
          <CardContent>
            <Typography className={styles.title} color="textSecondary" key={row.id}>
              Table No.: {row.id} 
            </Typography>
            <Typography variant="h5" component="h2">
              <Button className={styles.link} component={Link} to={`${process.env.PUBLIC_URL}/ordering/new`}
              variant="contained" color="secondary" style={{maxWidth: '150px', minWidth: '150px'}}>New order</Button>
            </Typography>
            <Typography className={styles.pos} color="textSecondary" key={row.active}>
              {row.active && (
                  <Button className={styles.link} style={{maxWidth: '150px', minWidth: '150px'}} component={Link} to={`${process.env.PUBLIC_URL}/ordering/order/${row.active}`} color='primary' variant="contained">
                    {row.active}
                  </Button>
              )}
            </Typography>
            <Typography variant="body2" component="p" key={row.status}>
              {row.status}
            </Typography>
            <Typography variant="body2" component="p" key={row.date}>
              {row.date}
            </Typography>
            <Typography className={styles.pos} color="textSecondary" key={row.sum}>
              {row.sum}
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={styles.link}
            variant="contained" color="secondary" style={{maxWidth: '200px', minWidth: '200px'}}>Change status</Button>
          </CardActions>
        </Card>
      )}
    </Grid>
  </div>
);

export default Ordering;