# REST API Blog

Fullstack веб-додаток — блог з повним CRUD функціоналом.  
Побудований як частина портфоліо для демонстрації навичок розробки REST API і підключення до React.

---

## Про проект

REST API Blog демонструє чистий REST API без авторизації — основний акцент на правильній побудові ендпоінтів і взаємодії між backend і frontend.

Користувач може створювати пости, редагувати їх прямо в списку і видаляти.  
Проект показує розуміння HTTP методів, роботи з базою даних і побудови React інтерфейсу з нуля.

---

## Функціонал

- Перегляд всіх постів
- Створення нового поста
- Редагування поста
- Видалення поста

---

## Стек технологій

**Backend**

- Node.js
- Express
- PostgreSQL

**Frontend**

- React
- Vite
- Axios

---

## Структура проекту

```
rest-api-blog/
├── backend/      — REST API сервер
└── frontend/     — React клієнт
```

---

## Запуск локально

### Вимоги

- Node.js v18+
- PostgreSQL

### 1. Клонувати репозиторій

```bash
git clone https://github.com/ViktorPro1/rest-api-blog.git
cd rest-api-blog
```

### 2. Налаштувати backend

```bash
cd backend
npm install
```

Створи файл `.env`:

```
PORT=5002
DB_HOST=localhost
DB_PORT=5432
DB_NAME=rest_api_blog_db
DB_USER=postgres
DB_PASSWORD=твій_пароль
```

Створи базу даних і таблицю в pgAdmin:

```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

Запусти сервер:

```bash
npm run dev
```

### 3. Налаштувати frontend

```bash
cd frontend
npm install
```

Створи файл `.env`:

```
VITE_API_URL=http://localhost:5002/api
```

Запусти:

```bash
npm run dev
```

Відкрий `http://localhost:5173`

---

## API ендпоінти

| Метод  | URL            | Опис               |
| ------ | -------------- | ------------------ |
| GET    | /api/posts     | Отримати всі пости |
| POST   | /api/posts     | Створити пост      |
| PUT    | /api/posts/:id | Оновити пост       |
| DELETE | /api/posts/:id | Видалити пост      |

---

## База даних

### Таблиця `posts`

| Поле       | Тип                | Опис                     |
| ---------- | ------------------ | ------------------------ |
| id         | SERIAL PRIMARY KEY | Унікальний ідентифікатор |
| title      | VARCHAR(255)       | Заголовок поста          |
| content    | TEXT               | Вміст поста              |
| created_at | TIMESTAMP          | Дата створення           |

---

## Автор

**Viktor** — self-taught fullstack розробник.  
Активно будую портфоліо і шукаю першу комерційну практику або Junior позицію.  
Стек: React, Node.js, Express, PostgreSQL, Docker, Git.

GitHub: [github.com/ViktorPro1](https://github.com/ViktorPro1)
