import{j as e,T as n}from"./index-BbFpWzAB.js";import{C as o}from"./CodeBlock-yBEzqfRx.js";const{Text:r,Title:s,Link:a,Paragraph:t}=n,c=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{level:2,children:"HOС (Higher-Order Components)"}),e.jsxs(t,{children:[e.jsx(r,{mark:!0,children:"Higher-Order Components (HOC)"})," в React — это шаблон проектирования, который позволяет повторно использовать логику компонентов. HOС представляют собой функции, которые принимают компонент и возвращают новый компонент, оборачивающий или модифицирующий исходный."]}),e.jsxs(t,{children:[e.jsx(r,{mark:!0,children:"HOC"})," используется для добавления функциональности к компонентам без изменения их кода. Например, вы можете создать HOC для управления состоянием, получения данных или реализации логики маршрутизации."]}),e.jsx(t,{children:"Пример HOC, который добавляет обертку вокруг компонента и выводит сообщение о загрузке."}),e.jsx(o,{children:`
            import React, { useState, useEffect } from 'react';  

// Этот HOC принимает компонент и возвращает новый компонент  
const withLoading = (WrappedComponent) => {  
  return (props) => {  
    // Логика отображения состояния загрузки  
    const { isLoading, ...otherProps } = props;  

    // Если идет загрузка, возвращаем сообщение о загрузке  
    if (isLoading) {  
      return <div>Загрузка...</div>;  
    }  

    // Если загрузка завершилась, рендерим обернутый компонент  
    return <WrappedComponent {...otherProps} />;  
  };  
};  

// Пример обычного функционального компонента  
const MyComponent = ({ data }) => {  
  return <div>Данные: {data}</div>;  
};  

// Оборачиваем MyComponent в HOC  
const MyComponentWithLoading = withLoading(MyComponent);  

// Главный компонент приложения  
const App = () => {  
  const [isLoading, setIsLoading] = useState(true);  
  const [data, setData] = useState(null);  

  useEffect(() => {  
    // Симуляция загрузки данных  
    const timer = setTimeout(() => {  
      setIsLoading(false);  
      setData('Привет, мир!');  
    }, 2000);  

    // Чистка таймера при размонтировании  
    return () => clearTimeout(timer);  
  }, []);  

  return (  
    <div>  
      <h1>Пример HOC</h1>  
      <MyComponentWithLoading isLoading={isLoading} data={data} />  
    </div>  
  );  
};  

export default App;
          `}),e.jsx(t,{children:e.jsx(r,{mark:!0,children:"HOC полезны в следующих случаях:"})}),e.jsx(t,{children:"Когда вы хотите разделить и повторно использовать логику между несколькими компонентами."}),e.jsx(t,{children:"Для обертывания компонентов, чтобы предоставить им дополнительную функциональность, такую как аутентификация, обработка ошибок и т.д."}),e.jsxs(t,{children:["Ссылка на документацию по HOC :"," ",e.jsx(a,{href:"https://www.w3schools.com/react/react_hoc.asp",target:"_blank",children:"HOC"})]})]});export{c as default};
