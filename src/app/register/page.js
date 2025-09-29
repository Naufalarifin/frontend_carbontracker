'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    companyName: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
        company: {
          name: form.companyName
        }
      })
    });

    const data = await res.json();

    alert(res.ok ? 'Register berhasil!' : data.error || 'Gagal register!');
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nama"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        /><br />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        /><br />

        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        /><br />

        <input
          placeholder="Nama Perusahaan"
          value={form.companyName}
          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
        /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
