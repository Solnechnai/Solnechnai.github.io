
var url = "https://login.qa.studio";

describe('Тестирование логики авторизации', function () {
    it('Приведение к сточным буквам', function () {
            cy.visit(url);
            cy.wait(1000);
            cy.get('#mail').type('GerMan@Dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.wait(1000);
            cy.get('#messageHeader').contains('Авторизация прошла успешно');
            cy.get('#exitMessageButton > .exitIcon').click();
        })
    })

    describe('Тестирование логики авторизации', function () {
        it('Верный логин, верный пароль', function () {
             cy.visit(url);
             cy.wait(1000);
             cy.get('#mail').type('german@dolnikov.ru');
             cy.get('#pass').type('iLoveqastudio1');
             cy.get('#loginButton').click();
             cy.wait(1000);
             cy.get('#messageHeader').contains('Авторизация прошла успешно');
             cy.get('#exitMessageButton > .exitIcon').click();
         })
    })

    describe('Тестирование логики авторизации', function () {
        it('Верный логин, неверный пароль', function () {
            cy.visit(url);
            cy.wait(1000);
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#pass').type('ЫЫЫЫЫЫЫЫ');
            cy.get('#loginButton').click();
            cy.wait(1000);
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').click();
        })
    })

    describe('Тестирование логики авторизации', function () {
        it('Неверный формат почты', function () {
            cy.visit(url);
            cy.wait(1000);
            cy.get('#mail').type('gol98qanYandex.ru');
            cy.wait(3000);
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.wait(1000);
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
            cy.get('#exitMessageButton > .exitIcon').click();
        })
    })    

    describe('Тестирование логики авторизации', function () {
        it('Неверный логин, верный пароль', function () {
            cy.visit(url);
            cy.wait(1000);
            cy.get('#mail').type('example9@mail.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.wait(1000);
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').click();
        })
    })

    describe('Тестирование логики авторизации', function () {
        it('Восстановление пароля', function () {
            cy.visit(url);
            cy.wait(1000);
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('german@dolnikov.ru');
            cy.wait(1000);
            cy.get('#restoreEmailButton').click();
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
            cy.get('#exitMessageButton > .exitIcon').click();
        })
    })