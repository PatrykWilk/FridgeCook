import React, { Component } from 'react'
import { Button, withStyles, TextField } from '@material-ui/core';


const styles = theme => ({
    spacing: {
        margin: theme.spacing.unit,
    },
    mid: {
        textAlign: 'center',
        verticalAlignment: 'bottom'
    }
})

class RecipeFilters extends Component {

    handleButton(filter) {
        this.props.filterRecipes(filter);
    }

    handleSearch(input) {
        this.props.inputRecipes(input);

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.mid}>
            <Button variant='contained' id="0" onClick={e => this.handleButton(e.currentTarget.id)} className={classes.spacing}>All</Button>
            <Button variant='contained' id="2" onClick={e => this.handleButton(e.currentTarget.id)} className={classes.spacing}>Breakfast</Button>
            <Button variant='contained' id="1" onClick={e => this.handleButton(e.currentTarget.id)} className={classes.spacing}>Dinner</Button>
            <Button variant='contained' id="3" onClick={e => this.handleButton(e.currentTarget.id)} className={classes.spacing}>Desert</Button>    
            <TextField type="search" placeholder="Search" onChange={e => this.handleSearch(e.target.value)} style={{verticalAlign: 'baseline'}}  />        
        </div>
        )
    }
}

export default withStyles(styles)(RecipeFilters);
