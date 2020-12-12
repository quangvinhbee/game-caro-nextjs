import React from 'react'

export default function Detail_Player(props) {
    return (
        <>
            <div className="Profile">
                <div className="img_avt">
                    <div className="border_avt">
                        <img src={`/images/avt/${props.avt}.png`} alt="" width='70' height='70' />
                    </div>
                </div>
                <div className="name_player">
                    <h5 className="name">
                        {props.name}
                        {props.status ? <i className="fa fa-check-circle ready"></i> : <i className="fa fa-times-circle not_ready"></i>}
                    </h5>
                </div>
                <div className="countdown">
                    <h3 className="name">
                        12
                    </h3>
                </div>
            </div>
        </>
    )
}
