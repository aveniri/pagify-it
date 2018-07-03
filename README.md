# pagify-it

[![npm version](https://badge.fury.io/js/pagify-it.svg)](https://badge.fury.io/js/pagify-it)

## Install

`yarn add page pagify-it`

## Usage

```javascript
import Router, { Link, navigate, redirect } from 'pagify-it';

const Home = () => <div>HOME</div>;
const About = () => <div>ABOUT <Link to="/">HOME</Link></div>;
const Post = props => <div>POST # {props.ctx.params.id}</div>;

const routes = {
  '/': Home,
  '/about': About,
  '/post/:id': Post,
  '*': () => <div>404</div>
};

const App = () => <Router {...{ routes }} />;
// props: routes, opts (optional), base (optional), onChange(path, ctx) (optional)

// to display a link <a />, it accepts a base prop (optional) as well
<Link to="/posts" />

// to navigate to a certain path
navigate('/posts');

// to redirect to a certain path
redirect('/login');

// context: each rendered route will have a `ctx` prop with some routing metadata
```

## Docs

See [Page.js](https://visionmedia.github.io/page.js/).

## Example

Available [here](https://sonaye.github.io/pagify-it/) ([source](/example)).

**Note:** Routing with hashes is used in the example for hosting on GitHub pages, in a typical app you won't need it.
