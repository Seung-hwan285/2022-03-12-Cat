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
           return request(`${API_ENDPOINT}/images/search?limit=10&breed_ids=${breed}`);
        });


        //프로미스로 반환
       return  Promise.all(prmoisseArr).then((responses)=>{
            let result =[];

            // result에 나누어진 배열들을 전부 합침
            responses.forEach((response)=>{
                result = result.concat(response);
            });



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

