define(function  () {

    var animationDelay = 400;

    var exports = {};

    exports.setDelay = function ( value ) {
        animationDelay = value;
    };

    exports.takeCareOf = function ( $selector ) {
        $selector.on( 'click', ':first-child', function () {
            var $this = $( this );
            var $parent = $this.parent();
            $parent.toggleClass( 'collapsed' );
            $this.next().slideToggle( animationDelay );
        }).filter( '.collapsed' ).children( ':nth-child(2)' ).hide();
    };

    exports.takeCareOf( $( '.collapsible' ) );

    return exports;
});
