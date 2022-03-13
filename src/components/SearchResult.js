import Item from "./Item.js";

export default class SearchResult{


    // App.js bottom 삽입
    constructor($target) {
        this.$target=$target;
        this.data=[];
        this.render();
    }

    updateDate(data){
        // 하나씩 data 배열에 삽입
        this.data=data;
        // 클로저 개념 -> 내부 블럭에서만 실행
        this.render();
    }


    render() {

        const wrapper = document.createElement('div');

        wrapper.className='wrapper';

        const itemGroup = document.createElement('div');

        itemGroup.className='item-group';

        // 사진 그룹 , 고양이 객체 데이터
        this.data.map((cat)=>{

            new Item(itemGroup,cat);
        });

        wrapper.appendChild(itemGroup);
        // App.js bottom에 wrapper  삽입
        this.$target.appendChild(wrapper);
    }
}