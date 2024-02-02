import { getDownloadURL, ref } from "firebase/storage";
import storage from "./firebase";

const fetchUrl = (path, setLink) => {
  getDownloadURL(ref(storage, path))
    .then((url) => {
      setLink(url);
    })
    .catch((err) => console.log(err));
};

export default fetchUrl();
