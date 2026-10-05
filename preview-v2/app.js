const money = (value) => new Intl.NumberFormat('ru-RU').format(Math.round(value)) + ' ₽';

const refs = {
  children: document.querySelector('#children'),
  avgCheck: document.querySelector('#avg-check'),
  rent: document.querySelector('#rent'),
  childrenValue: document.querySelector('#children-value'),
  checkValue: document.querySelector('#check-value'),
  rentValue: document.querySelector('#rent-value'),
  profit: document.querySelector('#profit-value'),
  revenue: document.querySelector('#revenue-value'),
  expenses: document.querySelector('#expenses-value'),
  announcement: document.querySelector('#calc-announcement'),
};

function calculate(children, avgCheck, rent) {
  const revenue = children * avgCheck;
  const managers = 70000;
  const admin = 45000;
  const teachersCount = Math.max(2, Math.ceil(children / 15));
  const teachersSalary = teachersCount * 45000;
  const assistantsSalary = teachersCount * 35000;
  const nurse = 35000;
  const accountant = 20000;
  const payrollTax = (admin + teachersSalary + assistantsSalary + nurse + accountant) * 0.3;
  const personnel = managers + admin + teachersSalary + assistantsSalary + nurse + accountant + payrollTax;
  const food = children * 8200;
  const acquiring = revenue * 0.015;
  const otherVariable = revenue * 0.02;
  const utilities = 15000;
  const marketing = 25000;
  const totalExpenses = personnel + food + acquiring + otherVariable + rent + utilities + marketing;
  return { revenue, totalExpenses, operatingProfit: revenue - totalExpenses };
}

function renderCalculator() {
  const children = Number(refs.children.value);
  const avgCheck = Number(refs.avgCheck.value);
  const rent = Number(refs.rent.value);
  const result = calculate(children, avgCheck, rent);
  refs.childrenValue.textContent = children;
  refs.checkValue.textContent = money(avgCheck);
  refs.rentValue.textContent = money(rent);
  refs.revenue.textContent = money(result.revenue);
  refs.expenses.textContent = money(result.totalExpenses);
  refs.profit.textContent = money(result.operatingProfit);
  refs.profit.classList.toggle('negative', result.operatingProfit < 0);
}

let announcementTimer;
[refs.children, refs.avgCheck, refs.rent].forEach((input) => input.addEventListener('input', () => {
  renderCalculator();
  clearTimeout(announcementTimer);
  announcementTimer = setTimeout(() => {
    refs.announcement.textContent = `Операционная прибыль в месяц: ${refs.profit.textContent}`;
  }, 500);
}));
renderCalculator();

const whatsappContact = document.querySelector('#whatsapp-contact');
const contactInterest = document.querySelector('#contact-interest');
const interestLabels = {
  presentation: ['заявка на презентацию франшизы', 'презентацию франшизы «Дети в приоритете»'],
  franchise: ['франшиза «Дети в приоритете»', 'франшизу «Дети в приоритете»'],
  'own-brand': ['открытие сада под своим брендом', 'открытие сада под своим брендом'],
  documents: ['документы и методики', 'документы и методики'],
  calculator: ['расчёт экономики сада', 'расчёт экономики сада'],
  budget: ['стартовый бюджет открытия', 'стартовый бюджет открытия'],
};
let selectedInterest = '';
function updateContact(interest) {
  selectedInterest = interest;
  const label = interestLabels[interest];
  contactInterest.textContent = interest === 'presentation'
    ? 'Отправьте заявку в WhatsApp — презентацию вышлем в ответ.'
    : label ? `Тема обращения: ${label[0]}.` : '';
  whatsappContact.textContent = interest === 'presentation'
    ? 'Оставить заявку в WhatsApp →'
    : 'Написать в WhatsApp →';
  let message = label
    ? `Здравствуйте! Хочу обсудить ${label[1]}.`
    : 'Здравствуйте! Хочу обсудить открытие частного детского сада.';
  if (interest === 'calculator') {
    message += ` Мой расчёт: количество детей — ${refs.children.value}, средний чек — ${refs.avgCheck.value} ₽, аренда — ${refs.rent.value} ₽ в месяц.`;
  }
  if (interest === 'presentation') {
    message = 'Здравствуйте! Хочу получить презентацию франшизы «Дети в приоритете». Меня зовут: ';
    message += '\nГород: ';
  } else {
    message += ' Город: ';
  }
  whatsappContact.href = `https://wa.me/79614691333?text=${encodeURIComponent(message)}`;
}
document.querySelectorAll('[data-interest]').forEach((link) => {
  link.addEventListener('click', () => {
    updateContact(link.dataset.interest);
  });
});
document.querySelectorAll('[data-clear-interest]').forEach((link) => {
  link.addEventListener('click', () => updateContact(''));
});
[refs.children, refs.avgCheck, refs.rent].forEach((input) => {
  input.addEventListener('input', () => {
    if (selectedInterest === 'calculator') updateContact(selectedInterest);
  });
});
const requestedInterest = new URLSearchParams(location.search).get('interest');
updateContact(Object.hasOwn(interestLabels, requestedInterest) ? requestedInterest : '');

const menuButton = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('#mobile-nav');
function setMenu(open, restoreFocus = false) {
  mobileNav.classList.toggle('open', open);
  mobileNav.inert = !open;
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  if (!open && restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  setMenu(false);
  const target = document.getElementById(link.hash.slice(1));
  if (target) {
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
  }
}));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
});
window.matchMedia('(min-width: 1101px)').addEventListener('change', (event) => {
  if (event.matches && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
});

// The note is available on hover, keyboard focus, and touch.
const profitHelp = document.querySelector('.profit-help');
const profitInfo = document.querySelector('.profit-info');
const profitTooltip = document.querySelector('#profit-tooltip');
let profitNoteHideTimer;
const showProfitNote = () => {
  clearTimeout(profitNoteHideTimer);
  profitTooltip.hidden = false;
  const button = profitInfo.getBoundingClientRect();
  const note = profitTooltip.getBoundingClientRect();
  const left = Math.max(16, Math.min(button.right - note.width, innerWidth - note.width - 16));
  const preferredTop = button.bottom + 8;
  const top = preferredTop + note.height <= innerHeight - 16
    ? preferredTop
    : Math.max(16, button.top - note.height - 8);
  profitTooltip.style.left = `${left}px`;
  profitTooltip.style.top = `${top}px`;
};
const hideProfitNote = () => {
  clearTimeout(profitNoteHideTimer);
  profitTooltip.hidden = true;
};
profitHelp.addEventListener('pointerenter', (event) => {
  if (event.pointerType === 'mouse' && matchMedia('(hover: hover)').matches) showProfitNote();
});
profitHelp.addEventListener('pointerleave', (event) => {
  if (event.pointerType === 'mouse' && !profitHelp.contains(document.activeElement)) {
    profitNoteHideTimer = setTimeout(hideProfitNote, 180);
  }
});
window.addEventListener('resize', hideProfitNote);
profitInfo.addEventListener('focus', showProfitNote);
profitHelp.addEventListener('focusout', (event) => {
  if (!profitHelp.contains(event.relatedTarget)) hideProfitNote();
});
let noteVisibleBeforePress = false;
profitInfo.addEventListener('pointerdown', () => {
  noteVisibleBeforePress = !profitTooltip.hidden;
});
profitInfo.addEventListener('click', (event) => {
  const shouldClose = event.detail === 0 ? !profitTooltip.hidden : noteVisibleBeforePress;
  if (shouldClose) hideProfitNote();
  else showProfitNote();
});
document.addEventListener('pointerdown', (event) => {
  if (!profitHelp.contains(event.target)) hideProfitNote();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') hideProfitNote();
});
