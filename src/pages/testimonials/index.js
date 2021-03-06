import React from 'react';
import { graphql, withPrefix, Link} from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Testimonials = (props) => {

  const testimonials = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-testimonials">
      <SEO title="Testimonials" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Solutions</h1>
            </div>
          </div>
        </div>
      </div>



      <div className="container pb-6">
        <div className="row">
          {testimonials.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 ">
            <br></br>
              <div className="testimonial">
                <div className="testimonials-meta">
                  <h2 className="testimonials-title" id={edge.node.frontmatter.title}>{edge.node.frontmatter.title}</h2>
                  <div className="feature-image">
                    <img alt={edge.node.frontmatter.title} src= {withPrefix(edge.node.frontmatter.image)} />
                  </div>

                </div>
                <div
                  className="testimonials-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TestimonialsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/testimonials/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            name
            jobtitle
            image
          }
        }
      }
    }
  }
`;

export default Testimonials;
