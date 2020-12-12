import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const PlayRoom = (props) => {
    return (
        <>
            <div className='body'>
                <div className='gameRoom'>
                    <Grid container spacing={1} className='grid_Room'>
                        <Grid item xs={12} sm={4}>
                            {props.footer_table}
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <table>
                                <tbody>
                                    {props.table}
                                </tbody>
                            </table>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Paper className='Score_Player1'>xs=12 sm=6</Paper>
                        </Grid>
                    </Grid>

                </div>

            </div>
        </>
    );
}

export default PlayRoom;
