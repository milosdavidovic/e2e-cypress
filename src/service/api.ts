const baseUrl = "http://localhost:3002";

const postUser = async (data = {}) => {
  const response = await fetch(`${baseUrl}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export { postUser };
