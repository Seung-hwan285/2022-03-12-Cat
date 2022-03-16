export default class onSearchInfo{

    constructor($target,data) {
        this.$target =$target;
        this.data=data;
        this.render();
    }


    render(){
        const modal = document.createElement('div');
        modal.className='modal';

        const info = document.createElement('div');
        info.className='info';

        const closeBtn =document.createElement('p');
        closeBtn.className='close-btn';
        closeBtn.innerText='X';

        const infoHeader = document.createElement('div');
        infoHeader.className='info-header';

        const infoTitle = document.createElement('p');
        infoTitle.className='info-title';
        infoTitle.innerText='고양이 제목 뭐치지?';
        const infoImg = document.createElement('img');
        infoImg.className='info-img';

        const infoDescription = document.createElement('div');
        infoDescription.className='info-description';

        const infoTemper =document.createElement('p');
        infoTemper.className='info-Temper';

        const infoOrigin = document.createElement('p');
        infoOrigin.className='info-Origin';



        infoDescription.appendChild(infoTemper);
        infoDescription.appendChild(infoOrigin);

        infoHeader.appendChild(infoTitle);
        infoHeader.appendChild(closeBtn);


        info.appendChild(infoHeader);
        info.appendChild(infoImg);
        info.appendChild(infoDescription);



        modal.appendChild(info);

        this.$target.appendChild(modal);
    }


}