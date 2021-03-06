// connect to firebase
var config = {
  apiKey: "AIzaSyBNxcnU0P4XyuwybfISGtYasiEZbzpgV1A",
  authDomain: "jwcx-196915.firebaseapp.com",
  projectId: "jwcx-196915",
};

firebase.initializeApp(config);
var db = firebase.firestore();

const announce = {
  "real": {
    "design": [
      {
        "id": 1,
        "name": "ก้องเกียรติ คุณพาณิชย์โชติ",
        "amount": "200.01"
      },
      {
        "id": 2,
        "name": "กิตติภพ สินเทศ",
        "amount": "200.02"
      },
      {
        "id": 3,
        "name": "ณัฐชนน ภูขมัง",
        "amount": "200.03"
      },
      {
        "id": 4,
        "name": "ณัฐวรา นาคีสถิตย์",
        "amount": "200.04"
      },
      {
        "id": 5,
        "name": "ธีร์ธัช ภัทรวโรดม",
        "amount": "200.05"
      },
      {
        "id": 6,
        "name": "ฐิติรัตน์ พงษ์จำปา",
        "amount": "200.06"
      },
      {
        "id": 7,
        "name": "อัญชลี เซี๊ยะสกุล",
        "amount": "200.07"
      },
      {
        "id": 8,
        "name": "ธัญญชล นามวงศ์",
        "amount": "200.08"
      },
      {
        "id": 9,
        "name": "ภูรินท์ บุญเเห่ห้อม",
        "amount": "200.09"
      },
      {
        "id": 10,
        "name": "พลภัทร วัฒนชัย",
        "amount": "200.10"
      },
      {
        "id": 11,
        "name": "วิภาดา เนื้อทอง",
        "amount": "200.11"
      },
      {
        "id": 12,
        "name": "สุธิดา ดวงรัศมี",
        "amount": "200.12"
      }
    ],
    "marketing": [
      {
        "id": 1,
        "name": "Poonppa อารีย์สว่างกิจ",
        "amount": "200.13"
      },
      {
        "id": 2,
        "name": "จิรพัทธ์ เกลาเกลี้ยง",
        "amount": "200.14"
      },
      {
        "id": 3,
        "name": "ชนัญธิดา ม่วงน้อย",
        "amount": "200.15"
      },
      {
        "id": 4,
        "name": "ณัฐสุภา อุราภรณ์",
        "amount": "200.16"
      },
      {
        "id": 5,
        "name": "ธีรธรรม วิมุตตินันท์",
        "amount": "200.17"
      },
      {
        "id": 6,
        "name": "นายสุรโชติ ชัยมงคล",
        "amount": "200.18"
      },
      {
        "id": 7,
        "name": "เนื้อแพร ดวงศรี",
        "amount": "200.19"
      },
      {
        "id": 8,
        "name": "ปัณณสิษฐ์ จิวะพงศ์",
        "amount": "200.20"
      },
      {
        "id": 9,
        "name": "ภารวี วัฒนพรพรหม",
        "amount": "200.21"
      },
      {
        "id": 10,
        "name": "รัญชนา ตันติรัฐพงศ์",
        "amount": "200.22"
      },
      {
        "id": 11,
        "name": "ศาสตรา ศิริพรกิตติ",
        "amount": "200.23"
      },
      {
        "id": 12,
        "name": "อารดา มันเดวอ",
        "amount": "200.24"
      }
    ],
    "content": [
      {
        "id": 1,
        "name": "กฤตินันท์ ชัยวงษ์",
        "amount": "200.25"
      },
      {
        "id": 2,
        "name": "จิรัชญา พงศ์พัฒนหยก",
        "amount": "200.26"
      },
      {
        "id": 3,
        "name": "ชานน ยิ้มประสิทธิ์",
        "amount": "200.27"
      },
      {
        "id": 4,
        "name": "โชติกานต์ เฉลิมจิระรัตน์",
        "amount": "200.28"
      },
      {
        "id": 5,
        "name": "ณัฐพิมล ไชยขันธุ์",
        "amount": "200.29"
      },
      {
        "id": 6,
        "name": "ทิพยวารี แซ่ลี้",
        "amount": "200.30"
      },
      {
        "id": 7,
        "name": "ธิติพล ตาซื่อ",
        "amount": "200.31"
      },
      {
        "id": 8,
        "name": "นภสร ฉัตรฉลองชัย",
        "amount": "200.32"
      },
      {
        "id": 9,
        "name": "นางสาวนภัสรา อัศวเลิศศักดิ์",
        "amount": "200.33"
      },
      {
        "id": 10,
        "name": "นาย ศักรินทร์ พูลสุข",
        "amount": "200.34"
      },
      {
        "id": 11,
        "name": "พิริยา เตชาพิสุทธิ์",
        "amount": "200.35"
      },
      {
        "id": 12,
        "name": "ภัทรานิษฐ์ คงแสนคำ",
        "amount": "200.36"
      }
    ],
    "programming": [
      {
        "id": 1,
        "name": "กิตติภัฎ เดชกุล",
        "amount": "200.37"
      },
      {
        "id": 2,
        "name": "จันสิดา มกรานนท์",
        "amount": "200.38"
      },
      {
        "id": 3,
        "name": "ชยภัทร อาชีวระงับโรค",
        "amount": "200.39"
      },
      {
        "id": 4,
        "name": "ณัฐพร กอบกุลกัลยกร",
        "amount": "200.40"
      },
      {
        "id": 5,
        "name": "ณัฐภัทร ศรีวิชัยลำพันธ์",
        "amount": "200.41"
      },
      {
        "id": 6,
        "name": "ธนภัทร ธีรรัตตัญญู",
        "amount": "200.42"
      },
      {
        "id": 7,
        "name": "นพรุจ สุวรรณบูรณ์",
        "amount": "200.43"
      },
      {
        "id": 8,
        "name": "นันท์มนัส ปุณยพัฒน์",
        "amount": "200.44"
      },
      {
        "id": 9,
        "name": "บุญธิชา แซ่เจี่ย",
        "amount": "200.45"
      },
      {
        "id": 10,
        "name": "ปีย์มนัส คูตระกูล",
        "amount": "200.46"
      },
      {
        "id": 11,
        "name": "ภูมิไผท จันทรศรีวงศ์",
        "amount": "200.47"
      },
      {
        "id": 12,
        "name": "ศิวกร เลิศไตรภิญโญ",
        "amount": "200.48"
      }
    ]
  },
  "unreal": {
    "design": [
      {
        "id": 1,
        "name": "ฟ้าพราว ขุนทอง",
        "amount": "200.01"
      },
      {
        "id": 2,
        "name": "ลัลม์ลลิต วิระวงษ์นุสร",
        "amount": "200.02"
      },
      {
        "id": 3,
        "name": "วีรวัฒน์ ปึงพิพัฒน์ตระกูล",
        "amount": "200.03"
      }
    ],
    "marketing": [
      {
        "id": 1,
        "name": "ณีรนุช ยิ้มสบาย",
        "amount": "200.13"
      },
      {
        "id": 2,
        "name": "ณัฏฐพิชา  พีระกิตติรัตน์",
        "amount": "200.14"
      },
      {
        "id": 3,
        "name": "นันทกานต์ ภูมิเลิศ",
        "amount": "200.15"
      }
    ],
    "content": [
      {
        "id": 1,
        "name": "เจษฎา แสนศรี",
        "amount": "200.25"
      },
      {
        "id": 2,
        "name": "ธนพร ขำเจริญ",
        "amount": "200.26"
      },
      {
        "id": 3,
        "name": "ซุลฟาร์ บากาเด็ง",
        "amount": "200.27"
      },
      {
        "id": 4,
        "name": "ปุณยภา  วิทูรปกรณ์",
        "amount": "200.28"
      }
    ],
    "programming": [
      {
        "id": 1,
        "name": "ชัยพร บัวแก้ว",
        "amount": "200.37"
      },
      {
        "id": 2,
        "name": "ปริญญา ประดิษฐ์",
        "amount": "200.38"
      },
      {
        "id": 3,
        "name": "วรเมธ งามขำ",
        "amount": "200.39"
      }
    ]
  }
}

$(document).ready(function() {
  // announce
  let fields = ["programming", "design", "content", "marketing"];
  for (let i = 0; i < fields.length; i++) {
    // real 
    for (let j = 0; j < announce.real[fields[i]].length; j++) {
      let item = announce.real[fields[i]][j];
      $(`#table_${fields[i]}_real`).append(`
        <tr>
          <td><center>${fields[i][0].toUpperCase()}${item.id}</center></td>
          <td>${item.name}</td>
          <td>${item.amount}</td>
        </tr>
      `);
    }
    // unreal
    for (let j = 0; j < announce.unreal[fields[i]].length; j++) {
      let item = announce.unreal[fields[i]][j];
      $(`#table_${fields[i]}_unreal`).append(`
        <tr>
          <td>${item.name}</td>
        </tr>
      `);
    }
  }
  
  $('.announce-container').hide();
  $('.announce-button').hide();
  $('.announce').on('click', function() {
    let field = $(this).attr('id');
    $('.announce-button').show();
    $('.register-dialog > .header').text(`ประกาศผลสาขา ${field.toUpperCase()}`)
    $('.register-container').hide();
    $('.announce-container[id="'+field+'"]').show();
  })
  
  $('.announce-button').on('click', function() {
    $('.announce-container').hide();
    $('.register-container').show();
    $('.announce-button').hide();
    $('.register-dialog > .header').text(`โปรดเลือกสาขาเพื่อดูผลการสมัคร`);
  });
  
  // timer
  var timeEnd = new Date();
  timeEnd.setHours(23);
  timeEnd.setMinutes(59);
  timeEnd.setSeconds(59);
  
  var timerColorOrange = "#FE953D";
  var timerColorRed = "#FE6477";
  
  function updateTimer() {
    var timeNow = new Date();
    var timer = (timeEnd.getTime() - timeNow.getTime()) / 1000;
    var hours = Math.floor(timer / 3600);
    var minutes = Math.floor((timer - hours * 3600) / 60);
    var seconds = Math.floor(timer - hours * 3600 - minutes * 60);
    
    if (hours < 6 && hours > 3) {
      $(".timer").css('color', timerColorOrange);
    }
    if (hours <= 3) {
      $(".timer").css('color', timerColorRed);
    }
    
    $('#timer_hour').text(hours);
    $('#timer_minute').text(minutes);
    $('#timer_second').text(seconds);
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);
  
  var close = true;
  // mobile navigation bar
  $('.nav-menu').click(function() {
    if (close === true) {
      $('.nav-menu').html('<i style="color: black;" class="fa fa-times"></i>');
      $('.nav-backdrop').fadeIn(100);
    } else {
      $('.nav-menu').html('<i class="fa fa-bars"></i>');
      $('.nav-backdrop').fadeOut(100);
    }
    close = !close;
    $('.menu').toggleClass('disabled');
  });
  $('.nav-backdrop').click(function() {
    close = true;
    $('.nav-menu').html('<i class="fa fa-bars"></i>');
    $('.nav-backdrop').fadeOut(100);
    $('.menu').toggleClass('disabled');
  })
  
  // navigation bars
  $('.menu-link').click(function(e) {
    $('html, body').animate({
      scrollTop: $('#section_'+$(this).attr('section')).offset().top - 50,
    }, 'slow');
    close = true;
    $('.nav-menu').html('<i class="fa fa-bars"></i>');
    $('.nav-backdrop').fadeOut(100);
    $('.menu').toggleClass('disabled');
    e.preventDefault();
  });
  
  // desktop navigation bar
  $(window).on('scroll', function() {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 10;
      if(y_scroll_pos > scroll_pos_test) {
        $('header').addClass('with-background');
      } else {
        $('header').removeClass('with-background');
      } 
  });
  
  // division section
  $('p[name="division-content"]').hide();
  $('p[name="division-content"][data="content"]').show();
  $('.temple-division-selector').click(function() {
      $('.temple-division-selector').removeClass('active');
      $(this).addClass('active');
      // toggle content
      $('p[name="division-content"]').hide();
      $('p[name="division-content"][data="'+$(this).attr('data')+'"]').show();
  });
  // division mobile slide
  var store = ['content', 'marketing', 'design', 'programming'];
  var index = 0;
  $('div[name="division-slide"]').click(function() {
    var data = $(this).attr('data');
    if (data === "prev") {
      index--;
      if (index == -1) index = 3;
    } else {
      index++;
      if (index == 4) index = 0;
    }
    $('.temple-division-selector').removeClass('active');
    $('.temple-' + store[index]).addClass('active');
    $('p[name="division-content"]').hide();
    $('p[name="division-content"][data="'+store[index]+'"]').show();
  })
  // get candidates count 
  db.collection('stats').doc("counter").get().then(doc => {
    if (doc.exists) {
      const data = doc.data()
      $('#candidates-content').text(data.content)
      $('#candidates-design').text(data.design)
      $('#candidates-marketing').text(data.marketing)
      $('#candidates-programming').text(data.programming)
    }
  })
  
  window.godmode = function() {
    const data = {
      content: Math.floor(Math.random() * 10000),
      design: Math.floor(Math.random() * 10000),
      marketing: Math.floor(Math.random() * 10000),
      programming: Math.floor(Math.random() * 10000),
    }
    $('.candidates-count').addClass('godmode')
    setInterval(() => {
      $('#candidates-content').text(data.content)
      $('#candidates-design').text(data.design)
      $('#candidates-marketing').text(data.marketing)
      $('#candidates-programming').text(data.programming)
      data.content += 1000
      data.design += 1000
      data.marketing += 1000
      data.programming += 1000
    }, 10);
    var store = ['content', 'marketing', 'design', 'programming'];
    var index = 0;
    setInterval(() => {
      index--;
      if (index == -1) index = 3;
      $('.temple-division-selector').removeClass('active');
      $('.temple-' + store[index]).addClass('active');
      $('p[name="division-content"]').hide();
      $('p[name="division-content"][data="'+store[index]+'"]').show();
    }, 1000)
    return "Godmode has beed enabled..."
  }
  
})

// create star particle
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
