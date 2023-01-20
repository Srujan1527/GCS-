import React, { useState } from "react";
import * as Realm from "realm-web";
import "./App.css";

const app = new Realm.App({ id: "application-0-pcidj" });

// const callFunc = async () => {
//   const clientFuc = await app.currentUser.callFunction("getAllData", 2, 3);
//   console.log(clientFuc);
// };
// callFunc();
const BUCKET_NAME = "test-cr";

const apiKey = "AIzaSyDGUFWW9EWowvls3tHrhFOhWt6XSN2zsGI";
const authToken =
  "ya29.a0AX9GBdVAYh82z3Qx_KUqYycU1sXnAT7k8PCP0bQ-gi35RaXAeArLTiwZu-1-VCs-6IyWzXKqRto9-Jn2agkj8p0udghqFyFA3RNJ3t6Sge0FQFH2BeoPcL27HB-SJTjJICIONmDlFO11Q6oF-xY_u9hI6dgmaCgYKAcQSARMSFQHUCsbCSAlN-hNo3uWldCEA4dyoHw0163";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState("");
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileType(e.target.files[0].type);
    setFileName(e.target.files[0].name);
    setFilePath(e.target.files[0].name);
    console.log(e.target.files[0].type);
  };
  const uploadFiles = async () => {
    await app.currentUser.callFunction("uploadFiles");
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button>Upload</button>
      <button onClick={uploadFiles}>Get Files </button>
    </div>
  );
};
function App() {
  return <FileUploader />;
}

export default App;
