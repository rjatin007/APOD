import action_types from './actionTypes';
import { formatDate } from '../utils/helpers';
const MYKEY = 'MY_KEY'
const initialState = {
    data: [],
    mykey: MYKEY,
    selectedItem: {},
    saved: false,
    isMuted: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case action_types.FETCH_DATA:
            return {
                ...state,
                data: action.data.map(item => ({
                    ...item,
                    date: formatDate(item.date),
                    key: `${item.date}`,
                }))
            }
        case action_types.SELECT_ITEM:
            return {
                ...state,
                selectedItem: { ...action.item }
            }
        case action_types.SET_NAVIGATION:
            return {
                ...state,
                navigation: { ...action.navigation }
            }
        case action_types.SAVE_TO_STORAGE:
            return {
                ...state,
                saved: true
            }
        case action_types.MUTE:
            return {
                ...state,
                isMuted: true
            }
    }
    return { ...state };
}
export default reducer;