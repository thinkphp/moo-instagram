/*
---
description: Select and Show a list of Instagram Photos.

authors:
- Adrian Statescu (http://thinkphp.ro)

license:
- MIT-style license

requires:
 core/1.5.2: '*'
 more/1.5.2: Request.JSONP

provides: [Instagram]
...
*/
var Instagram = new Class({

    /*Implements*/
    Implements: [Events, Options],  

    defaults: {

     accessToken: null,
     clientId: null,
     count: null,
     url: null,
     hash: null,
     userId: null,
     location: null,
     search: null

    }, 

    where: 'photos',

    /* constructor */
    initialize: function(where, options ) {

          this.where = where || 'photos'

          this.options = Object.merge( {} , this.defaults, options )

          this._makeRequest()

        return this  
    },

    composeRequest: function( options ) {

        var url = 'https://api.instagram.com/v1',
 
              data = {}

              if( options.accesToken == null && options.clientId == null ) {

                  throw 'You must provide an access token or a client ID'  
              }

              data = Object.merge(data, {

                   access_token: options.accessToken || '', 

                   client_id: options.clientId || '',

                   count: options.count || ''
              }         
             )

             if( options.url != null ) url = options.url

             else if( options.hash != null ) url += '/tags/' + options.hash + '/media/recent'

             else if( options.search != null ) { 

                  url += '/media/search'

                  data = Object.merge(data, options.search)

             } else if( options.userId != null ) {

                  if( options.accessToken != null ) { 

                      throw 'You must provide an access token'
                  }

                  url += '/users/' + options.userId + '/media/recent'

             } else if( options.location != null ) {

                  url += '/locations/' + options.location.id + '/media/recent';

                  delete options.location.id;

                  data = Object.merge(data, options.location);

             } else {

                  url += '/media/popular';
             }

             return { url: url, data: data }  
    },

    _makeRequest: function(  ) {
          
          var request = this.composeRequest( this.options )

                      new Request.JSONP({

                            url: request.url,

                            data: request.data,
    
                            callbackKey: 'callback',

                            onRequest: function( url ){

                                  this.fireEvent('request')

                            }.bind( this ),

                            onComplete: function( response ){

                                  this._retrieveData( response )

                            }.bind( this )
 
                      }).send();

          return this
    },

    _retrieveData: function( data ) {

                 if( data !== null) {

                     this._displayData( data )

                 } else {

                      this._handleError(   ) 
                 }
    },

    _displayData: function( response ) {

          Object.each(response.data, function( photo, i ){

               this._createPhoto( photo ).inject(document.id( this.where ));

          }.bind(this))
    },

    _createPhoto( photo ) {

           var img = new Element('img',{ 'class': 'instagram-image', src: photo.images.thumbnail.url } )

           var a = new Element('a', { target: '_blank', href: photo.link } );
           
           var div = new Element('div', {class: 'instagram-placeholder', id: photo.id , text: ''} )
 
           img.inject( a )            
               
           a.inject( div )
 
           return div;
    },

    _handleError: function() {
        
           //handler error to do
    }      
});
