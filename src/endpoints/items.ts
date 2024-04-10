const baseURL = "http://localhost:3000";

function sleep(timeout: number) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(true);
    }, timeout);
  });
}

export async function fetchListItems() {
  const response = await fetch(`${baseURL}/items`);

  await sleep(2000);

  return await response.json();
}
