import React from 'react';
import BadButton from '../../Components/BadButton';
import GoodButton from '../../Components/GoodButton';

function WorkPage() {
    return (
      <div>
          <h1>Рабочая страница</h1>
          <p>Предположительно она очень большая, даже слишком</p>
          <p>И на нее редко переходят</p>
          <BadButton />
          <p>Следующий не вероятный контент</p>
          <GoodButton />
      </div>
    );
}

export default WorkPage;
