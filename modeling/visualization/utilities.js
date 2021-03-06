/*
Copyright (c) 2018 Nathanael Hübbe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

//Create a string with at least the given entropy (measured in bits).
kBase64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";	//encoding according to RFC 4648, section 5
function makeId(entropy) {
	var result = "";
	for(var i = 0; i < entropy; i += 6) {
		result += kBase64Chars.charAt(Math.floor(Math.random()*kBase64Chars.length));
	}
	return result;
}

function pushIfTruthy(array, value) {
	if(value) array.push(value);
}

function isDenseArrayOfStrings(object) {
	if(!$.isArray(object)) return false;
	for(var i = object.length; i--; ) {
		if("string" != typeof object[i]) return false;
	}
	return true;
}
