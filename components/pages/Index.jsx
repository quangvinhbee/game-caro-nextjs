import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <Container
          maxWidth="lg"
          className="container-page flex items-center justify-center "
        >
          <div className="homepage">
            <div className="session-1">
              <div className="content">
                <div className="text-logo">
                  GAME <span>CARO</span>
                </div>
                <span>
                  Được xây dựng trên nền tảng web nên bạn có thể chơi trên bất
                  kì thiết bị nào (di động, browser,...)
                </span>
                <hr></hr>
                <Link href={`/CreateRoom`}>
                  <Button
                    variant="contained"
                    color="primary"
                    className="btn btn-play"
                  >
                    Play now
                  </Button>
                </Link>
              </div>
              <div className="image-caro">
                <img src="/images/image-caro.png" />
              </div>
            </div>
            <div className="session-2">
              <div className="text-logo">
                GAME <span>CARO</span>
              </div>
              <div className="benefits">
                <ul>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>100% Free</span>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>100% Multiplayer</span>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>100% Child friendly</span>
                  </li>
                </ul>
                <Grid container spacing={2} className="container-item">
                  <Grid item xs={3}>
                    <Paper className="paper">
                      <div className="content">
                        <div className="header-1">
                          <i className="fa fa-users" aria-hidden="true"></i>
                          <h4>kết nối</h4>
                        </div>
                        <div className="body-content">
                          <span>
                            Bạn có thể thoải mái chơi cùng bạn bè, và trò chuyện
                            với nhau
                          </span>
                        </div>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className="paper">
                      <div className="content">
                        <div className="header-1">
                          <i className="fa fa-heartbeat" aria-hidden="true"></i>
                          <h4>Thư giãn</h4>
                        </div>
                        <div className="body-content">
                          <span>
                            Thư giãn sau những giờ học tập làm việc căng thẳng
                          </span>
                        </div>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className="paper">
                      <div className="content">
                        <div className="header-1">
                          <i className="fa fa-ravelry " aria-hidden="true"></i>
                          <h4>Tập trung</h4>
                        </div>
                        <div className="body-content">
                          <span>
                            Giúp bạn cải thiện khả năng tập trung não bộ
                          </span>
                        </div>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className="paper">
                      <div className="content">
                        <div className="header-1">
                          <i className="fa fa-circle-o " aria-hidden="true"></i>
                          <i className="fa fa-times " aria-hidden="true"></i>
                          <h4>Đơn giản</h4>
                        </div>
                        <div className="body-content">
                          <span>
                            Chỉ 2 nước cờ X và O nên rất dễ chơi và chiến thắng
                          </span>
                        </div>
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Index;
