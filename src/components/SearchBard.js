export default class SearchBar {


    constructor($target,keyword) {

        // top
        this.$target = $target;
        // keyword
        this.onKeyword = keyword;
        this.render();
    }





// d
    // body 태그안에 삽입
    render(){

        const wrapper = document.createElement('wrapper');
        wrapper.className='wrapper';

        const searchBox = document.createElement('input');
        searchBox.className='search-box';
        searchBox.placeholder='고양이를 검색하세요!';

        searchBox.addEventListener("keyup",()=>{
            this.onKeyword(searchBox.value);
        });


        wrapper.appendChild(searchBox);


        this.$target.appendChild(wrapper);
    }
}