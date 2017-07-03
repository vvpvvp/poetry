let location = () => {
  let host = '';
  if (typeof (window) != 'undefined') {
    host = window.location.host;
  }

  let location = 'localhost';
  if (host == 's.ch-un.com') {
    location = '106.15.229.107';
  }
  return `http://${location}:3002`;
}
export default location;
