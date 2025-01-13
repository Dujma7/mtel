// const fetch = require("expo-fetch")
import store from "expo-secure-store"

export function setToken(value: string) {

}

export async function login(username: string, password: string): Promise<Map<string, string>> {
    let response = await fetch("https://ivoplaninic.net:8881/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password}),
    })
    let json = await response.json()
    return json
}

export async function signup(email: string, username: string, password: string) {
    let response = await fetch("https://ivoplaninic.net:8881/api/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, username: username, password: password}),
    })
    let json = await response.json()
    return json
}

export async function getLeaderboards(token: string): Promise<{ [key: string]: string }[]> {
    let response = await fetch("https://ivoplaninic.net:8881/api/get_leaderboard", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({token: token})
    })
    let json = await response.json()
    return json
}