import onSearchInfo from "./onSearchInfo.js";

export default class OnItem {
    constructor(itemGroup,cat,onClick) {
        this.itemGroup=itemGroup;

        this.onClick =onClick;
        this.cat=cat;

        this.render();

    }

    render() {

        const url = this.cat.url;
        const {temperament,origin} = this.cat.breeds[0];


        const itemWrapper =document.createElement('div');

        itemWrapper.className='wrapper';

        // item
        const item =document.createElement('div');
        item.className='item';

        // item 이미지
        const itemImg = document.createElement('img');
        itemImg.className='item-img';
        itemImg.src=url;

        // 이미지 설명
        const itemDescription = document.createElement('div');
        itemDescription.className='item-description';

        // temperament
        const itemTemper = document.createElement('p');
        itemTemper.className='item-temper';
        itemTemper.innerText=temperament;


        // origin
        const itemOrigin = document.createElement('p');
        itemOrigin.className='item-origin';
        itemOrigin.innerText=origin;


        // 고양이 사진 클릭하면 모달창 등장!
        item.addEventListener("click",()=>{

            // 클릭한 고양이 데이터 출력


            console.log(this.cat);
            this.onClick(this.cat);


        });


        itemDescription.appendChild(itemTemper);
        itemDescription.appendChild(itemOrigin);




        item.appendChild(itemImg);
        item.appendChild(itemDescription);
        itemWrapper.appendChild(item);
        this.itemGroup.appendChild(itemWrapper);

    }
}