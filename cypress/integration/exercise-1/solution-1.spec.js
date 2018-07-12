describe('solution-1', function () {
    beforeEach(function () {
        cy.visit('/');
    });

    it('should show the todo input', function () {
        cy.get('.new-todo').should('be.visible');
    });

    it('should not show the todo list', function () {
        cy.get('.todo-list').should('not.exist');
    });

    it('should focus the todo input', function () {
        cy.focused().should('have.class', 'new-todo');
    });
});