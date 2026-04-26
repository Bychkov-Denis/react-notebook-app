import { List, Typography } from 'antd';
import CodeBlock from './../components/CodeBlock';

const { Text, Title, Link, Paragraph } = Typography;

const listData = [
  'Фокусировка или управление DOM: например, фокус на инпуте после загрузки страницы.',
  'Реализация пользовательских анимаций: доступ к элементу для прямого управления его стилями.',
  'Интеграция с внешними библиотеками: например, инициализация стороннего плагина для DOM.',
];

const RefsPage = () => {
  return (
    <>
      <Title level={2}>Refs</Title>
      <Paragraph>
        Refs (сокр. от "references") в React позволяют получить доступ к
        DOM-элементам или компонентам напрямую. Это своего рода «обходной путь»,
        который даёт тебе возможность взаимодействовать с элементами вне
        обычного React-потока данных.
      </Paragraph>
      <Title level={4}>Зачем нужны Refs?</Title>
      <Paragraph>
        1. <Text strong>Доступ к DOM-элементам</Text>, например, для управления
        фокусом, выделением текста или выполнения анимаций.
      </Paragraph>
      <CodeBlock>
        {`
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
          `}
      </CodeBlock>
      <Paragraph>
        2. Работа с внешними библиотеками, например, для интеграции с
        библиотеками, которые манипулируют DOM напрямую (например, Chart.js или
        Three.js).
      </Paragraph>
      <Title level={4}>Почему не стоит злоупотреблять Refs?</Title>
      <Paragraph>
        1. Обход React-философии: использование Refs идёт вразрез с основными
        принципами React (однонаправленный поток данных). Если злоупотреблять
        ими, это приведёт к созданию сложного и запутанного кода.
      </Paragraph>
      <Paragraph>
        2. Трудности тестирования и поддержки: логика, завязанная на Refs,
        делает код менее предсказуемым и сложным в отладке.
      </Paragraph>
      <Paragraph>
        3. Проблемы с производительностью: обращение к DOM через Refs может
        негативно сказаться на производительности, особенно в сложных
        приложениях.
      </Paragraph>
      <Title level={4}>Что такое forwardRef?</Title>
      <Paragraph>
        <Text strong>forwardRef</Text> — это инструмент, который позволяет
        передавать Ref в дочерний компонент. Это полезно, когда тебе нужно
        получить доступ к DOM-элементу, который находится внутри кастомного
        компонента.
      </Paragraph>
      <CodeBlock>{`
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
        `}</CodeBlock>
      <List
        header={<Title level={5}>Когда использовать Refs?</Title>}
        bordered
        dataSource={listData}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <Paragraph>
        Ссылка на официальную документацию React:{' '}
        <Link href="https://react.dev/reference/react/useRef" target="_blank">
          useRef
        </Link>
      </Paragraph>
    </>
  );
};

export default RefsPage;
