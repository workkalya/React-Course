import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Protector({ children,authentication = true }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const authState = useSelector((state) => state.auth);

    useEffect(()=>{
        
            if (authentication && authState !== authentication) {
                navigate("/login");
            } else if (!authentication && authState !== authentication) {
                navigate("/");
            }
            setLoading(false);
        

    },[navigate, authState, authentication]);
    return loading ? <h1>Loading...</h1> : children;
}