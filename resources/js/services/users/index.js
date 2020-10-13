let usersService = {

    retrieve () {
        return axios.get('http://localhost:8000/api/users')
    }
}

export default usersService