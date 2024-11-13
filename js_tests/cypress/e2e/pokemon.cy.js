describe('Покупка аватара', function () {                                // название набора тестов
  it('e2e тест на проверку позитивного логина', function () {   // название теста
    cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
    cy.get('input[type="email"]').type('USER_LOGIN');                   // вводим логин
    cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
    cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
    cy.wait(5000);
    cy.contains('8549').should('be.visible');
  });

  it('e2e тест на проверку восстановления пароля', function () {   // название теста
    cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
    cy.get('a.auth__restore').click();// нажимаем кнопку Подтвердить
    cy.get('input[type="email"]').type('USER_LOGIN');
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.contains('Восстановление пароля').should('be.visible');
  });

  it('e2e тест негативный кейс авторизации неверный пароль', function () {   // название теста
    cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
    cy.get('input[type="email"]').type('USER_LOGIN');                   // вводим логин
    cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
    cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
    cy.wait(2000);
    cy.contains('Неверные логин или пароль').should('be.visible');
  });

  it('e2e тест на проверку на негативный кейс авторизации неверный логин', function () {   // название теста
    cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
    cy.get('input[type="email"]').type('USER_LOGIN');                   // вводим логин
    cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
    cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
    cy.wait(2000);
    cy.contains('Неверные логин или пароль').should('be.visible');
  });

  it('e2e тест на проверку на негативный кейс авторизации Ввести логин без @', function () {   // название теста
    cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
    cy.get('input[type="email"]').type('USER_LOGIN');                   // вводим логин
    cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
    cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
    cy.wait(2000);
    cy.contains('Введите почту').should('be.visible');
  });

  it('e2e тест на проверку на приведение к строчным буквам в логине', function () {   // название теста
    cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
    cy.get('input[type="email"]').type('USER_LOGIN');                   // вводим логин
    cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
    cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
    cy.wait(2000);
    cy.contains('Покемоны').should('be.visible');
  });

  it('e2e тест на покупку нового аватара для своего тренера', function () {   // название теста
    cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
    cy.get('input[type="email"]').type('USER_LOGIN');                   // вводим логин
    cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
    cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
    cy.wait(2000);
    cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
    cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
    cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
    cy.get('.credit').type('4620869113632996');                     // вводим номер карты
    cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
    cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
    cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
    cy.wait(2000);
    cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
    cy.wait(2000);
    cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
    cy.wait(2000);
    cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
    cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке

  });
});
