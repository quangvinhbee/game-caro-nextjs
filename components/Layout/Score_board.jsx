import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Detail_Player from './Detail_Player';

export default function Score_board(props) {
    const { status } = props

    return (
        <>
            <div className='Detail_Player'>
                <div className='score'>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <Paper className='Score_Player1'>
                                <Detail_Player avt={status.Avt_Player1} ready={status.Player1} name={'Player 1'} score={status.Score_Player1}></Detail_Player>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className='Score_Player2'>
                                <Detail_Player avt={status.Avt_Player2} ready={status.Player2} name={'Player 2'} score={status.Score_Player2}></Detail_Player>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}
