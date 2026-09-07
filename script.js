const ROWS = 5;
const COLS = 20;
const TOTAL_LEVELS = ROWS * COLS;

const levelSelectPage = document.getElementById('levelSelectPage');
const levelPage = document.getElementById('levelPage');
const levelGrid = document.getElementById('levelGrid');
const levelTitle = document.getElementById('levelTitle');
const levelContent = document.getElementById('levelContent');
const returnBtn = document.getElementById('returnBtn');

function buildLevelGrid() {
  for (let i = 1; i <= TOTAL_LEVELS; i++) {
    const btn = document.createElement('button');
    btn.className = 'level-btn';
    btn.textContent = i;
    btn.addEventListener('click', () => openLevel(i));
    levelGrid.appendChild(btn);
  }
}

function openLevel(levelNumber) {
  levelTitle.textContent = 'Level ' + levelNumber;
  levelContent.innerHTML = '';
  levelSelectPage.classList.add('hidden');
  levelPage.classList.remove('hidden');
}

function goToLevelSelect() {
  levelPage.classList.add('hidden');
  levelSelectPage.classList.remove('hidden');
}

returnBtn.addEventListener('click', goToLevelSelect);

buildLevelGrid();