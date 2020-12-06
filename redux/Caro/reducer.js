

var initialState = {
    WIDTH: 1,
    PLAYER1: false,
    PLAYER2: false,
    isNEXT: '',
    ROOMID: '',
    STATUS_GAME: 'wait',
    TABLE_CARO: []
}
const caroReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return { ...state }
    }
}

export default caroReducer;