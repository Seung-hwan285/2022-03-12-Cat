import OnItem from "./onItem.js";
import onSearchInfo from "./onSearchInfo.js";
import {api} from "../api/fetch.js";



export default class OnSearchResult {

    // App.js bottom 삽입
    constructor($target,onClick) {
        this.$target=$target;

        // 클릭한 고양이 데이터
        this.onClick=onClick;
        this.data=null;

    }


    updateDate(data){
        this.$target.innerHTML='';
        this.data=data;
        this.render();
    }

    render() {
        // 하나씩 data 배열에 삽입

        const wrapper = document.createElement('div');

        wrapper.className='wrapper';

        const itemGroup = document.createElement('div');

        itemGroup.className='item-group';

        // 사진 그룹 , 고양이 객체 데이터

        this.data.map((cat)=>{

            // onClick데이터
            new OnItem(itemGroup,cat,this.onClick);
        });


        wrapper.appendChild(itemGroup);
        // App.js bottom에 wrapper  삽입
        this.$target.appendChild(wrapper);
    }
}