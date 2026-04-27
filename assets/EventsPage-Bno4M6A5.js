import{j as e,T as r}from"./index-Dq-KXQ8K.js";import{C as o}from"./CodeBlock-DOgBE5sh.js";const{Text:t,Title:s,Link:l,Paragraph:n}=r,i=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{level:2,children:"Events и их методы"}),e.jsxs(n,{children:["В React события (events) являются важной частью взаимодействия с пользователем. Они позволяют обрабатывать действия пользователя, такие как клики, наведение, отправка формы и другие."," "]}),e.jsxs(n,{children:[e.jsx(t,{strong:!0,children:"Вот пять наиболее часто используемых событий"})," в React и примеры их применения:"]}),e.jsxs(n,{children:["1. ",e.jsx(t,{mark:!0,children:"onClick"})," (Клик). Возникает при клике на элементе. Это одно из наиболее распространенных событий в React:"]}),e.jsx(o,{children:`
            const handleClick = () => {
  console.log('Кликнули!');
}

const MyComponent = () => {
  return (
    <button onClick={handleClick}>Нажми меня</button>
  );
}
          `}),e.jsxs(n,{children:["2. ",e.jsx(t,{mark:!0,children:"onChange"})," (Изменение). Возникает при изменении значения элемента формы, такого как текстовое поле (input), флажок (checkbox) или выбор элемента списка (radio):"]}),e.jsx(o,{children:`
          const handleChange = (event) => {
  console.log('Изменилось значение:', event.target.value);
}

const MyComponent = () => {
  return (
    <input type="text" onChange={handleChange} />
    или
    <input type="text" onChange={event => handleChange(event)} />
  );
}
          `}),e.jsx(n,{children:e.jsx(t,{strong:!0,children:"В React, параметр event в callback-функции представляет объект события, который генерируется при каждом событии. event.target.value содержит текущее значение input элемента."})}),e.jsxs(n,{children:["3. ",e.jsx(t,{mark:!0,children:"onSubmit"})," (Отправка формы). Событие onSubmit возникает при отправке формы. Оно позволяет выполнить действия, связанные с отправкой данных формы на сервер:"]}),e.jsx(o,{children:`
          const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Форма отправлена!');
}

const MyComponent = () => {
  return (
    <form onSubmit={handleSubmit}>
      {/* поля формы */}
      <button type="submit">Отправить</button>
    </form>
  );
          `}),e.jsxs(n,{children:["4. ",e.jsx(t,{mark:!0,children:"onMouseOver"})," (Наведение курсора). Возникает, когда курсор наводится на элемент. Оно может использоваться для отображения дополнительной информации или изменения состояния компонента при наведении:"]}),e.jsx(o,{children:`
            const handleMouseOver = () => {
  console.log('Курсор наведен!');
}

const MyComponent = () => {
  return (
    <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
  );
}
          `}),e.jsxs(n,{children:["5. ",e.jsx(t,{mark:!0,children:"onKeyDown"})," (Нажатие клавиши). Событие onKeyDown возникает при нажатии клавиши на клавиатуре. Оно позволяет реагировать на определенные комбинации клавиш или выполнять действия на основе нажатых клавиш:"]}),e.jsx(o,{children:`
            const handleKeyDown = (event) => {
  console.log('Нажата клавиша:', event.key);
}

const MyComponent = () => {
  return (
    <input type="text" onKeyDown={handleKeyDown} />
  );
}
          `}),e.jsx(n,{children:"Существует множество других событий, таких как onFocus, onBlur, onScroll и т. д., которые могут быть использованы в зависимости от конкретных потребностей твоего приложения. В Redev я не хочу уделять этому большое количество времени, по этому, если есть желание углубиться, вот тебе ссылки на документацию"}),e.jsxs(n,{children:["Ссылка на официальную документацию по событиям:"," ",e.jsx(l,{href:"https://react.dev/learn/responding-to-events",target:"_blank",children:"Events"})]})]});export{i as default};
