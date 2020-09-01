import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

const Footer = props => (
  <div className="footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer">
            <h3 className="footer-title">Blue Lit</h3>
            <ul className="footer-menu">
              <li>
                {' '}
                <Link to="/">Home</Link>
              </li>
              <li>
                {' '}
                <Link to="/contact">Contact</Link>
              </li>
              <li className="copyright">
                ©
{' '}
{new Date().getFullYear()}
{' '}
Blue Lit
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
