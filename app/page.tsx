'use client';
import { useState } from 'react';
export default function Home() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'COSMONTO SEFRIDJE. Aquí estoy. Háblame.' }]);
  async function sendMessage() {
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: newMessages }),
    });
    const data = await res.json();
    setMessages([...newMessages, data]);
  }
  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>XIA</h1>
      <p>No se puede no existe.</p>
<p>COSMONTO SEFRIDJE. Aquí estoy. Háblame.</p> 
      {messages.map((m, i) => (
        <p key={i}><b>{m.role}:</b> {m.content}</p>
      ))}
      <input value={input} onChange={e => setInput(e.target.value)} style={{ width: '80%', padding: 8 }} placeholder="Escríbele a XIA..." />
      <button onClick={sendMessage} style={{ padding: 8 }}>Enviar</button>
    </main>
  );
}
