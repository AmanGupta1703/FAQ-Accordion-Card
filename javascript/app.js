const sub_heading = document.querySelectorAll(".sub-heading");
const arrow_Btn = document.querySelectorAll(".arrow-down-btn");
const faq_ans_text = document.querySelectorAll(".faq-ans-text");

const faq_Answers = {
  q0: `You can invite up to 2 additional users on the Free plan. There is no limit on 
    team members for the Premium plan.`,
  q1: `No more than 2GB. All files in your account must fit your allotted storage space.`,
  q2: `Click “Forgot password” from the login page or “Change password” from your profile page.
    A reset link will be emailed to you.`,
  q3: `Yes! Send us a message and we’ll process your request no questions asked.`,
  q4: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
};

console.log(sub_heading);

const showAnswers = () => {
  arrow_Btn[0].addEventListener("click", (event) => {
    event.target.classList.add("rotate-arrow");

    sub_heading[0].classList.add("text-color");
    sub_heading[0].classList.add("fw-700");

    faq_ans_text[0].textContent = `${faq_Answers.q0}`;
  });

  arrow_Btn[1].addEventListener("click", (event) => {
    event.target.classList.add("rotate-arrow");
    
    sub_heading[1].classList.add("text-color");
    sub_heading[1].classList.add("fw-700");

    faq_ans_text[1].textContent = `${faq_Answers.q1}`;
  });

  arrow_Btn[2].addEventListener("click", (event) => {
    event.target.classList.add("rotate-arrow");

    sub_heading[2].classList.add("text-color");
    sub_heading[2].classList.add("fw-700");

    faq_ans_text[2].textContent = `${faq_Answers.q2}`;
  });

  arrow_Btn[3].addEventListener("click", (event) => {
    event.target.classList.add("rotate-arrow");

    sub_heading[3].classList.add("text-color");
    sub_heading[3].classList.add("fw-700");

    faq_ans_text[3].textContent = `${faq_Answers.q3}`;
  });

  arrow_Btn[4].addEventListener("click", (event) => {
    event.target.classList.add("rotate-arrow");

    sub_heading[4].classList.add("text-color");
    sub_heading[4].classList.add("fw-700");
    sub_heading[0].classList.add()

    faq_ans_text[4].textContent = `${faq_Answers.q4}`;
  });
};

const sub_Heading_Click_Event = () => {
  sub_heading[0].addEventListener("click", (event) => {
    event.target.classList.add("text-color");
    event.target.classList.add("fw-700");

    arrow_Btn[0].classList.add("rotate-arrow");
    faq_ans_text[0].textContent = `${faq_Answers.q0}`;
  });

  sub_heading[1].addEventListener("click", (event) => {
    event.target.classList.add("text-color");
    event.target.classList.add("fw-700");

    arrow_Btn[1].classList.add("rotate-arrow");
    faq_ans_text[1].textContent = `${faq_Answers.q1}`;
  });

  sub_heading[2].addEventListener("click", (event) => {
    event.target.classList.add("text-color");
    event.target.classList.add("fw-700");

    arrow_Btn[2].classList.add("rotate-arrow");
    faq_ans_text[2].textContent = `${faq_Answers.q2}`;
  });

  sub_heading[3].addEventListener("click", (event) => {
    event.target.classList.add("text-color");
    event.target.classList.add("fw-700");

    arrow_Btn[3].classList.add("rotate-arrow");
    faq_ans_text[3].textContent = `${faq_Answers.q3}`;
  });

  sub_heading[4].addEventListener("click", (event) => {
    event.target.classList.add("text-color");
    event.target.classList.add("fw-700");

    arrow_Btn[4].classList.add("rotate-arrow");
    faq_ans_text[4].textContent = `${faq_Answers.q4}`;
  });
};

showAnswers();
sub_Heading_Click_Event();  