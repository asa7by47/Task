export default function getTimeStamp() {
  const currentdate = new Date();
  const datetime = `${currentdate.getDay()}/${currentdate.getMonth()}/${currentdate.getFullYear()},${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
  return datetime;
}
