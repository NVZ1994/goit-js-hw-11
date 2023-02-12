import axios from "axios";
async function fetchData(value, page) {
    let URL = "https://pixabay.com/api/?key=33581591-1c70c0dad5ebd38d54cbcacf2&image_type=photo";
    const response = await axios.get(`${URL}&q=${value}&page=${page}&per_page=30&orientation="horizontal"&safesearch=true`);
    return response;
}

export { fetchData };