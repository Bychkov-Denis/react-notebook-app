import{j as e,T as a}from"./index-CNN2cNNm.js";import{C as n}from"./CodeBlock-mbCOP48_.js";import{L as c}from"./index-wH_YuY66.js";const{Text:r,Title:s,Link:i,Paragraph:t}=a,d=["Для одинаковых входных данных всегда возвращает один результат.","Не имеет побочных эффектов (то есть не изменяет внешние состояния).","Не зависит от внешних состояний"],j=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{level:2,children:"Основы компонентов в React"}),e.jsxs(t,{children:[e.jsx(r,{mark:!0,children:"Компоненты"})," - это небольшие, переиспользуемые элементы пользовательского интерфейса, которые объединены вместе, чтобы создать более крупные приложения."]}),e.jsxs(t,{children:["Компоненты позволяют разбивать интерфейс на независимые части, которыми становится проще управлять в отдельности. Во многом компоненты"," ",e.jsx(r,{mark:!0,children:"ведут себя как обычные функции в JavaScript."}),'Они могут принимать произвольные входные данные (так называемые "props") и возвращают React-элементы, которые определяют, что будет отобржаено на странице']}),e.jsx(s,{level:5,children:"В React компоненты могут быть классовыми и функциональными."}),e.jsxs(t,{children:["Пример объявления"," ",e.jsx(r,{type:"success",children:"классового компонента в React:"})," в React"]}),e.jsx(n,{children:`class MyComponent extends React.Component {
  render() {
    return <div>Hello, Redev!</div>;
  }
}
export default MyComponent;`}),e.jsxs(t,{children:["Пример объявления"," ",e.jsx(r,{type:"success",children:"функционального компонента в React:"})," в React"]}),e.jsx(n,{children:`const MyComponent = () => {
  return (
    <div>Hello, Redev!</div>
  )
}`}),e.jsxs(t,{children:["Оба примера создают компонент, который отображает текст"," ",e.jsx(r,{strong:!0,children:"Hello, Redev!"}),". Разница заключается в том, что классовый компонент наследуется от базового класса React.Component и имеет доступ к дополнительным возможностям таким, как состояние и методы жизненного цикла. Начиная с версии React 16.8 (февраль 2019 г.), в функциональных компонентах появилась возможнось управлять состоянием и методами жизненного цикла с помощью хуков. Поэтому на данный момент"," ",e.jsx(r,{mark:!0,children:"в React используется функциональный подход."})," Классовые компоненты перестают использоваться в проектах, но ещё можно встретить проекты, где придётся работать с классовыми компонентами."]}),e.jsx(s,{level:5,children:"Компонент должен вести себя как чистая функция:"}),e.jsx(c,{header:e.jsx(s,{level:5,children:"Чистой называется функция, которая: "}),bordered:!0,dataSource:d,renderItem:l=>e.jsx(c.Item,{children:l})}),e.jsx(s,{level:4,children:"JSX и компоненты"}),e.jsx(t,{children:e.jsx(r,{mark:!0,children:"Каждый компонент в React исплоьзует JSX."})}),e.jsx(t,{children:e.jsx(r,{strong:!0,children:"JSX (от JavaScript XML) делает код React читаемым и похожим на HTML."})}),e.jsx(t,{children:e.jsx(r,{strong:!0,children:"Каждый компонент возвращает JSX."})}),e.jsx(t,{children:e.jsx(r,{strong:!0,children:"JSX может содержать другие компоненты, элементы HTML или JavaScript"})}),e.jsx(s,{level:4,children:"Stateless VS Stateful"}),e.jsx(t,{children:'Когда речь идет о React, часто упоминаются термины "stateless" и "stateful". Чтобы понять, что они значат, давай разберемся c этим.'}),e.jsx(s,{level:5,children:"Stateless компоненты"}),e.jsx(t,{children:"Это React-компоненты, которые принимают props и возвращают JSX, который описывает, как должен выглядеть UI. Эти компоненты не имеют внутреннего состояния и не могут изменять свое поведение в зависимости от событий или действий пользователя."}),e.jsx(n,{children:`const Greeting = ({name}) => {
  return <h1>Hello, {name}!</h1>;
};`}),e.jsxs(t,{children:[" ","этом примере компонент Greeting принимает проп name и отображает приветствие. Он не хранит состояние и не изменяется с течением времени."]}),e.jsx(s,{level:5,children:"Stateful компоненты"}),e.jsxs(t,{children:["Stateful компоненты могут управлять состоянием и изменять свое поведение в зависимости от событий. Они используют внутреннее состояние, чтобы отслеживать изменения и обновлять UI в ответ на действия пользователя или другие события. С появлением хуков в React 16.8 функциональные компоненты могут также управлять состоянием и эффектами. Теперь можно создавать stateful функциональные компоненты с помощью"," ",e.jsx(r,{type:"success",children:"хуков useState и useEffect."})]}),e.jsx(n,{children:`
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
      `}),e.jsx(t,{children:e.jsx(r,{strong:!0,children:"Stateless компоненты просто рендерят UI, в то время как stateful компоненты имеют внутреннее состояние, которое позволяет им изменять своё поведение в ответ на события."})}),e.jsxs(t,{children:["Ссылка на официальную документацию React:"," ",e.jsx(i,{href:"https://react.dev/reference/react/Component",target:"_blank",children:"Components"})]})]});export{j as default};
