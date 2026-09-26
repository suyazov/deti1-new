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

[refs.children, refs.avgCheck, refs.rent].forEach((input) => input.addEventListener('input', renderCalculator));
renderCalculator();

const menuButton = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('#mobile-nav');
function setMenu(open) {
  mobileNav.classList.toggle('open', open);
  mobileNav.inert = !open;
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  if (!open) menuButton.focus();
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
});
window.matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
  if (event.matches && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
});
