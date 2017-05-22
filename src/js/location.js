let location = () => {
  let host = '';
  if (typeof (window) != 'undefined') {
    host = window.location.host;
  }

  let location = 'localhost';
  if (host == 's.ch-un.com') {
    location = '59.110.159.39';
  }
  return `http://${location}:3002`;
}
export default location;
