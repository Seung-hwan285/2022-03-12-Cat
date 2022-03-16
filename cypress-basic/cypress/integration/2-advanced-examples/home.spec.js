describe('Cat 테스트',()=> {
    beforeEach(() => {
        cy.visit('http://localhost:63342/catProject/index.html?_ijt=lpu1hve1i7lec9p3f9clm6vipc&_ij_reload=RELOAD_ON_SAVE')
    });


    // it('키워드 별로 고양이 화면에 출력 테스트 (Click)',()=>{
    //     const $value = cy.get('input');
    //
    //     $value.type('no');
    //     cy.get('.search-btn').click();
    //
    //
    //     //img에 item-img class가 있는지로 테스트 진행
    //     cy.get('img')
    //         .each(($el)=>
    //             cy.wrap($el).should('have.class','item-img'));
    //
    //
    //
    // });
    // it('키워드 별로 고양이 화면에 출력 테스트 (Enter)',()=>{
    //
    //
    //     const $value = cy.get('input');
    //
    //
    //     $value.type('no');
    //
    //     $value.type('{enter}');
    //
    //     cy.get('img')
    //         .each(($el)=>
    //         cy.wrap($el).should('have.class','item-img'));
    // });

    // it('키워드 검색하면 리스트 3개만 나오는지 테스트',()=>{
    //
    //     let testKeyWord=['ae','no'];
    //
    //
    //     testKeyWord.forEach((keyword)=>{
    //         const $value = cy.get('input');
    //         $value.type(keyword);
    //         cy.get('.search-btn').click();
    //
    //
    //     });
    //     cy.get('.recent-keyword').find('.clip').should('have.length',2);
    //
    //
    // });

    // it('다크모드 테스트',()=>{
    //
    //     let $darkBtn = cy.get('.dark');
    //
    //     $darkBtn.click();
    //
    //     cy.get('body')
    //         .each(($el)=>cy.wrap($el).should('have.class','dark-mode'));
    // });

    it('모달 테스트',()=>{

    });


});