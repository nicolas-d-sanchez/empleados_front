import { isUndefined } from "lodash"
import Cookies from 'universal-cookie'
import axios from 'axios'
import {APIHOST as host} from '../../app.json'

const cookies = new Cookies();

export function ExpirationSesion(){
    const now = new Date().getTime();
    const newDate = now + (60 * 30 * 1000);
    return new Date(newDate);
}

export function GetSesion(){
    return isUndefined(cookies.get("_s")) ? false : cookies.get("_s")
}

function RenovarSesion(){
    const sesion  = GetSesion()
    if(!sesion ){
        window.location.href = "/login"
    }

    cookies.set("_s", sesion , {
        path: "/",
        expires: ExpirationSesion()
    })

    return sesion;
}

export const request = {
    get: function(service){
        let token = RenovarSesion()
        return axios.get(`${host}${service}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}