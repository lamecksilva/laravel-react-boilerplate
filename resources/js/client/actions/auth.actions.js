import axios from "axios";

const loginUser = userData => {
    axios
        .post("/login", userData)
        .then(response => console.log(response))
        .catch(error => console.log(error));
};

export const authActions = {
    loginUser
};
