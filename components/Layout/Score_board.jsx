import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Detail_Player from './Detail_Player';

export default function Score_board() {
    return (
        <>
            <div className='Detail_Player'>
                <div className='score'>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <Paper className='Score_Player1'>
                                <Detail_Player></Detail_Player>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className='Score_Player2'>xs=12 sm=6</Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}
