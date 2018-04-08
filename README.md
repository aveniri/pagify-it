# pagify-it

[![npm version](https://badge.fury.io/js/pagify-it.svg)](https://badge.fury.io/js/pagify-it)

# Installation

`yarn add page pagify-it`

# Usage

```javascript
import Router, { Link, navigate, redirect } from 'pagify-it';

import Root from './root';

const Foo = () => null;
const Bar = () => null;

const routes = {
  '/': Root,
  '/foo': Foo,
  '/bar/:id': Bar,
  '*': () => <div>404</div>
};

const App = () => <Router {...{ routes }} />; // you can pass an `opts` prop too

// helpers:
// use <Link href="/posts" /> to display a link <a />

// methods available:
// navigate('/posts'), to navigate to a certain path
// redirect('/login'), to redirect to a certain path

// context: each rendered route will have a `ctx` prop with some metadata
```

# Documentation

See [Page.js](https://visionmedia.github.io/page.js/).

# Example

[![Edit kx8v0w2vk3](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/kx8v0w2vk3)

```javascript
import React from 'react';
import { render } from 'react-dom';

import Router, { Link } from 'pagify-it';

const Root = () => (
  <div style={styles.container}>
    <h1>Root</h1>
    <Link href="/posts">Posts</Link>
  </div>
);

const Posts = () => (
  <div style={styles.container}>
    <h1>Posts</h1>
    <Link href="/posts/1">Post #1</Link>
    <Link href="/posts/2">Post #2</Link>
    <Link href="/posts/3">Post #3</Link>
    <Link href="/posts/new">New post</Link>
    <Link href="/">Back to root</Link>
  </div>
);

const New = () => (
  <div style={styles.container}>
    <h1>New post</h1>
    <Link href="/posts">Back to posts</Link>
  </div>
);

const Post = props => (
  <div style={styles.container}>
    <h1>Post #{props.ctx.params.id}</h1>
    <Link href="/posts">Back to posts</Link>
  </div>
);

const styles = {
  container: { display: 'flex', flexDirection: 'column' }
};

const routes = {
  '/': Root,
  '/posts': Posts,
  '/posts/new': New,
  '/posts/:id': Post,
  '*': () => <div>404</div>
};

const App = () => <Router {...{ routes }} />;

render(<App />, document.getElementById('root'));
```
