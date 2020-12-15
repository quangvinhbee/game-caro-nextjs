import React, { useState, useEffect } from 'react'

export default function Detail_Player(props) {
    const { avt, ready, name, score } = props
    const [Avt, setAvt] = useState(avt);
    const [Stt, setStt] = useState(ready);

    useEffect(() => {
        if (avt != undefined) {
            setAvt(avt)
        }
        if (status != undefined) {
            setStt(status)
        }
    });
    return (
        <>
            <div className="Profile">
                <div className="img_avt">
                    <div className="border_avt">
                        <img src={`/images/avt/${Avt}.png`} alt="" width='70' height='70' />
                    </div>
                </div>
                <div className="name_player">
                    <h5 className="name">
                        {name}
                        {ready ? <i className="fa fa-check-circle ready"></i> : <i className="fa fa-times-circle not_ready"></i>}
                    </h5>
                </div>
                <div className="countdown">
                    <h3 className="name">
                        {score}
                    </h3>
                </div>
            </div>
        </>
    )
}
