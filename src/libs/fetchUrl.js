import { getDownloadURL, ref } from "firebase/storage";
import storage from "./firebase";

const fetchUrl = (path) => {
  getDownloadURL(ref(storage, path))
    .then((url) => {
      return url;
    })
    .catch((err) => console.log(err));
};

export default fetchUrl();
