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
        // console.log("onSubmit", data);

        const outputData = []
        data?.forEach((ele, index) =>{
            let arr = {}
            arr["heading"] = ele.content ? ele.content : ele.label;
            arr['postion'] = index + 1;
            arr["type"] = ele.element;
            if(ele.options){
                arr["options"] = ele.options
            }
            outputData.push(arr)
        })
        console.log('this is outputData', outputData)
      }

      const handleUndo = () =>{
       console.log('undo feature will be available soon')
      }
      const handleRedo = () =>{
        console.log('redo feature will be available soon')
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
          <button
            className="btn btn-primary float-right"
            style={{ marginRight: "10px" }}
            onClick={handleRedo}
          >
            Redo
          </button>
          <button
            className="btn btn-primary float-right"
            style={{ marginRight: "10px" }}
            onClick={handleUndo}
          >
            Undo
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



