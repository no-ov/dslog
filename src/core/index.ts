
const getTtime = () => {
  return new Date().toLocaleTimeString()
}

const showLog = () => {
  const flag = localStorage.getItem("dslog");
  return flag === "true";
}

export const dslog = {
  info: (message: any) => {
    if (!showLog()) return
    console.log(`%c [ ${getTtime()} ] [ INFO ] ${message}`, "color: #56b97f");
  },
  method: (message: any) => {
    if (!showLog()) return
    console.log(`%c [ ${getTtime()} ] [ METH ] ${message} `, "color: #c0a4d8");
  },
  obj: (object: object) => {
    if (!showLog()) return
    const deepCopyObj = JSON.parse(JSON.stringify(object))
    console.log(`%c [ ${getTtime()} ] [ OBJE ] `, "color: yellow", deepCopyObj);
  },
  error: (message: any) => {
    if (!showLog()) return
    console.log(`%c [ ${getTtime()} ] [ ERRO ] ${message} `, "color: red");
  },
};
