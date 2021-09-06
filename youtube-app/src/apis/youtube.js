import axios from 'axios';

const KEY = 'AIzaSyDnAMGc_cL9DQo9IUdmTy1kffJaiEB4fJI'; 

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults:5,
        key: KEY,
    },
});




