function getUrl(method, params) {
    params = params || {};
    params['access_token'] = document.querySelector('#token').value;
    
    return 'https://api.vk.com/method/' + method + '?' + $.param(params) + '&v=5.131'
}

$.ajax({
    url: getUrl('friends.search', {count: 60}),
    method: 'GET',
    dataType: 'JSONP',
    success: function(data) {
        console.log(data)
    }
});
