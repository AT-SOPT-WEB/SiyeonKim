// Card.jsx

import style from './Card.module.css';

const Card = () => {
  return (
    <div className={style.card}>
      <p>이름: 김스웹</p>
      <p>깃허브: abc</p>
      <p>영문이름: Kim Sweb</p>
    </div>
  );
};

export default Card;