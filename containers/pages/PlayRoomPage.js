import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout'
import Layout_Menu from '../../components/Layout/Layout_Menu'
import PlayRoom from '../../components/pages/PlayRoom';
import Rows from '../Layout/Rows';
import { useRouter } from 'next/router'
import { setTable_Firebase, getTable_Firebase, setStatus_Firebase, getStatus_Firebase } from '../../utils/firebase'
import { check_Win } from '../../helpers/handleObject';
import { geolocation } from '../../utils/api';
import Score_board from '../../components/Layout/Score_board';

const PlayRoomPage = (props) => {
    var rows = [19];
    const router = useRouter();
    const idRoom = router.query.idRoom;
    var Player = 0;
    const [table, setTable] = useState([])
    const [status, setStatus] = useState({
        Player1: true,
        Player2: false,
        PlayerNext: 1,
        CellJustChecked: -1,
        Status: '',
        IPv4_Player1: '10.6.4.5',
        IPv4_Player2: '',
        Point: '0-0',
    })
    if (typeof window !== 'undefined') {
        if (window.localStorage.getItem('player') !== null) {
            Player = parseInt(window.localStorage.getItem('player'))
        }
        //----------------------------------------------------------------
        window.addEventListener("beforeunload", (ev) => {
            ev.preventDefault();
        });
    }
    useEffect(() => {


        return () => {
            // var Room = {}
            // Room.Player1 = false;
            // Room.Player2 = false;
            // Room.Status = 'waiting';
            // Room.IPv4_Player1 = '';
            // Room.IPv4_Player2 = '';
            // Room.Point = status.Point;
            // setStatus_Firebase(Room, idRoom);
        }
    }, [])
    useEffect(() => {//load Table
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
    useEffect(() => {//load Status
        var interval = setInterval(() => {
            if (idRoom !== null && idRoom !== undefined) {
                getStatus_Firebase(idRoom).then(res => {
                    if (res) {
                        setStatus(res)
                        console.log(res);
                        if (res.Status === 'started') {
                            if (res.Player1 === false || res.Player2 === false) {
                                alert(`Đối thủ đã thoát`)
                            }
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
                        if (res.IPv4_Player1 === '' || res.IPv4_Player2 === '') {
                            var stt = { ...status }
                            geolocation().then(res => {//get IP client
                                if (res.IPv4_Player1 === '') {
                                    res.IPv4_Player1 = res.data.IPv4
                                } else if (stt.IPv4_Player2 === '' && stt.IPv4_Player1 !== res.data.IPv4) {
                                    stt.IPv4_Player2 = res.data.IPv4
                                }
                                if (stt.Player1 === true
                                    && stt.IPv4_Player1 !== ''
                                    && (window.localStorage.getItem('player') !== '1' || window.localStorage.getItem('player') === null)
                                    && stt.Status === 'waiting'
                                    && stt.Player2 === false) {//set player 2
                                    window.localStorage.setItem('player', 2)
                                }
                                setStatus(stt)
                            })
                        }
                        if ((window.localStorage.getItem('player') === null || window.localStorage.getItem('player') === '2')
                            && window.localStorage.getItem('player') !== '1'
                            && status.IPv4_Player1 !== ''
                            && status.IPv4_Player2 !== ''
                            && status.Status === 'waiting'
                            && status.Player2 === false) {//start game
                            var Room = { ...status }
                            Room.Player1 = true;
                            Room.Player2 = true;
                            Room.PlayerNext = 1;
                            Room.CellJustChecked = null;
                            Room.Status = 'started';
                            Room.Point = '0-0';
                            setStatus_Firebase(Room, idRoom);
                        }
                    }
                })
            }
        }, 100);
        return () => clearInterval(interval);
    }, [table])

    const getidCell = (id) => {//cell just checked
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
    for (var i = 0; i < 19; i++) {//create table
        rows[i] = <Rows idCell={getidCell} key={i} idCol={i} table={table} status={status}></Rows>
    }
    return (
        <>
            <Layout title="Playing. . ."></Layout>
            <Layout_Menu></Layout_Menu>

            <PlayRoom footer_table={<Score_board />} table={rows}>
            </PlayRoom>

        </>
    );
}

export default PlayRoomPage;
