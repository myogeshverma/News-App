export function newsIsLoading(bool) {
    return {
        type: 'NEWS_IS_LOADING',
        isLoading: bool
    };
}

export function newsFetchDataSuccess(news) {
    return {
        type: 'NEWS_FETCH_DATA_SUCCESS',
        news
    };
}

export function newsFetchData(data) {
    return (dispatch) => {
        dispatch(newsIsLoading(true));
        dispatch(newsFetchDataSuccess(data));

    };
}

export function newsDelete(index, data) {
    var objIndex = data[index];
    data = delete(data[index]);
    console.log(data);
}

export function newsStatus(index, data) {
    var objIndex = data[index];

    if (data[index].status == 0) {
        data[index].status = 1;
    } else {
        data[index].status = 0;
    }

    console.log(data);
    return (dispatch) => {
        dispatch(newsFetchDataSuccess(data));
    };

}
export function newsAdd(newNews, data) {
    var newData = data;
    newData.push(newNews);
    return (dispatch) => {
        dispatch(newsFetchDataSuccess(newData));
    };
}