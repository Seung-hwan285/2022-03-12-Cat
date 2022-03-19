import OnSearchResult from "./components/onSearchResult.js";
import OnSearchBar from "./components/onSearchBar.js";
import {api} from "./api/fetch.js";
import onSearchInfo from "./components/onSearchInfo.js";
import onSearchRefresh from "./components/onSearchRefresh.js";


//새로고침이 됬을대 생성자에서 가장 먼저 저장소에 있는 데이터를 가져와야함
// -[x] LocalStorage 데이터 저장 (set)
// -[x] LocalStorage 데이터 가져오기 (get)
// -[x] 가져온 get 데이터를 첫 화면에 뿌려주기

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

        const modal = document.createElement('div');
        modal.className='modal';
        modal.classList.add('hidden');



        const getLocalStorage = localStorage.getItem('item');

        // 얘를 화면에 뿌려줘야함
        const getJsonParse = JSON.parse(getLocalStorage);


        // 화면에 뿌려주는 refresh class

        const searchBar = new OnSearchBar(top, keyword =>{

            api.fetchImage(keyword).then((cat)=>{

                searchResult.updateDate(cat);

                localStorage.setItem('item',JSON.stringify(cat));
            });

        });


        const searchResult = new OnSearchResult(bottom,target=>{

            const modal = document.querySelector('.modal');

            searchOnInfo.updateData(target);
            modal.classList.remove('hidden');
        });


        if(getLocalStorage !==null){
            const searchRefresh = new onSearchRefresh(bottom,getJsonParse);

        }

        const searchOnInfo = new onSearchInfo(modal);


        darkBtn.addEventListener("click",()=>{
                this.darkModeChange();
        });


        document.body.appendChild(modal);
        document.body.appendChild(darkBtn);
        document.body.appendChild(top);
        document.body.appendChild(bottom);

    }

    darkModeChange(){
        let element = document.body;
        element.classList.toggle('dark-mode');
    }



}