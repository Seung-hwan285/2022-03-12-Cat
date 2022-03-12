const API_ENDPOINT = 'https://api.thecatapi.com/v1';

const request = async (url) => {
    try{

        let result = await fetch(url);

        return result.json();

    }catch (err){
        console.error(err);
    }
};


export const api = {

    fetchImage : keyword=>{
        return request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
    },

    fetchAllImage : ()=>{
        return request(`${API_ENDPOINT}/images/search?limit=50`);
    },

}

