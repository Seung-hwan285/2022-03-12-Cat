const API_ENDPOINT = 'https://api.thecatapi.com/v1';


const request = async (url)=>{

    try{

        let response = await fetch(url);

        return response.json();
    }catch (err){
        console.log(err);
    }

}


export const api = {


    async fetchImage(keyword){
            // 키워드 배열
            const keywordArr = (await api.searchBreedByName(keyword)).map((breeds)=> {return breeds.id});

            // 프로미스 배열로 가져오기
            const prmisseArr = keywordArr.map((breed)=>{

                return request(`${API_ENDPOINT}/images/search?limit=50&breed_ids=${breed}`);
            });

            return Promise.all(prmisseArr).then((response)=>{
                let result =[];
                response.forEach((response)=>{
                        result= result.concat(response);
                    });

                return result;
            })

    },

    searchBreedByName(keyword) {
        return request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
    },

    fetchAllImage(){
        return request(`${API_ENDPOINT}/images/search?limit=50`);
    },

}

