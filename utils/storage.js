import { AsyncStorage } from 'react-native';

export const fetchFromStorage = async ({ key }) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log('[ASYNC : GET]', value)
            return value;
        }
        console.log('[ASYNC : GET]', value)
        return value
    } catch (e) {
        console.log('[ASYNC : GET]', e)
    }
}
export const saveToStorage = async (data, mykey) => {
    try {
        await AsyncStorage.mergeItem(mykey, JSON.stringify({ [mykey]: data }));
        console.log('[ASYNC : SET ]')
        return true
    } catch (e) {
        console.log('[ASYNC : SET ]', e)
        return e
    }
}