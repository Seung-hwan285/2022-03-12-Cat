import OnSearchResult from "./components/onSearchResult.js";
import OnSearchBar from "./components/onSearchBar.js";
import {api} from "./api/fetch.js";
import onSearchInfo from "./components/onSearchInfo.js";


export default class App {
    constructor() {
        console.log("App is created!");
        const bottom = document.createElement('div');
        bottom.className='bottom';

        const top =document.createElement('div');
        top.className='top';

        const darkBtn = document.createElement('button');

        darkBtn.className='dark';
        darkBtn.innerText='😸';



        const searchBar = new OnSearchBar(top, keyword =>{

            api.fetchImage(keyword).then((cat)=>{
                searchResult.updateDate(cat);
            });

        });

        const searchResult = new OnSearchResult(bottom);

        darkBtn.addEventListener("click",()=>{
                this.darkModeChange();
        });



        this.modalHandlerView();
        document.body.appendChild(darkBtn);
        document.body.appendChild(top);
        document.body.appendChild(bottom);
    }

    modalHandlerView(){
        return new onSearchInfo(document.body);
    }

    darkModeChange(){
        let element = document.body;
        element.classList.toggle('dark-mode');
    }



}