import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Github() {
    const [data, setData] = useState([]);
    const { userid } = useParams();
    useEffect(() => {
        fetch(`https://api.github.com/users/${userid}` )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }
    , []);
    return (
        <>
            <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Github Profile</h1>
                <img
                    className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
                    src={data.avatar_url}
                    alt="Github Avatar"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{data.name}</h2>
                <p className="text-gray-600 mb-4">{data.bio}</p>
                <div className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold">Followers:</span> {data.followers}
                </div>
                <div className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold">Following:</span> {data.following}
                </div>
                <div className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">Public Repos:</span> {data.public_repos}
                </div>
                <a
                    href={data.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    Visit Github Profile
                </a>
            </div>
        </>
    );
}

export default Github;