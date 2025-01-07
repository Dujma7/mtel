const fetch = require("expo-fetch")

export function login(username, password) {
    let out
    fetch("http://ivoplaninic.net:8881/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password}),
    }).then(res => out = res.json())
    return out
}

export function signup(email, username, password) {
    let out
    fetch("http://ivoplaninic.net:8881/api/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, username: username, password: password}),
    }).then(res => out = res.json())
    return out
}

export function getLeaderboards(token) {
    let out
    fetch("http://ivoplaninic.net:8881/api/get_leaderboard", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({token: token})
    }).then(res => out = res.json())
    return out
}