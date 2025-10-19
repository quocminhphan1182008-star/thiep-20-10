// 1. Chức năng Mở/Đóng Thiệp
const cardModal = document.getElementById('card-modal');
const openBtn = document.getElementById('open-card-btn');
const nameInput = document.getElementById('name-input');
const recipientSpan = document.getElementById('recipient-name');

openBtn.onclick = function() {
    cardModal.style.display = "block";
    setTimeout(() => {
        cardModal.classList.add('open');
    }, 10); 
}

function closeCard() {
    cardModal.classList.remove('open');
    setTimeout(() => {
        cardModal.style.display = "none";
    }, 300); 
}

// 2. Chức năng Cá nhân hóa tên người nhận
nameInput.oninput = function() {
    const newName = nameInput.value.trim();
    if (newName) {
        recipientSpan.textContent = newName;
    } else {
        recipientSpan.textContent = 'Người Phụ Nữ Tuyệt Vời';
    }
}

// 3. Chức năng Đồng hồ Đếm ngược
function startCountdown() {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 9, 20, 0, 0, 0); 
    
    if (now.getMonth() > 9 || (now.getMonth() === 9 && now.getDate() >= 20)) {
        targetDate.setFullYear(now.getFullYear() + 1);
    }
    
    const countdownElement = document.getElementById('countdown');

    const updateCountdown = setInterval(() => {
        const nowTime = new Date().getTime();
        const distance = targetDate.getTime() - nowTime;

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance > 0) {
             countdownElement.innerHTML = `⏳ Còn ${d} ngày, ${h} giờ, ${m} phút, ${s} giây`;
        } else {
            clearInterval(updateCountdown);
            countdownElement.innerHTML = "✨ CHÚC MỪNG 20/10! ✨";
        }
    }, 1000);
}

// 4. Hiệu ứng Ảnh Rơi (sử dụng emoji 🌹)
function createFallItem() {
    const item = document.createElement('div');
    item.classList.add('fall-item');
    
    // Đặt nội dung hiển thị (Ví dụ: Emoji, bạn có thể thay bằng các emoji khác: 💖, 🎁, 🌟)
    item.innerHTML = '❤️'; 
    
    // Vị trí ngẫu nhiên
    item.style.left = Math.random() * window.innerWidth + 'px';
    
    // Kích thước ngẫu nhiên (dùng font-size cho emoji)
    const size = Math.random() * 15 + 15; // 15px đến 30px
    item.style.fontSize = size + 'px'; 

    // Thời gian rơi ngẫu nhiên
    item.style.animationDuration = Math.random() * 10 + 5 + 's'; 
    // Độ trễ ngẫu nhiên để rơi liên tục
    item.style.animationDelay = Math.random() * 5 + 's'; 

    document.querySelector('.fall-items-container').appendChild(item);

    // Xóa phần tử sau khi rơi xong để tiết kiệm bộ nhớ và tạo lại
    item.onanimationend = () => {
        item.remove();
        createFallItem(); 
    };
}

// Khởi tạo nhiều phần tử rơi khi tải trang
function startFallEffect() {
    for (let i = 0; i < 50; i++) { // Số lượng phần tử rơi
        createFallItem();
    }
}

// Bắt đầu tất cả các chức năng khi trang tải xong
window.onload = function() {
    startCountdown();
    startFallEffect(); // Thay đổi ở đây để gọi hàm mới
}
