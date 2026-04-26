import { Typography } from 'antd';
import CodeBlock from './../components/CodeBlock';

const { Title, Text, Paragraph, Link } = Typography;

const ProjectStructurePage = () => {
  return (
    <>
      <Title level={2}>Структура проекта. Modules VS FSD</Title>
      <Paragraph>
        <Text strong>В React нет жёсткой структуры, но есть рекомендации</Text>
      </Paragraph>
      <Paragraph>
        В отличие от фреймворков (Next.js, Angular), React не диктует конкретную
        структуру проекта. Ты сам решаешь, как организовать код, но есть
        популярные подходы, которые помогают избежать хаоса.
      </Paragraph>
      <Paragraph>Ниже будет разобрано два похода:</Paragraph>
      <Paragraph>
        <Text strong>
          Modules (разделение по страницам и переиспользуемым компонентам).
        </Text>
      </Paragraph>
      <Paragraph>
        <Text strong>
          FSD (Feature-Sliced Design) (разделение на уровни: app, pages,
          features, entities, shared).
        </Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Modules vs FSD – в чём разница?</Text>
      </Paragraph>
      <Paragraph>
        <Text strong mark>
          Modules:
        </Text>
      </Paragraph>
      <Paragraph>1. Подходит для маленьких и средних проектов.</Paragraph>
      <Paragraph>
        2. Делит код на pages (страницы) и components (переиспользуемые
        компоненты).
      </Paragraph>
      <Paragraph>3. Простая структура, легко освоить.</Paragraph>
      <Paragraph>
        4. Может появиться запутанная архитектура при росте проекта.
      </Paragraph>
      <Paragraph>
        <Text strong mark>
          FSD (Feature-Sliced Design)
        </Text>
      </Paragraph>
      <Paragraph>1. Подходит для больших, сложных проектов.</Paragraph>
      <Paragraph>
        2. Разделяет код по логическим уровням (features, entities, shared).
      </Paragraph>
      <Paragraph>3. Требует продуманного подхода.</Paragraph>
      <Paragraph>4. Облегчает поддержку и масштабирование.</Paragraph>
      <Paragraph>
        👉 Если ты делаешь небольшой проект (лендинг, блог, ToDo List) –
        Modules.
      </Paragraph>
      <Paragraph>
        👉 Если проект большой (маркетплейс, CRM, сложная админка) – FSD.
      </Paragraph>
      <Title level={4}>Modules</Title>
      <Paragraph>📌 Как устроено?</Paragraph>
      <Paragraph>
        Код делится на pages (страницы) и components (переиспользуемые
        UI-элементы).
      </Paragraph>
      <Paragraph>Логика страницы собирается в одном месте (в pages).</Paragraph>
      <Paragraph>
        Мелкие компоненты (кнопки, инпуты) хранятся в components.
      </Paragraph>
      <Paragraph>📂 Структура проекта: </Paragraph>
      <CodeBlock>{`
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
        `}</CodeBlock>
      <Paragraph>
        pages — находятся страницы (Home, Profile) → они импортируют нужные
        компоненты.
      </Paragraph>
      <Paragraph>
        components — хранятся общие элементы UI (Button, Input).
      </Paragraph>
      <Paragraph>
        hooks — пользовательские хуки, которые можно переиспользовать в проекте.
      </Paragraph>
      <Paragraph>
        utils – для чистых функций, которые не зависят от React (например,
        formatDate, debounce).
      </Paragraph>
      <Paragraph>
        helpers – для функций-помощников, которые связаны с конкретными модулями
        (authHelper, validationHelper).
      </Paragraph>
      <Paragraph>
        redux – хранилище состояния, слайсы (store.js, authSlice.js).
      </Paragraph>
      <Paragraph>
        api – для работы с бэкендом, запросов к серверу (authApi.js,
        userApi.js).
      </Paragraph>
      <Title level={4}>FSD</Title>
      <Paragraph>📌 Как устроено?</Paragraph>
      <Paragraph>Код разделён на логические уровни.</Paragraph>
      <Paragraph>Чётко разделены бизнес-логика, UI и API-запросы.</Paragraph>
      <Paragraph>
        Удобно работать в команде — каждый знает, где лежит код.
      </Paragraph>
      <Paragraph>📂 Структура проекта (FSD):</Paragraph>
      <CodeBlock>
        {`
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
          `}
      </CodeBlock>
      <Paragraph>
        app – отвечает за настройку проекта (роутинг, провайдеры).
      </Paragraph>
      <Paragraph>pages – собирает страницы из готовых фич.</Paragraph>
      <Paragraph>
        features – фичи приложения (авторизация, поиск, фильтры).
      </Paragraph>
      <Paragraph>entities – бизнес-логика (пользователь, товары).</Paragraph>
      <Paragraph>
        shared – переиспользуемые компоненты (кнопки, формы, утилиты).
      </Paragraph>
      <Paragraph>
        Ссылка на документацию по FSD:{' '}
        <Link
          href="https://feature-sliced.design/ru/docs/get-started/overview"
          target="_blank"
        >
          FSD
        </Link>
      </Paragraph>
      <Title level={4}>Доп. файлы и папки, которые требуют внимания</Title>
      <Paragraph>
        package.json: файл, содержащий информацию о зависимостях твоего проекта,
        скрипты сборки и другую конфигурацию проекта.
      </Paragraph>
      <Paragraph>
        package-lock.json: файл, создаваемый при установке пакетов с помощью
        менеджера пакетов npm. Он используется для фиксации версий всех
        установленных зависимостей в проекте.
      </Paragraph>
      <Paragraph>
        node_modules: является местом, где хранятся все зависимости
        (библиотеки). Когда ты устанавливаешь новую зависимость в своем проекте
        с помощью менеджера пакетов, такого как npm или yarn, эти пакеты
        загружаются и устанавливаются в папку node_modules. Так вот, папка
        node_modules служит именно для хранения всех этих зависимостей.
        !!!ЗАПОМНИ!! Ее не нужно заливать на github и включать в отслеживание
        git.
      </Paragraph>
      <Paragraph>
        .env: файл, в котором можно задать переменные окружения для конфигурации
        приложения, такие как ключи API или настройки среды выполнения.
      </Paragraph>
      <Paragraph>
        .gitignore: файл, определяющий, какие файлы и папки должны быть
        игнорированы Git при коммите и публикации кода.
      </Paragraph>
      <Paragraph>
        README.md: файл с описанием проекта, инструкциями по установке и запуску
        приложения, а также другой полезной информацией для разработчиков и
        пользователей.
      </Paragraph>
    </>
  );
};

export default ProjectStructurePage;
