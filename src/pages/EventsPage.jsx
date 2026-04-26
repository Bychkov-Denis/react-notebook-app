import { Typography } from 'antd';
import CodeBlock from '../components/CodeBlock';

const { Text, Title, Link, Paragraph } = Typography;

const EventsPage = () => {
  return (
    <>
      <Title level={2}>Events и их методы</Title>
      <Paragraph>
        В React события (events) являются важной частью взаимодействия с
        пользователем. Они позволяют обрабатывать действия пользователя, такие
        как клики, наведение, отправка формы и другие.{' '}
      </Paragraph>
      <Paragraph>
        <Text strong>Вот пять наиболее часто используемых событий</Text> в React
        и примеры их применения:
      </Paragraph>
      <Paragraph>
        1. <Text mark>onClick</Text> (Клик). Возникает при клике на элементе.
        Это одно из наиболее распространенных событий в React:
      </Paragraph>
      <CodeBlock>
        {`
            const handleClick = () => {
  console.log('Кликнули!');
}

const MyComponent = () => {
  return (
    <button onClick={handleClick}>Нажми меня</button>
  );
}
          `}
      </CodeBlock>
      <Paragraph>
        2. <Text mark>onChange</Text> (Изменение). Возникает при изменении
        значения элемента формы, такого как текстовое поле (input), флажок
        (checkbox) или выбор элемента списка (radio):
      </Paragraph>
      <CodeBlock>
        {`
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
          `}
      </CodeBlock>
      <Paragraph>
        <Text strong>
          В React, параметр event в callback-функции представляет объект
          события, который генерируется при каждом событии. event.target.value
          содержит текущее значение input элемента.
        </Text>
      </Paragraph>
      <Paragraph>
        3. <Text mark>onSubmit</Text> (Отправка формы). Событие onSubmit
        возникает при отправке формы. Оно позволяет выполнить действия,
        связанные с отправкой данных формы на сервер:
      </Paragraph>
      <CodeBlock>
        {`
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
          `}
      </CodeBlock>
      <Paragraph>
        4. <Text mark>onMouseOver</Text> (Наведение курсора). Возникает, когда
        курсор наводится на элемент. Оно может использоваться для отображения
        дополнительной информации или изменения состояния компонента при
        наведении:
      </Paragraph>
      <CodeBlock>
        {`
            const handleMouseOver = () => {
  console.log('Курсор наведен!');
}

const MyComponent = () => {
  return (
    <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
  );
}
          `}
      </CodeBlock>
      <Paragraph>
        5. <Text mark>onKeyDown</Text> (Нажатие клавиши). Событие onKeyDown
        возникает при нажатии клавиши на клавиатуре. Оно позволяет реагировать
        на определенные комбинации клавиш или выполнять действия на основе
        нажатых клавиш:
      </Paragraph>
      <CodeBlock>
        {`
            const handleKeyDown = (event) => {
  console.log('Нажата клавиша:', event.key);
}

const MyComponent = () => {
  return (
    <input type="text" onKeyDown={handleKeyDown} />
  );
}
          `}
      </CodeBlock>
      <Paragraph>
        Существует множество других событий, таких как onFocus, onBlur, onScroll
        и т. д., которые могут быть использованы в зависимости от конкретных
        потребностей твоего приложения. В Redev я не хочу уделять этому большое
        количество времени, по этому, если есть желание углубиться, вот тебе
        ссылки на документацию
      </Paragraph>
      <Paragraph>
        Ссылка на официальную документацию по событиям:{' '}
        <Link
          href="https://react.dev/learn/responding-to-events"
          target="_blank"
        >
          Events
        </Link>
      </Paragraph>
    </>
  );
};

export default EventsPage;
