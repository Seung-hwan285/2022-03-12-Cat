export default class onSearchRefresh{

    // bottom? 뿌려주면 될 것 같은데?
    constructor($target,JsonParse) {

        this.$target=$target;

        this.cats=JsonParse;

        this.render();
    }

    render(){
        console.log(this.cats);

        const wrapper = document.createElement('div');
        wrapper.className='wrapper';

        const itemGroup = document.createElement('div');

        itemGroup.className='item-group';


        wrapper.appendChild(itemGroup);
        this.$target.appendChild(wrapper);

        this.cats.forEach((cat)=>{


            const url = cat.url;

            const {temperament, origin} = cat.breeds[0];



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


            itemDescription.appendChild(itemTemper);
            itemDescription.appendChild(itemOrigin);

            item.appendChild(itemImg);
            item.appendChild(itemDescription);
            itemWrapper.appendChild(item);

            itemGroup.appendChild(itemWrapper);
        });


    }



}