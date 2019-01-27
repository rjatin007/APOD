import { getDate } from './helpers';

const API_KEY = 'HMpTfejtPULt3mbo3Z7Ce7TmXPddextixSJyXRpa';
const dates = getDate();

const START_DATE = dates['start_date'];
const END_DATE = dates['current_date'];
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;


const headers = {
    "Content-Type": "application/json"
}
export const getData = (start_date = START_DATE, end_date = END_DATE) =>
    fetch(`${url}&start_date=${start_date}&end_date=${end_date}`, headers)
        .then(res => res.json())
        .then(res => res);

