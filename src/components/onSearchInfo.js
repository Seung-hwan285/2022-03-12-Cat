export default class onSearchInfo{


    // modal 만들 어옴
    constructor($target) {
        this.$target =$target;

        // updateDate 통해서 값을 전달해주자
        this.data=null;
        this.render();
    }


    updateData(data){

        console.log(data);
        this.data=data;
        this.render();
    }



    render(){
        // 고양이 데이터가 있으면 실행
        if(this.data){

            const url =this.data.url;
            console.log(url);

            console.log(this.data);
            const {name,temperament , origin} = this.data.breeds[0];
            console.log(origin);

        const info = document.createElement('div');
        info.className='info';

        const closeBtn =document.createElement('p');
        closeBtn.className='close-btn';
        closeBtn.innerText='X';

        const infoHeader = document.createElement('div');
        infoHeader.className='info-header';

        const infoTitle = document.createElement('p');
        infoTitle.className='info-title';
        infoTitle.innerText=name;

        const infoImg = document.createElement('img');
        infoImg.className='info-img';
        infoImg.src=url

        const infoDescription = document.createElement('div');
        infoDescription.className='info-description';

        const infoTemper =document.createElement('p');
        infoTemper.className="info-temperament";
        infoTemper.innerText=temperament;
        const infoOrigin = document.createElement('p');
        infoOrigin.className="info-origin";
        infoOrigin.innerText=origin;



        closeBtn.addEventListener("click",()=>{

                this.$target.innerHTML="";
                this.$target.classList.add('hidden');
        });

        infoDescription.appendChild(infoTemper);
        infoDescription.appendChild(infoOrigin);

        infoHeader.appendChild(infoTitle);
        infoHeader.appendChild(closeBtn);

        info.appendChild(infoHeader);
        info.appendChild(infoImg);
        info.appendChild(infoDescription);

        this.$target.appendChild(info);
        }
    }
}