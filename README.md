Instagram Plugin MooTools
=========================

![Screenshot](http://c2.staticflickr.com/6/5836/21284765188_6f27077904_b.jpg)

How to use
----------

Include the latest version MooTools Framework, then .js into the page:

   <script src="https://ajax.googleapis.com/ajax/libs/mootools/1.5.2/mootools.min.js"></script>
   <script type="text/javascript" src="moo-instagram-min.js"></script>
   <script type="text/javascript" src="MooTools-More-1.5.2.js"></script>


#Example


   window.addEvent('domready', function() {

          var clientId = 'your-clientId';

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

## References

  
