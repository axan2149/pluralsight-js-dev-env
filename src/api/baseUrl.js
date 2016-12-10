export default function getBaseUrl() {

  //use ?useMockApi=true after url to use mockapi
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://rocky-crag-38859.herokuapp.com/';
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}


