function getUrl(method, params) {
    params = params || {};
    params['access_token'] = document.querySelector('#token').value;
    
    return 'https://api.vk.com/method/' + method + '?' + $.param(params) + '&v=5.131'
}

$.ajax({
    url: getUrl('users.get', {user_id: 540394580}),
    method: 'GET',
    dataType: 'JSONP',
    success: function(data) {
        console.log(data)
    }
});
