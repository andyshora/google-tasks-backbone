casper.start('http://dev.backbonetasks.com/index.html', function() {
   
	this.test.comment('checking resources...');
   
   	this.wait(2000, function() {
   		this.test.assertResourceExists('backbone-min.js', 'backbone was loaded');
   		this.test.assertResourceExists('underscore-min.js', 'underscore was loaded');

    });

});

casper.run();