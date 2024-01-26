import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect } from "react";
import storage from "../libs/firebase";

const ViewPDF = async (path) => {
  getDownloadURL(ref(storage, path))
    .then((url) => {
      return url;
    })
    .catch((err) => console.log(err));
  return null;
};

export default ViewPDF;
