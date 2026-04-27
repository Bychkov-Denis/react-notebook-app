import{j as e,T as l}from"./index-CNN2cNNm.js";import{C as s}from"./CodeBlock-mbCOP48_.js";const{Text:n,Title:c,Link:t,Paragraph:r}=l,d=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{level:2,children:"Оптимизация (.memo, .lazy, useMemo, useCallback, Suspense, Profiler…)"}),e.jsx(c,{level:4,children:"React.memo"}),e.jsxs(r,{children:[e.jsx(n,{strong:!0,children:"React.memo"})," — это компонент высшего порядка (HOC), которая используется для оптимизации функциональных компонентов. Она предотвращает ненужные повторные рендеры, если пропсы компонента не изменились."]}),e.jsx(c,{level:5,children:"Как это работает?"}),e.jsx(r,{children:"Смотри, вот базовый компонент, который просто выводит имя:"}),e.jsx(s,{children:`
          const Greeting = ({ name }) => {
  console.log('Рендер Greeting');
  return <h1>Привет, {name}!</h1>;
};
        `}),e.jsx(r,{children:"Теперь представь, что этот компонент используется в родителе, у которого есть состояние (например, счётчик)."}),e.jsx(s,{children:`
            function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Greeting name={"Павел"} />
      <button onClick={() => setCount(count => count + 1)}>Увеличить {count}</button>
    </div>
  );
}
          `}),e.jsx(r,{children:"Ты кликаешь по кнопке, счётчик меняется, но... Greeting ререндерится каждый раз! Почему?"}),e.jsx(r,{children:e.jsxs(n,{strong:!0,children:["Потому что React не знает, что ",e.jsxs(n,{code:!0,children:["name=","Павел"]})," ","остаётся неизменным. Он просто перерисовывает всё дерево компонентов."]})}),e.jsx(r,{children:"Теперь давай применим React.memo:"}),e.jsx(s,{children:`
            const GreetingComponent = ({ name }) => {
  console.log('Рендер Greeting');
  return <h1>Привет, {name}!</h1>;
};

const Greeting = React.memo(GreetingComponent);
          `}),e.jsx(r,{children:"Теперь, даже если ты 100 раз нажмёшь кнопку, Greeting не будет ререндериться! React просто сравнит пропсы (name в нашем случае), увидит, что они не изменились, и не будет трогать компонент."}),e.jsx(r,{children:e.jsx(n,{strong:!0,children:"Что принимает и что возвращает React.memo?"})}),e.jsxs(r,{children:["Принимает (",e.jsx(n,{code:!0,children:"React.memo(Component, compareFunction?)"}),"):"]}),e.jsx(r,{children:"1. Компонент (обязательный параметр) – функциональный компонент, который нужно мемоизировать."}),e.jsx(r,{children:"2. Функцию сравнения пропсов (необязательный параметр) – кастомная функция для сравнения старых и новых пропсов."}),e.jsx(r,{children:"Возвращает новый мемоизированный компонент, который ререндерится только при изменении пропсов."}),e.jsx(c,{level:5,children:"Когда React.memo может подставить тебя?"}),e.jsx(r,{children:"Вот пример:"}),e.jsx(s,{children:`
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
      `}),e.jsx(r,{children:"Ты кликаешь по кнопке, и... UserCard ререндерится! Хотя пропс user вроде бы не изменился."}),e.jsx(r,{children:"Что происходит?"}),e.jsxs(r,{children:["Ответ:"," ",e.jsx(n,{mark:!0,strong:!0,children:"React сравнивает ссылки на объекты, а не их содержимое."})]}),e.jsxs(r,{children:["Каждый раз, когда App ререндерится, он создаёт новый объект"," ",e.jsx(n,{code:!0,children:"{ name: 'Павел' }"}),"."]}),e.jsx(r,{strong:!0,children:"Для React это новый пропс → ререндер!"}),e.jsx(c,{level:5,children:"Как исправить? React.memo с кастомной функцией сравнения"}),e.jsxs(r,{children:["По умолчанию ",e.jsx(n,{code:!0,children:"React.memo"})," сравнивает пропсы поверхностно. Примитивные значения (string, number,...) работают корректно, но объекты и массивы сравниваются по ссылке, что может вызывать ненужные ререндеры."]}),e.jsx(r,{strong:!0,children:"Что принимает?"}),e.jsx(r,{children:"1. prevProps — предыдущие пропсы компонента."}),e.jsx(r,{children:"2. nextProps — новые пропсы, с которыми React хочет ререндерить компонент."}),e.jsx(r,{strong:!0,children:"Что должна вернуть?"}),e.jsx(r,{children:"1. true → если пропсы не изменились, компонент НЕ будет ререндериться."}),e.jsx(r,{children:"2. false → если пропсы изменились, компонент перерисуется."}),e.jsx(r,{children:"Пример кастомного сравнения:"}),e.jsx(s,{children:`
            const areEqual = (prevProps, nextProps) => {
  return prevProps.user.name === nextProps.user.name;
};

const MemoizedUserInfo = React.memo(UserInfo, areEqual);
          `}),e.jsx(r,{children:"Как это работает?"}),e.jsx(r,{children:"Если prevProps.user.name === nextProps.user.name → возвращает true → React НЕ ререндерит компонент."}),e.jsx(r,{children:"Если user.name изменился → возвращает false → компонент ререндерится."}),e.jsx(r,{children:e.jsx(n,{strong:!0,children:"Вывод"})}),e.jsx(r,{children:e.jsx(n,{strong:!0,children:"React.memo сравнивает пропсы поверхностно → объекты и массивы сравниваются по ссылке."})}),e.jsx(r,{children:e.jsx(n,{strong:!0,children:"Для сложных пропсов нужна кастомная функция сравнения."})}),e.jsx(r,{children:e.jsx(n,{strong:!0,children:"Используй useMemo или useCallback, если передаёшь изменяемые значения."})}),e.jsxs(r,{children:["Ссылка на официальную документацию React:"," ",e.jsx(t,{href:"https://react.dev/reference/react/memo",target:"_blank",children:"React.memo"})]}),e.jsx(c,{level:4,children:"useMemo"}),e.jsx(r,{children:"useMemo — это хук для оптимизации производительности, который позволяет кэшировать результаты вычислений и избегать ненужных пересчётов при каждом рендере."}),e.jsx(r,{children:"Он позволяет сохранять результат вычислений и повторно использовать его, если входные значения (зависимости) не изменились."}),e.jsx(c,{level:5,children:"Что принимает и что возвращает useMemo?"}),e.jsxs(r,{children:["Принимает"," ",e.jsx(n,{code:!0,children:"useMemo(() => computeValue, [dependencies])"}),":"]}),e.jsx(r,{children:"1. Функция – вычисляемое значение, которое нужно кэшировать."}),e.jsx(r,{children:"2. Массив зависимостей – список значений, при изменении которых вычисление будет выполняться заново."}),e.jsx(r,{children:"Возвращает мемоизированное (кэшированное) значение – результат работы переданной функции:"}),e.jsx(s,{children:`
            const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
          `}),e.jsx(r,{children:"Если a и b не изменились → возвращается старый закэшированный результат."}),e.jsx(r,{children:"Если a или b изменились → вызывается computeExpensiveValue(), и React сохраняет новый результат."}),e.jsx(r,{children:"Пример 1: Оптимизация вычислений:"}),e.jsx(s,{children:`
          function App({ number }) {
  const squared = useMemo(() => {
    console.log('Выполняем тяжёлый расчёт...');
    return number ** 2;
  }, [number]);

  return <p>Результат: {squared}</p>;
}              
          `}),e.jsx(r,{children:"Функция slowFunction вызывается только тогда, когда number изменяется."}),e.jsx(r,{children:"Пример 2: Избегаем проблем с объектами в React.memo"}),e.jsx(r,{children:"Без useMemo – объект создаётся заново при каждом рендере:"}),e.jsx(s,{children:`
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
          `}),e.jsxs(r,{children:["Child ререндерится каждый раз, потому что"," ",e.jsx(n,{code:!0,children:"user={{ name: 'Павел' }"})," создаёт новый объект при каждом рендере."]}),e.jsx(r,{children:"Использование useMemo для мемоизации объекта:"}),e.jsx(s,{children:`
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
          `}),e.jsx(r,{children:"Теперь user создаётся только один раз, и React.memo работает корректно."}),e.jsxs(r,{children:["Ссылка на официальную документацию React:"," ",e.jsx(t,{href:"https://react.dev/reference/react/useMemo",target:"_blank",children:"useMemo"})]}),e.jsx(c,{level:4,children:"useCallback"}),e.jsx(r,{children:e.jsx(n,{strong:!0,children:"В React каждая функция внутри компонента создаётся заново при каждом рендере."})}),e.jsx(r,{children:"Это может вызывать:"}),e.jsx(r,{children:"Лишние ререндеры дочерних компонентов, если передавать функцию в props."}),e.jsx(r,{children:"Пересоздание обработчиков событий, даже если они не изменились."}),e.jsx(r,{children:"💡 useCallback решает эти проблемы, мемоизируя функцию – т.е. возвращая её же саму между рендерами, если зависимости не изменились."}),e.jsx(r,{children:e.jsx(n,{strong:!0,children:"Что принимает и что возвращает?"})}),e.jsx(s,{children:`
const memoizedCallback = useCallback(callbackFunction,[dependencies]);
          `}),e.jsx(r,{children:"Принимает:"}),e.jsx(r,{children:"1. Функцию (callbackFunction) – ту, которую нужно мемоизировать."}),e.jsx(r,{children:"2. Массив зависимостей ([dependencies]) – если зависимости не изменились, функция остаётся той же."}),e.jsx(r,{children:"Возвращает ту же самую функцию между рендерами (если зависимости не изменились)."}),e.jsx(r,{children:"Пример: useCallback + React.memo (избегаем лишних ререндеров)"}),e.jsx(r,{children:"Без useCallback:"}),e.jsx(s,{children:`
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
          `}),e.jsxs(r,{children:["Проблема:"," ",e.jsx(n,{strong:!0,children:"Каждый рендер App создаёт новую функцию handleClick, и React.memo не предотвращает ререндер Child."})]}),e.jsx(r,{children:"Исправляем с useCallback:"}),e.jsx(s,{children:`
          const handleClick = useCallback(() => {
  console.log('Клик!');
}, []);
        `}),e.jsx(r,{children:"Теперь handleClick не пересоздаётся при каждом рендере, и Child больше не перерисовывается!"}),e.jsx(r,{children:"Вывод"}),e.jsx(r,{children:e.jsx(n,{strong:!0,children:"useCallback нужен, когда функция не должна пересоздаваться без изменения зависимостей."})}),e.jsx(r,{children:e.jsx(n,{strong:!0,children:"Помогает избежать лишних ререндеров в React.memo."})}),e.jsxs(r,{children:["Ссылка на официальную документацию React:"," ",e.jsx(t,{href:"https://react.dev/reference/react/useCallback",target:"_blank",children:"useCallback"})]}),e.jsx(c,{level:4,children:"React.lazy"}),e.jsx(r,{children:'В приложениях производительность и скорость загрузки играют ключевую роль. С ростом объема кода и количества функциональных возможностей приложения увеличивается и время его загрузки. Для улучшения пользовательского опыта и сокращения времени загрузки используется техника, называемая "ленивая загрузка" (lazy loading).В приложениях производительность и скорость загрузки играют ключевую роль. С ростом объема кода и количества функциональных возможностей приложения увеличивается и время его загрузки. Для улучшения пользовательского опыта и сокращения времени загрузки используется техника, называемая "ленивая загрузка" (lazy loading).'}),e.jsx(r,{children:e.jsxs(n,{mark:!0,children:["lazy позволяет загружать компоненты только тогда, когда они действительно нужны. Вместо загрузки всего приложения сразу, lazy делит код на части и загружает их по мере необходимости."," "]})}),e.jsx(r,{children:"Это особенно полезно для больших приложений, так как сокращает начальное время загрузки и улучшает восприятие производительности пользователями."}),e.jsx(r,{children:'Пример создания "ленивого" компонента с помощью lazy и функции импорта:'}),e.jsx(s,{children:`
const LazyComponent = lazy(() => import('./LazyComponent'));
          `}),e.jsx(r,{children:e.jsx(n,{mark:!0,children:"Лучшие практики использования lazy:"})}),e.jsxs(r,{children:["1. ",e.jsx(n,{strong:!0,children:"Разделение по маршрутам (Route-based splitting)"}),": Используй lazy для ленивой загрузки страниц на уровне маршрутов (routes) в приложении. Это поможет загружать только необходимые части приложения при навигации."]}),e.jsxs(r,{children:["2."," ",e.jsx(n,{strong:!0,children:"Разделение по компонентам (Component-based splitting)"}),": Ленивая загрузка больших компонент, которые не используются при начальной загрузке, например, модальные окна или сложные формы."]}),e.jsx(r,{children:"3. Оптимизация производительности: Старайся минимизировать количество данных, необходимых для первоначальной загрузки. Загружай тяжелые компоненты и их зависимости только тогда, когда они действительно нужны."}),e.jsxs(r,{children:["4. ",e.jsx(n,{strong:!0,children:"Резервный контент"}),": Всегда предоставляй информативный и привлекательный fallback в Suspense, чтобы пользователь понимал, что данные загружаются. Это может быть анимация загрузки или короткое сообщение (про это дальше)"]}),e.jsxs(r,{children:["5. ",e.jsx(n,{strong:!0,children:"Ошибка загрузки"}),": Обрабатывай возможные ошибки загрузки компонентов, чтобы приложение не крашилось. Ты можешь использовать компонент ErrorBoundary для этого."]}),e.jsx(r,{children:"Пример ErrorBoundary:"}),e.jsx(s,{children:`
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
          `}),e.jsx(r,{children:"Использование ErrorBoundary в приложении:"}),e.jsx(s,{children:`
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
          `}),e.jsxs(r,{children:["Ссылка на официальную документацию React:"," ",e.jsx(t,{href:"https://react.dev/reference/react/lazy",target:"_blank",children:"React.lazy"})]}),e.jsx(c,{level:4,children:"Suspense"}),e.jsx(r,{children:"В React компонент может загружать данные асинхронно, например, получать информацию с сервера или подгружать другой компонент через React.lazy()."}),e.jsx(r,{children:e.jsx(n,{strong:!0,children:"Проблема: пока данные загружаются, React рендерит пустой экран или заставляет тебя вручную управлять состоянием загрузки (useState + useEffect)."})}),e.jsx(r,{children:e.jsx(n,{strong:!0,children:'Suspense позволяет показать "заглушку" (например, спиннер) вместо компонента, который ещё загружается, и делает код чище.'})}),e.jsx(c,{level:5,children:"Что принимает и что возвращает?"}),e.jsx(s,{children:`
            <Suspense fallback={заглушка}>
  {асинхронный компонент}
</Suspense>
          `}),e.jsx(r,{children:"Принимает:"}),e.jsxs(r,{children:["fallback – элемент (например, Loading... или ","<Spinner />","), который будет показан пока загружается дочерний компонент."]}),e.jsx(r,{children:"Возвращает:"}),e.jsx(r,{children:"Отрисованный компонент, когда он полностью загрузился."}),e.jsx(r,{children:"Пример 1: Подгрузка компонента через React.lazy"}),e.jsx(s,{children:`
            import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<p>Загрузка...</p>}>
      <LazyComponent />
    </Suspense>
  );
}
          `}),e.jsx(c,{level:5,children:"Когда Suspense НЕ работает?"}),e.jsx(r,{children:"1. Нельзя использовать с обычными fetch/useEffect."}),e.jsx(r,{children:"2. Не поддерживает ошибки загрузки по умолчанию. Если запрос упадёт, Suspense не обработает это. Нужно дополнительно использовать ErrorBoundary."}),e.jsxs(r,{children:["Ссылка на официальную документацию React:"," ",e.jsx(t,{href:"https://react.dev/reference/react/Suspense",target:"_blank",children:"Suspense"})]})]});export{d as default};
