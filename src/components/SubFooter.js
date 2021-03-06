import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Social from './Social';
const SubFooter = props => (
  <div className="sub-footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sub-footer">
            <ul>
              <li>
                <strong>Phone: </strong>
                {props.data.site.siteMetadata.contact.phone}
              </li>
              <li>
                <strong>Email: </strong>
{' '}
                {props.data.site.siteMetadata.contact.email}
              </li>
            </ul>
            <ul>
              <li>

              </li>
            </ul>
             <Social />
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
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <SubFooter data={data} />}
  />
);
