import { Typography } from 'antd';
import CodeBlock from '../components/CodeBlock';

const { Text, Title, Link, Paragraph } = Typography;

const FragmentPage = () => {
  return (
    <>
      <Title level={2}>Fragment</Title>
      <Paragraph>
        Fragment в React — это вспомогательный компонент, который позволяет
        оборачивать несколько дочерних элементов без добавления лишнего элемента
        в DOM. Это полезно, если тебе нужно вернуть несколько элементов, но ты
        не хочешь создавать дополнительный div или другой контейнер.
      </Paragraph>
      <Paragraph>
        <Text strong>Зачем нужен Fragment?</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Избегает лишних обёрток в DOM</Text>: Дополнительные
        контейнеры могут усложнять стилизацию и негативно влиять на
        производительность.
      </Paragraph>
      <Paragraph>
        <Text strong>Улучшает читаемость JSX</Text>: Код становится проще и
        понятнее.
      </Paragraph>
      <Title level={4}>Как использовать Fragment?</Title>
      <Paragraph>Фрагмент можно использовать двумя способами:</Paragraph>
      <Paragraph>1. С помощью тега {`<React.Fragment>`}:</Paragraph>
      <CodeBlock>
        {`
            function App() {
  return (
    <React.Fragment>
      <h1>Hello Child Component</h1>
	    <h1>Hello Child Component</h1>
    </React.Fragment>
  );
}
          `}
      </CodeBlock>
      <Paragraph>2. С помощью короткого синтаксиса {`(<>)`}:</Paragraph>
      <Paragraph>
        Существует сокращенная запись (импортировать не нужно) -{' '}
        <Text mark>
          недостаток сокращенной записи - нельзя использовать атрибуты, например
          id или key
        </Text>
        :
      </Paragraph>
      <CodeBlock>
        {`
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
          `}
      </CodeBlock>
      <Paragraph>
        Ссылка на официальную документацию React:{' '}
        <Link href="https://react.dev/reference/react/Fragment" target="_blank">
          Fragment
        </Link>
      </Paragraph>
    </>
  );
};

export default FragmentPage;
