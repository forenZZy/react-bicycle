import axios from 'axios';

export const register = newUser => {
    return axios.post('register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password,
    }).then(res => {
        console.log('Registred!')
    })
};

export const login = user => {
    return axios.post('login', {
        email: user.email,
        password: user.password,
    }).then(res => {
        localStorage.setItem('usertoken', res.data);
        return res.data
    }).catch(err => {
        console.log(err);
        if (err.response !== undefined) {
            if (err.response.status === 403) {
                alert('Incorrect login or password');
            } else {
                alert(err.response);
            }
        }
    });
};
