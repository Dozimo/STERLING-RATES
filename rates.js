const currencyNairaSeller = {
    USD: 405,
    GBP: 550.27,
    EUR: 470.78,
    ZAR: 25.24,
    convert: function (currency, amount) {
      return amount * this[currency];
    },
  };


const currencyNairaBuyer = {
  USD: 406,
  GBP: 567.87,
  EUR: 488.19,
  ZAR: 26.84,
  convert: function (currency, amount) {
      return amount / this[currency];
  },
  };

const currencyUSDBuyer = {
      GBP: 1.3987,
      CAD: 0.814764,
      EUR: 1.2024,
      AUD: 0.753288,
      CNY: 0.174755,
      JPY: 0.02910073,
      INR: 0.0336675,
      CHF: 1.11237,
      NGN: 0.00246,
      convert: function (currency, amount) {
        return amount / this[currency];
      },
    };
    const currencyUSDSeller = {
        GBP: 1.3587,
        CAD: 0.774764,
        EUR: 1.1624,
        AUD: 0.713288,
        CNY: 0.174755,
        JPY: 0.00921004,
        INR: 0.0036675,
        CHF: 1.07237,
        NGN: 0.00246,
        convert: function (currency, amount) {
          return amount * this[currency];
        },
      };

  const conversionResult = () => {
    let amt = document.getElementById('amt').value;
    const amtForm = document.getElementById("amt-form");
    let convertedAmt = parseFloat(amt);
    let toCurr = document.getElementById('tocurr').value;
    let frmCurr = document.getElementById('frmcurr').value;
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
    if  (frmCurr === '') {        
      validationError3('[name="frmcurr"]', amtForm);
      resultOutputWrapper.classList.add('hide-me');
    }
    if  (frmCurr === '' && (amt !== '' && !isNaN(amt))) {        
      validationError4('[name="frmcurr"]', amtForm);
      validationError5('[name="amt"]', amtForm);
      resultOutputWrapper.classList.add('hide-me');
    }
    if (amt !== '' && frmCurr === 'NGN' && frmCurr !== '' && !isNaN(amt)) {
      let calcResult = currencyNairaBuyer.convert(toCurr, convertedAmt);
      calcResult = calcResult.toFixed(2);
      resultOutputWrapper.classList.remove('hide-me');
      resultOutput.textContent = `${convertedAmt} ${frmCurr} =  ${calcResult} ${toCurr}
      where 1 ${toCurr} = ${currencyNairaBuyer[toCurr]} ${frmCurr}  `;
      document.getElementById('frmcurr').classList.remove("border-danger");
      document.querySelector(".invalid-feedback-1").classList.remove("d-block");
      document.querySelector(".invalid-feedback-2").classList.remove("d-block");
      document.getElementById('amt').classList.remove("border-danger");
      
  }
  if (amt !== '' && toCurr === 'NGN' && frmCurr !== ''  && !isNaN(amt)) {
    let calcResult = currencyNairaSeller.convert(frmCurr, convertedAmt);
    calcResult = calcResult.toFixed(2);
    resultOutputWrapper.classList.remove('hide-me');
    resultOutput.textContent = `${convertedAmt} ${frmCurr} =  ${calcResult} ${toCurr}
    where 1 ${toCurr} = ${currencyNairaSeller[frmCurr]} ${frmCurr}  `;
    document.getElementById('frmcurr').classList.remove("border-danger");
    document.querySelector(".invalid-feedback-1").classList.remove("d-block");
    document.querySelector(".invalid-feedback-2").classList.remove("d-block");
    document.getElementById('amt').classList.remove("border-danger");
    console.log(calcResult);
    }
    if (amt !== '' && frmCurr === 'USD' && frmCurr !== '' &&   !isNaN(amt)) {
        let calcResult = currencyUSDBuyer.convert(toCurr, convertedAmt);
        calcResult = calcResult.toFixed(2);
        resultOutputWrapper.classList.remove('hide-me');
        resultOutput.textContent = `${convertedAmt} ${frmCurr} =  ${calcResult} ${toCurr}
        where 1 ${toCurr} = ${currencyUSDBuyer[toCurr]} ${frmCurr}  `;
        document.getElementById('frmcurr').classList.remove("border-danger");
        document.querySelector(".invalid-feedback-1").classList.remove("d-block");
        document.querySelector(".invalid-feedback-2").classList.remove("d-block");
        document.getElementById('amt').classList.remove("border-danger");
        console.log(calcResult);
    }
    if (amt !== '' && toCurr === 'USD' && frmCurr !== '' && frmCurr !== 'NGN' && !isNaN(amt)) {
    let calcResult = currencyUSDSeller.convert(frmCurr, convertedAmt);
    calcResult = calcResult.toFixed(2);
    resultOutputWrapper.classList.remove('hide-me');
    resultOutput.textContent = `${convertedAmt} ${frmCurr} =  ${calcResult} ${toCurr}
    where 1 ${toCurr} = ${currencyUSDSeller[frmCurr]} ${frmCurr}  `;
    document.getElementById('frmcurr').classList.remove("border-danger");
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
        feedbackForm.querySelector(".invalid-feedback-2").classList.remove("d-block");
        document.querySelector(inputField).classList.remove("border-danger");
    }
    }

    function validationError3(selectField, feedbackForm, show = true) {
    if (show) {
    document.querySelector(selectField).classList.add("border-danger");
    } else {   
        document.querySelector(selectField).classList.remove("border-danger");
      }
    }

    function validationError4(selectField,  feedbackForm, show = true) {
        if (show) {
        // document.querySelector(selectField).classList.remove("border-danger");
        feedbackForm.querySelector(".invalid-feedback-2").classList.remove("d-block");
        feedbackForm.querySelector(".invalid-feedback-1").classList.remove("d-block");      
        } else {
            document.querySelector(selectField).classList.remove("border-danger");
          }
        }

        function validationError5(inputField,  feedbackForm, show = true) {
            if (show) {
            // document.querySelector(selectField).classList.remove("border-danger");
            feedbackForm.querySelector(inputField).classList.remove("border-danger");  
            } else {
                document.querySelector(selectField).classList.remove("border-danger");
              }
              console.log(validationError4)
            }
    
    
    ///Append current date to cards
    let dt = new Date();
    document.querySelectorAll(".datetime").forEach(el => {
        el.innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear());
    } ) ;


function configureDropDownLists(frmcurr, tocurr) {
        var usdoptions = ['NGN', 'GBP', 'EUR', 'AUD', 'CAD', 'CNY', 'JPY', 'INR', 'CHF'];
        var NGNoptions = ['USD', 'GBP', 'EUR', 'ZAR'];
        var GBPoptions = ['NGN', 'USD'];
        var EURoptions = ['NGN', 'USD'];
        var AUDoptions = ['USD'];
        var CADoptions = ['USD'];
        var CNYoptions = ['USD'];
        var JPYoptions = ['USD'];
        var INRoptions = ['USD'];
        var CHFoptions = ['USD'];
        var ZARoptions = ['NGN'];
        
    
        switch (frmcurr.value) {
            case 'USD':
                tocurr.options.length = 0;
                for (i = 0; i < usdoptions.length; i++) {
                    createOption(tocurr, usdoptions[i], usdoptions[i]);
                }
                break;
            case 'NGN':
                tocurr.options.length = 0; 
            for (i = 0; i < NGNoptions.length; i++) {
                createOption(tocurr, NGNoptions[i], NGNoptions[i]);
                }
                break;
            case 'GBP':
                tocurr.options.length = 0;
                for (i = 0; i < GBPoptions.length; i++) {
                    createOption(tocurr, GBPoptions[i], GBPoptions[i]);
                }
                break;
                case 'ZAR':
                tocurr.options.length = 0;
                for (i = 0; i < ZARoptions.length; i++) {
                    createOption(tocurr, ZARoptions[i], ZARoptions[i]);
                }
                break;
                case 'EUR':
                tocurr.options.length = 0;
                for (i = 0; i < EURoptions.length; i++) {
                    createOption(tocurr, EURoptions[i], EURoptions[i]);
                }
                break;
                case 'AUD':
                tocurr.options.length = 0;
                for (i = 0; i < AUDoptions.length; i++) {
                    createOption(tocurr, AUDoptions[i], AUDoptions[i]);
                }
                break;
                case 'CAD':
                tocurr.options.length = 0;
                for (i = 0; i < CADoptions.length; i++) {
                    createOption(tocurr, CADoptions[i], CADoptions[i]);
                }
                break;
                case 'CNY':
                tocurr.options.length = 0;
                for (i = 0; i < CNYoptions.length; i++) {
                    createOption(tocurr, CNYoptions[i], CNYoptions[i]);
                }
                break;
                case 'JPY':
                tocurr.options.length = 0;
                for (i = 0; i < JPYoptions.length; i++) {
                    createOption(tocurr, JPYoptions[i], JPYoptions[i]);
                }
                break;
                case 'INR':
                tocurr.options.length = 0;
                for (i = 0; i < INRoptions.length; i++) {
                    createOption(tocurr, INRoptions[i], INRoptions[i]);
                }
                break;
                case 'CHF':
                    tocurr.options.length = 0;
                    for (i = 0; i < CHFoptions.length; i++) {
                        createOption(tocurr, CHFoptions[i], CHFoptions[i]);
                    }
                    break;
                default:
                    tocurr.options.length = 0;
                break;
        }
    
    }
    
        function createOption(frmcurr, text, value) {
            var opt = document.createElement('option');
            opt.value = value;
            opt.text = text;
            frmcurr.options.add(opt);
        }