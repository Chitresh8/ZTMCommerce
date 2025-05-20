import axios from 'axios';

const BASE_URL='https://api.github.com/users';

export const fetchUser=async(username)=>{
    const {data} = await axios.get(`${BASE_URL}/${username}`);
    return data;
};

export const fetchRepos=async(username)=>{
const {data}=await axios.get(`${BASE_URL}/${username}/repos`);
return data;
};