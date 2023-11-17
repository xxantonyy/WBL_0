import '../public/styles/style.css';
//Ключи локал стореджа
const getSumm = 'LOCAL_STORAGE_SUMM';
const getSkidkaSumm = 'LOCAL_STORAGE_GETSKIDKA';
const getskidka = 'LOCAL_STORAGE_SKIDKA';

// Получаем элемент с итоговой суммой заказа;

const finalSumma = document.querySelector('.last_section-itogo-main_right');
const final_summa_bez_skidki = document.querySelector('.last_section-itogo-second_right');
const skidka = document.querySelector('.skidka');
const not_have_items = document.querySelector('.not_have_items');


// Первый товар 

const firstPriceFirts = 500;
const firstMinusDQS = document.querySelector('.firstMinus');
const firstScoreDQS = document.querySelector('.firstScore');
const firstPlusDQS = document.querySelector('.firstPlus');
const firstPriceDQS = document.querySelector('.firstPrice');
const firstOstatokDQS = document.querySelector('.firstOstatok');
const firstPriceWithoutCashoutDQS = document.querySelector('.firstPriceWithoutCashout');
const firstPriceMobileDQS = document.querySelector('.firstPriceMobile');
const firstPriceWithoutCashoutMobileDQS = document.querySelector('.firstPriceWithoutCashoutMobile');

// Второй товар
const secondPriceFirts = 200;
const secondMinusDQS = document.querySelector('.secondMinus');
const secondScoreDQS = document.querySelector('.secondScore');
const secondPlusDQS = document.querySelector('.secondPlus');
const secondPriceDQS = document.querySelector('.secondPrice');
const secondOstatokDQS = document.querySelector('.secondOstatok');
const secondPriceWithoutCashDQS = document.querySelector('.secondPriceWithoutCash');
const secondPriceMobileDQS = document.querySelector('.secondPriceMobile');
const secondPriceWithoutCashoutMobileDQS = document.querySelector('.secondPriceWithoutCashoutMobile');


// Третий товар
const thirdPriceFirts = 400;
const thirdMinusDQS = document.querySelector('.thirdMinus');
const thirdScoreDQS = document.querySelector('.thirdScore');
const thirdPlusDQS = document.querySelector('.thirdPlus');
const thirdPriceDQS = document.querySelector('.thirdPrice');
const thirdOstatokDQS = document.querySelector('.thirdOstatok');
const thirdPriceWithoutCashDQS = document.querySelector('.thirdPriceWithoutCash');
const thirdPriceMobileDQS = document.querySelector('.thirdPriceMobile');
const thirdPriceWithoutCashoutMobileDQS = document.querySelector('.thirdPriceWithoutCashoutMobile');

// Общаая сумма
/////////////////////////////////////////////////////////////////////////////////////////
const Summary = (number, arg) => {
   if(arg === "-" ) {
      finalSumma.textContent = parseInt(finalSumma.textContent) - number;
      final_summa_bez_skidki.textContent = Math.round(parseInt(finalSumma.textContent) * 1.1);
      skidka.textContent =  Math.round(final_summa_bez_skidki.textContent - finalSumma.textContent) * -1;
   }
   
   if(arg === "+") {
      finalSumma.textContent = parseInt(finalSumma.textContent) + number;
      final_summa_bez_skidki.textContent =  Math.round(parseInt(finalSumma.textContent) * 1.1);
      skidka.textContent =  Math.round(final_summa_bez_skidki.textContent - finalSumma.textContent) * -1;
   }
   
}


// Первый товар слушатели событий
/////////////////////////////////////////////////////////////////////////////////////////

firstMinusDQS.addEventListener('click', () => {
   if(parseInt(firstScoreDQS.textContent) === 0) return;
   if (parseInt(firstOstatokDQS.textContent) <= 0) {
      document.querySelector('.cart_item__nohave_1').style = "display: none";
      not_have_items.textContent = parseInt(not_have_items.textContent) - 1;
   }
   if(document.querySelector('.first_item').src === "http://localhost:5000/assets/checkbox_empty.svg") {
      return
   }

   firstScoreDQS.textContent -= 1;
   firstOstatokDQS.textContent = parseInt(firstOstatokDQS.textContent) + 1;
   firstPriceDQS.textContent = firstScoreDQS.textContent * firstPriceFirts;
   firstPriceMobileDQS.textContent = firstScoreDQS.textContent * firstPriceFirts;
   firstPriceWithoutCashoutDQS.textContent = Math.round(firstPriceDQS.textContent * 1.1);
   firstPriceWithoutCashoutMobileDQS.textContent = Math.round(firstPriceDQS.textContent * 1.1);
   Summary(firstPriceFirts, "-");
})
firstPlusDQS.addEventListener('click', () => {
   if(parseInt(firstScoreDQS.textContent) === 100 || parseInt(firstOstatokDQS.textContent) === 0) return;
   if(parseInt(firstOstatokDQS.textContent) <= 1) {
      document.querySelector('.cart_item__nohave_1').style = "display: block";
      not_have_items.textContent = parseInt(not_have_items.textContent) + 1;
   }
   if(document.querySelector('.first_item').src === "http://localhost:5000/assets/checkbox_empty.svg") {
      return
   }


   firstScoreDQS.textContent = parseInt(firstScoreDQS.textContent) + 1;
   firstOstatokDQS.textContent = parseInt(firstOstatokDQS.textContent) - 1;
   firstPriceDQS.textContent = firstScoreDQS.textContent * firstPriceFirts;
   firstPriceMobileDQS.textContent = firstScoreDQS.textContent * firstPriceFirts;
   firstPriceWithoutCashoutDQS.textContent = Math.round(firstPriceDQS.textContent * 1.1);
   firstPriceWithoutCashoutMobileDQS.textContent = Math.round(firstPriceDQS.textContent * 1.1);
   Summary(firstPriceFirts, "+");
})

// Второй товар слушатели событий
/////////////////////////////////////////////////////////////////////////////////////////

secondMinusDQS.addEventListener('click', () => {
   if(parseInt(secondScoreDQS.textContent) === 0) return;
   if(parseInt(secondOstatokDQS.textContent) <= 0) {
      document.querySelector('.cart_item__nohave_2').style = "display: none";
      not_have_items.textContent = parseInt(not_have_items.textContent) - 1; 
   }
   if(document.querySelector('.second_item').src === "http://localhost:5000/assets/checkbox_empty.svg") {
      return
   }

   secondScoreDQS.textContent -= 1;
   secondOstatokDQS.textContent = parseInt(secondOstatokDQS.textContent) + 1;
   secondPriceDQS.textContent = secondScoreDQS.textContent * secondPriceFirts;
   secondPriceMobileDQS.textContent = secondScoreDQS.textContent * secondPriceFirts;
   secondPriceWithoutCashDQS.textContent = Math.round(secondPriceDQS.textContent * 1.1);
   secondPriceWithoutCashoutMobileDQS.textContent = Math.round(secondPriceDQS.textContent * 1.1);
   Summary(secondPriceFirts, "-");

})
secondPlusDQS.addEventListener('click', () => {
   if(parseInt(secondScoreDQS.textContent) === 100 || parseInt(secondOstatokDQS.textContent) === 0) return;
   if(parseInt(secondOstatokDQS.textContent) <= 1) {
      document.querySelector('.cart_item__nohave_2').style = "display: block";
      not_have_items.textContent = parseInt(not_have_items.textContent) + 1;
   }
   if(document.querySelector('.second_item').src === "http://localhost:5000/assets/checkbox_empty.svg") {
      return
   }

   secondScoreDQS.textContent = parseInt(secondScoreDQS.textContent) + 1;
   secondOstatokDQS.textContent = parseInt(secondOstatokDQS.textContent) - 1;
   secondPriceDQS.textContent = secondScoreDQS.textContent * secondPriceFirts;
   secondPriceMobileDQS.textContent = secondScoreDQS.textContent * secondPriceFirts;
   secondPriceWithoutCashDQS.textContent = Math.round(secondPriceDQS.textContent * 1.1);
   secondPriceWithoutCashoutMobileDQS.textContent = Math.round(secondPriceDQS.textContent * 1.1);
   Summary(secondPriceFirts, "+")
})

// Третий товар слушатели событий
/////////////////////////////////////////////////////////////////////////////////////////

thirdMinusDQS.addEventListener('click', () => {
   if(parseInt(thirdScoreDQS.textContent) === 0) return;
   if (parseInt(thirdOstatokDQS.textContent) <= 0) {
      document.querySelector('.cart_item__nohave_3').style = "display: none";
      not_have_items.textContent = parseInt(not_have_items.textContent) - 1;
   }   
   if(document.querySelector('.third_item').src === "http://localhost:5000/assets/checkbox_empty.svg") {
      return
   }      

   thirdScoreDQS.textContent -= 1;
   thirdOstatokDQS.textContent = parseInt(thirdOstatokDQS.textContent) + 1;
   thirdPriceDQS.textContent = thirdScoreDQS.textContent * thirdPriceFirts;
   thirdPriceMobileDQS.textContent = thirdScoreDQS.textContent * thirdPriceFirts;
   thirdPriceWithoutCashDQS.textContent = Math.round(thirdPriceDQS.textContent * 1.1);
   thirdPriceWithoutCashoutMobileDQS.textContent = Math.round(thirdPriceDQS.textContent * 1.1);
   Summary(thirdPriceFirts, "-");
})
thirdPlusDQS.addEventListener('click', () => {
   if(parseInt(thirdScoreDQS.textContent) === 100 || parseInt(thirdOstatokDQS.textContent) === 0) return;
   if(parseInt(thirdOstatokDQS.textContent) <= 1) {
      document.querySelector('.cart_item__nohave_3').style = "display: block";
      not_have_items.textContent = parseInt(not_have_items.textContent) + 1;
   }    
   if(document.querySelector('.third_item').src === "http://localhost:5000/assets/checkbox_empty.svg") {
      return
   }        

   thirdScoreDQS.textContent = parseInt(thirdScoreDQS.textContent) + 1;
   thirdOstatokDQS.textContent = parseInt(thirdOstatokDQS.textContent) - 1;
   thirdPriceDQS.textContent = thirdScoreDQS.textContent * thirdPriceFirts;
   thirdPriceMobileDQS.textContent = thirdScoreDQS.textContent * thirdPriceFirts;
   thirdPriceWithoutCashDQS.textContent = Math.round(thirdPriceDQS.textContent * 1.1);
   thirdPriceWithoutCashoutMobileDQS.textContent = Math.round(thirdPriceDQS.textContent * 1.1);
   Summary(thirdPriceFirts, "+");
})

// Иконки сердечка и мусорки 
/////////////////////////////////////////////////////////////////////////////////////////

const hearth = document.querySelectorAll('.cart_item-hearth_icon');
const trash = document.querySelectorAll('.cart_item-trash_icon');

hearth.forEach((hearth) => {
   hearth.addEventListener('click', (event) => {
   if(event.target.src === "http://localhost:5000/assets/hearth2.png") {
      event.target.src = './assets/hearth.svg';
      event.target.style = 'height: 16px'; 
      console.log(event.target.src);
      return
   }
     event.target.src = './assets/hearth2.png'; 
     event.target.style = 'height: 16px'; 
   });
 });
 
trash.forEach((trash) => {
   trash.addEventListener('click', (event) => {
      if(event.target.src === "http://localhost:5000/assets/trash2.png") {
         event.target.src = './assets/trash.svg';
         event.target.style = 'height: 16px; margin-right: 6px;'; 
         console.log(event.target.src);
         return
      }
        event.target.src = './assets/trash2.png'; 
        event.target.style = 'height: 16px; margin-right: 4px;'; 
   });
 });


 ////////////////////////////////////////////////////////////////////////////////////////


 // CheckBox лгика
 
 document.querySelectorAll('.car_checkbox_img').forEach((checkBox)=>{
   checkBox.addEventListener('click',(event)=>{

      if(event.target.src === "http://localhost:5000/assets/checkbox.svg") {
         event.target.src = "./assets/checkbox_empty.svg";
         return
      }
      if(event.target.src === "http://localhost:5000/assets/checkbox_empty.svg"){
         event.target.src ="./assets/checkbox.svg";
      }
   })
 })

 //CheckBox all 

 document.querySelector('.select_all').addEventListener('click',(event)=>{
   if(event.target.src === "http://localhost:5000/assets/checkbox_empty.svg") {
      event.target.src = "./assets/checkbox.svg";
      document.querySelectorAll('.car_checkbox_img').forEach((event)=>{
         event.src = "./assets/checkbox.svg"
      })
      return
   }
   if(event.target.src === "http://localhost:5000/assets/checkbox.svg") {
      event.target.src = "./assets/checkbox_empty.svg";
      document.querySelectorAll('.car_checkbox_img').forEach((event)=>{
         event.src = "./assets/checkbox_empty.svg"
      })
      return
   }
})


// Зависимоть суммы от селектора 

 if(document.querySelector('.first_item') === "http://localhost:5000/assets/checkbox_empty.svg") {
   finalSumma.textContent = parseInt(finalSumma.textContent) - parseInt(firstPriceDQS.textContent);
 }


 // Чекбокс о запросе оплаты сразу

 document.querySelector('.last_section-payMethod_check-checker').addEventListener('click', (event) => {
   if(event.target.src === "http://localhost:5000/assets/checkbox_empty.svg") {
      event.target.src = "./assets/checkbox.svg";
      return
   }
   if(event.target.src === "http://localhost:5000/assets/checkbox.svg") {
      event.target.src = "./assets/checkbox_empty.svg";
      return
   }
 })

 // Фокус на инпуте

 const label = document.querySelector('.label_1');
 const input = document.querySelector('#firstName');

 label.addEventListener('click', () => {
     input.focus();
     label.style= "top: 18px"
 });
 input.addEventListener('click', () => {
     input.focus();
     label.style= "top: 18px"
 });
 const label2 = document.querySelector('.label_2');
 const input2 = document.querySelector('#lastName');

 label2.addEventListener('click', () => {
     input2.focus();
 });
 input2.addEventListener('click', () => {
   input2.focus();
   label2.style= "top: 18px"
});
 const label3 = document.querySelector('.label_3');
 const input3 = document.querySelector('#mail');

 label3.addEventListener('click', () => {
     input3.focus();
 });
 input3.addEventListener('click', () => {
   input3.focus();
   label3.style= "top: 18px"
});
 const label4 = document.querySelector('.label_4');
 const input4 = document.querySelector('#phone');

 label4.addEventListener('click', () => {
     input4.focus();
 });
  input4.addEventListener('click', () => {
     input4.focus();
 });
 const label5 = document.querySelector('.label_5');
 const input5 = document.querySelector('#inn');

 label5.addEventListener('click', () => {
     input5.focus();
 });
 input5.addEventListener('click', () => {
   input5.focus();
   label5.style= "top: 18px"
});


// Проверка Формы 

const nameRegex = /^[a-zA-Zа-яА-Я]+$/; // Регулярное выражение для проверки имени и фамилии
const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Регулярное выражение для проверки почты
const phoneRegex = /^(\+7|8)\d{10}$/; // Регулярное выражение для проверки телефона
const innRegex = /^\d{14}$/; // Регулярное выражение для проверки ИНН (10 цифр)

const validateInput = (input, regex, errorMessage) => {
  const errorSpan = document.createElement("span");
  errorSpan.setAttribute("id", `${input.id}-error`);
  errorSpan.classList.add("error-message");
  errorSpan.textContent = errorMessage;

  const validate = () => {
    if (input.value.trim() === "") {
      input.classList.add("error");
      input.setAttribute("aria-describedby", `${input.id}-error`);
      input.setAttribute("aria-invalid", "true");
      input.parentNode.appendChild(errorSpan);
    } else if (!regex.test(input.value.trim())) {
      input.classList.add("error");
      input.setAttribute("aria-describedby", `${input.id}-error`);
      input.setAttribute("aria-invalid", "true");
      input.parentNode.appendChild(errorSpan);
    } else {
      input.classList.remove("error");
      input.removeAttribute("aria-describedby");
      input.removeAttribute("aria-invalid");
      errorSpan.remove();
    }
  };

  input.addEventListener('blur', validate);
  input.addEventListener('input', () => {
    if (input.classList.contains("error")) {
      validate();
    }
  });
};

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const mail = document.getElementById("mail");
const phone = document.getElementById("phone");
const inn = document.getElementById("inn");

validateInput(firstName, nameRegex, "Укажите имя");
validateInput(lastName, nameRegex, "Введите фамилию");
validateInput(mail, mailRegex, "Проверьте адрес электронной почты");
validateInput(phone, phoneRegex, "Формат: +9 999 999 99 99");
validateInput(inn, innRegex, "Проверьте ИНН");

document.getElementById("payment_form").addEventListener("submit", function(event) {
  const inputs = [firstName, lastName, mail, phone, inn];
  let hasError = false;

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.value.trim() === "") {
      input.classList.add("error");
      input.setAttribute("aria-describedby", `${input.id}-error`);
      input.setAttribute("aria-invalid", "true");
      const errorSpan = document.createElement("span");
      errorSpan.setAttribute("id", `${input.id}-error`);
      errorSpan.classList.add("error-message");
      errorSpan.textContent = "Поле обязательно для заполнения";
      input.parentNode.appendChild(errorSpan);
      hasError = true;
    }
  }

  if (hasError) {
    event.preventDefault(); // Остановить отправку формы, если есть ошибки
    inputs[0].focus(); // Переместить фокус на первое поле с ошибкой
    if (window.innerWidth < 1024) {
      window.scrollTo(0, inputs[0].offsetTop); // Прокрутить к первому полю с ошибкой на мобильных устройствах
    }
  }
});

// Удаление ошибок "Поле обязательно для заполнения" при вводе в любое поле
const allInputs = document.querySelectorAll("input");
allInputs.forEach(input => {
  input.addEventListener("input", () => {
    const errorSpan = input.parentNode.querySelector(".error-message");
    if (errorSpan && errorSpan.textContent === "Поле обязательно для заполнения") {
      input.classList.remove("error");
      input.removeAttribute("aria-describedby");
      input.removeAttribute("aria-invalid");
      errorSpan.remove();
    }
  });
});
