import { List, Typography } from 'antd';
import CodeBlock from '../components/CodeBlock';

const { Text, Title, Link, Paragraph } = Typography;

const listData = [
  'Что такое props в React? Props - это объекты, которые передаются в компоненты как параметры. Они используются для передачи данных из родительского компонента в дочерний.',
  'Как передавать props в компоненты? Props можно передавать в компоненты как атрибуты. В родительском компоненте нужно указать имя атрибута и значение, которое будет передано в дочерний компонент.',
  'Как читать props в компоненте? Props можно читать в компоненте через объект props. Этот объект содержит все переданные в компонент атрибуты.',
  'Какие данные можно передавать через props? Props можно использовать для передачи любых данных, включая строки, числа, массивы, объекты и функции.',
  'Можно ли менять пропсы? Нельзя.',
  'Что делать, если нужно изменить данные в дочернем компоненте? Если нужно изменить данные в дочернем компоненте, следует использовать состояние (state). Об этом речь будет идти далее.',
];

const PropsPage = () => {
  return (
    <>
      <Title level={2}>Что такое пропсы и зачем они нужны</Title>
      <Paragraph>
        Пропсы <Text strong>(сокращение от properties)</Text> - это данные,
        которые передаются в компоненты React для настройки их поведения и
        внешнего вида. Они позволяют передавать информацию из родительского
        компонента в дочерний компонент. Дочерний компонент может читать эти
        props и использовать их, например, для вывода данных на экран или для
        изменения своего поведения.{' '}
        <Text mark>Props - это обычный JavaScript-объект.</Text>
      </Paragraph>
      <Title level={4}>Передача пропсов в компоненты</Title>
      <Paragraph>
        Пропсы передаются в компоненты в виде атрибутов при их использовании в
        JSX. Например,{' '}
        <Text code>{`<ChildComponent message="Привет, Redev!" />`}</Text>{' '}
        передает пропс message со значением <Text code>Привет, Redev!</Text> в
        компонент ChildComponent и выводит это сообщение на экран.
      </Paragraph>
      <CodeBlock>{`
        // Родительский компонент
const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}

// Дочерний компонент
const ChildComponent = (props) => {
  return <div>{props.message}</div>;
}
      `}</CodeBlock>
      <Title level={4}>Доступ к пропсам внутри компонентов</Title>
      <Paragraph>
        В функциональных компонентах пропсы доступны как параметр функции
        компонента. Например, <Text code>{`(props) => {...}.`}</Text>
      </Paragraph>
      <CodeBlock>{`
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
      `}</CodeBlock>

      <Paragraph>
        В классовых компонентах пропсы доступны через{' '}
        <Text mark>this.props</Text>. Например, this.props.message. Пример с
        классовым компонентом:
      </Paragraph>
      <CodeBlock>{`
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
      `}</CodeBlock>
      <Paragraph>
        <Text mark>
          Props можно использовать для передачи любых данных, включая строки,
          числа, массивы, объекты и функции.
        </Text>
      </Paragraph>
      <Title level={5}>
        Пропсы являются неизменяемыми (immutable), их нельзя изменять напрямую.
      </Title>
      <Paragraph>
        <Text strong>
          Можно использовать состояние компонента (state) для изменения пропсов.
          Пропсы в React играют важную роль в передаче данных и настройке
          компонентов. Они позволяют создавать переиспользуемые компоненты.
          Правильное использование пропсов способствует лучшей организации кода
          и разделению ответственности между компонентами.
        </Text>
      </Paragraph>
      <List
        header={<Title level={5}>Подведём итоги:</Title>}
        bordered
        dataSource={listData}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <Paragraph>
        Ссылка на официальную документацию React:{' '}
        <Link
          href="https://react.dev/learn/passing-props-to-a-component"
          target="_blank"
        >
          Props
        </Link>
      </Paragraph>
    </>
  );
};

export default PropsPage;
