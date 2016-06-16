function CanvasTimeSeriesIndicatorPlot(parentElement, canvasDimensions, config) {
	config = config || {};

	//this.informationDensity = []; EXAMPLE

	//this.plotLineWidth = config.plotLineWidth || 1; EXAMPLE

	CanvasTimeSeriesPlot.call(this, parentElement, canvasDimensions, config);
}
CanvasTimeSeriesIndicatorPlot.prototype = Object.create(CanvasTimeSeriesPlot.prototype);

CanvasTimeSeriesIndicatorPlot.prototype.drawCanvas = function() {

	CanvasTimeSeriesPlot.prototype.drawCanvas.call(this);

	var dataIndex = 0;

	if (this.data[dataIndex] == undefined) {
		return;
	}

	var d = this.data[dataIndex];
	if(d.length < 1) {
		return;
	}
	var iStart = this.displayIndexStart[dataIndex];
	var iEnd = this.displayIndexEnd[dataIndex];
	var iLast = Math.min(d.length-1 , iEnd+1);

	this.canvas.strokeStyle = '#555';
  this.canvas.lineWidth = 1;
  this.canvas.fillStyle = '#555'
  var p = new Path2D("M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z");

	for(var i=iStart; i<=iLast; ++i) {
		this.canvas.save();
		this.canvas.translate( this.xScale(d[i][0]), 5);
		this.canvas.scale(0.02, 0.02);
		this.canvas.stroke(p);
	  this.canvas.fill(p);
		this.canvas.restore();
	}

	/*
	this.canvas.beginPath();
	this.canvas.arc(this.xScale(d[i][0]), this.yScale(d[i][1]),
		this.markerRadius, 0, 2*Math.PI);
	this.canvas.stroke();
	*/

	for(var i=iStart; i<=iLast; ++i) {
		//this.canvas.drawImage(img, this.xScale(d[i][0]), 0);
	}
/*
var DOMURL = window.URL || window.webkitURL || window;
	var data = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" fill="#555"/></svg>';
  var img = new Image();
  var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
  var url = DOMURL.createObjectURL(svg);

	img.onload = function () {
		for(var i=iStart; i<=iLast; ++i) {
	  this.canvas.drawImage(img, this.xScale(d[i][0]), 0);
	  DOMURL.revokeObjectURL(url);
		}
	}.bind(this);

	img.src = url;
	*/

};
