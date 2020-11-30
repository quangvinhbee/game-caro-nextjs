import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/includes/Layout';
import { fetchData } from '../../utils/firebase';
const id = () => {
    const router = useRouter();
    const [ROOM, setROOM] = useState({})
    console.log(router);
    clearTimeout(setTimeout(async () => {
        const Room = await fetchData(router.query.id)
        setROOM(Room)
    }, 1000))
    console.log(ROOM);
    return (
        <>
            <Layout title={router.query.id}></Layout>
            <button onClick={()=>{router.back()}}>button</button>
            <Link href={'/'}>
                linkkkk
            </Link>
        </>
    );
}

export default id;
