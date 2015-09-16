Class: Instagram {#Instagram}
=============================

Select and show a list of Instagram photos.

### Syntax:

    var insta = new Instagram(where, options);


### Arguments:

1. where (String) - The name desired for your div to inject the instagram photos.

2. options (Object) - An object containing the instance's options.

### Returns:

    * (Object) This instance of Instagram


Instagram Method: composeRequest {#Instagram: composeRequest}
-------------------------------------------------------------

### Syntax: insta.composeRequest

### Arguments:

- options Object

### Returns:

- returns Object options


Instagram Method: _makeRequest {#Instagram: _makeRequest}
-------------------------------------------------------------

### Syntax: insta._makeRequest();

### Arguments:

- void

### Returns:

- (Object) This instance of Instagram


Instagram Method: _retrieveData {#Instagram: _retrieveData}
-------------------------------------------------------------

### Syntax: insta._retrieveData();

### Arguments:

- void

### Returns:

- (Object) This instance of Instagram
    

Instagram Method: _displayData {#Instagram: _displayData}
-------------------------------------------------------------

### Syntax: insta._displayData();

### Arguments:

- void

### Returns:

- (Object) This instance of Instagram


Instagram Method: _createPhoto {#Instagram: _createPhoto}
-------------------------------------------------------------

### Syntax: insta._createPhoto();

### Arguments:

- void

### Returns:

- (Object) This instance of Instagram


Instagram Method: _handlerError {#Instagram: _handlerError}
-------------------------------------------------------------

### Syntax: insta._handlerError();

### Arguments:

- void

### Returns:

- (Object) This instance of Instagram

# Example:

window.addEvent('domready', function() {

          var clientId = ''; //get your own clientId

                                new Instagram('photos',{clientId : clientId, 
                                                        count    : 10,
                                                        hash     : 'vamaveche'
                                })

                                new Instagram('photos2',{clientId : clientId, 
                                                        count    : 10,
                                                        location: {id: 514276}
                                })

                                new Instagram('photos3',{clientId : clientId, 
                                                        count    : 10,
                                                        search: { lat: 48.858844, lng: 2.294351 }
                                })


});