const context = require.context("../../assets/icons", true, /.svg$/);

const obj: any = {};
context.keys().forEach((key: any) => {
  const fileName = key
    .split("./")
    .pop() // remove the first 2 characters
    .substring(0, key.length - 6); // remove the file extension
  obj[fileName] = context(key).default;
});

// TODO: Find a way to auto generate the type for imported icons
export type TIconID = "download";

export default obj;
