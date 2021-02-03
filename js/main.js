
// Javascript untuk Tahun pembuatan
const keTanggal = document.querySelector('.tahunbuat');
const diBuat = 2020;
const tahun = new Date();
(() => {(diBuat !== tahun.getFullYear()) ? keTanggal.innerHTML = `${diBuat} - ${tahun.getFullYear()}` : keTanggal.innerHTML = diBuat;})()

// Javascript untuk pemberitahuan Lomba/Kegiatan

let tempatTunjuk = document.querySelector('.landingpage__event')
let daftarLomba = [
    '<strong>Lomba</strong> Pembuatan Logo resmi Senat Mahasiswa Universitas <a href="#" target="_blank">https://smu.ukim.ac.id/lomba01</a>', // id: 0
    '<strong>Kegiatan</strong> Pembuatan kartu mahasiswa <a href="#" target="_blank">https://smu.ukim.ac.id/kegiatan01</a>', // id: 1
    '<strong>Lomba</strong> Dinas Pendidikan dan Perguruan tinggi <a href="#" target="_blank">https://smu.ukim.ac.id/lomba02</a>', // id: 2
    '<strong>Kegiatan</strong> Peduli Gempa di Sulawesi <a href="#" target="_blank">https://smu.ukim.ac.id/kegiatan02</a>' // id: 3
]
let index = Math.floor(Math.random() * daftarLomba.length)

if(tempatTunjuk) tempatTunjuk.innerHTML = daftarLomba[index]
const gantiLomba = () => {
    nextLomba(daftarLomba, tempatTunjuk)
}

const nextLomba = (_daftarLomba, _base) => {
    if(_base) _base.innerHTML = daftarLomba[index];
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
        // let sublinksOpen = document.querySelector('.navbar__sublinks.open')
        let submenuActive = (e.target.classList.contains('link__containsubmenu')) ? e.target.parentElement.parentElement : e.target
        // if(sublinksOpen && sublinksOpen !== submenuActive){
        //     sublinksOpen.classList.remove('open')
        //     sublinksOpen.previousElementSibling.classList.remove('open')
        //     setTimeout(() => {
        //         sublinksOpen.display = 'none'
        //     }, 200)
        // }
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


// Javascript untuk profile anggota

let paraAnggota = document.querySelectorAll('.pengurus')

paraAnggota.forEach(anggota => {
    anggota.addEventListener('click', e => {

    })
})


// Javascript untuk Laporan

let laporan = document.querySelector('.laporan__section-input')

laporan.addEventListener('click', () => {
    buatPemberitahuan(23, 'Error: Laporan masih belum bisa di gunakan', 'error', 1)
})

const buatPemberitahuan = (id, data, type, auto) => {
    let contentBaru = document.createElement('div')
    let pemberitahuanTempat = document.querySelector('.pemberitahuan__container')

    contentBaru.setAttribute('data-id', id)
    contentBaru.classList.add('pemberitahuan__card')
    let keluar = document.createElement('div')
    keluar.classList.add('pemberitahuan__card-keluar')
    if(type === 'error') contentBaru.classList.add('pemberitahuan__card-red')
    else if(type === 'berhasil') contentBaru.classList.add('pemberitahuan__card-green')
    contentBaru.textContent = data;
    
    pemberitahuanTempat.appendChild(contentBaru);
    contentBaru.appendChild(keluar)
    let tutup = document.querySelectorAll('.pemberitahuan__card-keluar')
    
    tutup.forEach(tutup => {
        tutup.addEventListener('click', e => {
            // console.log(e.target)
            e.target.parentElement.remove()
        })
    })
    
    setTimeout(() => {
        if(auto) {
            contentBaru.remove()
        }
    }, 4000)
}

// Javascript Pemberitahuan tentang Eksperimental Features

let eksperimental = document.querySelectorAll('[data-experen]')

// console.log(eksperimental)

eksperimental.forEach(expren => {
    expren.addEventListener('click', () => {
        buatPemberitahuan(Math.floor(Math.random() * 20), 'Feature ini masih belum tersedia, atau masih dalam Eksperimental')
    })
})


let tutup = document.querySelectorAll('.pemberitahuan__card-keluar')

tutup.forEach(tutup => {
    tutup.addEventListener('click', e => {
        // console.log(e.target)
        e.target.parentElement.remove()
    })
})