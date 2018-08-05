import request from 'superagent'

export const loadProducts = ()=> {
    return dispatch => {
        request.get('/api/products')
            .end((err, res)=> {
                console.log(res.body);
                dispatch({
                    type: 'INIT_PRODUCTS',
                    data: res.body
                });
            })
    }
};