// Create a "close" button and append (nối) it to each (từng) list item
var myNodelist = document.getElementsByTagName("LI");
//document.getElementsByTagName
// trả về các phần tử của tên thẻ được chỉ định
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    //tạo một node
    var txt = document.createTextNode("\u00D7");
    // tạo nội dung cho node vừa tạo
    span.className = "close";
    span.appendChild(txt);
    //gắn node vừa được tạo vào trang
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current (ẩn thư mục hiện hành) list item
var close = document.getElementsByClassName("close");
//sẽ trả về tập hợp các phần tử có thuộc tính class được cung cấp
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        //Tên-phần-tử Tên-sự-kiện="đoạn mã sẽ được thực thi khi sự kiện xảy ra
        var div = this.parentElement;
        //trả về thẻ HTML đang chứa thẻ hiện tại
        // hoặc trả về null nếu không có thẻ nào chứa thẻ hiện tại
        div.style.display = "none";
        // ẩn dữ liệu
    }
}

//add "checked" symbol (kies hiệu) when clicking on a list item
var list = document.querySelector('ul');
//trả về phần tử đầu tiên khớp với bộ chọn được chỉ định
list.addEventListener('click', function(ev) {
    //gắn một trình xử lý sự kiện vào phần tử được chỉ định.
    //element.addEventListener(event, function, useCapture)
    // click tên của sự kiện, function Chỉ định hàm để chạy khi sự kiện xảy ra.
    if (ev.target.tagName === 'LI') {
        //để tìm hiểu phần tử nào đã kích hoạt một sự kiện cụ thể:
        ev.target.classList.toggle('checked');
        // trả về (các) tên lớp của một phần tử, dưới dạng một đối tượng
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    //trả về phần tử có thuộc tính ID với giá trị được chỉ định.
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}