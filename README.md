# pagify-it

[![npm version](https://badge.fury.io/js/pagify-it.svg)](https://badge.fury.io/js/pagify-it)

## Install

`yarn add page pagify-it`

## Usage

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

const App = () => <Router {...{ routes }} />;

// props: routes, opts (optional), base (optional), onChange (optional)

// helpers:
// use <Link to="/posts" /> to display a link <a />
// also accepts `href` instead of `to`, and accepts a base prop as well (optional)

// methods available:
// navigate('/posts'), to navigate to a certain path
// redirect('/login'), to redirect to a certain path

// context: each rendered route will have a `ctx` prop with some metadata
```

## Documentation

See [Page.js](https://visionmedia.github.io/page.js/).

## Example

Available [here](https://sonaye.github.io/pagify-it/) ([source](/example)).

**Note:** Routing with hashes is used in the example for hosting on GitHub pages, in a typical app you won't need it.
