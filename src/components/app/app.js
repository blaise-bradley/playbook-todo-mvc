import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../header/header';
import { List } from '../list/list';
import { Footer } from '../footer/footer';

export function App() {
  const todos = useSelector(state => state.todos);

  return (
    <div id="app">
      <section className="todoapp">
        <Header />
        {!!todos.length && <List />}
        {!!todos.length && <Footer />}
      </section>
    </div>
  );
}
