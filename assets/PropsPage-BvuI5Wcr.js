import{j as e,T as a}from"./index-CNN2cNNm.js";import{C as o}from"./CodeBlock-mbCOP48_.js";import{L as t}from"./index-wH_YuY66.js";const{Text:s,Title:n,Link:i,Paragraph:r}=a,d=["Что такое props в React? Props - это объекты, которые передаются в компоненты как параметры. Они используются для передачи данных из родительского компонента в дочерний.","Как передавать props в компоненты? Props можно передавать в компоненты как атрибуты. В родительском компоненте нужно указать имя атрибута и значение, которое будет передано в дочерний компонент.","Как читать props в компоненте? Props можно читать в компоненте через объект props. Этот объект содержит все переданные в компонент атрибуты.","Какие данные можно передавать через props? Props можно использовать для передачи любых данных, включая строки, числа, массивы, объекты и функции.","Можно ли менять пропсы? Нельзя.","Что делать, если нужно изменить данные в дочернем компоненте? Если нужно изменить данные в дочернем компоненте, следует использовать состояние (state). Об этом речь будет идти далее."],h=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{level:2,children:"Что такое пропсы и зачем они нужны"}),e.jsxs(r,{children:["Пропсы ",e.jsx(s,{strong:!0,children:"(сокращение от properties)"})," - это данные, которые передаются в компоненты React для настройки их поведения и внешнего вида. Они позволяют передавать информацию из родительского компонента в дочерний компонент. Дочерний компонент может читать эти props и использовать их, например, для вывода данных на экран или для изменения своего поведения."," ",e.jsx(s,{mark:!0,children:"Props - это обычный JavaScript-объект."})]}),e.jsx(n,{level:4,children:"Передача пропсов в компоненты"}),e.jsxs(r,{children:["Пропсы передаются в компоненты в виде атрибутов при их использовании в JSX. Например,"," ",e.jsx(s,{code:!0,children:'<ChildComponent message="Привет, Redev!" />'})," ","передает пропс message со значением ",e.jsx(s,{code:!0,children:"Привет, Redev!"})," в компонент ChildComponent и выводит это сообщение на экран."]}),e.jsx(o,{children:`
        // Родительский компонент
const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}

// Дочерний компонент
const ChildComponent = (props) => {
  return <div>{props.message}</div>;
}
      `}),e.jsx(n,{level:4,children:"Доступ к пропсам внутри компонентов"}),e.jsxs(r,{children:["В функциональных компонентах пропсы доступны как параметр функции компонента. Например, ",e.jsx(s,{code:!0,children:"(props) => {...}."})]}),e.jsx(o,{children:`
      // Родительский компонент
const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}

// Дочерний компонент
const ChildComponent = (props) => {
  return <div>{props.message}</div>;
}

// либо сразу сделать деструктуризацию, ведь props это обычный объект
const ChildComponent = ({message}) => {
  return <div>{message}</div>;
}
      `}),e.jsxs(r,{children:["В классовых компонентах пропсы доступны через"," ",e.jsx(s,{mark:!0,children:"this.props"}),". Например, this.props.message. Пример с классовым компонентом:"]}),e.jsx(o,{children:`
        //ParentComponent.js
import ChildComponent from './ChildComponent';

const ParentComponent2 = () => <div>parentComponent2</div>
const obj = {name:'Pasha'}

const ParentComponent = () => {
  return (
<div>
  <ChildComponent 
    name={'abc'} 
    age={25} 
    isMan={true} 
    parentComponent2={ParentComponent2} 
    object={obj}
  />
</div>
  );
}

export default ParentComponent;

//ChildComponent.js
import React from 'react'

class ChildComponent extends React.Component{
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.age}
        {this.props.isMan? "Man" : "Women"}
        {this.props.parentComponent2()}
        {this.props.object.name}
      </div>
    );
  }
}

export default ChildComponent
      `}),e.jsx(r,{children:e.jsx(s,{mark:!0,children:"Props можно использовать для передачи любых данных, включая строки, числа, массивы, объекты и функции."})}),e.jsx(n,{level:5,children:"Пропсы являются неизменяемыми (immutable), их нельзя изменять напрямую."}),e.jsx(r,{children:e.jsx(s,{strong:!0,children:"Можно использовать состояние компонента (state) для изменения пропсов. Пропсы в React играют важную роль в передаче данных и настройке компонентов. Они позволяют создавать переиспользуемые компоненты. Правильное использование пропсов способствует лучшей организации кода и разделению ответственности между компонентами."})}),e.jsx(t,{header:e.jsx(n,{level:5,children:"Подведём итоги:"}),bordered:!0,dataSource:d,renderItem:p=>e.jsx(t.Item,{children:p})}),e.jsxs(r,{children:["Ссылка на официальную документацию React:"," ",e.jsx(i,{href:"https://react.dev/learn/passing-props-to-a-component",target:"_blank",children:"Props"})]})]});export{h as default};
