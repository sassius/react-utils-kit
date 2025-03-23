import axios from 'axios';
import React from 'react'
import useSWR from 'swr'

const fetcher = async(url)=>{
    const res = await axios.get(url);
    return res.data;
}

const useDataFetcher = () => {
    const {data ,err,isLoading} = useSWR("https://jsonplaceholder.typicode.com/todos",fetcher);
    if (err) return <div>failed to load </div>;
    if(isLoading) return <div>loading...</div>;
    // url return array of object 
    return <div>hello you have {todos.length} todos!</div>
}

export default useDataFetcher