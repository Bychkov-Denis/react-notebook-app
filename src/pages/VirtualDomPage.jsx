import { Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const VirtualDomPage = () => {
  return (
    <>
      <Title level={2}>VirtualDOM. Reconciliation. Fiber</Title>
      <Paragraph>
        <Text strong>Что такое DOM? </Text>
      </Paragraph>
      <Paragraph>{`Давай начнем с основ. DOM - это сокращение от "Document Object Model" (объектная модель документа). Когда ты открываешь веб-страницу в браузере, браузер создает структуру документа, которую можно представить в виде дерева элементов. Эти элементы - это HTML-теги, например, <div>, <p>, <h1> и другие. DOM позволяет нам манипулировать этой структурой, изменять содержимое, стили, добавлять и удалять элементы.`}</Paragraph>
      <Paragraph>
        Теперь представь, что у тебя есть большое React-приложение с множеством
        компонентов и элементов. Каждый раз, когда происходит изменение данных в
        приложении, React должен обновить DOM, чтобы отобразить эти изменения на
        странице. Но вместо того, чтобы непосредственно вносить изменения в
        реальный DOM, React использует виртуальный DOM.
      </Paragraph>
      <Paragraph>
        <Text strong>Виртуальный DOM</Text> - это промежуточное представление
        DOM в памяти компьютера. React создает виртуальное дерево элементов,
        которое точно соответствует текущему состоянию компонентов. Затем React
        сравнивает это виртуальное дерево с реальным DOM и определяет, какие
        изменения необходимо внести.
      </Paragraph>
      <Paragraph>
        <Text strong>Почему это важно?</Text>
      </Paragraph>
      <Paragraph>
        1️⃣ Эффективность – React обновляет только изменённые элементы, снижая
        нагрузку на браузер и ускоряя рендер.
      </Paragraph>
      <Paragraph>
        2️⃣ Удобство – Ты работаешь с компонентами, а React сам оптимизирует
        обновления.
      </Paragraph>
      <Paragraph>
        3️⃣ Переносимость – React одинаково работает во всех браузерах, избавляя
        от проблем совместимости.
      </Paragraph>
      <Paragraph>
        <Text strong>
          В итоге, использование виртуального DOM позволяет React быть
          эффективной, удобной в использовании библиотекой.{' '}
        </Text>
      </Paragraph>
      <Title level={4}>Reconciliation</Title>
      <Paragraph>
        [Reconciliation](https://www.kramarenko.com.ua/post/what_is_reconciliation)
        – это процесс, при котором React сравнивает предыдущее и новое состояние
        компонента, определяя минимальный набор изменений, который нужно внести
        в пользовательский интерфейс.
      </Paragraph>
      <Paragraph>
        <Text strong>Зачем это нужно?</Text>
      </Paragraph>
      <Paragraph>
        Представь, что у тебя есть React-компонент, который отображает данные.
        Когда пользователь вводит новый текст или получает обновления с сервера,
        React должен обновить интерфейс, но без лишних перерисовок. Именно этим
        занимается Reconciliation – он делает обновления максимально
        эффективными.
      </Paragraph>
      <Paragraph>
        <Text strong>Как работает Reconciliation?</Text>
      </Paragraph>
      <Paragraph>1️⃣ Обновление состояния</Paragraph>
      <Paragraph>
        Когда меняется state или props, React запускает процесс Reconciliation.
      </Paragraph>
      <Paragraph>
        Он создаёт новое Virtual DOM-дерево для текущего состояния.
      </Paragraph>
      <Paragraph>2️⃣ Сравнение элементов (Diffing Algorithm)</Paragraph>
      <Paragraph>
        React построчно сравнивает новый Virtual DOM со старым.
      </Paragraph>
      <Paragraph>Если элемент не изменился, он остаётся нетронутым.</Paragraph>
      <Paragraph>
        Если изменился текст или пропсы – React обновляет только нужную часть.
      </Paragraph>
      <Paragraph>
        Если элемент удалён или добавлен, React пересоздаёт его.
      </Paragraph>
      <Paragraph>3️⃣ Обновление реального DOM</Paragraph>
      <Paragraph>
        React находит разницу (diff) между старыми и новыми элементами.
      </Paragraph>
      <Paragraph>
        Обновляет только изменённые части DOM, избегая ненужных ререндеров.
      </Paragraph>
      <Paragraph>
        <Text strong>Почему это важно?</Text>
      </Paragraph>
      <Paragraph>
        ✅ Быстрее, чем обновлять весь DOM – браузер не делает лишнюю работу.
      </Paragraph>
      <Paragraph>
        ✅ Меньше лагов и тормозов – особенно в сложных интерфейсах.
      </Paragraph>
      <Paragraph>
        ✅ Гибкость – React можно использовать в мобильных и веб-приложениях без
        проблем с производительностью.
      </Paragraph>
      <Paragraph>
        <Text strong mark>
          Вывод: Reconciliation делает React молниеносным, потому что он не
          перерисовывает весь интерфейс, а только изменённые элементы. 🚀
        </Text>
      </Paragraph>
      <Title level={4}>Fiber</Title>
      <Paragraph>
        Когда React только появился, он был быстрым, но с ростом проектов старый
        механизм обновлений начал тормозить.
      </Paragraph>
      <Paragraph>
        Представь, что у тебя огромное приложение, где обновляются и список
        товаров, и форма ввода, и анимация. Если обновлять всё сразу – интерфейс
        может замереть на мгновение, создавая неприятные лаги.
      </Paragraph>
      <Paragraph>
        Чтобы решить эту проблему, React представил Fiber – новый движок
        рендеринга, который сделал обновления плавными, предсказуемыми и
        суперэффективными.
      </Paragraph>
      <Paragraph>
        <Text strong>Что изменилось с Fiber?</Text>
      </Paragraph>
      <Paragraph>🔹 Раньше (до Fiber)</Paragraph>
      <Paragraph>React обновлял весь Virtual DOM за один проход.</Paragraph>
      <Paragraph>
        Если обновление занимало слишком много времени – интерфейс подвисал.
      </Paragraph>
      <Paragraph>
        Нельзя было приостанавливать или отменять обновления – React всегда
        доводил их до конца.
      </Paragraph>
      <Paragraph>🔹 Теперь (с Fiber)</Paragraph>
      <Paragraph>
        Обновления разбиваются на части – React может приостанавливать рендеринг
        и продолжать его позже.
      </Paragraph>
      <Paragraph>
        Важные обновления в приоритете – ввод в input и клики обновляются
        раньше, чем менее важные изменения.
      </Paragraph>
      <Paragraph>
        Браузер больше не замирает – React даёт ему время на анимации, прокрутку
        и другие задачи.
      </Paragraph>
      <Paragraph>
        <Text strong>Как Fiber делает React быстрее?</Text>
      </Paragraph>
      <Paragraph>1️⃣ Разбивает рендер на маленькие задачи</Paragraph>
      <Paragraph>
        Раньше обновления проходили одним большим блоком, но теперь React
        обновляет интерфейс частями.
      </Paragraph>
      <Paragraph>📌 Пример:</Paragraph>
      <Paragraph>
        Ты печатаешь в input, а в это время рендерится тяжёлая таблица.
      </Paragraph>
      <Paragraph>
        React приостанавливает рендер таблицы, обновляет input (потому что это
        важнее).
      </Paragraph>
      <Paragraph>
        Затем, когда браузер готов, он доделывает рендер таблицы.
      </Paragraph>
      <Paragraph>2️⃣ Приоритет обновлений</Paragraph>
      <Paragraph>
        <Text strong>
          Не все изменения одинаково важны. React теперь сам решает, что
          обновлять в первую очередь.
        </Text>
      </Paragraph>
      <Paragraph>🔹 Высокий приоритет (React обновляет мгновенно):</Paragraph>
      <Paragraph>✅ Ввод текста в input</Paragraph>
      <Paragraph>✅ Клики на кнопки</Paragraph>
      <Paragraph>✅ Анимации</Paragraph>
      <Paragraph>🔹 Средний приоритет (React обновляет чуть позже):</Paragraph>
      <Paragraph>✅ Данные, загруженные с сервера</Paragraph>
      <Paragraph>✅ Изменения в состоянии приложения</Paragraph>
      <Paragraph>🔹 Низкий приоритет (React может подождать):</Paragraph>
      <Paragraph>✅ Фоновая подгрузка новых элементов</Paragraph>
      <Paragraph>✅ Обновление неактивных вкладок</Paragraph>
      <Paragraph>📌 Пример:</Paragraph>
      <Paragraph>
        Ты прокручиваешь страницу и в это время обновляется список товаров.
        React сначала плавно отрисует скролл, а уже потом обновит список.
      </Paragraph>
      <Paragraph>3️⃣ Плавный рендеринг и анимации</Paragraph>
      <Paragraph>
        Раньше, если происходило много изменений, React мог заморозить
        интерфейс.
      </Paragraph>
      <Paragraph>
        Теперь он даёт браузеру время на анимации и пользовательские действия.
      </Paragraph>
      <Paragraph>📌 Пример:</Paragraph>
      <Paragraph>
        Ты открываешь модальное окно, а в этот момент загружаются новые товары.
      </Paragraph>
      <Paragraph>С Fiber React сначала покажет окно (это важнее),</Paragraph>
      <Paragraph>
        А уже потом подгрузит товары в фоне, не блокируя интерфейс.
      </Paragraph>
      <Paragraph>
        <Text strong>
          Fiber – это не замена Reconciliation, а его улучшенная версия. Они
          работают вместе.
        </Text>
      </Paragraph>
      <Paragraph>
        Reconciliation – это процесс сравнения Virtual DOM, который определяет,
        какие элементы нужно обновить.
      </Paragraph>
      <Paragraph>
        Fiber – это механизм, который управляет Reconciliation и делает его
        гибким, приоритетным и более эффективным.
      </Paragraph>
      <Paragraph>
        <Text strong>Полезные ссылки</Text>
      </Paragraph>
      <Paragraph>
        <Link
          href="https://habr.com/ru/companies/macloud/articles/558682/"
          target="_blank"
        >
          Как работает виртуальный DOM в React
        </Link>
      </Paragraph>
      <Paragraph>
        <Link href="https://habr.com/ru/articles/444276/" target="_blank">
          Вступление в архитектуру React Fiber
        </Link>
      </Paragraph>
    </>
  );
};

export default VirtualDomPage;
