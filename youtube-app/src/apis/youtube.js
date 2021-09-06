import axios from 'axios';

const KEY = 'AIzaSyD0cyqGWcFP3xqYGTFQj-wguN_BybJ4j1w'; 

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults:5,
        key: KEY,
    },
});




