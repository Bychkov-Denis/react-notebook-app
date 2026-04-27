import{j as e,T as s}from"./index-Dq-KXQ8K.js";import{C as o}from"./CodeBlock-DOgBE5sh.js";const{Title:n,Paragraph:r,Text:t,Link:u}=s,c=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{level:2,children:"Роутинг в React"}),e.jsxs(r,{children:["Основная цель роутинга в веб-приложениях заключается в том, чтобы позволить пользователям перемещаться по различным частям приложения"," ",e.jsx(t,{strong:!0,mark:!0,children:"БЕЗ ПЕРЕЗАГРУЗКИ страницы"}),". Вместо того, чтобы каждый раз отправлять запрос на сервер и загружать новую страницу, роутинг позволяет динамически обновлять только необходимые компоненты или данные в соответствии с выбранным маршрутом."]}),e.jsx(r,{children:"Кроме того, роутинг обеспечивает возможность передачи параметров через URL, что позволяет приложению динамически адаптироваться к разным условиям и сценариям использования. Например, приложение может отображать разные данные или компоненты на основе параметров маршрута, таких как идентификатор пользователя или идентификатор записи."}),e.jsx(n,{level:4,children:"Основные компоненты"}),e.jsxs(r,{children:[e.jsx(t,{strong:!0,mark:!0,children:"BrowserRouter:"})," ","Этот компонент оборачивает ваше приложение и использует HTML5 историю для управления маршрутизацией:"]}),e.jsx(o,{children:`
          import { BrowserRouter } from 'react-router-dom';  

function App() {  
  return (  
    <BrowserRouter>  
      <YourRoutes />  
    </BrowserRouter>  
  );  
}
        `}),e.jsxs(r,{children:[e.jsx(t,{strong:!0,mark:!0,children:"Routes:"})," ","Этот компонент используется для определения группы маршрутов. Он является контейнером для компонентов Route:"]}),e.jsx(o,{children:`
            import { Routes, Route } from 'react-router-dom';  

function YourRoutes() {  
  return (  
    <Routes>  
      <Route path="/" element={<Home />} />  
      <Route path="/about" element={<About />} />  
    </Routes>  
  );  
}
          `}),e.jsxs(r,{children:[e.jsx(t,{strong:!0,mark:!0,children:"Route:"})," ","Этот компонент определяет отдельный маршрут. Атрибут path указывает URL, а element — компонент, который будет рендериться."]}),e.jsx(o,{children:`
          <Route path="/contact" element={<Contact />} />
        `}),e.jsxs(r,{children:[e.jsx(t,{strong:!0,mark:!0,children:"Link:"})," ","Этот компонент используется для навигации между маршрутами. Он заменяет теги ","<a>"," в React-приложении."]}),e.jsx(o,{children:`
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
          `}),e.jsxs(r,{children:[e.jsx(t,{strong:!0,mark:!0,children:"Outlet:"})," ","Этот компонент используется внутри родительского маршрута для указания места, где должны отрисовываться дочерние компоненты. Он позволяет создавать вложенные макеты (layouts), сохраняя общие элементы интерфейса (например, хэдер, футер, боковое меню) при переключении между страницами внутри."]}),e.jsx(o,{children:`
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

          `}),e.jsx(n,{level:4,children:"Основные хуки"}),e.jsxs(r,{children:[e.jsx(t,{strong:!0,mark:!0,children:"useParams:"})," ","Используется для извлечения параметров URL в компонентах маршрутов."]}),e.jsx(o,{children:`
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

          `}),e.jsxs(r,{children:[e.jsx(t,{strong:!0,mark:!0,children:"useNavigate:"})," ","Позволяет программно изменять маршрут. Это может быть полезно для навигации после выполнения действий."]}),e.jsx(o,{children:`
            import { useNavigate } from 'react-router-dom';  

function Login() {  
  const navigate = useNavigate();  

  const handleLogin = () => {  
    // Логика входа...  
    navigate('/dashboard'); // Перейти на страницу кабинета после входа  
  };  

  return <button onClick={handleLogin}>Login</button>;  
}
          `}),e.jsxs(r,{children:[e.jsx(t,{strong:!0,mark:!0,children:"useLocation:"})," ","Предоставляет информацию о текущем URL, такой как pathname и состояние."]}),e.jsx(o,{children:`
          import { useLocation } from 'react-router-dom';  

function CurrentLocation() {  
  const location = useLocation();  

  return <div>Current location: {location.pathname}</div>;  
}
        `}),e.jsxs(r,{children:[e.jsx(t,{strong:!0,mark:!0,children:"useRoutes:"})," ","Позволяет определять маршруты в виде массива, что может быть удобно для управления маршрутами в более сложных приложениях."]}),e.jsx(o,{children:`
          import { useRoutes } from 'react-router-dom';  

function AppRoutes() {  
  const routes = [  
    { path: '/', element: <Home /> },  
    { path: '/about', element: <About /> },  
    { path: '/contact', element: <Contact /> },  
  ];  

  return useRoutes(routes);  
}
        `}),e.jsxs(r,{children:[e.jsx(t,{strong:!0,mark:!0,children:"UseSearchParams:"})," ","используется для извлечения и изменения параметров строки запроса."]}),e.jsx(o,{children:`
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
        `}),e.jsxs(r,{children:["Ссылка на официальную документацию React Router Dom:"," ",e.jsx(u,{href:"https://reactrouter.com/home",target:"_blank",children:"React Router Dom"})]})]});export{c as default};
