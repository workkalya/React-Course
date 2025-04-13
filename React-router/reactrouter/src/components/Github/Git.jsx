import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Git() {
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-80">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">GitHub User Search</h1>
                <input
                    type="text"
                    placeholder="Enter GitHub ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <button
                    onClick={() => navigate(`/github/${userId}`)}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Search
                </button>
            </div>
        </div>
    );
}