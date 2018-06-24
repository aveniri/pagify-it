import React from 'react';

import page from 'page';
import PropTypes from 'prop-types';

export default class Router extends React.PureComponent {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    opts: PropTypes.object,
    base: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    opts: {},
    base: undefined,
    onChange: undefined
  };

  state = {
    path: null,
    ctx: null
  };

  componentWillMount() {
    const { routes, opts, base } = this.props;

    if (base) page.base(base);

    Object.keys(routes).forEach(path =>
      page(path, ctx => this.setState({ path, ctx }))
    );

    page.start(opts);
  }

  componentDidMount() {
    this.onChange();
  }

  componentDidUpdate() {
    this.onChange();
  }

  onChange = () => {
    const { onChange } = this.props;
    const { path, ctx } = this.state;

    if (onChange) onChange(path, ctx);
  };

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
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <a
    onClick={e => {
      navigate(props.href);
      e.preventDefault();
      return false;
    }}
    {...props}
  />
);

Link.propTypes = {
  href: PropTypes.string.isRequired
};
