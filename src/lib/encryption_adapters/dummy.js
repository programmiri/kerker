const marker = ':::ENCRYPTED::: ';

const encrypt = (message, options = {}) => {
  const encrypted = marker.concat(message);
  const promise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (options.fakeError) {
        reject({ error: options.fakeError });
      } else {
        resolve({ content: encrypted });
      }
    }, 200);
  });

  return promise;
};

const decrypt = (message, options = {}) => {
  const decrypted = message.replace(marker, '');
  const promise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (options.fakeError) {
        reject({ error: options.fakeError });
      } else {
        resolve({ content: decrypted });
      }
    }, 200);
  });

  return promise;
};

export { encrypt, decrypt };
