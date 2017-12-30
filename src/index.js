import React, { Component } from 'react';

import page from 'page';

export default class extends Component {
  static defaultProps = {
    routes: [],
    opts: {}
  };

  state = { path: null, ctx: null };

  componentWillMount() {
    Object.keys(this.props.routes).forEach(path =>
      page(path, ctx => this.setState({ path, ctx }))
    );

    page.start(this.props.opts);
  }

  render() {
    const Route = this.props.routes[this.state.path];

    if (!Route && !this.props.routes['*']) return null;

    return <Route ctx={this.state.ctx} />;
  }
}

export const navigate = to => page.show(to);
export const { redirect } = page;

export const Link = props => (
  <a
    {...props}
    href={props.to}
    onClick={() => {
      navigate(props.to);
      return false;
    }}
  />
);
