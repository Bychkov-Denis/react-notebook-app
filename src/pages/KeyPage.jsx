import { List, Typography } from 'antd';
import CodeBlock from './../components/CodeBlock';
const { Text, Title, Link, Paragraph } = Typography;

const listData = [
  'Используй key только там, где это нужно: React оптимизирует список только при наличии key.',
  'Не дублируй значения key: Два одинаковых key в одном списке приведут к ошибкам.',
  'Не добавляй key без необходимости: Не нужно указывать key для элементов, которые не являются частью списка.',
];

const KeyPage = () => {
  return (
    <>
      <Title level={2}>Key</Title>
      <Paragraph>
        <Text strong>Key</Text> - это уникальный идентификатор, который React
        использует для определения, какие элементы списка изменились, добавились
        или удалились. Без key React перерисовывает элементы списка
        неэффективно, что может привести к неожиданному поведению и падению
        производительности.
      </Paragraph>
      <Paragraph>Если не указать ключи, в консоли увидим сообщение: </Paragraph>
      <Paragraph>
        <Text strong>
          Warning: Each child in an array or iterator should have a unique “key”
          prop.
        </Text>
      </Paragraph>
      <Paragraph>
        Основные правила использования <Text strong>key:</Text>
      </Paragraph>
      <Paragraph>
        1.{' '}
        <Text strong mark>
          Используй уникальные значения:
        </Text>{' '}
        key должен быть уникальным для каждого элемента. Лучше всего
        использовать стабильные идентификаторы, такие как ID из данных. Если нет
        ID используй библиотеку{' '}
        <Link href="https://www.npmjs.com/package/uuid" target="_blank">
          uuid
        </Link>
        :
      </Paragraph>
      <CodeBlock>
        {`
            const users = [{ id: 1, name: 'Анна' }, { id: 2, name: 'Павел' }];
return users.map((user) => <div key={user.id}>{user.name}</div>)
          `}
      </CodeBlock>
      <Paragraph>
        2.{' '}
        <Text strong mark>
          Не используй индекс массива:
        </Text>{' '}
        использование индекса как key может вызвать баги, особенно при изменении
        порядка элементов в списке.
      </Paragraph>
      <CodeBlock>
        {`
            items.map((item, index) => <div key={index}>{item}</div>);
          `}
      </CodeBlock>
      <Paragraph>
        3.{' '}
        <Text strong mark>
          Сохраняй стабильность ключей:
        </Text>{' '}
        убедись, что значение key не меняется между рендерами, иначе React будет
        считать элемент новым и удалять старый.
      </Paragraph>
      <Paragraph>
        <Text mark>
          Без key механизм reconciliation сверяет компоненты попарно между
          текущим и новым VDOM. Из-за этого может происходить большое количество
          лишних перерисовок интерфейса, что замедляет работу приложения.
        </Text>
      </Paragraph>
      <Paragraph>
        <Text strong>
          Добавляя key, мы помогаем механизму reconciliation тем, что с key он
          сверяет не попарно, а ищет компоненты с тем же key (тег / имя
          компонента при этом учитывается) — это уменьшает количество
          перерисовок интерфейса. Обновлены/добавлены будут только те элементы,
          которые были изменены/не встречались в предыдущем дереве.
        </Text>
      </Paragraph>
      <List
        header={<Title level={5}>Лучшие практики:</Title>}
        bordered
        dataSource={listData}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <Paragraph>
        Ссылка на официальную документацию React:{' '}
        <Link
          href="https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key"
          target="_blank"
        >
          Key
        </Link>
      </Paragraph>
    </>
  );
};

export default KeyPage;
