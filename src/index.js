// 1
function waitForAnyButtonToBeClicked(firstSelector, secondSelector) {
  return new Promise(function (resolve, reject) {
    const firstButton = document.querySelector(firstSelector);
    const secondButton = document.querySelector(secondSelector);
    if (firstButton) {
      firstButton.addEventListener('click', function () {
        resolve(firstButton);
      });
    }
    if (secondButton) {
      secondButton.addEventListener('click', function () {
        resolve(secondButton);
      });
    } else {
      reject();
    }
  });
}

waitForAnyButtonToBeClicked('#first-button', '#second-button')
  .then(function (clickedButton) {
    console.log('A button was clicked', clickedButton);
  })
  .catch(function () {
    console.log('One of the buttons does not exist');
  });

// 2
function waitForPasswordsToMatch(firstSelector, secondSelector) {
  return new Promise(function (resolve, reject) {
    const firstInput = document.querySelector(firstSelector);
    const secondInput = document.querySelector(secondSelector);
    const firstInputValue = firstInput.value;
    const secondInputValue = secondInput.value;
    if (firstInput && secondInput && firstInputValue === secondInputValue) {
      resolve();
    } else {
      reject();
    }
  });
}

waitForPasswordsToMatch('#password-input', '#confirm-password-input')
  .then(function () {
    console.log('Passwords match');
  })
  .catch(function () {
    console.log("Passwords doesn't match or are missing");
  });
