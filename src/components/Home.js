import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export const Home = () => {
    const {name} = useContext(LoginContext);
    
    return (
        <>
            <div>{name}</div>
            {/* <div>{restaurant?.ambiance?.description}</div>
            <div>
                {restaurant?.location?.address}
                <a
                    href={`https://www.google.com/maps/@${restaurant.location.latitude},${restaurant.location.longitude},18z?entry=ttu`}
                    target='_blank'
                    rel='noopener noreferrer'>
                    Google Maps
                </a>
            </div> */}
        </>
    );
};
