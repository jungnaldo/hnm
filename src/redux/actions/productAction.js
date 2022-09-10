///리덕스 미들웨워로 비동기 다루기
//미들웨워 함수는 함수를 리턴한다!
//두개의 파라미터를 받는다 (dispatch , getState)

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/jungnaldo/hnm/products/?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts };
