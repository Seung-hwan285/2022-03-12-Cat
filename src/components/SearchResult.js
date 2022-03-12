export default class SearchResult{

    constructor($target) {
        // (div) className : bottom
        this.target=$target;

        this.data=[];
        this.render();
    }

    updateData(data){
        this.data=data;
        this.render();
    }

    render(){

        const isWrapperGroup = document.createElement('div');

        isWrapperGroup.className = 'wrapper';


        const itemGroup = document.createElement('div');
        itemGroup.className = 'item-group';


        this.data.map((cat)=>{
            console.log(cat);
        });


        isWrapperGroup.appendChild(itemGroup);
        this.target.appendChild(isWrapperGroup);
    }
}