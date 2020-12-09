import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout'
import Layout_Menu from '../../components/Layout/Layout_Menu'
import PlayRoom from '../../components/pages/PlayRoom';
import Rows from '../Layout/Rows';
import { useRouter } from 'next/router'
import { setRoom, getRoom } from '../../utils/firebase'

const PlayRoomPage = (props) => {
    var rows = [19];
    const router = useRouter();
    const idRoom = router.query.idRoom;
    const [table, setTable] = useState([])
    useEffect(() => {
        var interval = setInterval(() => {
            if (idRoom !== null) {
                getRoom(idRoom).then(res => {
                    if (res !== null) {
                        setTable(res);
                    } else {
                        var tb = [...table];
                        for (var i = 0; i < 362; i++) {
                            tb[i] = -1
                        }
                        setTable(tb)
                    }
                })
            }
        }, 100);
        return () => clearInterval(interval);
    }, [table])
    const getidCell = (id) => {
        var tb = [...table];
        tb[id] = 0;
        setTable(tb)
        setRoom(tb, idRoom)
    }
    for (var i = 0; i < 19; i++) {
        rows[i] = <Rows idCell={getidCell} key={i} idCol={i} table={table}></Rows>
    }
    return (
        <>
            <Layout title="Playing. . ."></Layout>
            <Layout_Menu></Layout_Menu>
            <PlayRoom>
                {rows}
            </PlayRoom>
        </>
    );
}

export default PlayRoomPage;
