import React, {Component} from 'react';

import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <div className="container">
      <Header />
      <PostList />
    </div>
  );
}

export default App;