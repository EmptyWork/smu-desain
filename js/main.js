
// Javascript untuk Tahun pembuatan
const keTanggal = document.querySelector('.tahunbuat');
const diBuat = 2021;
const tahun = new Date();
(() => {(diBuat !== tahun.getFullYear()) ? keTanggal.innerHTML = `${diBuat} - ${tahun.getFullYear()}<br/>` : keTanggal.innerHTML = diBuat;})()

// Javascript untuk pemberitahuan Lomba/Kegiatan

let tempatTunjuk = document.querySelector('.landingpage__event')
let daftarLomba = [
    '<strong>Lomba</strong> Pembuatan Logo resmi Senat Mahasiswa Universitas <a href="#" target="_blank">https://smu.ukim.ac.id/lomba01</a>', // id: 0
    '<strong>Kegiatan</strong> Pembuatan kartu mahasiswa <a href="#" target="_blank">https://smu.ukim.ac.id/kegiatan01</a>', // id: 1
    '<strong>Lomba</strong> Dinas Pendidikan dan Perguruan tinggi <a href="#" target="_blank">https://smu.ukim.ac.id/lomba02</a>', // id: 2
    '<strong>Kegiatan</strong> Peduli Gempa di Sulawesi <a href="#" target="_blank">https://smu.ukim.ac.id/kegiatan02</a>' // id: 3
]
let index = Math.floor(Math.random() * daftarLomba.length)

tempatTunjuk.innerHTML = daftarLomba[index]
const gantiLomba = () => {
    nextLomba(daftarLomba, tempatTunjuk)
}

const nextLomba = (_daftarLomba, _base) => {
    _base.innerHTML = daftarLomba[index];
    (index >= daftarLomba.length - 1) ? index = 0: index++;
}

window.setInterval(gantiLomba, 6000)