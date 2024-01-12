export const dslog = {
  info: (message: string) => {
    console.log(`%cInfo: ${message}`, "color: #56b97f");
  },
  method: (message: string) => {
    console.log(`%cMethod: ${message}`, "color: #56b97f");
  },
  obj: (object: object) => {
    console.log("Object:", object);
  },
  error: (message: string) => {
    console.log(`%cError: ${message}`, "color: red");
  },
};