import { List, Typography } from 'antd';
import CodeBlock from './../components/CodeBlock';

const { Text, Title, Link, Paragraph } = Typography;

const StatePage = () => {
  return (
    <>
      <Title level={2}>Управление состоянием с использованием useState</Title>
      <Paragraph>
        При разработке приложений состояние (state) играет важную роль. Оно
        представляет собой данные, которые используются внутри компонента для
        отслеживания и обновления информации. Состояние позволяет компонентам
        быть динамичными и реагировать на изменения данных или взаимодействие
        пользователя. Простыми словами, это то, что <Text mark>ИЗМЕНЯЕТСЯ</Text>{' '}
        в компоненте, нежели props-ы которые неизменны.
      </Paragraph>
      <Paragraph>
        Хук (hook) в контексте React — это специальная функция, которая
        позволяет подключаться к возможностям React из функциональных
        компонентов. Хуки были введены в React в версии 16.8 и позволяют
        использовать функциональные компоненты вместо классовых для большинства
        задач, для которых раньше требовались классы.
      </Paragraph>
      <Paragraph>
        В React есть возможность использовать state в функциональных
        компонентах, путем использования <Text strong>хука useState</Text>.
        <Text
          code
        >{`import React, { useState } from 'react'; const [state, setState] = useState(initialState);`}</Text>
      </Paragraph>
      <Paragraph>
        Хук useState позволяет функциональным компонентам в React добавлять
        локальное состояние.
      </Paragraph>
      <Paragraph>
        <Text mark>
          Он возвращает массив с парой значений: [текущее значение состояния,
          функцию для его обновления].
        </Text>{' '}
        При вызове функции обновления, React перерисует компонент с новым
        значением состояния.
      </Paragraph>
      <Paragraph>
        <Text mark>state:</Text> текущее значение состояния.
      </Paragraph>
      <Paragraph>
        <Text mark>setState:</Text> функция для обновления значения состояния.
      </Paragraph>
      <Paragraph>
        <Text mark>initialState:</Text> (необязательный): начальное значение
        состояния. Может быть примитивным типом данных, объектом или функцией.
      </Paragraph>
      <Title level={4}>Создание state</Title>
      <Paragraph>
        Например, можно создать состояние для отслеживания текущего счетчика:
      </Paragraph>
      <CodeBlock>
        {`
          import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Остальной код компонента
};
        `}
      </CodeBlock>
      <Title level={4}>Обновление состояния</Title>
      <Paragraph>
        Для обновления состояния в функциональных компонентах используется
        функция <Text strong>setCount</Text>, которая является вторым элементом
        массива, возвращаемого <Text strong>useState</Text>. При вызове{' '}
        <Text strong>setCount</Text>
        передается новое значение состояния или функция. Когда новое состояние
        зависит от предыдущего, то лучше использовать функциональное обновление.
      </Paragraph>
      <Paragraph>
        React автоматически обновит компонент и перерисует его с новым значением
        состояния.
      </Paragraph>
      <Title level={4}>Пример использования state в компонентах</Title>
      <Paragraph>
        Состояние позволяет компонентам отображать и обновлять данные. Чаще
        всего используется для временного хранения каких-то данных. Состояние
        также позволяет реагировать на события и обновлять компонент в
        соответствии с новыми данными. Пример использования состояния для
        отслеживания текущего счетчика и его отображения:
      </Paragraph>
      <CodeBlock>{`
        const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};
      `}</CodeBlock>
      <Title level={5}>
        State можно передавать в дочерние компоненты при помощи props.
      </Title>
      <CodeBlock>{`
      const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <ChildComponent count={count} />
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};

const ChildComponent = ({ count }) => {
  return <p>Счетчик: {count}</p>;
};
      `}</CodeBlock>
      <Paragraph>
        В данном примере состояние счетчика хранится в родительском компоненте
        ParentComponent, а значение состояния передается в дочерний компонент
        ChildComponent через пропсы.
      </Paragraph>
      <List
        header={<Title level={5}>Примечания:</Title>}
        bordered
        dataSource={[
          'При вызове useState в компоненте, он будет выполнен при каждом рендеринге компонента. Поэтому важно обеспечить стабильность и неизменность порядка вызовов хуков внутри компонента. (поговорим про это дальше в LifeCycle)',
          'Можно использовать несколько хуков useState в одном компоненте для добавления нескольких независимых состояний. (пример ниже)',
          'Если новое значение состояния совпадает с текущим значением, React выполнит оптимизацию и не проведет повторную отрисовку компонента.',
          'Важно помнить, что хуки могут использоваться только внутри функциональных компонентов или других хуков.',
          'Функция обновления состояния из useState может принимать значение или функцию, которая вычисляет новое значение состояния на основе предыдущего состояния. Это особенно полезно при работе с состоянием, которое зависит от предыдущего значения.',
        ]}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <Title level={4}>State с объектом</Title>
      <Paragraph>
        При обновлении объекта в состоянии нужно создавать новый объект вместо
        изменения существующего, чтобы соблюсти принцип неизменяемости:
      </Paragraph>
      <CodeBlock>{`
        import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // создаем новый объект с обновленным свойством
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };
      `}</CodeBlock>
      <List
        header={<Title level={5}>Важные момены:</Title>}
        bordered
        dataSource={[
          'Не изменяй существующее состояние напрямую: Вместо этого создавай новый объект с помощью оператора spread. Это позволяет React правильно отслеживать изменения состояния и ререндерить компонент при необходимости.',
          'Используй функцию для обновления состояния, когда новое состояние зависит от предыдущего, всегда! используй функцию для обновления, чтобы избежать проблем с конкурентным обновлением состояния.',
        ]}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <Title level={4}>
        Функция-setter (например setState) - асинхронная операция!
      </Title>
      <Paragraph>
        Когда мы вызываем setState, React не обновляет состояние и не рендерит
        компонент немедленно. Вместо этого он помещает обновление в очередь.
        После этого React применяет все обновления состояния за один раз перед
        следующим рендером компонента.
      </Paragraph>
      <List
        header={<Title level={5}>Важные момены:</Title>}
        bordered
        dataSource={[
          'Объединять несколько обновлений состояния в одно, что уменьшает количество рендеров и улучшает производительность.',
          'Гарантировать, что компоненты рендерятся с наиболее актуальным состоянием.',
        ]}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <Title level={4}>State в классовых компонентах</Title>
      <Paragraph>
        Хотя классовые компоненты сейчас не используются, но нужно знать, как
        управлять состоянием в классовых компонентах:
      </Paragraph>
      <CodeBlock>{`
        import React, { useState } from 'react';  

// Определяем интерфейс состояния  
class CounterState {  
  handleIncrease(counter) {  
    // По умолчанию ничего не делаем  
    // Это будет переопределено в конкретных состояниях  
  }  
  
  handleDecrease(counter) {  
    // По умолчанию ничего не делаем  
  }  
}  

// Конкретное состояние для начального состояния счетчика  
class InitialState extends CounterState {  
  handleIncrease(counter) {  
    counter.setCount(counter.count + 1);  
    counter.setState(new IncreasedState());  
  }  
}  

// Конкретное состояние для увеличения счетчика  
class IncreasedState extends CounterState {  
  handleDecrease(counter) {  
    counter.setCount(counter.count - 1);  
    counter.setState(new InitialState());  
  }  
}  

// Главный компонент счетчика  
const Counter = () => {  
  const [count, setCount] = useState(0);  
  const [state, setState] = useState(new InitialState());  
  
  const handleIncrease = () => {  
    state.handleIncrease({ count, setCount, setState });  
  };  

  const handleDecrease = () => {  
    state.handleDecrease({ count, setCount, setState });  
  };  

  return (  
    <div>  
      <h2>Счетчик: {count}</h2>  
      <button onClick={handleIncrease}>Увеличить</button>  
      <button onClick={handleDecrease}>Уменьшить</button>  
    </div>  
  );  
};  

export default Counter;
      `}</CodeBlock>
      <Paragraph>
        Ссылка на официальную документацию React:{' '}
        <Link href="https://react.dev/learn/managing-state" target="_blank">
          State
        </Link>
      </Paragraph>
    </>
  );
};

export default StatePage;
