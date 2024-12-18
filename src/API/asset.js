import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;


export const createAsset = async (formData) => {
    try {
        console.log(formData,'api')
      const newAsset = await axios.post(`${baseUrl}/asset`,formData);
      return newAsset;
    } catch (error) {
      console.error("Unexpected Error:", error);
      return { error: true, message: "An unexpected error occurred" };
    }
  };