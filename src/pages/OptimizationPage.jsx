import { Typography } from 'antd';
import CodeBlock from '../components/CodeBlock';

const { Text, Title, Link, Paragraph } = Typography;

const OptimizationPage = () => {
  return (
    <>
      <Title level={2}>
        Оптимизация (.memo, .lazy, useMemo, useCallback, Suspense, Profiler…)
      </Title>
      <Title level={4}>React.memo</Title>
      <Paragraph>
        <Text strong>React.memo</Text> — это компонент высшего порядка (HOC),
        которая используется для оптимизации функциональных компонентов. Она
        предотвращает ненужные повторные рендеры, если пропсы компонента не
        изменились.
      </Paragraph>
      <Title level={5}>Как это работает?</Title>
      <Paragraph>
        Смотри, вот базовый компонент, который просто выводит имя:
      </Paragraph>
      <CodeBlock>
        {`
          const Greeting = ({ name }) => {
  console.log('Рендер Greeting');
  return <h1>Привет, {name}!</h1>;
};
        `}
      </CodeBlock>
      <Paragraph>
        Теперь представь, что этот компонент используется в родителе, у которого
        есть состояние (например, счётчик).
      </Paragraph>
      <CodeBlock>
        {`
            function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Greeting name={"Павел"} />
      <button onClick={() => setCount(count => count + 1)}>Увеличить {count}</button>
    </div>
  );
}
          `}
      </CodeBlock>
      <Paragraph>
        Ты кликаешь по кнопке, счётчик меняется, но... Greeting ререндерится
        каждый раз! Почему?
      </Paragraph>
      <Paragraph>
        <Text strong>
          Потому что React не знает, что <Text code>name={'Павел'}</Text>{' '}
          остаётся неизменным. Он просто перерисовывает всё дерево компонентов.
        </Text>
      </Paragraph>
      <Paragraph>Теперь давай применим React.memo:</Paragraph>
      <CodeBlock>
        {`
            const GreetingComponent = ({ name }) => {
  console.log('Рендер Greeting');
  return <h1>Привет, {name}!</h1>;
};

const Greeting = React.memo(GreetingComponent);
          `}
      </CodeBlock>
      <Paragraph>
        Теперь, даже если ты 100 раз нажмёшь кнопку, Greeting не будет
        ререндериться! React просто сравнит пропсы (name в нашем случае),
        увидит, что они не изменились, и не будет трогать компонент.
      </Paragraph>
      <Paragraph>
        <Text strong>Что принимает и что возвращает React.memo?</Text>
      </Paragraph>
      <Paragraph>
        Принимает (<Text code>React.memo(Component, compareFunction?)</Text>):
      </Paragraph>
      <Paragraph>
        1. Компонент (обязательный параметр) – функциональный компонент, который
        нужно мемоизировать.
      </Paragraph>
      <Paragraph>
        2. Функцию сравнения пропсов (необязательный параметр) – кастомная
        функция для сравнения старых и новых пропсов.
      </Paragraph>
      <Paragraph>
        Возвращает новый мемоизированный компонент, который ререндерится только
        при изменении пропсов.
      </Paragraph>
      <Title level={5}>Когда React.memo может подставить тебя?</Title>
      <Paragraph>Вот пример:</Paragraph>
      <CodeBlock>{`
      const UserCard = React.memo(({ user }) => {
  console.log('Ререндер UserCard');
  return <p>{user.name}</p>;
});

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <UserCard user={{ name: 'Павел' }} />
      <button onClick={() => setCount(count => count + 1)}>Обновить {count}</button>
    </div>
  );
}
      `}</CodeBlock>
      <Paragraph>
        Ты кликаешь по кнопке, и... UserCard ререндерится! Хотя пропс user вроде
        бы не изменился.
      </Paragraph>
      <Paragraph>Что происходит?</Paragraph>
      <Paragraph>
        Ответ:{' '}
        <Text mark strong>
          React сравнивает ссылки на объекты, а не их содержимое.
        </Text>
      </Paragraph>
      <Paragraph>
        Каждый раз, когда App ререндерится, он создаёт новый объект{' '}
        <Text code>{`{ name: 'Павел' }`}</Text>.
      </Paragraph>
      <Paragraph strong>Для React это новый пропс → ререндер!</Paragraph>
      <Title level={5}>
        Как исправить? React.memo с кастомной функцией сравнения
      </Title>
      <Paragraph>
        По умолчанию <Text code>React.memo</Text> сравнивает пропсы
        поверхностно. Примитивные значения (string, number,...) работают
        корректно, но объекты и массивы сравниваются по ссылке, что может
        вызывать ненужные ререндеры.
      </Paragraph>
      <Paragraph strong>Что принимает?</Paragraph>
      <Paragraph>1. prevProps — предыдущие пропсы компонента.</Paragraph>
      <Paragraph>
        2. nextProps — новые пропсы, с которыми React хочет ререндерить
        компонент.
      </Paragraph>
      <Paragraph strong>Что должна вернуть?</Paragraph>
      <Paragraph>
        1. true → если пропсы не изменились, компонент НЕ будет ререндериться.
      </Paragraph>
      <Paragraph>
        2. false → если пропсы изменились, компонент перерисуется.
      </Paragraph>
      <Paragraph>Пример кастомного сравнения:</Paragraph>
      <CodeBlock>
        {`
            const areEqual = (prevProps, nextProps) => {
  return prevProps.user.name === nextProps.user.name;
};

const MemoizedUserInfo = React.memo(UserInfo, areEqual);
          `}
      </CodeBlock>
      <Paragraph>Как это работает?</Paragraph>
      <Paragraph>
        Если prevProps.user.name === nextProps.user.name → возвращает true →
        React НЕ ререндерит компонент.
      </Paragraph>
      <Paragraph>
        Если user.name изменился → возвращает false → компонент ререндерится.
      </Paragraph>
      <Paragraph>
        <Text strong>Вывод</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>
          React.memo сравнивает пропсы поверхностно → объекты и массивы
          сравниваются по ссылке.
        </Text>
      </Paragraph>
      <Paragraph>
        <Text strong>
          Для сложных пропсов нужна кастомная функция сравнения.
        </Text>
      </Paragraph>
      <Paragraph>
        <Text strong>
          Используй useMemo или useCallback, если передаёшь изменяемые значения.
        </Text>
      </Paragraph>
      <Paragraph>
        Ссылка на официальную документацию React:{' '}
        <Link href="https://react.dev/reference/react/memo" target="_blank">
          React.memo
        </Link>
      </Paragraph>
      <Title level={4}>useMemo</Title>
      <Paragraph>
        useMemo — это хук для оптимизации производительности, который позволяет
        кэшировать результаты вычислений и избегать ненужных пересчётов при
        каждом рендере.
      </Paragraph>
      <Paragraph>
        Он позволяет сохранять результат вычислений и повторно использовать его,
        если входные значения (зависимости) не изменились.
      </Paragraph>
      <Title level={5}>Что принимает и что возвращает useMemo?</Title>
      <Paragraph>
        Принимает{' '}
        <Text code>{`useMemo(() => computeValue, [dependencies])`}</Text>:
      </Paragraph>
      <Paragraph>
        1. Функция – вычисляемое значение, которое нужно кэшировать.
      </Paragraph>
      <Paragraph>
        2. Массив зависимостей – список значений, при изменении которых
        вычисление будет выполняться заново.
      </Paragraph>
      <Paragraph>
        Возвращает мемоизированное (кэшированное) значение – результат работы
        переданной функции:
      </Paragraph>
      <CodeBlock>
        {`
            const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
          `}
      </CodeBlock>
      <Paragraph>
        Если a и b не изменились → возвращается старый закэшированный результат.
      </Paragraph>
      <Paragraph>
        Если a или b изменились → вызывается computeExpensiveValue(), и React
        сохраняет новый результат.
      </Paragraph>
      <Paragraph>Пример 1: Оптимизация вычислений:</Paragraph>
      <CodeBlock>
        {`
          function App({ number }) {
  const squared = useMemo(() => {
    console.log('Выполняем тяжёлый расчёт...');
    return number ** 2;
  }, [number]);

  return <p>Результат: {squared}</p>;
}              
          `}
      </CodeBlock>
      <Paragraph>
        Функция slowFunction вызывается только тогда, когда number изменяется.
      </Paragraph>
      <Paragraph>Пример 2: Избегаем проблем с объектами в React.memo</Paragraph>
      <Paragraph>
        Без useMemo – объект создаётся заново при каждом рендере:
      </Paragraph>
      <CodeBlock>
        {`
            const Child = React.memo(({ user }) => {
  console.log('Ререндер Child');
  return <p>{user.name}</p>;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child user={{ name: 'Павел' }} />
      <button onClick={() => setCount(count + 1)}>Обновить {count}</button>
    </div>
  );
}
          `}
      </CodeBlock>
      <Paragraph>
        Child ререндерится каждый раз, потому что{' '}
        <Text code>{`user={{ name: 'Павел' }`}</Text> создаёт новый объект при
        каждом рендере.
      </Paragraph>
      <Paragraph>Использование useMemo для мемоизации объекта:</Paragraph>
      <CodeBlock>
        {`
            function App() {
  const [count, setCount] = React.useState(0);
  const user = useMemo(() => ({ name: 'Анна' }), []);

  return (
    <div>
      <Child user={user} />
      <button onClick={() => setCount(count + 1)}>Обновить {count}</button>
    </div>
  );
}
          `}
      </CodeBlock>
      <Paragraph>
        Теперь user создаётся только один раз, и React.memo работает корректно.
      </Paragraph>
      <Paragraph>
        Ссылка на официальную документацию React:{' '}
        <Link href="https://react.dev/reference/react/useMemo" target="_blank">
          useMemo
        </Link>
      </Paragraph>
      <Title level={4}>useCallback</Title>
      <Paragraph>
        <Text strong>
          В React каждая функция внутри компонента создаётся заново при каждом
          рендере.
        </Text>
      </Paragraph>
      <Paragraph>Это может вызывать:</Paragraph>
      <Paragraph>
        Лишние ререндеры дочерних компонентов, если передавать функцию в props.
      </Paragraph>
      <Paragraph>
        Пересоздание обработчиков событий, даже если они не изменились.
      </Paragraph>
      <Paragraph>
        💡 useCallback решает эти проблемы, мемоизируя функцию – т.е. возвращая
        её же саму между рендерами, если зависимости не изменились.
      </Paragraph>
      <Paragraph>
        <Text strong>Что принимает и что возвращает?</Text>
      </Paragraph>
      <CodeBlock>
        {`
const memoizedCallback = useCallback(callbackFunction,[dependencies]);
          `}
      </CodeBlock>
      <Paragraph>Принимает:</Paragraph>
      <Paragraph>
        1. Функцию (callbackFunction) – ту, которую нужно мемоизировать.
      </Paragraph>
      <Paragraph>
        2. Массив зависимостей ([dependencies]) – если зависимости не
        изменились, функция остаётся той же.
      </Paragraph>
      <Paragraph>
        Возвращает ту же самую функцию между рендерами (если зависимости не
        изменились).
      </Paragraph>
      <Paragraph>
        Пример: useCallback + React.memo (избегаем лишних ререндеров)
      </Paragraph>
      <Paragraph>Без useCallback:</Paragraph>
      <CodeBlock>
        {`
          const Child = React.memo(({ onClick }) => {
  console.log('Ререндер Child');
  return <button onClick={onClick}>Нажми</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Клик!');
  };

  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count => count + 1)}>Обновить {count}</button>
    </div>
  );
}
          `}
      </CodeBlock>
      <Paragraph>
        Проблема:{' '}
        <Text strong>
          Каждый рендер App создаёт новую функцию handleClick, и React.memo не
          предотвращает ререндер Child.
        </Text>
      </Paragraph>
      <Paragraph>Исправляем с useCallback:</Paragraph>
      <CodeBlock>{`
          const handleClick = useCallback(() => {
  console.log('Клик!');
}, []);
        `}</CodeBlock>
      <Paragraph>
        Теперь handleClick не пересоздаётся при каждом рендере, и Child больше
        не перерисовывается!
      </Paragraph>
      <Paragraph>Вывод</Paragraph>
      <Paragraph>
        <Text strong>
          useCallback нужен, когда функция не должна пересоздаваться без
          изменения зависимостей.
        </Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Помогает избежать лишних ререндеров в React.memo.</Text>
      </Paragraph>
      <Paragraph>
        Ссылка на официальную документацию React:{' '}
        <Link
          href="https://react.dev/reference/react/useCallback"
          target="_blank"
        >
          useCallback
        </Link>
      </Paragraph>
      <Title level={4}>React.lazy</Title>
      <Paragraph>
        В приложениях производительность и скорость загрузки играют ключевую
        роль. С ростом объема кода и количества функциональных возможностей
        приложения увеличивается и время его загрузки. Для улучшения
        пользовательского опыта и сокращения времени загрузки используется
        техника, называемая "ленивая загрузка" (lazy loading).В приложениях
        производительность и скорость загрузки играют ключевую роль. С ростом
        объема кода и количества функциональных возможностей приложения
        увеличивается и время его загрузки. Для улучшения пользовательского
        опыта и сокращения времени загрузки используется техника, называемая
        "ленивая загрузка" (lazy loading).
      </Paragraph>
      <Paragraph>
        <Text mark>
          lazy позволяет загружать компоненты только тогда, когда они
          действительно нужны. Вместо загрузки всего приложения сразу, lazy
          делит код на части и загружает их по мере необходимости.{' '}
        </Text>
      </Paragraph>
      <Paragraph>
        Это особенно полезно для больших приложений, так как сокращает начальное
        время загрузки и улучшает восприятие производительности пользователями.
      </Paragraph>
      <Paragraph>
        Пример создания "ленивого" компонента с помощью lazy и функции импорта:
      </Paragraph>
      <CodeBlock>
        {`
const LazyComponent = lazy(() => import('./LazyComponent'));
          `}
      </CodeBlock>
      <Paragraph>
        <Text mark>Лучшие практики использования lazy:</Text>
      </Paragraph>
      <Paragraph>
        1. <Text strong>Разделение по маршрутам (Route-based splitting)</Text>:
        Используй lazy для ленивой загрузки страниц на уровне маршрутов (routes)
        в приложении. Это поможет загружать только необходимые части приложения
        при навигации.
      </Paragraph>
      <Paragraph>
        2.{' '}
        <Text strong>
          Разделение по компонентам (Component-based splitting)
        </Text>
        : Ленивая загрузка больших компонент, которые не используются при
        начальной загрузке, например, модальные окна или сложные формы.
      </Paragraph>
      <Paragraph>
        3. Оптимизация производительности: Старайся минимизировать количество
        данных, необходимых для первоначальной загрузки. Загружай тяжелые
        компоненты и их зависимости только тогда, когда они действительно нужны.
      </Paragraph>
      <Paragraph>
        4. <Text strong>Резервный контент</Text>: Всегда предоставляй
        информативный и привлекательный fallback в Suspense, чтобы пользователь
        понимал, что данные загружаются. Это может быть анимация загрузки или
        короткое сообщение (про это дальше)
      </Paragraph>
      <Paragraph>
        5. <Text strong>Ошибка загрузки</Text>: Обрабатывай возможные ошибки
        загрузки компонентов, чтобы приложение не крашилось. Ты можешь
        использовать компонент ErrorBoundary для этого.
      </Paragraph>
      <Paragraph>Пример ErrorBoundary:</Paragraph>
      <CodeBlock>
        {`
            // ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary поймал ошибку', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
          `}
      </CodeBlock>
      <Paragraph>Использование ErrorBoundary в приложении:</Paragraph>
      <CodeBlock>
        {`
            // App.js
import React, { Suspense, lazy } from 'react';
import ErrorBoundary from './ErrorBoundary';

const DogImage = lazy(() => import('./DogImage'));

const App = () => {
  return (
    <ErrorBoundary>
      <div>
        <h1>Random Dog Image</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <DogImage />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default App;
          `}
      </CodeBlock>
      <Paragraph>
        Ссылка на официальную документацию React:{' '}
        <Link href="https://react.dev/reference/react/lazy" target="_blank">
          React.lazy
        </Link>
      </Paragraph>
      <Title level={4}>Suspense</Title>
      <Paragraph>
        В React компонент может загружать данные асинхронно, например, получать
        информацию с сервера или подгружать другой компонент через React.lazy().
      </Paragraph>
      <Paragraph>
        <Text strong>
          Проблема: пока данные загружаются, React рендерит пустой экран или
          заставляет тебя вручную управлять состоянием загрузки (useState +
          useEffect).
        </Text>
      </Paragraph>
      <Paragraph>
        <Text strong>
          Suspense позволяет показать "заглушку" (например, спиннер) вместо
          компонента, который ещё загружается, и делает код чище.
        </Text>
      </Paragraph>
      <Title level={5}>Что принимает и что возвращает?</Title>
      <CodeBlock>
        {`
            <Suspense fallback={заглушка}>
  {асинхронный компонент}
</Suspense>
          `}
      </CodeBlock>
      <Paragraph>Принимает:</Paragraph>
      <Paragraph>
        fallback – элемент (например, Loading... или {`<Spinner />`}
        ), который будет показан пока загружается дочерний компонент.
      </Paragraph>
      <Paragraph>Возвращает:</Paragraph>
      <Paragraph>
        Отрисованный компонент, когда он полностью загрузился.
      </Paragraph>
      <Paragraph>Пример 1: Подгрузка компонента через React.lazy</Paragraph>
      <CodeBlock>
        {`
            import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<p>Загрузка...</p>}>
      <LazyComponent />
    </Suspense>
  );
}
          `}
      </CodeBlock>
      <Title level={5}>Когда Suspense НЕ работает?</Title>
      <Paragraph>1. Нельзя использовать с обычными fetch/useEffect.</Paragraph>
      <Paragraph>
        2. Не поддерживает ошибки загрузки по умолчанию. Если запрос упадёт,
        Suspense не обработает это. Нужно дополнительно использовать
        ErrorBoundary.
      </Paragraph>
      <Paragraph>
        Ссылка на официальную документацию React:{' '}
        <Link href="https://react.dev/reference/react/Suspense" target="_blank">
          Suspense
        </Link>
      </Paragraph>
    </>
  );
};

export default OptimizationPage;
