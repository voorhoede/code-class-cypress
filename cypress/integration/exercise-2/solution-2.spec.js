describe('solution-2', function () {
    beforeEach(function () {
        cy.visit('/');
    });

    it('should not be possible to add a empty todo', function () {
        cy.get('.new-todo').type('{enter}');
        cy.get('.todo-list').should('not.exist');
    });

    it('should be possible to add a todo', function () {
        cy.get('.new-todo').as('textInput');

        //1. type some text in the todo text input and press enter
        cy.get('@textInput').type('my first todo{enter}');

        //2. test that the todo text input is empty
        cy.get('@textInput').should('be.empty');

        cy.get('.todo-list li').as('todoItems');

        //3. test that the todo list has at least one item
        cy.get('@todoItems').should('have.length', 1);

        //4. test that the new item has been added to the list
        cy.get('@todoItems').first().should('contain', 'my first todo');
    });

    it('should be possible to mark a todo as done', function () {
        cy.createDefaultTodos();

        //fancy solution to read the old todo-count
        cy.get('.todo-count').then(todoCountEl => {
            const [count] = todoCountEl.text().split(' ');
            return parseInt( count, 10 );
        }).as('oldTodoCount');

        //1. create an alias for the second todo
        cy.get('.todo-list li:nth-child(2)').as('secondTodo');

        //2. test that you can click on the toggle for the second todo
        cy.get('@secondTodo').find('.toggle').click();

        //3. test that the checkbox in the second todo is checked
        cy.get('@secondTodo').find('.toggle').should('be.checked');

        //4. test that the second todo is marked as completed (has the .completed class)
        cy.get('@secondTodo').should('have.class', 'completed');

        //5. test that the number in todo-count has decreased
        //cy.get('.todo-count').should('contain', '2 items left');
        cy.get('.todo-count').then(todoCountEl => {
            const [count] = todoCountEl.text().split(' ');
            expect( parseInt(count, 10) ).to.equal(this.oldTodoCount-1);
        });
    });
});