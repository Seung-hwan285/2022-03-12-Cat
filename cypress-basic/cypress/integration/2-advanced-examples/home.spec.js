describe('Cat 테스트',()=> {
    beforeEach(() => {
        cy.visit('http://localhost:63342/catProject/index.html?_ijt=lpu1hve1i7lec9p3f9clm6vipc&_ij_reload=RELOAD_ON_SAVE')
    });


    it('키워드 별로 고양이 화면에 출력 테스트 (Click)',()=>{
        const $value = cy.get('input');

        $value.type('ae');
        cy.get('.search-btn').click();

        cy.get('img')
            .each(($el)=>
                cy.wrap($el).should('have.class','info-img'));



    });
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

    // it('모달 Open 테스트',()=>{
    //
    //     const $value = cy.get('input');
    //     $value.type('ae');
    //
    //     cy.get('.search-btn').click();
    //     cy.wait(1000);
    //
    //     const el=cy.get('.item').eq(1);
    //
    //     el.click();
    //
    //
    //     cy.get('.modal').should('have.class','modal');
    //
    // });
    //
    //
    // it('모달 Close 테스트',()=>{
    //
    //     const $value = cy.get('input');
    //     $value.type('ae');
    //
    //     cy.get('.search-btn').click();
    //     cy.wait(1000);
    //
    //     const el=cy.get('.item').eq(1);
    //     el.click();
    //
    //     cy.get('.close-btn').click();
    //
    //     cy.get('.modal').should('have.class','hidden');
    // });

    // it('새로고침했을때 랜더링 되는지  테스트',()=>{
    //
    //
    //     cy.contains('Platform').click();
    //     cy.reload();
    // });


});