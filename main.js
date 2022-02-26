
// click in img appear infomation

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);


var infoIdol = [
    {
        name: 'Name ~ Suzu Mitake',
        birthDay: 'Date of birth ~ 23/9/1994',
        info: 'Suzu Mitake – 美竹すず sinh năm 1994 tại Tokyo, Nhật Bản. Cô sở hữu chiều cao 1m61 và số đo 3 vòng là 92-57-85. Mỹ nhân 9x bắt đầu bước chân vào ngành điện ảnh người lớn từ năm 2015. Cô là diễn viên độc quyền của hãng E-BODY, đến tháng 6 năm 2016 cô chấm dứt hợp đồng và đến tháng 7 cô trở thành diễn viên độc quyền của S1.',
        img: './assets/img/main-img/img_png-1.png',
        imgIfo: './assets/img/info-img/img-info-1.jpg',
        img1: './assets/img/img1/1.jpg',
        img2: './assets/img/img1/2.jpg',
        img3: './assets/img/img1/3.jpg',
        img4: './assets/img/img1/4.jpg',
    },
    {
        name: 'Name ~ Karen Kaede',
        birthDay: 'Date of birth ~ 25/08/1999',
        info: 'Karen Kaede sinh ngày 25 tháng 8 năm 1999, hiện cô là một diễn viên, người mẫu ảnh trong làng giải trí 18+. Gia nhập vào ngành giải trí vào tháng 9.2018 năm cô 19 tuổi, với tư cách là một người mẫu ảnh Gravure – Những bộ ảnh với khán giả đa số là nam giới. Cô quyết định chuyển sang gia nhập vào ngành phim người lớn và đầu quân cho công ty Idea Pocket (một công ty lớn đào tạo nhiều diễn viên JAV) nhân dịp thành lập 20 năm của hãng này.',
        img: './assets/img/main-img/img3.jpg',
        imgIfo: './assets/img/info-img/img-info-2.jpg',
        img1: './assets/img/img2/1.jpg',
        img2: './assets/img/img2/2.jpeg',
        img3: './assets/img/img2/3.jpeg',
        img4: './assets/img/img2/4.jpg',
    },
    {
        name: 'Name ~ Akari Tsumugi',
        birthDay: 'Date of birth ~ 31/03/1998',
        info: 'Số đo 3 vòng: B80 / W58 / H83. <br> Kích thước ngực: C Cup <br> Chiều cao: 155 cm <br>Nhóm máu: O <br>Quốc tịch: Nhật Bản',
        img: './assets/img/main-img/tsumugi-akari-35.webp',
        imgIfo: './assets/img/info-img/img-info-3.jpg',
        img1: './assets/img/img3/1.jpg',
        img2: './assets/img/img3/2.jpg',
        img3: './assets/img/img3/3.jpg',
        img4: './assets/img/img3/4.jpg',
    },
    {
        name: 'Name ~ Emiri Suzuhara',
        birthDay: 'Date of birth ~ 20/04/1994',
        info: 'Emiri Suzuhara sinh năm 1994, sở hữu một gương mặt xinh đẹp tựa thiên thần và chiều cao “đủ dùng” 1m60. Số đo 3 vòng của mỹ nhân 18+ là 85-60-88',
        img: './assets/img/main-img/img4.jpg',
        imgIfo: './assets/img/info-img/img-info-4.jpg',
        img1: './assets/img/img4/1.jpg',
        img2: './assets/img/img4/2.jpg',
        img3: './assets/img/img4/3.jpg',
        img4: './assets/img/img4/4.jpg',
    },
    {
        name: 'Name ~ Honoka Tsuji',
        birthDay: 'Date of birth ~ 29/6/1996',
        info: 'Số đo 3 vòng: B96 / W60 / H88 <br> Kích thước ngực: H Cup <br>Ngày Debut: Tháng 3/2019 <br>Cung hoàng đạo: Kim Ngưu<br> Chiều cao: 172cm ',
        img: './assets/img/main-img/img5.jpg',
        imgIfo: './assets/img/info-img/img-info-5.jpg',
        img1: './assets/img/img5/1.jpg',
        img2: './assets/img/img5/2.jpg',
        img3: './assets/img/img5/3.jpg',
        img4: './assets/img/img5/4.jpg',
    },
    {
        name: 'Name ~ Yua Mikami',
        birthDay: 'Date of birth ~ 16/08/1993',
        info: 'Nhắc đến Mikami người ta sẽ nghĩ ngay đến vẻ ngoài ngây thơ, trong sáng, cùng thân hình nóng bỏng đẹp không tì vết. Không phải nói quá nhưng cô quả thật xứng danh với biệt danh “thiên thần” mà báo giới đặt cho cô',
        img: './assets/img/main-img/img6.jpg',
        imgIfo: './assets/img/info-img/img-info-6.jpg',
        img1: './assets/img/img6/1.jpg',
        img2: './assets/img/img6/2.jpg',
        img3: './assets/img/img6/3.jpg',
        img4: './assets/img/img6/4.jpg',
    },
    {
        name: 'Name ~ Riri Nanatsumori',
        birthDay: 'Date of birth ~ 8/06/1995',
        info: 'Số đo 3 vòng: B96 / W60 / H88 <br> Kích thước ngực: H Cup <br>Ngày Debut: Tháng 3/2019 <br>Cung hoàng đạo: Kim Ngưu<br> Chiều cao: 172cm ',
        img: './assets/img/main-img/img7.jpg',
        imgIfo: './assets/img/info-img/img-info-7.jpg',
        img1: './assets/img/img7/1.jpg',
        img2: './assets/img/img7/2.jpg',
        img3: './assets/img/img7/3.jpg',
        img4: './assets/img/img7/4.jpg',
    },
    {
        name: 'Name ~ Remu Suzumori',
        birthDay: 'Date of birth ~ 03/12/1997',
        info: 'Số đo 3 vòng: B96 / W60 / H88 <br> Kích thước ngực: H Cup <br>Ngày Debut: Tháng 3/2019 <br>Cung hoàng đạo: Kim Ngưu<br> Chiều cao: 172cm ',
        img: './assets/img/main-img/img8.jpg',
        imgIfo: './assets/img/info-img/img-info-8.jpg',
        img1: './assets/img/img8/1.jpg',
        img2: './assets/img/img8/2.jpg',
        img3: './assets/img/img8/3.jpg',
        img4: './assets/img/img8/4.jpg',
    },
    {
        name: 'Name ~ Yukina-saeki',
        birthDay: 'Date of birth ~ 29/6/1996',
        info: 'Số đo 3 vòng: B96 / W60 / H88 <br> Kích thước ngực: H Cup <br>Ngày Debut: Tháng 3/2019 <br>Cung hoàng đạo: Kim Ngưu<br> Chiều cao: 172cm ',
        img: './assets/img/main-img/img9.jpg',
        imgIfo: './assets/img/info-img/img-info-9.jpg',
        img1: './assets/img/img9/1.jpg',
        img2: './assets/img/img9/2.jpg',
        img3: './assets/img/img9/3.jpg',
        img4: './assets/img/img9/4.jpg',
    },
]


function render() {
    const htmls = infoIdol.map(function (info, index) {
        return`
        <div class="grid wide actor-grap">
                <div class="actor-box_grap">
                    <div class="actor-box">
                        <i class="fas fa-heart actor-icon"></i>
                        <div class="actor-img_grap">
                            <img class="actor-img active" src="${info.img}" alt="">
                            <img class="actor-img" src="${info.img1}" alt="">
                            <img class="actor-img" src="${info.img2}" alt="">
                            <img class="actor-img" src="${info.img3}" alt="">
                            <img class="actor-img" src="${info.img4}" alt="">
                        </div>
        
                        <p class="actor-name">${info.name}</p>
                        <br>
                        <p class="actor-date">${info.birthDay}</p>
                        
                    </div>
        
                </div>
                <div class="actor-info">
                    <img class="actor-img--active" src="${info.imgIfo}" alt="">
                    <p class="actor-info--active">${info.info}</p> 
    
                </div>
                <i class="fas fa-arrow-circle-right arrow-active next"></i>
                <i class="fas fa-arrow-circle-left arrow-active previous"></i>
            </div>
        `
        
    })

    $('.mynu').innerHTML = htmls.join(' ')

}

render()


var getEle = $$('.actor-box')


getEle.forEach(function(item, index)
{
    item.onclick = function(e) 
    {
        $$('.actor-box')[index].classList.toggle('active');
        $$('.actor-info')[index].classList.toggle('active');
        $$('.actor-info--active')[index].classList.toggle('active');
        $$('.arrow-active.next')[index].classList.toggle('active');
        $$('.arrow-active.previous')[index].classList.toggle('active');

    }
})
// click on arrow and slide to left


// Biến kiểm tra số thứ tự của ảnh xuất hiện khi nhấn next
var index1 = 0;

// Hàm lặp qua từng nút next, xuất hiện khi rander

$$('.arrow-active.next').forEach(function(thing, index)
{
    // khi click vào next sử dụng phép toán với n là số ảnh, m là số lượng idol
    thing.onclick = function(e)
    {
        
        index1++;
        // Xóa tất cả các idol active hiện tại
        $$('.actor-img.active')[index].classList.remove('active');
        // imgUnit Lưu trữ số lượng img của một idol
        var imgUnit = $$('.actor-img').length/ infoIdol.length
        console.log(imgUnit)
        
        if(index1 >= imgUnit)
        {
            // đến ảnh cuối cùng thì quay lại ảnh đầu
            index1 = 0;
        }
        // Công thức tính đúng khi nhấn nút next của từng idol thì load ảnh đúng 
        // với index + 1 là hàng thứ vd index = 0 => hàng thứ nhất
        // imgUnit = n;
        $$('.actor-img')[(index+1)*imgUnit - imgUnit + index1].classList.add('active');      

    }   
})


// scale slider

animationSlider = function () {

    const sliders = $$(".slider-idol__img");

    

    var a = sliders.forEach( animation = (slider) => {
        slider.style.transform = "scale(1.1)"
        setTimeout(function () {
            slider.style.transform = "scale(1)"
        },1000)
        
    })

    

}

setInterval (animationSlider, 2000)