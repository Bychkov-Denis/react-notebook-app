import{j as e,T as l}from"./index-Dq-KXQ8K.js";import{C as i}from"./CodeBlock-DOgBE5sh.js";const{Title:n,Text:r,Paragraph:s,Link:j}=l,c=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{level:2,children:"Структура проекта. Modules VS FSD"}),e.jsx(s,{children:e.jsx(r,{strong:!0,children:"В React нет жёсткой структуры, но есть рекомендации"})}),e.jsx(s,{children:"В отличие от фреймворков (Next.js, Angular), React не диктует конкретную структуру проекта. Ты сам решаешь, как организовать код, но есть популярные подходы, которые помогают избежать хаоса."}),e.jsx(s,{children:"Ниже будет разобрано два похода:"}),e.jsx(s,{children:e.jsx(r,{strong:!0,children:"Modules (разделение по страницам и переиспользуемым компонентам)."})}),e.jsx(s,{children:e.jsx(r,{strong:!0,children:"FSD (Feature-Sliced Design) (разделение на уровни: app, pages, features, entities, shared)."})}),e.jsx(s,{children:e.jsx(r,{strong:!0,children:"Modules vs FSD – в чём разница?"})}),e.jsx(s,{children:e.jsx(r,{strong:!0,mark:!0,children:"Modules:"})}),e.jsx(s,{children:"1. Подходит для маленьких и средних проектов."}),e.jsx(s,{children:"2. Делит код на pages (страницы) и components (переиспользуемые компоненты)."}),e.jsx(s,{children:"3. Простая структура, легко освоить."}),e.jsx(s,{children:"4. Может появиться запутанная архитектура при росте проекта."}),e.jsx(s,{children:e.jsx(r,{strong:!0,mark:!0,children:"FSD (Feature-Sliced Design)"})}),e.jsx(s,{children:"1. Подходит для больших, сложных проектов."}),e.jsx(s,{children:"2. Разделяет код по логическим уровням (features, entities, shared)."}),e.jsx(s,{children:"3. Требует продуманного подхода."}),e.jsx(s,{children:"4. Облегчает поддержку и масштабирование."}),e.jsx(s,{children:"👉 Если ты делаешь небольшой проект (лендинг, блог, ToDo List) – Modules."}),e.jsx(s,{children:"👉 Если проект большой (маркетплейс, CRM, сложная админка) – FSD."}),e.jsx(n,{level:4,children:"Modules"}),e.jsx(s,{children:"📌 Как устроено?"}),e.jsx(s,{children:"Код делится на pages (страницы) и components (переиспользуемые UI-элементы)."}),e.jsx(s,{children:"Логика страницы собирается в одном месте (в pages)."}),e.jsx(s,{children:"Мелкие компоненты (кнопки, инпуты) хранятся в components."}),e.jsx(s,{children:"📂 Структура проекта: "}),e.jsx(i,{children:`
          /src
 ├── /pages       # Страницы приложения
 │   ├── Home.jsx
 │   ├── Profile.jsx
 ├── /components  # Переиспользуемые UI-компоненты
 │   ├── Button.jsx
 │   ├── Input.jsx
 ├── /hooks       # Пользовательские хуки
 │   ├── useAuth.js
 │   ├── useFetch.js
 ├── /utils       # Утилиты (общие вспомогательные функции)
 │   ├── formatDate.js
 │   ├── debounce.js
 ├── /helpers     # Хелперы (функции, связанные с конкретными модулями)
 │   ├── authHelper.js
 │   ├── validationHelper.js
 ├── /redux       # Redux-хранилище и слайсы
 │   ├── store.js
 │   ├── authSlice.js
 │   ├── userSlice.js
 ├── /api         # Файлы для работы с сервером (запросы к API)
 │   ├── apiConfig.js
 │   ├── authApi.js
 │   ├── userApi.js
 ├── App.jsx      # Главный компонент
 ├── index.js     # Точка входа
        `}),e.jsx(s,{children:"pages — находятся страницы (Home, Profile) → они импортируют нужные компоненты."}),e.jsx(s,{children:"components — хранятся общие элементы UI (Button, Input)."}),e.jsx(s,{children:"hooks — пользовательские хуки, которые можно переиспользовать в проекте."}),e.jsx(s,{children:"utils – для чистых функций, которые не зависят от React (например, formatDate, debounce)."}),e.jsx(s,{children:"helpers – для функций-помощников, которые связаны с конкретными модулями (authHelper, validationHelper)."}),e.jsx(s,{children:"redux – хранилище состояния, слайсы (store.js, authSlice.js)."}),e.jsx(s,{children:"api – для работы с бэкендом, запросов к серверу (authApi.js, userApi.js)."}),e.jsx(n,{level:4,children:"FSD"}),e.jsx(s,{children:"📌 Как устроено?"}),e.jsx(s,{children:"Код разделён на логические уровни."}),e.jsx(s,{children:"Чётко разделены бизнес-логика, UI и API-запросы."}),e.jsx(s,{children:"Удобно работать в команде — каждый знает, где лежит код."}),e.jsx(s,{children:"📂 Структура проекта (FSD):"}),e.jsx(i,{children:`
            /src
 ├── /app        # Конфигурация приложения (роутинг, провайдеры)
 │   ├── App.jsx
 │   ├── routes.jsx
 ├── /pages      # Страницы (собирают features и entities)
 │   ├── HomePage.jsx
 │   ├── ProfilePage.jsx
 ├── /features   # Фичи (авторизация, поиск, корзина)
 │   ├── /auth
 │   │   ├── LoginForm.jsx
 │   │   ├── model.js  # Логика авторизации
 ├── /entities   # Бизнес-логика (пользователь, товары)
 │   ├── /user
 │   │   ├── UserCard.jsx
 │   │   ├── userModel.js
 ├── /shared     # Общие UI-компоненты (кнопки, инпуты, утилиты)
 │   ├── Button.jsx
 │   ├── Input.jsx
          `}),e.jsx(s,{children:"app – отвечает за настройку проекта (роутинг, провайдеры)."}),e.jsx(s,{children:"pages – собирает страницы из готовых фич."}),e.jsx(s,{children:"features – фичи приложения (авторизация, поиск, фильтры)."}),e.jsx(s,{children:"entities – бизнес-логика (пользователь, товары)."}),e.jsx(s,{children:"shared – переиспользуемые компоненты (кнопки, формы, утилиты)."}),e.jsxs(s,{children:["Ссылка на документацию по FSD:"," ",e.jsx(j,{href:"https://feature-sliced.design/ru/docs/get-started/overview",target:"_blank",children:"FSD"})]}),e.jsx(n,{level:4,children:"Доп. файлы и папки, которые требуют внимания"}),e.jsx(s,{children:"package.json: файл, содержащий информацию о зависимостях твоего проекта, скрипты сборки и другую конфигурацию проекта."}),e.jsx(s,{children:"package-lock.json: файл, создаваемый при установке пакетов с помощью менеджера пакетов npm. Он используется для фиксации версий всех установленных зависимостей в проекте."}),e.jsx(s,{children:"node_modules: является местом, где хранятся все зависимости (библиотеки). Когда ты устанавливаешь новую зависимость в своем проекте с помощью менеджера пакетов, такого как npm или yarn, эти пакеты загружаются и устанавливаются в папку node_modules. Так вот, папка node_modules служит именно для хранения всех этих зависимостей. !!!ЗАПОМНИ!! Ее не нужно заливать на github и включать в отслеживание git."}),e.jsx(s,{children:".env: файл, в котором можно задать переменные окружения для конфигурации приложения, такие как ключи API или настройки среды выполнения."}),e.jsx(s,{children:".gitignore: файл, определяющий, какие файлы и папки должны быть игнорированы Git при коммите и публикации кода."}),e.jsx(s,{children:"README.md: файл с описанием проекта, инструкциями по установке и запуску приложения, а также другой полезной информацией для разработчиков и пользователей."})]});export{c as default};
