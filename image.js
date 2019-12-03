



var imgs1 = [
'resources/3d_1.png',
'resources/3d_2.png',
'resources/3d_3.png',
'resources/3d_4.png',
'resources/3d_5.png'
],
// var imgs3 = [
// 'resources/11.jpg',
// 'resources/12.jpg', 
// 'resources/14.jpg',
// 'resources/15.jpg',
// 'resources/16.jpg',
// 'resources/17.jpg',
// 'resources/18.jpg'
// ],
curIndex = 0;
curDuration = 1000;

function slideShow() {
  document.getElementById('image1').src = imgs1[curIndex]
  // document.getElementById('image3').src = imgs3[curIndex]
  curIndex++;


if curIndex == imgs1.length {
	// || curIndex == imgs3.length ) {
  curIndex = 0;


setTimeout("slideShow()",curDuration)
}

}
slideShow();





