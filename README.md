# time
Simple JS timer with logging

Usage:

```

let time = require('@expo/time');

async function getUrlAsync(url) {

  let tk == time.start();
  let response = fetch(url);
  let responseText = await response.text();
  tk.stop(tk, 'fetch', {message: url, threshold: 10});
  return responseText;

}
```