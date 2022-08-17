import axios from 'axios'

const signUp = (username, email, password) => {
    const user = {
        username: username,
        email: email,
        password: password
    }
    axios.post('/signup', user).then(console.log(user)).catch((err) => console.log(err))
}

const logIn = (email, password) => {
    const user = {
        email: email,
        password: password
    }
    axios.post('/login', user).then(console.log(user)).catch((err) => console.log(err))
}

export { signUp, logIn }