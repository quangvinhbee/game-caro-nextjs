import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/includes/Layout';
import { fetchData } from '../../utils/firebase';
const id = () => {
    const router = useRouter();
    
    console.log(ROOM);
    return (
        <>
            <Layout title={router.query.id}></Layout>
            <Link href={'/'}>
                link
            </Link>
        </>
    );
}

export default id;
