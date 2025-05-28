import React,{useState} from "react";
import { Link, link,useNavigate } from "react-router-dom";
import {login} from "../../store/authSlice";
import {Button,Input,Logo} from "src/components";
import { useDispatch } from "react-redux";
import authService from "src/appwrite/authService";
import {set, useForm} from "react-hook-form";


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit} = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try{
            const session = await authService.login(data);
            if (session) {
                const userData = await authService. getCurrentUser();
                if (userData) dispatch(login(userData));
                navigate("/");
            } 

        }
        catch (error) {
            setError("Login failed. Please check your credentials.");
            console.error("Login error:", error);
        }
    }

    return(
        <div>
            <div>
                <div>
                    <Logo width="100px" />
                </div>
                <h2>Sign in to your account</h2>
                <p>Dont have any account ? 
                    <Link to="/signup">Sign up</Link>
                </p>
                {error && <p className=""> {error}</p>}

                <form
                onSubmit={handleSubmit(login) } className="">
                    <div>
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { required: true, 
                                validate : {
                                    matchPatren : (value) => {
                                        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                        return emailPattern.test(value) || "Invalid email format";
                                    }
                                }
                            })}
                            
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true, 
                                validate : {
                                    matchPatren : (value) => {
                                        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
                                        return passwordPattern.test(value) || "Password must be at least 6 characters and contain letters and numbers";
                                    }
                                }
                            })}
                            
                        />
                        <Button type="submit" className="w-full">
                            Login
                        </Button>

                    </div>
                </form>
            </div>
        </div>
    )

    

}