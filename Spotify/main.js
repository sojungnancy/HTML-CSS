const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');

searchButton.addEventListener('click', () => {
  if (searchBar.classList.contains('hidden')) {
    // 검색 바 열기
    searchBar.classList.remove('hidden');
    searchBar.classList.add('visible');
  } else {
    // 검색 바 닫기
    searchBar.classList.remove('visible');
    searchBar.classList.add('hidden');
  }
});

const signupButton = document.getElementById('signupButton');
const footerArea = document.getElementById('footerArea');

signupButton.addEventListener('click', () => {
  if (footerArea.classList.contains('hidden')) {
    // 검색 바 열기
    footerArea.classList.remove('hidden');
    footerArea.classList.add('visible');
  } else {
    // 검색 바 닫기
    footerArea.classList.remove('visible');
    footerArea.classList.add('hidden');
  }
});
