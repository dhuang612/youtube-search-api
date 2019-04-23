import axios from 'axios';
//axios needs to be manually added to the project
const KEY = '{ENV_KEY}';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY

    }
});