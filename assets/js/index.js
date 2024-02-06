// 스크롤 이벤트를 감지하여 클래스를 추가/제거
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav'); // nav 태그 선택
    if (window.scrollY > 0) { // 스크롤이 최상단이 아닌 경우
        nav.classList.add('scroll-down'); // nav 태그에 배경색 클래스 추가
    } else { // 스크롤이 최상단인 경우
        nav.classList.remove('scroll-down'); // nav 태그에서 배경색 클래스 제거
    }
});

document.addEventListener("DOMContentLoaded", function() {
	const elements = document.querySelectorAll('.scroll-animation');

	function isVisible(element) {
		const elementPosition = element.getBoundingClientRect();
		const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
		return (elementPosition.top <= viewportHeight) && ((elementPosition.bottom >= 0));
	}

	function checkScroll() {
		for (let i = 0; i < elements.length; i++) {
			if (isVisible(elements[i])) {
				elements[i].classList.add('active');
			} else {
				elements[i].classList.remove('active');
			}
		}
	}

	window.addEventListener('scroll', checkScroll);
	checkScroll(); // 초기 로드 시에도 체크
});