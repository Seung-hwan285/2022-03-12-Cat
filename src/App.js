import SearchResult from "./components/SearchResult.js";
import SearchBar from "./components/SearchBar.js";
import {api} from "./api/fetch.js";


export default class App {
    constructor() {
        console.log("App is created!");
        const bottom = document.createElement('div');
        bottom.className='bottom';

        const top =document.createElement('div');
        top.className='top';


        const searchBar = new SearchBar(top,keyword =>{
            api.fetchImage(keyword).then(cats=>{

                searchResult.updateDate(cats);
            });

        });

        const searchResult = new SearchResult(bottom);

        document.body.appendChild(top);
        document.body.appendChild(bottom);
    }

}