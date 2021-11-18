(function() {
	"use strict";

	var dropZone = document.getElementById('drop-zone');
	var barFill = document.getElementById('bar-fill');
	var barFillText = document.getElementById('bar-fill-text');
	var uploadsFinished = document.getElementById('uploads-finished');

	var startUpload = function (files) {

		//TODO check if it is csv
		var file = files[0];
		var reader = new FileReader();
		reader.readAsText(file);
		reader.onload = function(event) {
		var csvData = event.target.result;
		var data = $.csv.toArrays(csvData);
		window.csv = data;

		if (data && data.length > 0) {
		displayHTMLTable();
		} else {
		  alert('No data to import!');
		}
		};
		reader.onerror = function() {
		alert('Unable to read ' + file.fileName);
		};

	}

	//standart form upload'
	document.getElementById('standard-upload').addEventListener('click', function(e){
	        var standardUploadFiles = document.getElementById('standard-upload-files').files;
		e.preventDefault();
		startUpload(standardUploadFiles);
	});

	//Drop functionality
        dropZone.ondrop = function(e){
	//TODO check if it is csv
		e.preventDefault();
		this.className="upload-console-drop";
	        startUpload(e.dataTransfer.files);
	};

	dropZone.ondragover = function() {
	 	this.className="upload-console-drop drop";
		return false;
	};

	dropZone.ondragleave = function() {
		this.className = "upload-console-drop";
		return false;
	};
}());

function displayHTMLTable() {

    console.log(csv)
    
}
