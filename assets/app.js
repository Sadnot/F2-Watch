// Xử lí sự kiện cuộn chuột phần Header
 let prevScrollpos = window.pageYOffset;
//  console.log(prevScrollpos)


 window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    // console.log(currentScrollPos)

    if (prevScrollpos > currentScrollPos) // khi cuộn chuột lên
    {
        document.getElementById('header').classList.remove('show');
    }
    else { document.getElementById('header').classList.add('show');
    }   

    prevScrollpos = currentScrollPos;
    if (prevScrollpos < 200) {
        document.getElementById('header').style.background = 'transparent';
    }
    else { document.getElementById('header').style.background = 'black';}
 }



// Menu
const menu = document.querySelector('.header-nav-item.menu');
const navLinkAdd = document.querySelector('.nav-link-add');
const closeBtn = document.querySelector('.close-btn');
const closeBtn2 = document.querySelector('.close-btn2');
const navSearch = document.querySelector('.nav-search');
const search = document.querySelector('.search');

menu.addEventListener('click', () => {
  // console.log(menu)
  navLinkAdd.classList.remove('hide');
  navLinkAdd.classList.add('show');
})

closeBtn.addEventListener('click', () => {
  navLinkAdd.classList.add('hide');
})

search.addEventListener('click', () => {
  navSearch.classList.remove('hide');
  navSearch.classList.add('show');
})

closeBtn2.addEventListener('click', () => {
  navSearch.classList.add('hide');
})

// -------------------------------------------------------- Giỏ hàng-----------------------------------------------------------

var itemList={
  "sp001":{   "name":"ĐỒNG HỒ CALVIN KLEIN NAM K5R31B46",
              "price":55000000,
              "photo":"../img/product1.webp"},

  "sp002":{   "name":"ĐỒNG HỒ CHARRIOL NỮ MOPD3",
              "price":45000000,
              "photo":"../img/product2.webp"},

  "sp003":{   "name":"ĐỒNG HỒ CITIZEN NAM NH8390-03X",
              "price":54000000,
              "photo":"../img/product3.webp"},

  "sp004":{   "name":"ĐỒNG HỒ LONGINES NAM L2",
              "price":74000000,
              "photo":"../img/product4.webp"},
              
  "sp005":{   "name":"ĐỒNG HỒ LONGINES NAM L2.893.4",
              "price":69000000,
              "photo":"../img/product5.webp"},

  "sp006":{   "name":"ĐỒNG HỒ CITIZEN NAM NH8390-03X",
              "price":54000000,
              "photo":"../img/hot-pr1.webp"},

  "sp007":{   "name":"ĐỒNG HỒ MIDO NAM M021.626",
              "price":80000000,
              "photo":"../img/product6.webp"},

  "sp008":{   "name":"ĐỒNG HỒ MIDO NAM M032.60",
              "price":70000000,
              "photo":"../img/product7.webp"},
  
  };


function addCart(code) {
  let current = parseInt(window.localStorage.getItem(code));

  if (typeof localStorage[code] === "undefined") {
      window.localStorage.setItem(code,1);
      alert("Đặt hàng thành công: "+itemList[code].name+". Số lượng: "+1);
  }
  else
  {
          window.localStorage.setItem(code,1 +current);
          alert("Đặt hàng thành công: "+itemList[code].name+". Số lượng: " + (1+current));
  }
}

function showCart(){

  var totalPreTax=0;  

  for(var i=0; i<localStorage.length; i++){
    var key=window.localStorage.key(i);

    let item=itemList[key];
    let photo=item.photo;
    let Name=item.name;
    let price=item.price;
    let ordernumber=window.localStorage.getItem(key);

    var fra= document.createDocumentFragment();
    var td = document.createElement('td');
    var src= document.createAttribute("src");
    src.value= photo;
    var img=document.createElement('img');

    img.setAttributeNode(src);
    img.style.width="100px";

    td.appendChild(img);
    td.style.textAlign="center";

    fra.appendChild(td);

    var td = document.createElement('td');
    td.appendChild(document.createTextNode(Name));
    td.style.textAlign="center";
    fra.appendChild(td);
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(ordernumber));
    td.style.textAlign="right";
    fra.appendChild(td);
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(price));
    td.style.textAlign="right";
    fra.appendChild(td);
    var td = document.createElement('td');
    totalPreTax+=price*ordernumber;
     // td.appendChild(document.createTextNode(price*ordernumber + "đ"));
    td.innerHTML=price*ordernumber+"đ";
    td.style.textAlign="right";
    fra.appendChild(td);
    var td = document.createElement('td');
    var a = document.createElement("a");
    var href = document.createAttribute('href');
    var data = document.createAttribute('data-code');
    href.value= "#";
    data.value= key;
    a.setAttributeNode(href);
    a.setAttributeNode(data);
    a.innerHTML= '<i  class="fa fa-trash icon-pink"></i>';
    a.onclick=function(){removeCart(this);}
    td.appendChild(a);
    td.style.textAlign="center";
    fra.appendChild(td);
    var tr = document.createElement('tr');
    tr.appendChild(fra);
    tbd=document.getElementById('kiet');
    tbd.appendChild(tr);
  }
  
  // tính tiền
  A=totalPreTax;
  ck=getDiscountRate();
  B=totalPreTax*ck;
  C=(10*(A-B))/100;

  var td=document.createElement('td');
  td.colSpan="6";
  td.innerHTML="Tổng thành tiên (A) = "+A+"đ";

  var tr=document.createElement('tr');
  tr.appendChild(td);
  tbd=document.getElementById('kiet');
  tbd.appendChild(tr);

  var tr=document.createElement('tr');
  tr.appendChild(td);
  tbd=document.getElementById('kiet');
  tbd.appendChild(tr);

  var td=document.createElement('td');
  td.colSpan="6";
  td.innerHTML="Thuế:"+C+"đ";

  var tr=document.createElement('tr');
  tr.appendChild(td);
  tbd=document.getElementById('kiet');
  tbd.appendChild(tr);

  var td=document.createElement('td');
  td.colSpan="6";
  td.innerHTML="Tổng đơn hàng: "+(A+C)+"đ";

  var tr=document.createElement('tr');
  tr.appendChild(td);
  tbd=document.getElementById('kiet');
  tbd.appendChild(tr);
                  // window.localStorage.clear();
}


function removeCart(data){
  var bol=confirm("Bạn muốn xóa  đặt hàng sản phẩm này.");
  if(bol==true){
      var code = data.getAttribute("data-code");
      if(typeof window.localStorage[code] !== "undefined"){
          window.localStorage.removeItem(code);
          document.getElementById("kiet").innerHTML="";
          showCart();
      }
  }
}

function xacnhan(){
  var p=document.createElement("p");
  if(localStorage.length<=0){
      alert("Bạn chưa đặt mua sản phẩm nào!");
  }
  else{
    for(var i=0; i<localStorage.length; i++){
        var key=window.localStorage.key(i);
        var x=window.localStorage.getItem(key);
        p.appendChild(document.createTextNode("Đồng hồ: " + itemList[key].name + ". Số lượng = " + x + "\n")); 
    }
    alert("Xác nhận đặt hàng \n"+p.textContent);
  }
}

function getDiscountRate(){
  // var d=new Date();
  // var weekday=d.getDay();
  // var totalMins=d.getHours()*60+d.getMinutes();
  // if(weekday>=1&&weekday<=3&&((totalMins>=420&&totalMins<=660)||(totalMins>=780&&totalMins<=1020)))
  //     return 0.1;
  return 0;
}