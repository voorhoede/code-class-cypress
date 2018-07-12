describe('solution-3', function () {
    beforeEach(function () {
        /*
            TODO 
            - create a server with 2 routes
            - the first route should mock a get request to /api/todos and provide the data in the fixtures/todos.json. Use the alias "getTodos"
            - the second route should mock a post request (you can omit the response). Use the alias "saveTodos"
        */

        cy.server();
        cy.route('GET', 'http://localhost:8801/api/todos', 'fixture:todos').as('getTodos');
        cy.route('POST', 'http://localhost:8801/api/todos', {}).as('saveTodos');

        cy.visit('/');
        cy.wait('@getTodos');
    });

    it('should attempt to load the todos from the api', function () {
        cy.get('.todo-list li').should('have.length', 3);
        cy.get('.todo-list li:first-child').should('contain', 'todo 1');
        cy.get('.todo-list li:nth-child(2)').should('contain', 'todo 2').and('have.class', 'completed');
        cy.get('.todo-list li:last-child').should('contain', 'todo 3');
    });

    it('should send changes to the api', function () {
        cy.get('.new-todo').type('Save this{enter}');

        cy.wait('@saveTodos');
    });
});