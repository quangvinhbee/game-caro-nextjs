import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout'
import Layout_Menu from '../../components/Layout/Layout_Menu'
import PlayRoom from '../../components/pages/PlayRoom';
import Rows from '../Layout/Rows';
import { useRouter } from 'next/router'
import { setTable_Firebase, getTable_Firebase, setStatus_Firebase, getStatus_Firebase } from '../../utils/firebase'
import { check_Win } from '../../helpers/handleObject';

const PlayRoomPage = (props) => {
    var rows = [19];
    const router = useRouter();
    const idRoom = router.query.idRoom;
    var Player = 0;
    const [table, setTable] = useState([])
    const [status, setStatus] = useState({
        Status: 'waiting',
        Point: '0-0',
    })
    if (typeof window !== 'undefined') {
        if (window.localStorage.getItem('player') !== null) {
            Player = parseInt(window.localStorage.getItem('player'))
        }
    }
    useEffect(() => {
        return () => {
            var Room = {}
            Room.Player1 = false;
            Room.Player2 = false;
            Room.Status = 'waiting';
            Room.Point = status.Point;
            setStatus_Firebase(Room, idRoom);
        }
    }, [])
    useEffect(() => {
        var interval = setInterval(() => {
            if (idRoom !== null && idRoom !== undefined) {
                getTable_Firebase(idRoom).then(res => {
                    if (res) {
                        setTable(res);
                    } else {
                        var tb = [...table];
                        for (var i = 0; i < 362; i++) {
                            tb[i] = -1
                        }
                        setTable(tb)
                    }
                })
            } else {
                setTable([...table])
            }
        }, 100);
        return () => clearInterval(interval);
    }, [table])
    useEffect(() => {
        var interval = setInterval(() => {
            if (idRoom !== null && idRoom !== undefined) {
                getStatus_Firebase(idRoom).then(res => {
                    if (res) {
                        setStatus(res)
                        console.log(res.CellJustChecked);
                        if (res.Status === 'started') {
                            if (res.PlayerNext === 1) {
                                if (check_Win(table, 19, res.CellJustChecked, 2)) {
                                    //alert(`Player ${2} win`)
                                }
                            } else {
                                if (check_Win(table, 19, res.CellJustChecked, 1)) {
                                    //alert(`Player ${1} win`)
                                }
                            }

                        }
                        if ((window.localStorage.getItem('player') === null || Player === 2)
                            && Player !== 1
                            && status.Status === 'waiting'
                            && status.Player2 === false) {//start game
                            var Room = {}
                            Room.Player1 = true;
                            Room.Player2 = true;
                            Room.PlayerNext = 1;
                            Room.CellJustChecked = null;
                            Room.Status = 'started';
                            Room.Point = '0-0';
                            window.localStorage.setItem('player', 2)
                            setStatus_Firebase(Room, idRoom);
                        }
                    }
                })
            }
        }, 100);
        return () => clearInterval(interval);
    }, [table])
    const getidCell = (id) => {
        if (status.Status === 'started' && status.PlayerNext === Player) {
            var tb = [...table];
            tb[id] = Player;
            var stt = { ...status }
            stt.CellJustChecked = id;
            if (Player === 1) {
                stt.PlayerNext = 2
            } else {
                stt.PlayerNext = 1
            }
            setStatus(stt)
            setStatus_Firebase(stt, idRoom);
            setTable(tb)
            setTable_Firebase(tb, idRoom)
        }
    }
    for (var i = 0; i < 19; i++) {
        rows[i] = <Rows idCell={getidCell} key={i} idCol={i} table={table} status={status}></Rows>
    }
    return (
        <>
            <Layout title="Playing. . ."></Layout>
            <Layout_Menu></Layout_Menu>

            <PlayRoom>
                {status.Status}
                {status.PlayerNext}
                {rows}
            </PlayRoom>
        </>
    );
}

export default PlayRoomPage;
