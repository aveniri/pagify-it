import React from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Router, { navigate, redirect } from '../src';

import './style.css';

const Btn = props => (
  <Button style={styles.btn} onClick={() => navigate(props.href)}>
    {props.label}
  </Button>
);

const Title = props => (
  <Typography variant="title" gutterBottom>
    {props.children}
  </Typography>
);

const Root = () => (
  <Paper square style={styles.paper}>
    <Title>/</Title>

    <Btn href="/posts" label="Posts /" />
  </Paper>
);

const Posts = () => (
  <Paper square style={styles.paper}>
    <Title>/ Posts</Title>

    <Btn href="/" label=".. /" />
    <Btn href="/posts/1" label="Posts / 1" />
    <Btn href="/posts/2" label="Posts / 2" />
    <Btn href="/posts/3" label="Posts / 3" />
    <Btn href="/posts/new" label="Posts / New post" />
  </Paper>
);

const New = () => (
  <Paper square style={styles.paper}>
    <Title>/ Posts / New post</Title>

    <Btn href="/" label=".. / .. /" />
    <Btn href="/posts" label=".. /" />
  </Paper>
);

const Post = props => (
  <Paper square style={styles.paper}>
    <Title>/ Posts / Post {props.ctx.params.id}</Title>

    <Btn href="/posts" label=".. /" />
  </Paper>
);

const styles = {
  paper: {
    boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.1)',
    padding: 20,
    display: 'flex',
    flexDirection: 'column'
  },
  btn: {
    boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 0,
    textTransform: 'none',
    margin: 10
  }
};

const routes = {
  '/': Root,
  '/posts': Posts,
  '/posts/new': New,
  '/posts/:id': Post,
  '*': () => {
    redirect('/');
    return null;
  }
};

// base is needed for GitHub hosting, plus hashes work better there
const base = process.env.NODE_ENV === 'production' ? '/pagify-it/#' : '';

const App = () => <Router {...{ routes, base }} />;

export default App;
