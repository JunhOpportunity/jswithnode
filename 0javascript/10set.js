// set
const set = new Set([1, 2, 3]);

// 사이즈 확인
set.size;

// 존재 확인
set.has(2);; // 2를 가지고 있는가

// 순회
set.forEach(item => console.log(item));

// 추가
set.add(6); // Set는 중복을 허락하지 않는다.
set.add(6); // 이건 입력 X

// 삭제
set.delete(6);
set.clear()