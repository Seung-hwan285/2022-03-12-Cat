export default class OnSearchBar {

    constructor($target,keyword) {
        // top
        this.$target = $target;
        // keyword
        this.onKeyword = keyword;
        this.render();

        this.keyWordlist=[];
    }

    recentKeyWordTemplate(keyword){
        return `<a class="clip">${keyword}</a>`
    }

    // body 태그안에 삽입
    render(){
        const wrapper = document.createElement('wrapper');
        wrapper.className='wrapper';
        const span =document.createElement('span');
        span.className='recent-keyword';


        const form = document.createElement('form');
        form.className='form-data';

        const searchBox = document.createElement('input');
        searchBox.className='search-box';
        searchBox.placeholder='고양이를 검색하세요!';


        const searchBtn = document.createElement('button');
        searchBtn.className='search-btn';
        searchBtn.innerText='버튼';



        searchBtn.addEventListener("submit",(e)=>{
            e.preventDefault();
            this.keyWordlist.push(searchBox.value);
            this.onKeyword(searchBox.value);
            searchBox.value="";
            let keyWordLen = this.keyWordlist.length;

            if(keyWordLen <=3){
                span.innerHTML=this.keyWordlist.map(this.recentKeyWordTemplate).join(" ");
            }
        });

        searchBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            this.keyWordlist.push(searchBox.value);
            this.onKeyword(searchBox.value);
            searchBox.value="";

            let keyWordLen = this.keyWordlist.length;

            if(keyWordLen <= 3){
                span.innerHTML=this.keyWordlist.map(this.recentKeyWordTemplate).join(" ");
            }
        });




        form.appendChild(searchBox);
        form.appendChild(searchBtn);

        wrapper.appendChild(form);
        wrapper.appendChild(span);
        this.$target.appendChild(wrapper);
    }
}