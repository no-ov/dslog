
const getTtime = () => {
  return new Date().toLocaleTimeString()
}

const showLog = () => {
  const flag = localStorage.getItem("dslog");
  return flag === "true";
}

export const dslog = {
  info: (...args: any[]) => {
    if (!showLog()) return;
    console.log(`%c[ ${getTtime()} ] [ INFO ]`, "color: #fff; padding: 2px; background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%); border-radius: 2px", ...args);
  },
  method: (...args: any[]) => {
    if (!showLog()) return;
    console.log(`%c[ ${getTtime()} ] [ METH ]`, "color: #fff; padding: 2px; background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%); border-radius: 2px", ...args);
  },
  obj: (...args: any[]) => {
    if (!showLog()) return;
    console.log(`%c[ ${getTtime()} ] [ OBJE ]`, "color: yellow; padding: 2px; background-color: #303030; border-radius: 2px", ...args.map(obj => JSON.parse(JSON.stringify(obj))));
  },
  error: (...args: any[]) => {
    if (!showLog()) return;
    console.log(`%c[ ${getTtime()} ] [ ERRO ]`, "color: #34146A; padding: 2px; background-image: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%); border-radius: 2px", ...args);
  },
};

