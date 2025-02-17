// const fetch = require("expo-fetch")

import {getItem} from "expo-secure-store";

export async function getUserData(token: string) {
    let output = {
        status: '',
        username: '',
        email: '',
        error: '',
    }

    let response = await fetch("https://ivoplaninic.net:8881/api/get_user_data", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({token: token}),
    })
    let json = await response.json()
    output.status = response.status.toString()
    output.username = json.username
    output.email = json.email
    if(output.status != "200") {
        output.error = json.error
    }
    return output
}


export async function login(email: string, password: string) {
    let output = {
        status: '',
        token: '',
        error: '',
    }

    let response = await fetch("https://ivoplaninic.net:8881/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, password: password}),
    })
    let json = await response.json()
    output.status = response.status.toString()
    output.token = json.token
    return output
}

export async function signup(email: string, username: string, password: string) {
    let output = {
        status: "",
        username: "",
        email: "",
        error: "",
        token: ""
    }
    let response = await fetch("https://ivoplaninic.net:8881/api/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, username: username, password: password}),
    })
    let json = await response.json()
    output.status = response.status.toString()
    output.username = json.user.username
    output.email = json.user.email
    output.token = json.token
    if (output.status != "200") {
        output.error = json.error
    }
    return output
}

export async function getLeaderboards(): Promise<{ [key: string]: string }[]> {
    let response = await fetch("https://ivoplaninic.net:8881/api/get_leaderboard", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"token": getItem("token")})
    })
    alert("ye ig")
    let json = await response.json()
    return json
}

export async function submitRun(time: number): Promise<{ [key: string]: string }[]> {
    let response = await fetch("https://ivoplaninic.net:8881/api/submit_score", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"token": getItem("token"), time: time.toString()})
    })
    let json = await response.json()
    return json
}
