import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
import Form from '../../components/Form';

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Contact</h1>
              <Form/>
          </div>
        </div>
      </div>
    </div>



    <div className="container">
      <div className="row">
        <div className="col-12">


        </div>
        <div className="col-8">
          <h4 className="mt-4">Business Hours</h4>
          <table className="table table-sm opening-hours-table">
            <tbody>
            <tr>
              <td className="day font-weight-bold">Address - </td>
              <td className="opens">G1, Maheshwari chamber,Raj Bhavan Quarters Colony, Somajiguda, Hyderabad-500041 Telangana</td>
              <td />

            </tr>
              <tr>
                <td className="day font-weight-bold">Monday - Friday</td>
                <td className="opens">8:30am - 5:00pm</td>

              </tr>
              <tr>
                <td className="day font-weight-bold">Saturday - Sunday</td>
                <td className="opens">Closed</td>
                <td />
              </tr>


            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
