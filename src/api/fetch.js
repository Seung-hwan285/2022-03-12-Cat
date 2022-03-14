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

    fetchImage : async keyword=>{
        const breeds = (await api.searchBreedByName(keyword)).map((breed)=>{return breed.id;});
        const prmoisseArr = breeds.map(breed=>{
            return request(`${API_ENDPOINT}/images/search?limit=50&breed_ids=${breed}`);
        });

        return Promise.all(prmoisseArr).then((responses)=>{
            let result =[];
            responses.forEach((response)=>{
                    result=result.concat(response);
            });

            console.log(result);
            return result;
        });
        },

    searchBreedByName: keyword => {
        return request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
    },

    fetchAllImage : ()=>{
        return request(`${API_ENDPOINT}/images/search?limit=50`);
    },

}

