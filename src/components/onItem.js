export default class OnItem {
    constructor(itemGroup,cat) {
        this.itemGroup=itemGroup;
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


        item.addEventListener("click",()=>{
            console.log({origin});
            const $modal = document.querySelector('.modal');
            $modal.classList.remove('hidden');
        });


        itemDescription.appendChild(itemTemper);
        itemDescription.appendChild(itemOrigin);




        item.appendChild(itemImg);
        item.appendChild(itemDescription);
        itemWrapper.appendChild(item);
        this.itemGroup.appendChild(itemWrapper);

    }
}