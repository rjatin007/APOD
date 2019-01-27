import { getData } from '../utils/API';
import action_types from './actionTypes';
import { returnDate } from '../utils/helpers'
import { fetchFromStorage, saveToStorage } from '../utils/storage';
export const fetchDataAndSetNavigation = (navigation, mykey) =>
    dispatch => {
        fetchFromStorage(mykey).then(async res => {
            //  lets check if we have data in async, or not ?
            if (res === null) {
                // nope we don't!
                // we will call the api
                console.log("no data in async, calling api...")
                await getData().then(async data => {
                    // before storing it to redux
                    // we will first store it in async
                    // to make sure that we have a copy in storage always 
                    await saveToStorage(data, mykey).then(async res => {
                        // is operation successful?
                        if (res === true) {
                            // yes! now we dispatch  data
                            await dispatch({
                                type: action_types.FETCH_DATA,
                                data
                            })
                        } else {
                            console.log('[ERROR]', res)
                        }
                    })

                })
            } else {
                console.log("got data in async, fetching...")
                console.log(res)
                // Great! we have data in async
                // we will check whether if data is updated, or not 
                // if not, we optimize calls , by checking 
                // if the last entry of array has date earlier than today or not
                // and calling api with required date range only
                let data = res;
                let last_date = data[data.length - 1].date
                let cur_date = returnDate(new Date())
                if (last_date < cur_date) {
                    getData(last_date, cur_date).then(async response => {
                        console.log(response);
                        let newData = await data.concat(response)
                        saveToStorage(newData, mykey).then(async res => {
                            if (res === true) {
                                await dispatch({
                                    type: action_types.FETCH_DATA,
                                    data: newData
                                })
                            }
                        })
                    })
                } else {
                    // data is already updated , we dispatch it straight!
                    dispatch({
                        type: action_types.FETCH_DATA,
                        data: newData
                    })
                }
            }
        })
        dispatch({
            type: action_types.SET_NAVIGATION,
            navigation
        })
    }



export const selectItem = item =>
    dispatch => {
        dispatch({
            type: action_types.SELECT_ITEM,
            item
        })
    }

export const mute = () => dispatch => {
    dispatch({
        type: action_types.MUTE
    })
}