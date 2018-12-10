function httpGet(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        let result = JSON.parse(xhr.response);
        resolve(result);
      } else {
        let error = new Error(xhr.statusText);
        error.code = xhr.status;
        reject(error);
      }
    };

    xhr.onerror = () => {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

function sendRequest(country = "Ukraine") {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=1914cd5f635de9246955aa90978ff6e8`;

  return httpGet(url);
}

sendRequest().then((response) => {
  let c;
  //openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/03n.png
});