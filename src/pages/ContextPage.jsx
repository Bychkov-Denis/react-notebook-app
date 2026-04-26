import { Typography } from 'antd';
import CodeBlock from './../components/CodeBlock';

const { Text, Title, Link, Paragraph } = Typography;

const ContextPage = () => {
  return (
    <>
      <Title level={2}>Context</Title>
      <Paragraph>
        Context предоставляет способ передачи данных через дерево компонентов
        без явной передачи пропсов от родительских компонентов к дочерним. Это
        особенно полезно, когда необходимо передать данные глубоко в иерархии
        компонентов, избегая "просачивания" пропсов через несколько
        промежуточных компонентов.
      </Paragraph>
      <Title level={4}>Какую проблему решает context? (props drilling)</Title>
      <Paragraph>
        В React пропс-дриллинг (props drilling) - это паттерн, который
        возникает, когда компоненту нужно передать данные через несколько
        уровней других компонентов. Он возникает, когда компоненты передают
        свойства (props) другим компонентам, чтобы они могли использовать эти
        данные.
      </Paragraph>
      <Paragraph>
        Пропс-дриллинг может стать проблемой, когда данные нужно передавать
        через несколько уровней компонентов, и при этом каждый компонент просто
        перенаправляет свойства следующему компоненту без реального
        использования этих свойств.
      </Paragraph>
      <Paragraph>
        Примером пропс-дриллинга может быть следующая ситуация:
      </Paragraph>
      <CodeBlock>
        {`
            const GrandParentComponent = ({ value }) => {
  return (
    <ParentComponent value={value} />
  );
}

const ParentComponent = ({ value }) => {
  return (
    <ChildComponent value={value} />
  );
}

const ChildComponent = ({ value }) => {
  return (
    <div>{value}</div>
  );
}
          `}
      </CodeBlock>
      <Paragraph>
        В этом примере значение value передается через несколько компонентов,
        хотя GrandParentComponent и ParentComponent фактически не использует это
        значение. Вместо этого оно просто передается через компоненты, чтобы
        достичь конечного компонента, где оно может быть использовано.
      </Paragraph>
      <Paragraph>
        Пропс-дриллинг может привести к избыточности и усложнению кода. Он также
        делает компоненты более зависимыми от их иерархии, что может затруднить
        их переиспользование и модификацию.
      </Paragraph>
      <Paragraph>
        Чтобы избежать проблемы пропс-дриллинга, в React можно использовать
        более продвинутые паттерны, такие как контекст (context), который
        позволяет передавать данные глубже в иерархию компонентов без явного
        прокидывания свойств через каждый уровень.
      </Paragraph>
      <Title level={4}>Использование Context:</Title>
      <Paragraph>
        Для работы с Context в React необходимо выполнить следующие шаги:
      </Paragraph>
      <Paragraph>
        <Text strong>Шаг 1: Создание контекста</Text>
      </Paragraph>
      <Paragraph>
        Сначала мы должны создать контекст с помощью функции createContext() из
        модуля react. Пример:
      </Paragraph>
      <CodeBlock>{`
          // MyContext.js
import React from 'react';

const MyContext = React.createContext();

export default MyContext;
        `}</CodeBlock>
      <Paragraph>
        В этом примере создается новый контекст с помощью createContext() и
        экспортируется для дальнейшнего использования.
      </Paragraph>
      <Paragraph>
        <Text strong>Шаг 2: Предоставление значения контекста</Text>
      </Paragraph>
      <Paragraph>
        Затем нужно предоставить значение контекста внутри
        компонента-провайдера. Компонент-провайдер обертывает дерево
        компонентов, которым нужен доступ к контексту. Пример:
      </Paragraph>
      <CodeBlock>
        {`
            // App.js
import React from 'react';
import MyContext from './MyContext';
import ComponentA from './ComponentA';

const App = () => {
  const value = 'Hello, Context!';

  return (
    <MyContext.Provider value={value}>
      <ComponentA />
    </MyContext.Provider>
  );
}

export default App;
          `}
      </CodeBlock>
      <Paragraph>
        В этом примере используется MyContext.Provider для предоставления
        значения контекста. Значение value будет доступно всем дочерним
        компонентам, которые подписаны на этот контекст.
      </Paragraph>
      <Paragraph>
        <Text strong>Шаг 3: Использование хука useContext</Text>
      </Paragraph>
      <Paragraph>
        Теперь можно использовать хук useContext внутри функционального
        компонента, чтобы получить доступ к значению контекста. Пример:
      </Paragraph>
      <CodeBlock>{`
          // ComponentA.js
import React, { useContext } from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  const value = useContext(MyContext);

  return (
    <div>
      <h2>Component A</h2>
      <p>Received value from Context: {value}</p>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
        `}</CodeBlock>
      <Paragraph>
        В этом примере импортируем useContext из react и вызываем его, передавая
        контекст MyContext. Хук useContext возвращает текущее значение
        контекста, которое мы присваиваем переменной value.
      </Paragraph>
      <Paragraph>
        Теперь можно использовать значение value внутри компонента без
        необходимости использования MyContext.Consumer (про него поговорим
        дальше).
      </Paragraph>
      <Paragraph>
        <Text strong>Шаг 4: Подписка на контекст (еще один вариант) </Text>
      </Paragraph>
      <Paragraph>
        Есть еще один вариант подписаться на контекст в компонентах, где нужны
        переданные значения. Для этого используется MyContext.Consumer. Пример:
      </Paragraph>
      <CodeBlock>
        {`
            // ComponentA.js
import React from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <MyContext.Consumer>
        {(value) => (
          <p>Received value from Context: {value}</p>
        )}
      </MyContext.Consumer>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
          `}
      </CodeBlock>
      <Paragraph>
        В этом примере используется MyContext.Consumer для получения значения
        контекста и отображения его внутри компонента. Значение контекста будет
        доступно внутри функции-рендерера в виде аргумента.
      </Paragraph>
      <Paragraph>
        <Text strong>
          Примечание: Если ты используешь React Hooks, такой как useContext, ты
          можешь извлечь значение контекста с помощью этого хука. Это упрощает
          работу с контекстом и уменьшает необходимость в использовании
          MyContext.Consumer.
        </Text>
      </Paragraph>
      <Paragraph>
        <Text strong>
          Примечание: Если ты используешь React Hooks, такой как useContext, ты
          можешь извлечь значение контекста с помощью этого хука. Это упрощает
          работу с контекстом и уменьшает необходимость в использовании
          MyContext.Consumer.
        </Text>
      </Paragraph>
      <Paragraph>
        <Text mark>
          Злоупотребление контекстом может привести к ряду проблем:
        </Text>
      </Paragraph>
      <Paragraph>
        1. <Text strong>Проблемы с производительностью</Text>: контекст вызывает
        повторный рендеринг всех дочерних компонентов, когда его значение
        меняется. Это может привести к ненужным рендерингам и снижению
        производительности.
      </Paragraph>
      <Paragraph>
        2. <Text strong>Сложность отладки и тестирования</Text>: контекст может
        скрывать потоки данных и связи между компонентами, что затрудняет
        понимание и отладку приложения.
      </Paragraph>
      <Paragraph>
        3. <Text strong>Нарушение инкапсуляции</Text>: контекст позволяет
        компонентам получать данные, которые они иначе не должны были бы видеть.
        Это нарушает принципы инкапсуляции и делает компоненты менее
        независимыми и переиспользуемыми.
      </Paragraph>
      <Paragraph>
        4. <Text strong>Затруднения с рефакторингом</Text>: Использование
        контекста в большом количестве компонентов может усложнить рефакторинг и
        изменение структуры приложения, так как изменение контекста или его
        значений потребует изменения многих компонентов.
      </Paragraph>
      <Paragraph>
        <Text mark strong>
          Рекомендуется использовать контекст там, где он действительно
          необходим, например, для глобального состояния приложения или
          темизации (dark||light мод).
        </Text>
      </Paragraph>
      <Paragraph>
        Ссылка на официальную документацию React:{' '}
        <Link
          href="https://react.dev/reference/react/useContext"
          target="_blank"
        >
          Context
        </Link>
      </Paragraph>
    </>
  );
};

export default ContextPage;
