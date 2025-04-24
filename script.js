const mahasiswa = JSON.parse(localStorage.getItem("mahasiswa")) || [];

function simpanKeStorage() {
  localStorage.setItem("mahasiswa", JSON.stringify(mahasiswa));
}

function tampilkanMahasiswa() {
  const tbody = document.querySelector("#tabelMahasiswa tbody");
  tbody.innerHTML = "";

  mahasiswa.forEach((mhs, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${mhs.nama}</td>
      <td>${mhs.nim}</td>
      <td><button onclick="hapusMahasiswa(${index})">Hapus</button></td>
    `;
    tbody.appendChild(row);
  });
}

function tambahMahasiswa() {
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;

  if (nama && nim) {
    mahasiswa.push({ nama, nim });
    simpanKeStorage();
    tampilkanMahasiswa();
    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
  } else {
    alert("Isi nama dan NIM dulu ya!");
  }
}

function hapusMahasiswa(index) {
  mahasiswa.splice(index, 1);
  simpanKeStorage();
  tampilkanMahasiswa();
}

tampilkanMahasiswa();
// Cek login dulu
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html"; // kalo belum login, balikin ke login page
  }
  