describe('exercise-2', function () {
    beforeEach(function () {
        cy.visit('/');
    });

    it('should not be possible to add a empty todo', function () {
        //1. press "enter" in the textfield without entering anything

        //2. check that the todo list does not exist
    });

    it('should be possible to add a todo', function () {
        //1. type some text in the todo text input and press enter

        //2. test that the todo text input is empty

        //3. test that the todo list has at least one item

        //4. test that the new item has been added to the list
    });

    it('should be possible to mark a todo as done', function () {
        // i've created a special todo command (see support/commands.js) to create some default todo's
        // test that you can mark a todo as completed (by clicking on its checkbox)
        cy.createDefaultTodos();

        //1. create an alias for the second todo

        //2. test that you can click on the toggle for the second todo

        //3. test that the checkbox in the second todo is checked

        //4. test that the second todo is marked as completed (has the .completed class)

        //5. test that the number in todo-count has decreased
    });
});