import { Typography } from 'antd';
import CodeBlock from '../components/CodeBlock';

const { Text, Title, Link, Paragraph } = Typography;

const LifeCyclePage = () => {
  return (
    <>
      <Title level={2}>Жизеннный цикл компонентов в React</Title>
      <Paragraph>
        Жизеннный цикл в React - это набор этапов, через которые проходит
        компонент, чтобы правильно работать на странице. Управление жизненным
        циклом в классовых и функциональных компонентов происходит немного
        по-разному. Особенности управление жизненным циклом для классовых и
        функциональных компонентов будут описаны ниже.
      </Paragraph>
      <Title level={4}>Жизненный цикл в классовых компонентах</Title>
      <Paragraph>
        В классовых компонентах жизненным циклом компонента можно управлять с
        помощью различны методов.
      </Paragraph>
      <Paragraph>
        1. <Text mark>constructor(props)</Text>: Вызывается при создании
        компонента, обычно используется для инициализаици состояния и привязки
        методов:
      </Paragraph>
      <CodeBlock>
        {`
        class MyComponent extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = { count: 0 };  
    }  
}  
        `}
      </CodeBlock>
      <Paragraph>
        2. <Text mark>Метод render()</Text> :является обязательным для классовых
        компонентов. Он возвращает JSX, который определяет визуальное
        представление компонента.
      </Paragraph>
      <CodeBlock>
        {`
            import React from 'react';  

class MyComponent extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = { count: 0 };  
    }  

    increment = () => {  
        this.setState((prevState) => ({ count: prevState.count + 1 }));  
    }  

    render() {  
        return (  
            <div>  
                <h1>Счетчик: {this.state.count}</h1>  
                <button onClick={this.increment}>Увеличить</button>  
            </div>  
        );  
    }  
}
          `}
      </CodeBlock>
      <Paragraph>
        3. <Text mark>componentDidMount()</Text>: Вызывается сразу после
        монтирования (создание компонента и его вставка в DOM) компонента.
        Используется для выполнения запросов к API или подписки на события:
      </Paragraph>
      <CodeBlock>{`
          componentDidMount() {  
    // Запрос к серверу для получения данных  
    fetch('/api/data').then(response => response.json()).then(data => {  
        this.setState({ data });  
    });  
}
        `}</CodeBlock>
      <Paragraph>
        4. <Text mark>shouldComponentUpdate(nextProps, NextState)</Text>:{' '}
        Позволяет контролировать, следует ли перерисовывать компонент. Можно
        использовать для оптимизации производительности
      </Paragraph>
      <CodeBlock>{`
          class MyComponent extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    // В этом примере компонент будет обновляться только при изменении свойства name.
    return nextProps.name !== this.props.name
  }

  render () {
    return <div>Hello, {this.props.name}!</div>
  }
}
        `}</CodeBlock>
      <Paragraph>
        5. componentDidUpdate(prevProps, prevState): Вызывается после обновления
        компонента и его рендеринга. Используется для выполнения дополнительных
        действий после обновления компонента, например, для выполнения запросов
        к серверу на основе новых пропсов:
      </Paragraph>
      <CodeBlock>
        {`class MyComponent extends React.Component {
  componentDidUpdate (prevProps, prevState) {
    // Здесь можно выполнять действия после обновления компонента.
    console.log('Компонент был обновлен!')
  }

  render () {
    return <div>Hello, {this.props.name}!</div>
  }
}`}
      </CodeBlock>
      <Paragraph>
        6. <Text mark>componentWillUnmount()</Text>: Вызывается перед
        размонтированием компонента. Полезно для очистки таймеров или отмены
        подписок на события:
      </Paragraph>
      <CodeBlock>
        {`
            import React from 'react'

class WillUnmountExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      time: 0
    }
  }

  componentDidMount () {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1
      }))
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
    alert('Компонент удален из DOM')
  }

  render () {
    return (
      <div>
        <p>Время: {this.state.time} секунд</p>
      </div>
    )
  }
}

export default WillUnmountExample
          `}
      </CodeBlock>
      <Title level={4}>Жизненный цикл в функциональных компонентах</Title>
      <Paragraph>
        С выходом хуков в React 16.8 код функциональных компонентов стал более
        гибким и читаемым. Для управление жизненным циклом необходимо
        использовать хук useEffect:
      </Paragraph>
      <CodeBlock>
        {`
            import React, { useEffect, useState } from 'react';  

const MyComponent = ({ id }) => {  
    const [data, setData] = useState(null);  

    useEffect(() => {  
        // Код, аналогичный componentDidMount  
        fetch('/api/data').then(response => response.json()).then(data => {  
            setData(data);  
        });  

        // Код, аналогичный componentWillUnmount (функция очистки)  
        return () => {  
            // Очистка, если необходимо  
        };  
    }, []); // Пустой массив зависимостей вызывает эффект только при монтировании  

    useEffect(() => {  
        // Код, аналогичный componentDidUpdate  
        fetchData(id);  
    }, [id]); // Зависимость от id, вызывает эффект при изменении id  

    return <div>{data}</div>;  
};
          `}
      </CodeBlock>
      <Paragraph>
        <Text strong>
          В React хуки, такие как useEffect, выполняются при каждом рендере
          компонента, включая первый рендер после монтирования. Это особенность
          работы хуков, и они не повторяют точно поведение метода жизненного
          цикла componentDidMount из классовых компонентов.
        </Text>
      </Paragraph>
      <Paragraph>
        <Text mark>
          Таким образом, при первом рендере компонента useEffect также будет
          вызван, даже если он имеет зависимость и при этом первоначальное
          значение зависимости не изменилось. Это не является ошибкой, а
          предполагаемое поведение хуков.
        </Text>
      </Paragraph>
      <Paragraph>
        Ссылка на официальную документацию React:{' '}
        <Link
          href="https://react.dev/learn/lifecycle-of-reactive-effects"
          target="_blank"
        >
          LifeCycle
        </Link>
      </Paragraph>
    </>
  );
};

export default LifeCyclePage;
