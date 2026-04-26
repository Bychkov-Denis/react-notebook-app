import { Typography } from 'antd';
import CodeBlock from './../components/CodeBlock';

const { Title, Paragraph, Text, Link } = Typography;

const RoutingPage = () => {
  return (
    <>
      <Title level={2}>Роутинг в React</Title>
      <Paragraph>
        Основная цель роутинга в веб-приложениях заключается в том, чтобы
        позволить пользователям перемещаться по различным частям приложения{' '}
        <Text strong mark>
          БЕЗ ПЕРЕЗАГРУЗКИ страницы
        </Text>
        . Вместо того, чтобы каждый раз отправлять запрос на сервер и загружать
        новую страницу, роутинг позволяет динамически обновлять только
        необходимые компоненты или данные в соответствии с выбранным маршрутом.
      </Paragraph>
      <Paragraph>
        Кроме того, роутинг обеспечивает возможность передачи параметров через
        URL, что позволяет приложению динамически адаптироваться к разным
        условиям и сценариям использования. Например, приложение может
        отображать разные данные или компоненты на основе параметров маршрута,
        таких как идентификатор пользователя или идентификатор записи.
      </Paragraph>
      <Title level={4}>Основные компоненты</Title>
      <Paragraph>
        <Text strong mark>
          BrowserRouter:
        </Text>{' '}
        Этот компонент оборачивает ваше приложение и использует HTML5 историю
        для управления маршрутизацией:
      </Paragraph>
      <CodeBlock>{`
          import { BrowserRouter } from 'react-router-dom';  

function App() {  
  return (  
    <BrowserRouter>  
      <YourRoutes />  
    </BrowserRouter>  
  );  
}
        `}</CodeBlock>
      <Paragraph>
        <Text strong mark>
          Routes:
        </Text>{' '}
        Этот компонент используется для определения группы маршрутов. Он
        является контейнером для компонентов Route:
      </Paragraph>
      <CodeBlock>
        {`
            import { Routes, Route } from 'react-router-dom';  

function YourRoutes() {  
  return (  
    <Routes>  
      <Route path="/" element={<Home />} />  
      <Route path="/about" element={<About />} />  
    </Routes>  
  );  
}
          `}
      </CodeBlock>
      <Paragraph>
        <Text strong mark>
          Route:
        </Text>{' '}
        Этот компонент определяет отдельный маршрут. Атрибут path указывает URL,
        а element — компонент, который будет рендериться.
      </Paragraph>
      <CodeBlock>{`
          <Route path="/contact" element={<Contact />} />
        `}</CodeBlock>
      <Paragraph>
        <Text strong mark>
          Link:
        </Text>{' '}
        Этот компонент используется для навигации между маршрутами. Он заменяет
        теги {`<a>`} в React-приложении.
      </Paragraph>
      <CodeBlock>
        {`
            import { Link } from 'react-router-dom';  

function Navigation() {  
  return (  
    <nav>  
      <Link to="/">Home</Link>  
      <Link to="/about">About</Link>  
      <Link to="/contact">Contact</Link>  
    </nav>  
  );  
}
          `}
      </CodeBlock>
      <Paragraph>
        <Text strong mark>
          Outlet:
        </Text>{' '}
        Этот компонент используется внутри родительского маршрута для указания
        места, где должны отрисовываться дочерние компоненты. Он позволяет
        создавать вложенные макеты (layouts), сохраняя общие элементы интерфейса
        (например, хэдер, футер, боковое меню) при переключении между страницами
        внутри.
      </Paragraph>
      <CodeBlock>
        {`
            import { Outlet, Link } from "react-router-dom";

// Компонент Layout
function Dashboard() {
  return (
    <div>
      <nav>Общая навигация</nav>
      {/* Дочерние компоненты будут отображаться здесь */}
      <Outlet />
      <footer>Футер</footer>
    </div>
  );
}

// Конфигурация маршрутов
<Routes>
  <Route path="/" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>

          `}
      </CodeBlock>
      <Title level={4}>Основные хуки</Title>
      <Paragraph>
        <Text strong mark>
          useParams:
        </Text>{' '}
        Используется для извлечения параметров URL в компонентах маршрутов.
      </Paragraph>
      <CodeBlock>
        {`
            // App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

// UserProfile.js
import { useParams } from 'react-router-dom';

function UserProfile() {
  // Extract userId from the URL /user/123
  const { userId } = useParams(); 

  return <div>Viewing profile for User ID: {userId}</div>;
}

          `}
      </CodeBlock>
      <Paragraph>
        <Text strong mark>
          useNavigate:
        </Text>{' '}
        Позволяет программно изменять маршрут. Это может быть полезно для
        навигации после выполнения действий.
      </Paragraph>
      <CodeBlock>
        {`
            import { useNavigate } from 'react-router-dom';  

function Login() {  
  const navigate = useNavigate();  

  const handleLogin = () => {  
    // Логика входа...  
    navigate('/dashboard'); // Перейти на страницу кабинета после входа  
  };  

  return <button onClick={handleLogin}>Login</button>;  
}
          `}
      </CodeBlock>
      <Paragraph>
        <Text strong mark>
          useLocation:
        </Text>{' '}
        Предоставляет информацию о текущем URL, такой как pathname и состояние.
      </Paragraph>
      <CodeBlock>{`
          import { useLocation } from 'react-router-dom';  

function CurrentLocation() {  
  const location = useLocation();  

  return <div>Current location: {location.pathname}</div>;  
}
        `}</CodeBlock>
      <Paragraph>
        <Text strong mark>
          useRoutes:
        </Text>{' '}
        Позволяет определять маршруты в виде массива, что может быть удобно для
        управления маршрутами в более сложных приложениях.
      </Paragraph>
      <CodeBlock>
        {`
          import { useRoutes } from 'react-router-dom';  

function AppRoutes() {  
  const routes = [  
    { path: '/', element: <Home /> },  
    { path: '/about', element: <About /> },  
    { path: '/contact', element: <Contact /> },  
  ];  

  return useRoutes(routes);  
}
        `}
      </CodeBlock>
      <Paragraph>
        <Text strong mark>
          UseSearchParams:
        </Text>{' '}
        используется для извлечения и изменения параметров строки запроса.
      </Paragraph>
      <CodeBlock>{`
          import { useSearchParams } from 'react-router-dom';  

function SearchPage() {  
  // Хук для работы с параметрами поискового запроса  
  const [searchParams, setSearchParams] = useSearchParams();  

  // Извлекаем параметр 'query' из поисковых параметров  
  const query = searchParams.get('query') || '';  

  const handleSearch = (event) => {  
    event.preventDefault();  
    // Изменяем параметр 'query' в URL  
    setSearchParams({ query: event.target.searchInput.value });  
  };  

  return (  
    <div>  
      <h1>Search Page</h1>  
      <form onSubmit={handleSearch}>  
        <input  
          type="text"  
          name="searchInput"  
          defaultValue={query} // Устанавливаем значение по умолчанию для инпута  
        />  
        <button type="submit">Search</button>  
      </form>  
      <p>Current query: {query}</p>  
    </div>  
  );  
}
        `}</CodeBlock>
      <Paragraph>
        Ссылка на официальную документацию React Router Dom:{' '}
        <Link href="https://reactrouter.com/home" target="_blank">
          React Router Dom
        </Link>
      </Paragraph>
    </>
  );
};

export default RoutingPage;
