import React, { useEffect, useState } from 'react'
import { data } from 'react-router'
import { useLoaderData } from 'react-router'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/GuruPruthviJM')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    const data = useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers: {data["followers"]*100}
            <img src={data.avatar_url} alt="" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/GuruPruthviJM')
    return response.json()
}