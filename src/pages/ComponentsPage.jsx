import { List, Typography } from 'antd';
import CodeBlock from '../components/CodeBlock';

const { Text, Title, Link, Paragraph } = Typography;

const listData = [
  'Для одинаковых входных данных всегда возвращает один результат.',
  'Не имеет побочных эффектов (то есть не изменяет внешние состояния).',
  'Не зависит от внешних состояний',
];

const ComponentsPage = () => {
  return (
    <>
      <Title level={2}>Основы компонентов в React</Title>
      <Paragraph>
        <Text mark>Компоненты</Text> - это небольшие, переиспользуемые элементы
        пользовательского интерфейса, которые объединены вместе, чтобы создать
        более крупные приложения.
      </Paragraph>
      <Paragraph>
        Компоненты позволяют разбивать интерфейс на независимые части, которыми
        становится проще управлять в отдельности. Во многом компоненты{' '}
        <Text mark>ведут себя как обычные функции в JavaScript.</Text>
        Они могут принимать произвольные входные данные (так называемые "props")
        и возвращают React-элементы, которые определяют, что будет отобржаено на
        странице
      </Paragraph>
      <Title level={5}>
        В React компоненты могут быть классовыми и функциональными.
      </Title>
      <Paragraph>
        Пример объявления{' '}
        <Text type="success">классового компонента в React:</Text> в React
      </Paragraph>
      <CodeBlock>{`class MyComponent extends React.Component {
  render() {
    return <div>Hello, Redev!</div>;
  }
}
export default MyComponent;`}</CodeBlock>
      <Paragraph>
        Пример объявления{' '}
        <Text type="success">функционального компонента в React:</Text> в React
      </Paragraph>
      <CodeBlock>{`const MyComponent = () => {
  return (
    <div>Hello, Redev!</div>
  )
}`}</CodeBlock>
      <Paragraph>
        Оба примера создают компонент, который отображает текст{' '}
        <Text strong>Hello, Redev!</Text>. Разница заключается в том, что
        классовый компонент наследуется от базового класса React.Component и
        имеет доступ к дополнительным возможностям таким, как состояние и методы
        жизненного цикла. Начиная с версии React 16.8 (февраль 2019 г.), в
        функциональных компонентах появилась возможнось управлять состоянием и
        методами жизненного цикла с помощью хуков. Поэтому на данный момент{' '}
        <Text mark>в React используется функциональный подход.</Text> Классовые
        компоненты перестают использоваться в проектах, но ещё можно встретить
        проекты, где придётся работать с классовыми компонентами.
      </Paragraph>
      <Title level={5}>Компонент должен вести себя как чистая функция:</Title>
      <List
        header={<Title level={5}>Чистой называется функция, которая: </Title>}
        bordered
        dataSource={listData}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <Title level={4}>JSX и компоненты</Title>
      <Paragraph>
        <Text mark>Каждый компонент в React исплоьзует JSX.</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>
          JSX (от JavaScript XML) делает код React читаемым и похожим на HTML.
        </Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Каждый компонент возвращает JSX.</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>
          JSX может содержать другие компоненты, элементы HTML или JavaScript
        </Text>
      </Paragraph>
      <Title level={4}>Stateless VS Stateful</Title>
      <Paragraph>
        Когда речь идет о React, часто упоминаются термины "stateless" и
        "stateful". Чтобы понять, что они значат, давай разберемся c этим.
      </Paragraph>
      <Title level={5}>Stateless компоненты</Title>
      <Paragraph>
        Это React-компоненты, которые принимают props и возвращают JSX, который
        описывает, как должен выглядеть UI. Эти компоненты не имеют внутреннего
        состояния и не могут изменять свое поведение в зависимости от событий
        или действий пользователя.
      </Paragraph>
      <CodeBlock>{`const Greeting = ({name}) => {
  return <h1>Hello, {name}!</h1>;
};`}</CodeBlock>
      <Paragraph>
        {' '}
        этом примере компонент Greeting принимает проп name и отображает
        приветствие. Он не хранит состояние и не изменяется с течением времени.
      </Paragraph>
      <Title level={5}>Stateful компоненты</Title>
      <Paragraph>
        Stateful компоненты могут управлять состоянием и изменять свое поведение
        в зависимости от событий. Они используют внутреннее состояние, чтобы
        отслеживать изменения и обновлять UI в ответ на действия пользователя
        или другие события. С появлением хуков в React 16.8 функциональные
        компоненты могут также управлять состоянием и эффектами. Теперь можно
        создавать stateful функциональные компоненты с помощью{' '}
        <Text type="success">хуков useState и useEffect.</Text>
      </Paragraph>
      <CodeBlock>{`
      import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
      `}</CodeBlock>
      <Paragraph>
        <Text strong>
          Stateless компоненты просто рендерят UI, в то время как stateful
          компоненты имеют внутреннее состояние, которое позволяет им изменять
          своё поведение в ответ на события.
        </Text>
      </Paragraph>
      <Paragraph>
        Ссылка на официальную документацию React:{' '}
        <Link
          href="https://react.dev/reference/react/Component"
          target="_blank"
        >
          Components
        </Link>
      </Paragraph>
    </>
  );
};

export default ComponentsPage;
