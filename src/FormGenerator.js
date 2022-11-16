import React, { useEffect, useState } from 'react';
import { ElementStore, ReactFormGenerator } from "react-form-builder2";

const FormGenerator = () => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() =>{
        ElementStore.subscribe((state) => {
            setData(state.data)
        })
    }, [])

    const showPreview = () => {
        setPreviewVisible(true);
      }

      const closePreview = () => {
        setPreviewVisible(false);
      }

      const onSubmit = () => {
          ElementStore.dispatch("updateOrder", data)
        console.log("onSubmit", data);
        // Place code to post json data to server here
      }

      let modalClass = "modal";
    if (previewVisible) {
      modalClass += " show d-block";
    }

    
    return (
        <div className="clearfix" style={{ margin: "10px", width: "70%" }}>
          <h4 className="float-left">Preview</h4>
          <button
            className="btn btn-primary float-right"
            style={{ marginRight: "10px" }}
            onClick={showPreview}
          >
            Preview Form
          </button>
          
  
          {previewVisible && (
            <div className={modalClass}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <ReactFormGenerator
                    download_path=""
                    back_action="/"
                    back_name="Back"
                    answer_data={{}}
                    action_name="Save"
                    form_action="/"
                    form_method="POST"
                    onSubmit={onSubmit}
                    data={data}
                  />
  
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                      onClick={closePreview}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
  
         
        </div>
      );
}

export default FormGenerator;



