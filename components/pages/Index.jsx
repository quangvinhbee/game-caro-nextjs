import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Index = () => {
    return (
        <>
            <Container maxWidth="lg">
                <div className='homepage'>
                    <div className="session-1">
                        <div className="content">
                            <h3>game caro game carogame caro</h3>
                            <span>game hay game hay game hay game hay game hay game hay game hay game hay game hay </span>
                            <hr></hr>
                            <Button variant="contained" color="primary">
                                Chơi ngay
                            </Button>
                        </div>
                        <div className="image-caro">
                            <img src="/images/image-caro.png" />
                        </div>
                    </div>
                    <div className="session-2">
                        <h3>GAME CARO FREE</h3>
                        <div className="benefits">
                            <ul>
                                <li>
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <span>100% Free</span>
                                </li>
                                <li>
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <span>100% Multiplayer</span>
                                </li>
                                <li>
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <span>100% Child friendly</span>
                                </li>
                            </ul>
                        </div>
        
                    </div>
                </div >
            </Container>
        </>
    );
}

export default Index;
