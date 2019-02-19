import axios from "axios";

const jj = () => {
    axios
        .get("http://localhost:9000/api/kk")
        .then(response => console.log(response))
        .catch(error => console.log(error));
};

export const authActions = {
    jj
};
