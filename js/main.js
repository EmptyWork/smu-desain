
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


// Javascript untuk navbar mobile

let tombolMobile = document.querySelectorAll('.navbar__more')[0];
let tombolTutup = document.querySelectorAll('.navbar__more')[1];
let navbarLokasi = document.querySelector('nav');
let navbarDiv = document.querySelector('.navbar__mobile')

let submenuNavbarMobile = navbarDiv.querySelectorAll('.navbar__submenu')

submenuNavbarMobile.forEach(sublinks => {
    sublinks.addEventListener('click', e => {
        let submenuActive = e.target.parentElement.parentElement
        console.log(submenuActive)
        if(submenuActive.classList.contains('open')) {
            submenuActive.classList.remove('open')
            submenuActive.nextElementSibling.classList.remove('open')
            setTimeout(() => {
                submenuActive.nextElementSibling.style.display = 'none'
            }, 200)
        } else {
            submenuActive.nextElementSibling.style.display = 'block'
            setTimeout(() => {
                submenuActive.nextElementSibling.classList.add('open')
            }, 200)
            submenuActive.classList.add('open')
        }
        // e.target.parentElement.nextElementSibling
    })
})

tombolMobile.addEventListener('click', e => {
    // console.log(navbarLokasi);
    if(tombolMobile.classList.contains('open')) {
        tombolMobile.classList.remove('open')
        document.body.classList.remove('menuOpen')
        navbarDiv.classList.remove('open')
    } else {
        tombolMobile.classList.add('open')
        document.body.classList.add('menuOpen')
        navbarDiv.classList.add('open')
    }
})

tombolTutup.addEventListener('click', e => {
    // console.log(navbarLokasi);
    if(tombolMobile.classList.contains('open')) {
        tombolMobile.classList.remove('open')
        document.body.classList.remove('menuOpen')
        navbarDiv.classList.remove('open')
    } else {
        tombolMobile.classList.add('open')
        document.body.classList.add('menuOpen')
        navbarDiv.classList.add('open')
    }
})

// testing area 

// document.body.addEventListener('click', e => {
//     console.log(e.target.classList)
// })