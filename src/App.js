import OnSearchResult from "./components/onSearchResult.js";
import OnSearchBar from "./components/onSearchBar.js";
import {api} from "./api/fetch.js";


export default class App {
    constructor() {
        console.log("App is created!");
        const bottom = document.createElement('div');
        bottom.className='bottom';

        const top =document.createElement('div');
        top.className='top';


        const searchBar = new OnSearchBar(top, keyword =>{

            api.fetchImage(keyword).then((cat)=>{
                searchResult.updateDate(cat);
            });

        });

        const searchResult = new OnSearchResult(bottom);

        document.body.appendChild(top);
        document.body.appendChild(bottom);
    }

}