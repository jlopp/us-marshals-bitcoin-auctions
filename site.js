(function( site, undefined ) {

    timeout = 400;

    // I gotta take antacid,
    // so I can keep on partyyyyyiiiiinnnggg.
    // https://www.youtube.com/watch?v=L_wdRy7x4Sc
    site.partypartyparty = function(e) {
	var partyers = document.getElementsByClassName('party');
	for(var i=0; i<partyers.length; i++) {
            var r = Math.floor(Math.random()*255);
            var g = Math.floor(Math.random()*255);
            var b = Math.floor(Math.random()*255);
            var e = partyers[i];
	    e.style.setProperty('color', 'rgb('+ r +','+ g +',' + b + ')');

	    if (Math.random()*100 > 99) {
		e.innerText = 'PARTY! PARTY! PARTY!';
	    }
	    
	    this.timeout = Math.max(this.timeout * 0.9, 50);
	}

        window.setTimeout(site.partypartyparty, this.timeout);
    };

}( window.site = window.site || {} ));

site.partypartyparty();

