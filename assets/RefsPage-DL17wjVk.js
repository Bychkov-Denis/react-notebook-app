import{j as e,T as i}from"./index-CNN2cNNm.js";import{C as s}from"./CodeBlock-mbCOP48_.js";import{L as n}from"./index-wH_YuY66.js";const{Text:c,Title:t,Link:o,Paragraph:r}=i,u=["Фокусировка или управление DOM: например, фокус на инпуте после загрузки страницы.","Реализация пользовательских анимаций: доступ к элементу для прямого управления его стилями.","Интеграция с внешними библиотеками: например, инициализация стороннего плагина для DOM."],R=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{level:2,children:"Refs"}),e.jsx(r,{children:'Refs (сокр. от "references") в React позволяют получить доступ к DOM-элементам или компонентам напрямую. Это своего рода «обходной путь», который даёт тебе возможность взаимодействовать с элементами вне обычного React-потока данных.'}),e.jsx(t,{level:4,children:"Зачем нужны Refs?"}),e.jsxs(r,{children:["1. ",e.jsx(c,{strong:!0,children:"Доступ к DOM-элементам"}),", например, для управления фокусом, выделением текста или выполнения анимаций."]}),e.jsx(s,{children:`
          const inputRef = useRef();

function focusInput() {
  inputRef.current.focus();
}

return (
  <div>
    <input ref={inputRef} type="text" />
    <button onClick={focusInput}>Фокус</button>
  </div>
);
          `}),e.jsx(r,{children:"2. Работа с внешними библиотеками, например, для интеграции с библиотеками, которые манипулируют DOM напрямую (например, Chart.js или Three.js)."}),e.jsx(t,{level:4,children:"Почему не стоит злоупотреблять Refs?"}),e.jsx(r,{children:"1. Обход React-философии: использование Refs идёт вразрез с основными принципами React (однонаправленный поток данных). Если злоупотреблять ими, это приведёт к созданию сложного и запутанного кода."}),e.jsx(r,{children:"2. Трудности тестирования и поддержки: логика, завязанная на Refs, делает код менее предсказуемым и сложным в отладке."}),e.jsx(r,{children:"3. Проблемы с производительностью: обращение к DOM через Refs может негативно сказаться на производительности, особенно в сложных приложениях."}),e.jsx(t,{level:4,children:"Что такое forwardRef?"}),e.jsxs(r,{children:[e.jsx(c,{strong:!0,children:"forwardRef"})," — это инструмент, который позволяет передавать Ref в дочерний компонент. Это полезно, когда тебе нужно получить доступ к DOM-элементу, который находится внутри кастомного компонента."]}),e.jsx(s,{children:`
          const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

function App() {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Фокус</button>
    </div>
  );
}
        `}),e.jsx(n,{header:e.jsx(t,{level:5,children:"Когда использовать Refs?"}),bordered:!0,dataSource:u,renderItem:f=>e.jsx(n.Item,{children:f})}),e.jsxs(r,{children:["Ссылка на официальную документацию React:"," ",e.jsx(o,{href:"https://react.dev/reference/react/useRef",target:"_blank",children:"useRef"})]})]});export{R as default};
