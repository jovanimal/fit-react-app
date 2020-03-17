import React, { useState } from "react";
import { Form, FormGroup, Label, Button, CustomInput } from "reactstrap";
import axios from "axios";

const MyProfilePage = ({ loggedUser }) => {
  const [fyle, setfyle] = useState(null);

  const handlefile = e => {
    let targetFile = e.target.files[0];
    console.log(targetFile.name);
    setfyle(targetFile);
  };

  const uploadfile = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("media", fyle);
    axios({
      method: "POST",
      url: `http://localhost:5000/api/v1/users/upload/1`,
      data: formData
    })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
    // console.log(fyle);
  };
  return (
    <div>
      <Form>
        <FormGroup className="w-50 mx-auto d-block">
          <CustomInput
            type="file"
            id="exampleCustomFileBrowser"
            name="customFile"
            className="mt-4"
            onChange={handlefile}
          />
        </FormGroup>
        <Button
          outline
          color="primary"
          type="submit"
          onClick={e => {
            uploadfile(e);
          }}
        >
          Upload
        </Button>
      </Form>
    </div>
  );
};

export default MyProfilePage;
