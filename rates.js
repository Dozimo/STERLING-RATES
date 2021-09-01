 const currencyNairaConverter = {
      USD: 500,
      GBP: 720,
      CAD: 450,
      AUD: 280,
      CFA: 1.25,
      GHS: 112.5,
      EUR: 550,
      convert: function (currency, amount) {
        return amount / this[currency];
      },
    };

    const conversionResult = () => {
      let amt = document.getElementById('amt').value;
      const amtForm = document.getElementById("amt-form");
      let convertedAmt = parseFloat(amt);
      let curr = document.getElementById('curr').value;
      let resultOutputWrapper = document.querySelector('.result-wrapper');
      let resultOutput = document.getElementById('result');

      if  (amt === '') {        
        validationError1('[name="amt"]', amtForm);
        resultOutputWrapper.classList.add('hide-me');
      } 
      if  ((isNaN(amt) && amt !== '')) { 
        validationError2('[name="amt"]', amtForm);       
        resultOutputWrapper.classList.add('hide-me');
      }
      if  (curr === 'Select currency') {        
        validationError3('[name="curr"]', amtForm);
        resultOutputWrapper.classList.add('hide-me');
      }
      if  (curr === 'Select currency' && (amt !== '' && !isNaN(amt))) {        
        validationError4('[name="curr"]', amtForm);
        validationError4('[name="amt"]', amtForm);
        resultOutputWrapper.classList.add('hide-me');
      }
      if (amt !== '' && curr !== 'Select currency' && !isNaN(amt)) {
        let calcResult = currencyNairaConverter.convert(curr, convertedAmt);
        calcResult = calcResult.toFixed(2);
        resultOutputWrapper.classList.remove('hide-me');
        resultOutput.textContent = `${convertedAmt} Nigerian Naira =  ${calcResult} ${curr}`;
        document.getElementById('curr').classList.remove("border-danger");
        document.querySelector(".invalid-feedback-1").classList.remove("d-block");
        document.querySelector(".invalid-feedback-2").classList.remove("d-block");
        document.getElementById('amt').classList.remove("border-danger");
    }
    };

    document.getElementById('submit').addEventListener('click', (e) => {
      e.preventDefault();
      conversionResult();
    });

     //Show or(hide) input validation Error
    function validationError1(inputField, feedbackForm, show = true) {
    if (show) {
      document.querySelector(inputField).classList.add("border-danger");
      feedbackForm.querySelector(".invalid-feedback-1").classList.add("d-block");
      feedbackForm.querySelector(".invalid-feedback-2").classList.remove("d-block");
    } else {
        // feedbackForm.querySelector(".invalid-feedback-1").classList.reset();
        feedbackForm.querySelector(".invalid-feedback-1").classList.remove("d-block");
        document.querySelector(inputField).classList.remove("border-danger");
    }
    }

    function validationError2(inputField, feedbackForm, show = true) {
    if (show) {
    document.querySelector(inputField).classList.add("border-danger");
    feedbackForm.querySelector(".invalid-feedback-2").classList.add("d-block");
    feedbackForm.querySelector(".invalid-feedback-1").classList.remove("d-block");
    } else {
        // feedbackForm.querySelector(".invalid-feedback-2").classList.reset();
        feedbackForm.querySelector(".invalid-feedback-2").classList.remove("d-block");
        document.querySelector(inputField).classList.remove("border-danger");
    }
    }

    function validationError3(selectField, feedbackForm, show = true) {
    if (show) {
    document.querySelector(selectField).classList.add("border-danger");

    } else {
        // feedbackForm.querySelector(".invalid-feedback-3").classList.reset();
        document.querySelector(selectField).classList.remove("border-danger");
      }
    }

    function validationError4(selectField,  feedbackForm, show = true) {
        if (show) {
        // document.querySelector(selectField).classList.remove("border-danger");
        feedbackForm.querySelector(".invalid-feedback-1").classList.remove("border-danger"); 
        feedbackForm.querySelector(".invalid-feedback-2").classList.remove("d-block");
        feedbackForm.querySelector(".invalid-feedback-2").classList.remove("border-danger");   
        } else {
            // feedbackForm.querySelector(".invalid-feedback-3").classList.reset();
            document.querySelector(selectField).classList.remove("border-danger");
          }
        }

    
    
    ///Append current date to cards
    let dt = new Date();
    document.querySelectorAll(".datetime").forEach(el => {
        el.innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear());
    } ) ;