# pagify-it

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
  '*': () => <pre>404</pre>
};

const App = () => <Router <Router {...{ routes }} />; // you can pass an `opts` prop too

// helpers:
// use <Link to="/posts" /> to display a link <a />

// methods available:

// navigate('/posts'), to navigate to a certain path
// redirect('/login'), to redirect to a certain path

// context: each rendered route will have a `ctx` prop with some metadata
```

# Documentation

See [Page.js](https://visionmedia.github.io/page.js/), it's no longer maintained. This package is meant for small projects and for quick prototyping only, use something more sophisticated if you intend to build a larger product.

# Example

```javascript
import React from 'react';
import { render } from 'react-dom';

import Router, { Link } from 'pagify-it';

const Root = () => (
  <pre style={styles.container}>
    <h1>Root</h1>
    <Link to="/posts">Posts</Link>
  </pre>
);

const Posts = () => (
  <pre style={styles.container}>
    <h1>Posts</h1>
    <Link to="/posts/1">Post #1</Link>
    <Link to="/posts/2">Post #2</Link>
    <Link to="/posts/3">Post #3</Link>
    <Link to="/posts/new">New post</Link>
    <Link to="/">Back to root</Link>
  </pre>
);

const New = () => (
  <pre style={styles.container}>
    <h1>New post</h1>
    <Link to="/posts">Back to posts</Link>
  </pre>
);

const Post = props => (
  <pre style={styles.container}>
    <h1>Post #{props.ctx.params.id}</h1>
    <Link to="/posts">Back to posts</Link>
  </pre>
);

const styles = {
  container: { display: 'flex', flexDirection: 'column' }
};

const routes = {
  '/': Root,
  '/posts': Posts,
  '/posts/new': New,
  '/posts/:id': Post,
  '*': () => <pre>404</pre>
};

const App = () => <Router {...{ routes }} />;

render(<App />, document.getElementById('root'));
```
