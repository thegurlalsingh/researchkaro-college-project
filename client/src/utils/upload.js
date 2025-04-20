import axios from "axios";

const upload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  // Assuming your backend runs on port 8800
  const uploadUrl = "http://localhost:8800/api/upload"; 

  const res = await axios.post(uploadUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export default upload;
