import React from "react";
import  service from "../appwrite/service";
import { Link } from "react-router-dom";

function PostCard({ $id,title, featuredImage }) {
    return(
        <Link
            to={`/post/${$id}`}>
                <div className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
                    <img
                        src={service.getFilePreview(featuredImage)}
                        alt={title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
                    <p className="text-gray-600">Click to read more...</p>
                </div>

            </Link>
    )

}