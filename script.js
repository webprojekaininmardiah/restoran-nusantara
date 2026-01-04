let menu = JSON.parse(localStorage.getItem("menu")) || [
    {
        nama: "Rendang",
        harga: 25000,
        deskripsi: "Masakan khas Minangkabau",
        gambar: "Rendang.jpg"
    },
    {
        nama: "Nasi Goreng",
        harga: 20000,
        deskripsi: "Nasi goreng khas Indonesia",
        gambar: "nasi_goreng.jpg"
    },
    {
        nama: "Sate Ayam",
        harga: 22000,
        deskripsi: "Sate ayam dengan bumbu kacang",
        gambar: "sate.jpg"
    },
    {
        nama: "Gudeg",
        harga: 23000,
        deskripsi: "Makanan khas Yogyakarta",
        gambar: "gudeg.jpg"
    },
    {
        nama: "Pempek",
        harga: 18000,
        deskripsi: "Makanan khas Palembang",
        gambar: "pempek.jpg"
    }
];

function simpanData() {
    localStorage.setItem("menu", JSON.stringify(menu));
}

function tampilMenu() {
    let table = document.getElementById("menuTable");
    table.innerHTML = "";

    menu.forEach((item, index) => {
        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.nama}</td>
            <td>Rp ${item.harga}</td>
            <td>${item.deskripsi}</td>
            <td><img src="${item.gambar}"></td>
            <td>
                <button onclick="editMenu(${index})">Edit</button>
                <button onclick="hapusMenu(${index})">Hapus</button>
            </td>
        </tr>
        `;
    });
}

document.getElementById("menuForm").addEventListener("submit", function(e) {
    e.preventDefault();

    if (harga.value <= 0) {
        alert("Harga harus lebih dari 0");
        return;
    }

    let data = {
        nama: nama.value,
        harga: harga.value,
        deskripsi: deskripsi.value,
        gambar: gambar.value
    };

    let index = document.getElementById("index").value;

    if (index === "") {
        menu.push(data);
    } else {
        menu[index] = data;
    }

    simpanData();
    this.reset();
    document.getElementById("index").value = "";
    tampilMenu();
});

function editMenu(index) {
    let item = menu[index];
    document.getElementById("index").value = index;
    nama.value = item.nama;
    harga.value = item.harga;
    deskripsi.value = item.deskripsi;
    gambar.value = item.gambar;
}

function hapusMenu(index) {
    if (confirm("Yakin ingin menghapus menu ini?")) {
        menu.splice(index, 1);
        simpanData();
        tampilMenu();
    }
}

tampilMenu();
