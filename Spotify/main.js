// DOM 요소 가져오기
const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');

// 검색 아이콘 클릭 시 상태 토글
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
