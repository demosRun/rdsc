function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

setTimeout(() => {
  autoScale({
    deviseW: 750,
    deviseH: 1508,
    center: 'middle',
    scroll: false,
    type: 'scale',
    box: '.scale-box'
  })
}, 100);

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

var myNum = 62562

try {
  fetch("http://szdk.people.com.cn/qiaozhong918/index.php/jishu/jishu2", requestOptions)
  .then(response => response.json())
  .then(result => {
    if (result.status == 200) {
      myNum = result.msg
    }
  })
  .catch(error => console.log('error', error));
} catch (error) {
  
}

var activeCity = ''

function randomNum(minNum,maxNum){ 
  switch(arguments.length){ 
      case 1: 
          return parseInt(Math.random()*minNum+1,10); 
      break; 
      case 2: 
          return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      break; 
          default: 
              return 0; 
          break; 
  } 
} 