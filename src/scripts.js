import '../styles/style.css';
//Ключи локал стореджа
const getSumm = 'LOCAL_STORAGE_SUMM';
const getSkidkaSumm = 'LOCAL_STORAGE_GETSKIDKA';
const getskidka = 'LOCAL_STORAGE_SKIDKA';

// Получаем элемент с итоговой суммой заказа;

const finalSumma = document.querySelector('.last_section-itogo-main_right');
const final_summa_bez_skidki = document.querySelector('.last_section-itogo-second_right');
const skidka = document.querySelector('.skidka');
const not_have_items = document.querySelector('.not_have_items');
let summaryButton = 0

// Модальные скидки 

const descr_1 = document.querySelector('.descr_1');
const descr_2 = document.querySelector('.descr_2');
const descr_3 = document.querySelector('.descr_3');

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

//  Интервал для корзины

setInterval(() => {
   let firstSumm = parseInt(firstPriceDQS.textContent);
   let secontSumm = parseInt(secondPriceDQS.textContent);
   let thirdSumm = parseInt(thirdPriceDQS.textContent);
   let cart_summ_1 = 0;
   let cart_summ_2 = 0;
   let cart_summ_3 = 0;

   if(document.querySelector('.first_item').src.split('assets/', -1)[1] == "checkbox_empty.svg") {
      firstSumm = 0;
   }
   if(document.querySelector('.second_item').src.split('assets/', -1)[1] == "checkbox_empty.svg") {
      secontSumm = 0;
   }
   if(document.querySelector('.third_item').src.split('assets/', -1)[1] == "checkbox_empty.svg") {
      thirdSumm = 0;
   }

   if(document.querySelector('.first_item').src.split('assets/', -1)[1] == "checkbox.svg") {
      cart_summ_1 = 1;
   }
   if(document.querySelector('.second_item').src.split('assets/', -1)[1] == "checkbox.svg") {
      cart_summ_2 = 1;
   }
   if(document.querySelector('.third_item').src.split('assets/', -1)[1] == "checkbox.svg") {
      cart_summ_3 = 1;
   }

   finalSumma.textContent = firstSumm + secontSumm + thirdSumm;
   final_summa_bez_skidki.textContent = Math.round(finalSumma.textContent * 1.1) ;
   skidka.textContent =  Math.round(final_summa_bez_skidki.textContent - finalSumma.textContent) * -1;

   document.querySelector('.non_visible_items').textContent = parseInt(firstScoreDQS.textContent) + parseInt(secondScoreDQS.textContent) + parseInt(thirdScoreDQS.textContent);
   document.querySelector('.non_visible_summ').textContent =  parseInt(thirdPriceDQS.textContent) + parseInt(secondPriceDQS.textContent) + parseInt(firstPriceDQS.textContent);

   descr_1.textContent = parseInt(firstPriceWithoutCashoutDQS.textContent - firstPriceDQS.textContent);
   descr_2.textContent = parseInt(secondPriceWithoutCashDQS.textContent - secondPriceDQS.textContent);
   descr_3.textContent = parseInt(thirdPriceWithoutCashDQS.textContent - thirdPriceDQS.textContent);

   document.querySelector('.all_items-cart').textContent = parseInt(firstScoreDQS.textContent) + parseInt(secondScoreDQS.textContent) +
   parseInt(thirdScoreDQS.textContent);

   document.querySelector('.right_1024-icon-cart-2').textContent = parseInt(cart_summ_1 + cart_summ_2+ cart_summ_3)

}, 300)


// Первый товар слушатели событий
/////////////////////////////////////////////////////////////////////////////////////////

firstMinusDQS.addEventListener('click', () => {
   if(parseInt(firstScoreDQS.textContent) === 0) return;
   if (parseInt(firstOstatokDQS.textContent) <= 0) {
      document.querySelector('.cart_item__nohave_1').style = "display: none";
      not_have_items.textContent = parseInt(not_have_items.textContent) - 1;
   }
   if(document.querySelector('.first_item').src === "checkbox_empty.svg") {
      return
   }

   firstScoreDQS.textContent -= 1;
   firstOstatokDQS.textContent = parseInt(firstOstatokDQS.textContent) + 1;
   firstPriceDQS.textContent = firstScoreDQS.textContent * firstPriceFirts;
   firstPriceMobileDQS.textContent = firstScoreDQS.textContent * firstPriceFirts;
   firstPriceWithoutCashoutDQS.textContent = Math.round(firstPriceDQS.textContent * 1.1);
   firstPriceWithoutCashoutMobileDQS.textContent = Math.round(firstPriceDQS.textContent * 1.1);
   // Summary(firstPriceFirts, "-");
})
firstPlusDQS.addEventListener('click', () => {
   if(parseInt(firstScoreDQS.textContent) === 100 || parseInt(firstOstatokDQS.textContent) === 0) return;
   if(parseInt(firstOstatokDQS.textContent) <= 1) {
      document.querySelector('.cart_item__nohave_1').style = "display: block";
      not_have_items.textContent = parseInt(not_have_items.textContent) + 1;
   }
   if(document.querySelector('.first_item').src === "checkbox_empty.svg") {
      return
   }


   firstScoreDQS.textContent = parseInt(firstScoreDQS.textContent) + 1;
   firstOstatokDQS.textContent = parseInt(firstOstatokDQS.textContent) - 1;
   firstPriceDQS.textContent = firstScoreDQS.textContent * firstPriceFirts;
   firstPriceMobileDQS.textContent = firstScoreDQS.textContent * firstPriceFirts;
   firstPriceWithoutCashoutDQS.textContent = Math.round(firstPriceDQS.textContent * 1.1);
   firstPriceWithoutCashoutMobileDQS.textContent = Math.round(firstPriceDQS.textContent * 1.1);
   // Summary(firstPriceFirts, "+");
})

// Второй товар слушатели событий
/////////////////////////////////////////////////////////////////////////////////////////

secondMinusDQS.addEventListener('click', () => {
   if(parseInt(secondScoreDQS.textContent) === 0) return;
   if(parseInt(secondOstatokDQS.textContent) <= 0) {
      document.querySelector('.cart_item__nohave_2').style = "display: none";
      not_have_items.textContent = parseInt(not_have_items.textContent) - 1; 
   }
   if(document.querySelector('.second_item').src === "checkbox_empty.svg") {
      return
   }

   secondScoreDQS.textContent -= 1;
   secondOstatokDQS.textContent = parseInt(secondOstatokDQS.textContent) + 1;
   secondPriceDQS.textContent = secondScoreDQS.textContent * secondPriceFirts;
   secondPriceMobileDQS.textContent = secondScoreDQS.textContent * secondPriceFirts;
   secondPriceWithoutCashDQS.textContent = Math.round(secondPriceDQS.textContent * 1.1);
   secondPriceWithoutCashoutMobileDQS.textContent = Math.round(secondPriceDQS.textContent * 1.1);
   // Summary(secondPriceFirts, "-");

})
secondPlusDQS.addEventListener('click', () => {
   if(parseInt(secondScoreDQS.textContent) === 100 || parseInt(secondOstatokDQS.textContent) === 0) return;
   if(parseInt(secondOstatokDQS.textContent) <= 1) {
      document.querySelector('.cart_item__nohave_2').style = "display: block";
      not_have_items.textContent = parseInt(not_have_items.textContent) + 1;
   }
   if(document.querySelector('.second_item').src === "checkbox_empty.svg") {
      return
   }

   secondScoreDQS.textContent = parseInt(secondScoreDQS.textContent) + 1;
   secondOstatokDQS.textContent = parseInt(secondOstatokDQS.textContent) - 1;
   secondPriceDQS.textContent = secondScoreDQS.textContent * secondPriceFirts;
   secondPriceMobileDQS.textContent = secondScoreDQS.textContent * secondPriceFirts;
   secondPriceWithoutCashDQS.textContent = Math.round(secondPriceDQS.textContent * 1.1);
   secondPriceWithoutCashoutMobileDQS.textContent = Math.round(secondPriceDQS.textContent * 1.1);
   // Summary(secondPriceFirts, "+")
})

// Третий товар слушатели событий
/////////////////////////////////////////////////////////////////////////////////////////

thirdMinusDQS.addEventListener('click', () => {
   if(parseInt(thirdScoreDQS.textContent) === 0) return;
   if (parseInt(thirdOstatokDQS.textContent) <= 0) {
      document.querySelector('.cart_item__nohave_3').style = "display: none";
      not_have_items.textContent = parseInt(not_have_items.textContent) - 1;
   }   
   if(document.querySelector('.third_item').src === "checkbox_empty.svg") {
      return
   }      

   thirdScoreDQS.textContent -= 1;
   thirdOstatokDQS.textContent = parseInt(thirdOstatokDQS.textContent) + 1;
   thirdPriceDQS.textContent = thirdScoreDQS.textContent * thirdPriceFirts;
   thirdPriceMobileDQS.textContent = thirdScoreDQS.textContent * thirdPriceFirts;
   thirdPriceWithoutCashDQS.textContent = Math.round(thirdPriceDQS.textContent * 1.1);
   thirdPriceWithoutCashoutMobileDQS.textContent = Math.round(thirdPriceDQS.textContent * 1.1);
   // Summary(thirdPriceFirts, "-");
})
thirdPlusDQS.addEventListener('click', () => {
   if(parseInt(thirdScoreDQS.textContent) === 100 || parseInt(thirdOstatokDQS.textContent) === 0) return;
   if(parseInt(thirdOstatokDQS.textContent) <= 1) {
      document.querySelector('.cart_item__nohave_3').style = "display: block";
      not_have_items.textContent = parseInt(not_have_items.textContent) + 1;
   }    
   if(document.querySelector('.third_item').src === "checkbox_empty.svg") {
      return
   }        

   thirdScoreDQS.textContent = parseInt(thirdScoreDQS.textContent) + 1;
   thirdOstatokDQS.textContent = parseInt(thirdOstatokDQS.textContent) - 1;
   thirdPriceDQS.textContent = thirdScoreDQS.textContent * thirdPriceFirts;
   thirdPriceMobileDQS.textContent = thirdScoreDQS.textContent * thirdPriceFirts;
   thirdPriceWithoutCashDQS.textContent = Math.round(thirdPriceDQS.textContent * 1.1);
   thirdPriceWithoutCashoutMobileDQS.textContent = Math.round(thirdPriceDQS.textContent * 1.1);
   // Summary(thirdPriceFirts, "+");
})

// Иконки сердечка и мусорки 
/////////////////////////////////////////////////////////////////////////////////////////

const hearth = document.querySelectorAll('.cart_item-hearth_icon');
const trash = document.querySelectorAll('.cart_item-trash_icon');

hearth.forEach((hearth) => {
   hearth.addEventListener('click', (event) => {
   if(event.target.src.split('assets/', -1)[1] === "hearth2.png") {
      event.target.src = './assets/hearth.svg';
      event.target.style = 'height: 16px'; 
      return
   }
     event.target.src = './assets/hearth2.png'; 
     event.target.style = 'height: 16px'; 
   });
 });
 
trash.forEach((trash) => {
   trash.addEventListener('click', (event) => {
      if(event.target.src.split('assets/', -1)[1] === "trash-22.jpg") {
         event.target.src = './assets/trash.svg';
         event.target.style = 'height: 16px; margin-right: 6px;'; 
         return
      }
        event.target.src = './assets/trash-22.jpg'; 
        event.target.style = 'height: 16px; margin-right: 4px;'; 
   });
 });


 ////////////////////////////////////////////////////////////////////////////////////////


 // CheckBox лгика
 
 document.querySelectorAll('.car_checkbox_img').forEach((checkBox)=>{
   checkBox.addEventListener('click',(event)=>{

      if(event.target.src.split('assets/', -1)[1] === "checkbox.svg") {
         event.target.src = "./assets/checkbox_empty.svg";
         return
      }
      if(event.target.src.split('assets/', -1)[1] === "checkbox_empty.svg"){
         event.target.src ="./assets/checkbox.svg";
      }
   })
 })

 //CheckBox all 

 document.querySelector('.select_all').addEventListener('click',(event)=>{
   if(event.target.src.split('assets/', -1)[1] === "checkbox_empty.svg") {
      event.target.src = "./assets/checkbox.svg";
      document.querySelectorAll('.car_checkbox_img').forEach((event)=>{
         event.src = "./assets/checkbox.svg"
      })
      return
   }
   if(event.target.src.split('assets/', -1)[1] === "checkbox.svg") {
      event.target.src = "./assets/checkbox_empty.svg";
      document.querySelectorAll('.car_checkbox_img').forEach((event)=>{
         event.src = "./assets/checkbox_empty.svg"
      })
      return
   }
})


 // Чекбокс о запросе оплаты сразу

 document.querySelector('.last_section-payMethod_check-checker').addEventListener('click', (event) => {
   if(event.target.src.split('assets/', -1)[1] === "checkbox_empty.svg") {
      event.target.src = "./assets/checkbox.svg";
      return
   }
   if(event.target.src.split('assets/', -1)[1] === "checkbox.svg") {
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
const innRegex = /^\d{14}$/; // Регулярное выражение для проверки ИНН (14 цифр)

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
 
   const hasError = inputs.some(input => input.classList.contains("error"));
 

   validateInput(firstName, nameRegex, "Укажите имя");
   validateInput(lastName, nameRegex, "Введите фамилию");
   validateInput(mail, mailRegex, "Проверьте адрес электронной почты");
   validateInput(phone, phoneRegex, "Формат: +9 999 999 99 99");
   validateInput(inn, innRegex, "Проверьте ИНН");

   if (hasError) {
     event.preventDefault(); // Остановить отправку формы, если есть ошибки
     const firstErrorInput = inputs.find(input => input.classList.contains("error"));
     firstErrorInput.scrollIntoView({ behavior: "smooth" }); // Прокрутка к первому полю с ошибкой
     firstErrorInput.focus(); // Перемещение фокуса на первое поле с ошибкой
     if (window.innerWidth < 1024) {
       window.scrollTo(0, firstErrorInput.offsetTop); // Прокрутка к первому полю с ошибкой на мобильных устройствах
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

 

// Скрытие и разверктка посредством иконок Корзина

const vector_1 = document.querySelector('.vector_1');
const cart_fix = document.querySelector('.cart_wrapper_fix');
const cart_low = document.querySelector('.vector_2');
const checkbox = document.querySelector('.chekbox_wrapper-2');
const chekbox_non_visible = document.querySelector('.chekbox_wrapper-non_visible');
const hr_non_visible = document.querySelector('.hr1_non_visible');

let visible = false;

vector_1.addEventListener('click', () => {
   if(!visible) {
      vector_1.style.transform = 'rotate(180deg)';
      cart_fix.style.display = 'none';
      checkbox.style.display = 'none';
      chekbox_non_visible.style.display = 'flex';
      hr_non_visible.style.display = 'flex';
      visible = true;
   } else {
      vector_1.style.transform = 'rotate(0deg)';
      vector_1.style.transition = 'transform 0.3s';
      cart_fix.style.display = 'block';
      checkbox.style.display = 'flex';
      chekbox_non_visible.style.display = 'none';
      hr_non_visible.style.display = 'none';
      visible = false;
   }
});



// Скрытие и развертка посредством иконок Отсутствуют

const vector_2 = document.querySelector('.vector_2');
const wrapper_no_have_items = document.querySelector('.wrapper_no_have_items');

let visible2 = true;
vector_2.addEventListener('click', () => {
   if(!visible2) {
      vector_2.style.transform = 'rotate(0deg)';
      wrapper_no_have_items.style.display = 'block';
      visible2 = true;
   } else {
      vector_2.style.transform = 'rotate(180deg)';
      vector_2.style.transition = 'transform 0.3s';
      wrapper_no_have_items.style.display = 'none';
      visible2 = false;
   }
});


/// Заказать смена на цену при чекере

const buy_button = document.getElementById('buy_button');
const buy_checker = document.querySelector('.last_section-payMethod_check-checker');
let interval;

buy_checker.addEventListener('click', () => {
   const buyButton = document.querySelector('.buy_button');
   if (buy_checker.src.split('assets/', -1)[1] === 'checkbox.svg') {
      interval = setInterval(() => {
         buyButton.innerHTML = `Оплатить ${summaryButton} сом`;
         summaryButton = finalSumma.textContent;
      }, 300);
   } else {
      clearInterval(interval);
      buyButton.innerHTML = 'Заказать';
   }
});


// описание при ховене на i 

const item_hovered = document.querySelector('.info_icon_check');
let vivibleItems = false;
item_hovered.addEventListener('click', ()=> {
   console.log(123);
   if(!vivibleItems) {
      document.querySelector('.card_item_descr_four_1024_descr').style.display = 'flex';
      vivibleItems = true
   }
    else {
      document.querySelector('.card_item_descr_four_1024_descr').style.display = 'none';
      vivibleItems = false
    }
   
})


// Скидочные окна чекер

const skidka_item_1 = document.querySelector('.skidka_item_1');
const skidka_item_1_window = document.querySelector('.window_1');
let skidka_item_1_visability = false;

skidka_item_1.addEventListener('click', () => {
   if(!skidka_item_1_visability) {
      skidka_item_1_window.style.display = 'flex'
      skidka_item_1_visability = true;
   } else {
      skidka_item_1_window.style.display = 'none'
      skidka_item_1_visability = false;
   }
})
const skidka_item_2 = document.querySelector('.skidka_item_2');
const skidka_item_2_window = document.querySelector('.window_2');
let skidka_item_2_visability = false;

skidka_item_2.addEventListener('click', () => {
   if(!skidka_item_2_visability) {
      skidka_item_2_window.style.display = 'flex'
      skidka_item_2_visability = true;
   } else {
      skidka_item_2_window.style.display = 'none'
      skidka_item_2_visability = false;
   }
})
const skidka_item_3 = document.querySelector('.skidka_item_3');
const skidka_item_3_window = document.querySelector('.window_3');
let skidka_item_3_visability = false;

skidka_item_3.addEventListener('click', () => {
   if(!skidka_item_3_visability) {
      skidka_item_3_window.style.display = 'flex'
      skidka_item_3_visability = true;
   } else {
      skidka_item_3_window.style.display = 'none'
      skidka_item_3_visability = false;
   }
})

// способ доставки 

const delevery_method = document.querySelector('.delevery_method-change');
const delevery_method2 = document.querySelector('.change_delivery');
const modal_1_close_btn = document.querySelector('.modal_1-close-btn');
const modal_1 = document.querySelector('.modal_1');
const modal_2 = document.querySelector('.modal_2');
let modal_1Actions = false;

delevery_method.addEventListener('click', () => {
   if(!modal_1Actions) {
      modal_1.style.display = 'flex';
   } else {
      modal_1.style.display = 'none';
   }
})

delevery_method2.addEventListener('click', () => {
   if(!modal_1Actions) {
      modal_1.style.display = 'flex';
   } else {
      modal_1.style.display = 'none';
   }
})
modal_1_close_btn.addEventListener('click', () => {   
   modal_1.style.display = 'none';
})


// Выбор доставки 

const modal_buttons_1 = document.querySelector('.modal_buttons-1');
const modal_buttons_2 = document.querySelector('.modal_buttons-2');
const modal_check1 = document.querySelector('.modal_check-1');
const modal_check2 = document.querySelector('.modal_check-2');
const modal_check3 = document.querySelector('.modal_check-3');
const modal_trash_1 = document.querySelector('.modal_trash-1');
const modal_trash_2 = document.querySelector('.modal_trash-2');
const modal_trash_4 = document.querySelector('.modal_trash-4');

modal_buttons_1.addEventListener('click', () => {
   modal_buttons_1.classList.add('active_modal_btn_1');
   modal_buttons_2.classList.remove('active_modal_btn_1')
   document.querySelectorAll('.modal_star').forEach((item)=>{
      item.style.display = 'flex'
   })
   document.querySelector('.modal-choose').style = 'margin-top: 56px';
   document.querySelector('.kak_dostavit').textContent = 'Доставка в пункт выдачи';
})
modal_buttons_2.addEventListener('click', () => {
   modal_buttons_2.classList.add('active_modal_btn_1')
   modal_buttons_1.classList.remove('active_modal_btn_1')
   document.querySelectorAll('.modal_star').forEach((item)=>{
      item.style.display = 'none'
   })
   document.querySelector('.modal-choose').style = 'margin-top: 200px';
   document.querySelector('.kak_dostavit').textContent = 'Доставка курьером';
})

modal_check1.addEventListener('click', () => {
   document.querySelectorAll('.modal_check').forEach((item)=>{
      item.src = './assets/pointer.svg';
      return
   })
   modal_check1.src = './assets/pointer_fill.svg'
   document.querySelector('.last_adress-adress').textContent = 'Бишкек, улица Табышалиева, 57';
})

modal_check2.addEventListener('click', () => {
   document.querySelectorAll('.modal_check').forEach((item)=>{
      item.src = './assets/pointer.svg';
      return
   })
   modal_check2.src = './assets/pointer_fill.svg';
   document.querySelector('.last_adress-adress').textContent = 'Бишкек, улица Жукеева-Пудовкина, 77/1';
   
})
modal_check3.addEventListener('click', () => {
   document.querySelectorAll('.modal_check').forEach((item)=>{
      item.src = './assets/pointer.svg';
      return
   })
   modal_check3.src = './assets/pointer_fill.svg';
   document.querySelector('.last_adress-adress').textContent = 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1';
})

// кнопка выбора 

const chooseBtn = document.querySelector('.modal-choose');
chooseBtn.addEventListener('click', () => {
   modal_1.style.display = 'none';
})

//// 2 модалка

const modal_item1 = document.querySelector('.modal_2_choosen-icon1');
const modal_item2 = document.querySelector('.modal_2_choosen-icon2');
const modal_item3 = document.querySelector('.modal_2_choosen-icon3');
const modal_item4 = document.querySelector('.modal_2_choosen-icon4');
const card_master = document.querySelectorAll('.card-master');

modal_item1.addEventListener('click', () => {
   document.querySelectorAll('.modal_2_choosen-icon').forEach((item)=>{
      item.src = './assets/pointer.svg';
      return
   })
   modal_item1.src = './assets/pointer_fill.svg'
   card_master.forEach((item)=> {
      item.src = './assets/mir.svg';
   })
})
modal_item2.addEventListener('click', () => {
   document.querySelectorAll('.modal_2_choosen-icon').forEach((item)=>{
      item.src = './assets/pointer.svg';
      return
   })
   modal_item2.src = './assets/pointer_fill.svg'
   card_master.forEach((item)=> {
      item.src = './assets/visa.svg';
   })

})
modal_item3.addEventListener('click', () => {
   document.querySelectorAll('.modal_2_choosen-icon').forEach((item)=>{
      item.src = './assets/pointer.svg';
      return
   })
   modal_item3.src = './assets/pointer_fill.svg'
   card_master.forEach((item)=> {
      item.src = './assets/master_1.svg';
   })
})
modal_item4.addEventListener('click', () => {
   document.querySelectorAll('.modal_2_choosen-icon').forEach((item)=>{
      item.src = './assets/pointer.svg';
      return
   })
   modal_item4.src = './assets/pointer_fill.svg'
   card_master.forEach((item)=> {
      item.src = './assets/master_2.svg';
   })
})

document.querySelector('.delevery_method-change2').addEventListener('click', () => { modal_2.style.display = 'flex';
})
document.querySelector('.modal_2_openicon').addEventListener('click', () => {
   modal_2.style.display = 'flex';
})

document.querySelector('.molda_2-close-img').addEventListener('click', () => {
   modal_2.style.display = 'none';
})

// кнопка выбора 
const chooseBtn2 = document.querySelector('.modal_choose2');
chooseBtn2.addEventListener('click', () => {
   modal_2.style.display = 'none';
})

// Мусорки 

modal_trash_1.addEventListener('click',() => {
   if(modal_trash_1.src.split('assets/', -1)[1] === "trash-23.jpg") {
      modal_trash_1.src = './assets/trash.svg';
      modal_trash_1.style = 'height: 16px; margin-top: 10px; margin-right: 2px;'; 
      return
   }
      modal_trash_1.src = './assets/trash-23.jpg'; 
      modal_trash_1.style = 'height: 16px; margin-top: 10px;'; 
});

modal_trash_2.addEventListener('click',() => {
   if(modal_trash_2.src.split('assets/', -1)[1] === "trash-23.jpg") {
      modal_trash_2.src = './assets/trash.svg';
      modal_trash_2.style = 'height: 16px; margin-top: 10px; margin-right: 2px;'; 
      return
   }
      modal_trash_2.src = './assets/trash-23.jpg'; 
      modal_trash_2.style = 'height: 16px; margin-top: 10px;'; 
});

modal_trash_4.addEventListener('click',() => {
   if(modal_trash_4.src.split('assets/', -1)[1] === "trash-23.jpg") {
      modal_trash_4.src = './assets/trash.svg';
      modal_trash_4.style = 'height: 16px; margin-top: 10px; margin-right: 2px;'; 
      return
   }
      modal_trash_4.src = './assets/trash-23.jpg'; 
      modal_trash_4.style = 'height: 16px; margin-top: 10px;'; 
});
