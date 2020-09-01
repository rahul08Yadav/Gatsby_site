import React, { useState }  from "react"
import axios from "axios";
import { Link } from "gatsby"
import Layout from "../layouts/index"
const Form = () => {

    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/10e92cc7-0b7d-416e-9937-bd89f173236d",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (


    <div>
         <div className="col-md-8 mt-5">
            <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <label className= "feature-title" for="exampleInputEmail1" required="required"><strong>Email address </strong> </label>
                <br></br>
                <input style={{width: 500, height:45}}type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
            <div className="form-group">
            <br></br>
                <label for="exampleInputName"><strong>Name</strong></label>
                <br></br>
                <input style={{width: 500, height:45}}type="text" name="name" className="form-control" id="exampleInputName" placeholder="Enter your name" required="required"/>

            </div>
            <div className="form-group">
            <br></br>
                <label for="exampleFormControlSelect1"><strong>Message</strong></label>
                <br></br>
                 <textarea style={{width: 500, height:150}}id="subject" name="subject" placeholder="Write something.."/>

            </div>

            <button  style={{ borderRadius:6,width:120}}type="submit" className="button button-primary mt-2"  disabled={serverState.submitting}>
                Submit
            </button>

            {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
                </p>
            )}
            </form>
        </div>
      </div>



    );
  };

  export default Form;
