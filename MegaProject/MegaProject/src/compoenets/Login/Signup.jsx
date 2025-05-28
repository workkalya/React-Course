import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/authSlice";
import { Button, Input, Logo } from "../../components";
import { useDispatch } from "react-redux";
import authService from "src/appwrite/authService";
import { useForm } from "react-hook-form";

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register,handleSubmit} = useForm();
    const [error, setError] = useState("");

    const signUp = async (data) => {
        setError("");
        try {
            const newUser = await authService.createAccount(data);
            if (newUser){
                const userData = await authService.getCurrentUser();
                if (userData) {
                dispatch(login(userData));
                navigate("/");
            }
            }
            
            
        }
        catch (error) {
            setError("Signup failed. Please try again.");
            console.error("Signup error:", error);
        }
    }

    return(
        <div>
            <div>
                <div>
                    <Logo width="100px" />
                </div>
                <h2>Sign up for your account</h2>
                <p>Already have an account? 
                    <Link to="/login">Sign in</Link>
                </p>
                {error && <p className="">{error}</p>}

                <form onSubmit={handleSubmit(signUp)} className="">
                    <Input
                        label="Name"
                        type="text"
                        placeholder="Enter your full name"
                        {...register("name", { 
                            required: "Name is required",
                            minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters"
                            }
                        })}
                    />

                    <Input 
                    label ="Email"
                    type="email"
                    placeholder ="Enter your email"
                    {...register('email',{
                        required: true,
                        validate: {
                            matchPattern: (value) => {
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
                        {...register("password", { 
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        })}
                    />
                    <Button type="submit" className="w-full">
                        Sign Up
                    </Button>
                    
                </form>
            </div>
        </div>
    );
}

export default Signup;