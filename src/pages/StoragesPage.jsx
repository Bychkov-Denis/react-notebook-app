import { Typography } from 'antd';
import CodeBlock from '../components/CodeBlock';

const { Text, Title, Link, Paragraph } = Typography;

const StoragesPage = () => {
  return (
    <>
      <Title level={2}>
        Storages (Local Storage, Session Storage, cookies, …)
      </Title>
      <Title level={4}>Local Storage</Title>
      <Paragraph>Что такое Local Storage?</Paragraph>
      <Paragraph>
        <Text strong>Local Storage</Text> — это встроенная возможность браузера
        хранить данные на стороне клиента. Главное его отличие от обычных
        переменных в коде в том, что сохранённые данные остаются на устройстве
        даже после закрытия браузера. Это значит, что ты можешь, например,
        сохранить тему сайта, язык интерфейса или данные формы, чтобы при
        следующем посещении пользователь увидел уже нужные настройки.
      </Paragraph>
      <Paragraph>
        <Text strong>Основные особенности:</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Постоянство</Text>: Данные не удаляются при закрытии
        вкладки или браузера.
      </Paragraph>
      <Paragraph>
        <Text strong>Формат "ключ-значение"</Text>: Каждое значение хранится под
        уникальным ключом.
      </Paragraph>
      <Paragraph>
        <Text strong>Строковый форма</Text>т: Все данные сохраняются как строки,
        поэтому для хранения объектов или массивов приходится преобразовывать их
        в строку через JSON.stringify.
      </Paragraph>
      <Paragraph>
        <Text strong>Основные методы работы с Local Storage</Text>
      </Paragraph>
      <Paragraph>
        Работа с Local Storage осуществляется через глобальный объект
        localStorage, который предоставляет несколько простых методов:
      </Paragraph>
      <Paragraph>1. Сохранение данных:</Paragraph>
      <Paragraph>
        Метод setItem(key, value) позволяет сохранить значение под определённым
        ключом.
      </Paragraph>
      <CodeBlock>
        {`            
localStorage.setItem('userName', 'Павел');
          `}
      </CodeBlock>
      <Paragraph>2. Получение данных:</Paragraph>
      <Paragraph>
        Метод getItem(key) возвращает значение, сохранённое под данным ключом.
      </Paragraph>
      <CodeBlock>
        {`
const userName = localStorage.getItem('userName');
console.log(userName); // Выведет: Павел
          `}
      </CodeBlock>
      <Paragraph>3. Удаление данных:</Paragraph>
      <Paragraph>
        Метод removeItem(key) удаляет конкретный элемент по ключу.
      </Paragraph>
      <CodeBlock>
        {`
localStorage.removeItem('userName');
          `}
      </CodeBlock>
      <Paragraph>4. Очистка всего хранилища:</Paragraph>
      <Paragraph>Метод clear() полностью очищает Local Storage.</Paragraph>
      <CodeBlock>
        {`
            localStorage.clear();
          `}
      </CodeBlock>
      <Paragraph>
        <Text strong>Примеры использования</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Сохранение простого значения:</Text>
      </Paragraph>
      <CodeBlock>
        {`
            localStorage.setItem('userName', 'Павел');
          `}
      </CodeBlock>
      <Paragraph>Получение сохранённого значения:</Paragraph>
      <CodeBlock>{`
          const userName = localStorage.getItem('userName');
console.log("Привет: " + userName});
        `}</CodeBlock>
      <Paragraph>
        <Text strong>Сохранение сложных данных (объектов)</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>
          Если тебе нужно сохранить объект (например, настройки приложения), его
          нужно сначала преобразовать в строку:
        </Text>
      </Paragraph>
      <CodeBlock>{`
          const settings = {
  theme: 'dark',
  fontSize: '16px'
};

// Сохраняем объект как строку JSON
localStorage.setItem('settings', JSON.stringify(settings));

// Получаем объект обратно и парсим его
const savedSettings = JSON.parse(localStorage.getItem('settings'));
console.log(savedSettings); // Выведет объект с настройками
        `}</CodeBlock>
      <Paragraph>
        <Text strong>Когда стоит использовать Local Storage?</Text>
      </Paragraph>
      <Paragraph>
        <Text mark>
          Local Storage идеально подходит для хранения данных, которые
        </Text>
        :
      </Paragraph>
      <Paragraph>
        <Text strong>Не требуют высокой безопасности</Text>: Например, настройки
        интерфейса, выбранные темы, язык или небольшие данные кеша.
      </Paragraph>
      <Paragraph>
        <Text strong>Должны сохраняться между сессиями</Text>: Это удобно, когда
        хочется, чтобы пользователь при повторном заходе видел то же состояние,
        что и в прошлый раз.
      </Paragraph>
      <Paragraph>
        <Text strong>Не требуют частых обновлений</Text>: Так как операции с
        Local Storage выполняются синхронно, если записей станет слишком много
        или они будут слишком объёмными, это может повлиять на
        производительность.
      </Paragraph>
      <Paragraph>
        <Text mark>Важные нюансы</Text>
      </Paragraph>
      <Paragraph>
        Размер хранилища: Большинство браузеров позволяют хранить около 5–10 МБ
        данных. Если тебе нужно хранить большие объёмы, лучше рассмотреть другие
        решения.
      </Paragraph>
      <Paragraph>
        Синхронность: Все операции с Local Storage выполняются синхронно, что
        может замедлить работу при большом объёме данных.
      </Paragraph>
      <Paragraph>
        Безопасность: Данные не шифруются автоматически, поэтому в Local Storage
        не стоит хранить конфиденциальную информацию.
      </Paragraph>
      <Title level={4}>Session Storage</Title>
      <Paragraph>Что такое Session Storage?</Paragraph>
      <Paragraph>
        <Text strong>Session Storage</Text> - это встроенная возможность
        браузера хранить данные на стороне клиента, но с одним важным отличием
        от Local Storage: данные в Session Storage живут только в рамках текущей
        сессии браузера. Это значит, что как только ты закроешь вкладку или
        окно, все сохранённые данные автоматически удаляются.
      </Paragraph>
      <Paragraph>
        Представь себе, что у тебя есть временный блокнот, куда можно записать
        какие-то мысли или промежуточные данные. Как только ты уходишь
        (закрываешь вкладку), блокнот стирается — и это именно то, для чего и
        предназначен Session Storage.
      </Paragraph>
      <Paragraph>
        <Text strong italic>
          Работать с Session Storage очень просто. Он предоставляет тот же набор
          методов, что и Local Storage, только данные в нём живут пока открыта
          вкладка.
        </Text>
      </Paragraph>
      <Paragraph>
        Иногда нужно сохранить промежуточное состояние, например, номер текущей
        страницы в многошаговой форме или статус выполнения задачи. Session
        Storage позволит сохранить такие данные, и они исчезнут, как только
        сессия завершится (закроется вкладка).
      </Paragraph>
      <Paragraph>
        <Text strong>Когда стоит использовать Session Storage?</Text>
      </Paragraph>
      <Paragraph>
        Session Storage отлично подходит для случаев, когда данные нужны только
        в течение текущей сессии. Вот несколько примеров:
      </Paragraph>
      <Paragraph>
        <Text strong>Временные данные форм</Text>: Если пользователь заполняет
        форму и случайно обновляет страницу, можно сохранить введённые данные до
        отправки.
      </Paragraph>
      <Paragraph>
        <Text strong>Состояние интерфейса</Text>: Хранение информации о текущей
        вкладке, открытых панелях или шагах в многошаговом процессе.
      </Paragraph>
      <Paragraph>
        <Text strong>Промежуточное кэширование</Text>: Если тебе нужно
        кешировать данные, которые не должны сохраняться между сессиями
        (например, результаты временных вычислений).
      </Paragraph>
      <Paragraph>
        <Text mark>Важные нюансы</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Временный характер</Text>: Все данные в Session Storage
        удаляются, как только вкладка или окно браузера закрываются. Если тебе
        нужно сохранить данные дольше — используй Local Storage или серверное
        хранилище.
      </Paragraph>
      <Paragraph>
        <Text strong>Формат данных</Text>: Как и в Local Storage, данные
        сохраняются в виде строк. Для объектов или массивов используй
        JSON.stringify при сохранении и JSON.parse при извлечении.
      </Paragraph>
      <Paragraph>
        <Text strong>Синхронность</Text>: Все операции выполняются синхронно,
        поэтому для небольшого объёма данных проблем с производительностью не
        будет.
      </Paragraph>
      <Title level={4}>Cookies</Title>
      <Paragraph>
        <Text>Что такое Cookies?</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Cookies</Text> - это небольшие текстовые файлы, которые
        веб-сервер отправляет браузеру. Браузер сохраняет их и при последующих
        запросах автоматически отправляет серверу. Это позволяет, например,
        отслеживать авторизацию пользователя, сохранять предпочтения или вести
        статистику посещений.
      </Paragraph>
      <Paragraph>
        <Text strong>Как работают Cookies?</Text>
      </Paragraph>
      <Paragraph>
        Каждый раз, когда ты заходишь на сайт, сервер может создать cookie с
        определённым ключом и значением. Затем браузер сохраняет эту информацию,
        и при следующем обращении к тому же серверу браузер передаёт cookie
        обратно. Таким образом, сервер «помнит» тебя даже если ты закрыл браузер
        или перешёл на другую страницу.
      </Paragraph>
      <Paragraph>
        <Text strong>Как управлять Cookies с помощью JavaScript</Text>
      </Paragraph>
      <Paragraph>
        Работа с cookies немного отличается от работы с Local Storage или
        Session Storage, ведь у него нет специальных методов типа setItem или
        getItem. Вместо этого всё происходит через свойство document.cookie.
      </Paragraph>
      <Paragraph>
        <Text strong>Установка Cookies</Text>
      </Paragraph>
      <Paragraph>
        Чтобы установить cookie, нужно присвоить значение свойству
        document.cookie. Вот простой пример:
      </Paragraph>
      <CodeBlock>
        {`
            // Устанавливаем cookie с именем "username" и значением "Павел"
// Задаём дату истечения срока действия cookie и путь, по которому оно действительно
document.cookie = "username=Павел; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
          `}
      </CodeBlock>
      <Paragraph>
        <Text strong>Чтение Cookies</Text>
      </Paragraph>
      <Paragraph>
        Для получения всех cookies достаточно вывести значение document.cookie.
        Это вернёт строку, где все cookies разделены точкой с запятой:
      </Paragraph>
      <CodeBlock>{`
      console.log(document.cookie);
// Может вывести: "username=Павел; theme=dark"
      `}</CodeBlock>
      <Paragraph>
        <Text strong>Удаление Cookies</Text>
      </Paragraph>
      <Paragraph>
        Удалить cookie можно, установив для него дату истечения в прошлом:
      </Paragraph>
      <CodeBlock>
        {`
            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
          `}
      </CodeBlock>
      <Paragraph>
        <Text mark>Преимущества и недостатки Cookies</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Преимущества:</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Автоматическая передача</Text>: Cookies отправляются
        серверу с каждым запросом, что удобно для аутентификации и отслеживания
        сессий.
      </Paragraph>
      <Paragraph>
        <Text strong>Широкая поддержка</Text>: Практически все браузеры работают
        с cookies, и многие серверные технологии их используют.
      </Paragraph>
      <Paragraph>
        <Text strong>Недостатки:</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Ограничение по размеру</Text>: Обычно один cookie может
        содержать не более 4КБ данных, а их общее количество на домен тоже
        ограничено.
      </Paragraph>
      <Paragraph>
        <Text strong>Скорость запросов</Text>: Поскольку cookies отправляются с
        каждым HTTP-запросом, их избыточное использование может замедлить работу
        сайта.
      </Paragraph>
      <Paragraph>
        <Text strong>Безопасность</Text>: Если cookie не защищены (например, не
        отмечены как HttpOnly или Secure), злоумышленники могут попытаться их
        перехватить или изменить.
      </Paragraph>
      <Paragraph>
        <Text strong>Когда стоит использовать Cookies?</Text>
      </Paragraph>
      <Paragraph>
        Cookies отлично подходят для случаев, когда необходимо:
      </Paragraph>
      <Paragraph>
        <Text strong>Отслеживать сессии</Text>: Например, хранить идентификатор
        пользователя для проверки его авторизации.
      </Paragraph>
      <Paragraph>
        <Text strong>Сохранять настройки</Text>: Например, язык или тему
        интерфейса, если эти данные важны для серверной логики.
      </Paragraph>
      <Paragraph>
        <Text strong>Аналитики</Text>: Для ведения статистики посещений и
        поведения пользователей.
      </Paragraph>
      <Paragraph>
        Ссылка на документацию по Local Storage и Session Storage:{' '}
        <Link href="https://learn.javascript.ru/localstorage" target="_blank">
          Local Storage and Session Storage
        </Link>
      </Paragraph>
      <Paragraph>
        Ссылка на документацию по Cookies:{' '}
        <Link href="https://learn.javascript.ru/cookie" target="_blank">
          Cookies
        </Link>
      </Paragraph>
    </>
  );
};

export default StoragesPage;
