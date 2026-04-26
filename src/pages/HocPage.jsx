import { Typography } from 'antd';
import CodeBlock from '../components/CodeBlock';

const { Text, Title, Link, Paragraph } = Typography;

const HocPage = () => {
  return (
    <>
      <Title level={2}>HOС (Higher-Order Components)</Title>
      <Paragraph>
        <Text mark>Higher-Order Components (HOC)</Text> в React — это шаблон
        проектирования, который позволяет повторно использовать логику
        компонентов. HOС представляют собой функции, которые принимают компонент
        и возвращают новый компонент, оборачивающий или модифицирующий исходный.
      </Paragraph>
      <Paragraph>
        <Text mark>HOC</Text> используется для добавления функциональности к
        компонентам без изменения их кода. Например, вы можете создать HOC для
        управления состоянием, получения данных или реализации логики
        маршрутизации.
      </Paragraph>
      <Paragraph>
        Пример HOC, который добавляет обертку вокруг компонента и выводит
        сообщение о загрузке.
      </Paragraph>
      <CodeBlock>
        {`
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
          `}
      </CodeBlock>
      <Paragraph>
        <Text mark>HOC полезны в следующих случаях:</Text>
      </Paragraph>
      <Paragraph>
        Когда вы хотите разделить и повторно использовать логику между
        несколькими компонентами.
      </Paragraph>
      <Paragraph>
        Для обертывания компонентов, чтобы предоставить им дополнительную
        функциональность, такую как аутентификация, обработка ошибок и т.д.
      </Paragraph>
      <Paragraph>
        Ссылка на документацию по HOC :{' '}
        <Link
          href="https://www.w3schools.com/react/react_hoc.asp"
          target="_blank"
        >
          HOC
        </Link>
      </Paragraph>
    </>
  );
};

export default HocPage;
