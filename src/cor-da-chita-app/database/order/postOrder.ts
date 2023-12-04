import { baseURL } from "../baseURL";
import { url } from "@/app/api/backend/webApiUrl";
import axios from "axios";
const postOrder = async (params: any) => {
  console.log(params);
  console.log(`${url}/api/v1/Order`);

  const res = await axios.post(`${baseURL}/api/v1/Order`,params)
    .then((r) => {
      console.log(r.data)
      return r.data
    })
    .catch((error) => console.error(error));

    console.log(res)

    return res
};

export default postOrder;
//
