import React from 'react';
import { useRouter } from 'next/router'
const id = () => {
    const router = useRouter();
    console.log(router.query.id);
    return (
        <div>
            idididid
        </div>
    );
}

export default id;
