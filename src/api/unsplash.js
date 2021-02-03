import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    // Set Headers
    headers: {
        Authorization: "Client-ID XnTOONdIzg04HiRBnEIz2cwYkeEjEBBkF3OHUOT17RY",
    }
});