import { useState, useEffect, useCallback } from 'react';
import api from './api/axios';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const fetchPosts = useCallback(async () => {
    const res = await api.get('/posts');
    setPosts(res.data);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleCreate = async (e) => {
    e.preventDefault();
    await api.post('/posts', { title, content });
    setTitle('');
    setContent('');
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await api.delete(`/posts/${id}`);
    fetchPosts();
  };

  const handleEdit = (post) => {
    setEditId(post.id);
    setEditTitle(post.title);
    setEditContent(post.content);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await api.put(`/posts/${editId}`, { title: editTitle, content: editContent });
    setEditId(null);
    setEditTitle('');
    setEditContent('');
    fetchPosts();
  };

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '20px' }}>
      <h1>REST API Blog</h1>

      {/* Форма створення */}
      <form onSubmit={handleCreate} style={{ marginBottom: '32px' }}>
        <h3>Новий пост</h3>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
        />
        <textarea
          placeholder="Вміст поста"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Опублікувати
        </button>
      </form>

      {/* Список постів */}
      {posts.length === 0 && <p style={{ color: '#999' }}>Постів немає</p>}

      {posts.map((post) => (
        <div key={post.id} style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px', borderRadius: '8px' }}>
          {editId === post.id ? (
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
              />
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                rows={4}
                style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
              />
              <button type="submit" style={{ marginRight: '8px' }}>Зберегти</button>
              <button type="button" onClick={() => setEditId(null)}>Скасувати</button>
            </form>
          ) : (
            <>
              <h3 style={{ margin: '0 0 8px' }}>{post.title}</h3>
              <p style={{ color: '#444', marginBottom: '12px' }}>{post.content}</p>
              <small style={{ color: '#999' }}>
                {new Date(post.created_at).toLocaleDateString('uk-UA')}
              </small>
              <div style={{ marginTop: '12px' }}>
                <button onClick={() => handleEdit(post)} style={{ marginRight: '8px' }}>✏️ Редагувати</button>
                <button onClick={() => handleDelete(post.id)}>🗑️ Видалити</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}