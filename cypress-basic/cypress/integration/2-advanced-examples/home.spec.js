describe('Cat 테스트',()=> {
    beforeEach(() => {
        cy.visit('http://localhost:63342/catProject/index.html?_ijt=lpu1hve1i7lec9p3f9clm6vipc&_ij_reload=RELOAD_ON_SAVE')
    });


    it('키워드 별로 고양이 화면에 출력 테스트',()=>{
        const $value = cy.get('input');

        $value.type('no');


        //img에 item-img class가 있는지로 테스트 진행
        cy.get('img')
            .each(($el)=> cy.wrap($el).should('have.class','item-img'));



    });
});