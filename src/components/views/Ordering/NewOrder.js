import React from 'react';
import styles from './NewOrder.scss';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid,CssBaseline, Paper, Button, Typography, MenuItem, FormControl, Select } from '@material-ui/core';
import { InputLabel, Accordion, AccordionSummary, AccordionDetails, FormGroup } from '@material-ui/core';
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';

const demoMenu = [
  {id: '1', name: 'cake', options: ['Zio Stefanos Doughnut']},
  {id: '2', name: 'breakfast "Zia Giulias Breakfast" + coffee', options: ['Latte', 'Cappuccino', 'Espresso', 'Macchiato']},
  {id: '3', name: 'pizza "Nonna Albas Pizza"', options: ['Olives', 'Red peppers', 'Green peppers', 'Mushrooms', 'Fresh basil', 'Salami']},
  {id: '4', name: 'salad "Nonno Albertos Salad" ', options: ['Cucumber', 'Tomatoes', 'Olives', 'Feta cheese', 'Cheese', 'Fresh herbs', 'Black pepper']},
];

const NewOrder = () => {
  return (
    <Paper className={styles.component} elevation={6}>
      <CssBaseline />
      <Grid item xs={12} >
        <Typography variant="h5" gutterBottom>New Order</Typography>
      </Grid>
      <Grid container justify="flex-start" spacing={2}>
        <Grid item xs={3} align="center">
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={3} align="center">
          <FormControl className={styles.formControl}>
            <InputLabel id="table">Table</InputLabel>
            <Select labelId="tables">
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
              <MenuItem value={40}>4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12} className={styles.menuBox}>
        {demoMenu.map(menu => (
          <Accordion key={menu.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.heading}>{menu.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup row>
                {menu.options.map(options => (
                  <FormControlLabel key={options}
                    control={
                      <Checkbox
                        name={menu.options}
                        color="primary"
                      />
                    }
                    label={options}
                  />
                ))}
              </FormGroup>
              <TextField
                className={styles.textField}
                fullWidth
                id='amount'
                label='Amount'
                name='amount'
                size='small'
                type='number'
                inputProps={{min:0, max:9}}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>

      <Grid>
        <Button
          variant="contained"
          component={Link}
          to={`${process.env.PUBLIC_URL}/ordering`}
          color='secondary'>
          Submit
        </Button>
      </Grid>
    </Paper>
  );
};

export default NewOrder;