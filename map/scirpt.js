var map = L.map('map').setView([21.0285, 105.8542], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Tạo mảng chứa thông tin về các địa điểm và tọa độ của mũi tên đỏ
        var locations = [
            { name: 'SheCodes Shop', location: [21.0225, 105.8542], description: 'Bán bã cà phê lấy ngay', image: 'image/demo.jpg'},
            { name: 'Cosmos Cafe', location: [21.0233, 105.8522], description: 'Cung cấp địa điểm sỉ cà phê', image: 'image/demo.jpg' },
            { name: 'Hacker Cafe', location: [21.0245, 105.8537], description: 'Nơi bán bã cà phê và trao đổi cà phê', image: 'image/demo.jpg' }
        ];

        // Tạo một marker cho mỗi địa điểm và thêm vào bản đồ
        for (var i = 0; i < locations.length; i++) {
            var marker = L.marker(locations[i].location).addTo(map);
            
            // Thêm tooltip và bindPopup cho marker
            marker.bindTooltip(locations[i].name, {permanent: false, direction: 'auto'});
            marker.bindPopup('<h3>' + locations[i].name + '</h3>' + '<p>' + locations[i].description + '</p>');
            
            // Xử lý sự kiện khi di chuột vào marker
            marker.on('mouseover', function(e) {
                e.target.openTooltip();
            });

            // Xử lý sự kiện khi di chuột ra khỏi marker
            marker.on('mouseout', function(e) {
                e.target.closeTooltip();
            });
        }