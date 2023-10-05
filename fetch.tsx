export const getUsers = async (): Promise<any> => {
  const req = await fetch("https://reqres.in/api/users");
  const res = req.json();
  return res ?? {};
};
