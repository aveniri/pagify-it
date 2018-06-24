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
    base: '',
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

export const Link = ({ children, base, href, to, ...props }) => (
  <a
    href={`${base}${href || to}`}
    onClick={e => {
      navigate(href || to);
      e.preventDefault();
      return false;
    }}
    {...props}>
    {children}
  </a>
);

const hrefOrTo = ({ href, to }) =>
  !href &&
  !to &&
  new Error('One of `href` or `to` props is required by the Link component.');

Link.propTypes = {
  base: PropTypes.string,
  children: PropTypes.any.isRequired,
  href: hrefOrTo,
  to: hrefOrTo
};

Link.defaultProps = {
  base: '',
  href: undefined,
  to: undefined
};
