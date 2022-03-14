export default class OnSearchBar {

    constructor($target,keyword) {
        // top
        this.$target = $target;
        // keyword
        this.onKeyword = keyword;
        this.render();
    }

    // body 태그안에 삽입
    render(){
        const wrapper = document.createElement('wrapper');
        wrapper.className='wrapper';


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
            this.onKeyword(searchBox.value);
        });

        searchBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            this.onKeyword(searchBox.value);
        });


        form.appendChild(searchBox);
        form.appendChild(searchBtn);

        wrapper.appendChild(form);

        this.$target.appendChild(wrapper);
    }
}