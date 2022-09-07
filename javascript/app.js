const sub_heading = document.querySelectorAll(".sub-heading");
const arrow_Btn = document.querySelectorAll(".arrow-down-btn");
const faq_ans_text = document.querySelectorAll(".faq-ans-text");

const faq_answers = [
  `You can invite up to 2 additional users on the Free plan. There is no limit on 
  eam members for the Premium plan.`,
  `No more than 2GB. All files in your account must fit your allotted storage space.`,
  `Click “Forgot password” from the login page or “Change password” from your profile page.
    A reset link will be emailed to you.`,
  `Yes! Send us a message and we'll process your request no questions asked.`,
  `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
];

arrow_Btn.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("rotate-arrow")) {
      sub_heading.forEach((e) => {
        e.classList.remove("text-color");
        e.classList.remove("fw-700");
      });
      arrow_Btn.forEach((e) => {
        e.classList.remove("rotate-arrow");
      });
      faq_ans_text.forEach((e) => (e.innerHTML = ""));
    } else {
      sub_heading.forEach((e) => {
        e.classList.remove("text-color");
        e.classList.remove("fw-700");
      });
      arrow_Btn.forEach((e) => {
        e.classList.remove("rotate-arrow");
      });
      faq_ans_text.forEach((e) => (e.innerHTML = ""));
      arrow_Btn[i].classList.add("rotate-arrow");
      sub_heading[i].classList.add("text-color");
      sub_heading[i].classList.add("fw-700");
      faq_ans_text[i].textContent = faq_answers[i];
    }
  });
});

sub_heading.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("fw-700")) {
      sub_heading.forEach((e) => {
        e.classList.remove("text-color");
        e.classList.remove("fw-700");
      });
      arrow_Btn.forEach((e) => {
        e.classList.remove("rotate-arrow");
      });
      faq_ans_text.forEach((e) => (e.innerHTML = ""));
    } else {
      sub_heading.forEach((e) => {
        e.classList.remove("text-color");
        e.classList.remove("fw-700");
      });
      arrow_Btn.forEach((e) => {
        e.classList.remove("rotate-arrow");
      });
      faq_ans_text.forEach((e) => (e.innerHTML = ""));
      arrow_Btn[i].classList.add("rotate-arrow");
      sub_heading[i].classList.add("text-color");
      sub_heading[i].classList.add("fw-700");
      faq_ans_text[i].textContent = faq_answers[i];
    }
  });
});
