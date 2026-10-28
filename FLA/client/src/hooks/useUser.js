import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slice/userSlices";

export const useUser = ()=>{
    const {data,loading,error }= useSelector(state=>state.user)
    console.log(data)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUserData())
    },[dispatch])

    return {data,loading,error}
}