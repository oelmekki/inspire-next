export const colors = [
  {name: 'blue', value: '#2185D0'},
  {name: 'teal', value: '#00B5AD'},
  {name: 'green', value: '#21BA45'},
  {name: 'yellow', value: '#FBBD08'},
  {name: 'purple', value: '#A333C8'},
  {name: 'orange', value: '#F2711C'},
  {name: 'red', value: '#DB2828'}
]

export const makeCancelable = (promise) => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then((val) =>
      hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
    );
    promise.catch((error) =>
      hasCanceled_ ? reject({isCanceled: true}) : reject(error)
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};
