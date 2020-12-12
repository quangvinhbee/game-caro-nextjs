import React from 'react'

export default function Detail_Player() {
    return (
        <>
            <div className="Profile">
                <div className="img_avt">
                    <div className="border_avt">
                        <img src="/images/avt/1.png" alt="" width='70' height='70' />
                    </div>
                </div>
                <div className="name_player">
                    <h5 className="name">
                        Player 1
                        <i className="fa fa-check-circle ready"></i>
                    </h5>
                </div>
            </div>
        </>
    )
}
