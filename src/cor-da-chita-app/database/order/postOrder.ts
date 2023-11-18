import { baseURL } from "../baseURL";

const postOrder = async (params: any) => {
  console.log(params);
  console.log(`${baseURL}/api/v1/Order`);

  return await fetch(`${baseURL}/api/v1/Order`, {
    
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((response) => response.json)
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
};

export default postOrder;
//
