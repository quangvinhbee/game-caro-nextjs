import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout'
import Layout_Menu from '../../components/Layout/Layout_Menu'
import PlayRoom from '../../components/pages/PlayRoom';
import Rows from '../Layout/Rows';
import { useRouter } from 'next/router'
import { setTable_Firebase, getTable_Firebase, setStatus_Firebase, getStatus_Firebase, removeTable, removeRoom_Firebase } from '../../utils/firebase'
import { check_Win } from '../../helpers/handleObject';
import { geolocation } from '../../utils/api';
import Score_board_Layout from '../Layout/Score_board_Layout';
import Modal_game from '../../components/Layout/Modal_game';

const PlayRoomPage = (props) => {
    var rows = [19];
    const router = useRouter();
    const idRoom = router.query.idRoom
    var Player = 0;
    const [openModal, setopenModal] = useState({ open: false })
    const [table, setTable] = useState([])
    const [status, setStatus] = useState({})
    if (typeof window !== 'undefined') {
        if (window.localStorage.getItem('player') !== null) {
            Player = parseInt(window.localStorage.getItem('player'))
        }
        //----------------------------------------------------------------
        window.addEventListener("beforeunload", (ev) => {
            ev.preventDefault();
        });
    }

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
    }, [])

    useEffect(() => {//load Status
        if (idRoom != undefined) {
            getStatus_Firebase(idRoom).then(res => {
                if (JSON.stringify(res) !== JSON.stringify(status)) {
                    setStatus(res)
                    //---------------------------kiểm tra thắng thua--------------------------------------
                    if (res.Status === 'started') {
                        if (res.PlayerNext === 1) {
                            if (check_Win(table, 19, res.CellJustChecked, 2)) {
                                var modal = { ...openModal }
                                modal.open = true
                                if (window.localStorage.getItem('player') === '2') {
                                    modal.title = `Bạn đã chiến thắng.`
                                } else {
                                    modal.title = `Bạn đã thua.`
                                }
                                modal.body = 'Bạn có muốn chơi tiếp'
                                setopenModal(modal)

                                var Room = { ...status }
                                Room.Player1 = false;
                                Room.Player2 = false;
                                Room.PlayerNext = (status.Score_Player1 + status.Score_Player2 + 1) % 2 + 1;
                                Room.CellJustChecked = -1;
                                Room.Score_Player1 = status.Score_Player1;
                                Room.Score_Player2 = status.Score_Player2 + 1;
                                setStatus_Firebase(Room, idRoom);
                            }
                        } else {
                            if (check_Win(table, 19, res.CellJustChecked, 1)) {
                                var modal = { ...openModal }
                                modal.open = true
                                if (window.localStorage.getItem('player') === '1') {
                                    modal.title = `Bạn đã chiến thắng.`
                                } else {
                                    modal.title = `Bạn đã thua.`
                                }
                                modal.body = 'Bạn có muốn chơi tiếp'
                                setopenModal(modal)

                                var Room = { ...status }
                                Room.Player1 = false;
                                Room.Player2 = false;
                                Room.PlayerNext = (status.Score_Player1 + status.Score_Player2 + 1) % 2 + 1;
                                Room.CellJustChecked = -1;
                                Room.Score_Player1 = status.Score_Player1 + 1;
                                Room.Score_Player2 = status.Score_Player2;
                                setStatus_Firebase(Room, idRoom);
                            }
                        }
                    } else if (res.Status === 'end') {
                        var modal = { ...openModal }
                        modal.open = true
                        modal.title = `Đối thủ đã thoát.`
                        modal.body = ''
                        setopenModal(modal)
                    }
                    //------------------------------------------------------------------------------------------------
                }
            })
        }
    }, [table])

    // useEffect(() => {//load Status
    //     var interval = setInterval(() => {
    //         if (idRoom != null && idRoom != undefined) {
    //             getStatus_Firebase(idRoom).then(res => {
    //                 console.log(res);
    //                 if (res !== null) {
    //                     setStatus(res)
    //                     if (res.Status === 'started') {
    //                         if (res.Player1 === false || res.Player2 === false) {
    //                             alert(`Đối thủ đã thoát`)
    //                         }
    //                         if (res.PlayerNext === 1) {
    //                             if (check_Win(table, 19, res.CellJustChecked, 2)) {
    //                                 alert(`Player ${2} win`)
    //                             }
    //                         } else {
    //                             if (check_Win(table, 19, res.CellJustChecked, 1)) {
    //                                 alert(`Player ${1} win`)
    //                             }
    //                         }
    //                     }
    //                     if (res.IPv4_Player1 === '' || res.IPv4_Player2 === '' && res.Status === 'waiting') {
    //                         var stt = { ...status }
    //                         geolocation().then(res => {//get IP client
    //                             if (res.IPv4_Player1 === '') {
    //                                 res.IPv4_Player1 = res.data.IPv4
    //                             } else if (stt.IPv4_Player2 === '' && stt.IPv4_Player1 !== res.data.IPv4) {
    //                                 stt.IPv4_Player2 = res.data.IPv4
    //                             }
    //                             if (stt.Player1 === true
    //                                 && stt.IPv4_Player1 !== ''
    //                                 && (window.localStorage.getItem('player') !== '1' || window.localStorage.getItem('player') === null)
    //                                 && stt.Status === 'waiting'
    //                                 && stt.Player2 === false) {//set player 2
    //                                 window.localStorage.setItem('player', 2)
    //                             }
    //                             setStatus_Firebase(stt, idRoom);
    //                         })
    //                     }
    //                     if ((window.localStorage.getItem('player') === null || window.localStorage.getItem('player') === '2')
    //                         && window.localStorage.getItem('player') !== '1'
    //                         && status.IPv4_Player1 !== ''
    //                         && status.IPv4_Player2 !== ''
    //                         && status.Status === 'waiting'
    //                         && status.Player2 === false) {//start game
    //                         var Room = { ...status }
    //                         Room.Player1 = true;
    //                         Room.Player2 = true;
    //                         Room.PlayerNext = 1;
    //                         Room.CellJustChecked = null;
    //                         Room.Status = 'started';
    //                         Room.Point = '0-0';
    //                         setStatus_Firebase(Room, idRoom);
    //                     }
    //                 }
    //             })
    //         }
    //     }, 100);
    //     return () => clearInterval(interval);
    // }, [])
    const handleButton = (e) => {
        var stt = { ...status }
        if (e) {
            if (window.localStorage.getItem('player') === '1') {
                stt.Player1 = e
                setStatus_Firebase(stt, idRoom);
            } else {
                stt.Player2 = e
                setStatus_Firebase(stt, idRoom);
            }
        } else {
            stt.Status = 'end';
            setStatus_Firebase(stt, idRoom);
            router.push(`/`)
        }
        if (status.Status === 'end') {
            removeRoom_Firebase(idRoom)
            router.push(`/`)
        }
    }
    const getidCell = (id) => {//cell just checked
        if (status.Status === 'started' && status.PlayerNext === Player) {
            var audio2 = new Audio('/sound/chess.wav');
            audio2.load();
            audio2.play();
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
            <PlayRoom status={status} table={rows} scoreboard={<Score_board_Layout status={status} />}>
            </PlayRoom>
            <Modal_game openModal={openModal} handleButton={handleButton}></Modal_game>
        </>
    );
}

export default PlayRoomPage;
