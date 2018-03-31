import React, { Component } from 'react';

import page from 'page';

export default class extends Component {
  static defaultProps = { routes: [], opts: {} };

  state = { path: null, ctx: null };

  componentWillMount() {
    const { routes, opts } = this.props;

    Object.keys(routes).forEach(path =>
      page(path, ctx => this.setState({ path, ctx }))
    );

    page.start(opts);
  }

  render() {
    const { routes } = this.props;
    const { path, ctx } = this.state;

    const Route = routes[path];

    if (!Route && !routes['*']) return null;

    return <Route {...{ ctx }} />;
  }
}

export const navigate = to => page.show(to);
export const { redirect } = page;

export const Link = props => (
  <a
    {...props}
    onClick={() => {
      navigate(props.href);
      return false;
    }}
  />
);
