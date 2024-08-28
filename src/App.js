import Dice from './Dice';
import Button from './Button';
import { useState } from 'react';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [records, setRecord] = useState([]);

  // 클릭 이벤트
  const handleRollClick = () => {
    // 랜덤 주사위 눈 생성
    const nextNum = random(6);
    //새 주사위 눈의 수를 상태(state)로 관리
    // 그 상태 이름이 num
    // 지금 기존의 눈의 수를 새로 받는 nextNum
    // 그때 num 상태의 세터 함수인
    // setNum을 nextNum 인수로 호출
    // 화면 리렌더링
    setNum(nextNum);
    setSum(sum + nextNum);
    // records.push(nextNum);

    // setRecord만 써서 화면 갱신
    const newRecords = [...records, nextNum];
    setRecord(newRecords);
  };

  // 초기화
  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setRecord([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>내 주사위</h2>
        <Dice num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        {records.join(', ')}
      </div>
    </div>
  );
}

export default App;
