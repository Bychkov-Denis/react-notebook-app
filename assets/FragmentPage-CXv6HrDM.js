import{j as e,T as h}from"./index-CNN2cNNm.js";import{C as t}from"./CodeBlock-mbCOP48_.js";const{Text:r,Title:l,Link:o,Paragraph:n}=h,c=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{level:2,children:"Fragment"}),e.jsx(n,{children:"Fragment в React — это вспомогательный компонент, который позволяет оборачивать несколько дочерних элементов без добавления лишнего элемента в DOM. Это полезно, если тебе нужно вернуть несколько элементов, но ты не хочешь создавать дополнительный div или другой контейнер."}),e.jsx(n,{children:e.jsx(r,{strong:!0,children:"Зачем нужен Fragment?"})}),e.jsxs(n,{children:[e.jsx(r,{strong:!0,children:"Избегает лишних обёрток в DOM"}),": Дополнительные контейнеры могут усложнять стилизацию и негативно влиять на производительность."]}),e.jsxs(n,{children:[e.jsx(r,{strong:!0,children:"Улучшает читаемость JSX"}),": Код становится проще и понятнее."]}),e.jsx(l,{level:4,children:"Как использовать Fragment?"}),e.jsx(n,{children:"Фрагмент можно использовать двумя способами:"}),e.jsxs(n,{children:["1. С помощью тега ","<React.Fragment>",":"]}),e.jsx(t,{children:`
            function App() {
  return (
    <React.Fragment>
      <h1>Hello Child Component</h1>
	    <h1>Hello Child Component</h1>
    </React.Fragment>
  );
}
          `}),e.jsxs(n,{children:["2. С помощью короткого синтаксиса ","(<>)",":"]}),e.jsxs(n,{children:["Существует сокращенная запись (импортировать не нужно) -"," ",e.jsx(r,{mark:!0,children:"недостаток сокращенной записи - нельзя использовать атрибуты, например id или key"}),":"]}),e.jsx(t,{children:`
            import React, { Fragment } from 'react';

//так хорошо
const ChildComponent = () => <>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>

// так нельзя. Будет ошибка
const ChildComponent = () => < id="child" >
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>
          `}),e.jsxs(n,{children:["Ссылка на официальную документацию React:"," ",e.jsx(o,{href:"https://react.dev/reference/react/Fragment",target:"_blank",children:"Fragment"})]})]});export{c as default};
