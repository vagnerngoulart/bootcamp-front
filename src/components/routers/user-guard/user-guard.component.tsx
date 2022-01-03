import { useEffect } from "react";
import {useSelector} from "react-redux";
import { State } from "../../../store/store/store.types";

export default function UserGuard({children}: any){

    const isUserAuthenticated = useSelector((state: State) => !!state.user.data)
    
    useEffect(
        () => {
            if(isUserAuthenticated){
                console.log(isUserAuthenticated)
            }
                        
        },
        [isUserAuthenticated]
    )

    useEffect(
        () => {
            return () => {
                console.log(true)
            }
        },
        []
    )

    return children
}