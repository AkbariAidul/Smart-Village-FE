# Implementasi Highlight Active Submenu Parent

## Deskripsi
Script JavaScript telah ditambahkan ke semua file HTML untuk highlight submenu parent yang aktif berdasarkan halaman yang sedang dikunjungi user.

## Fungsi yang Ditambahkan

### 1. `highlightActiveSubmenu()`
Fungsi ini:
- Mendeteksi halaman saat ini dari URL
- Memetakan halaman ke submenu parent yang sesuai
- Menambahkan class `text-primary-700` dan `font-bold` ke submenu parent yang aktif
- Menghapus class `text-slate-500` (desktop) atau `text-slate-700` (mobile)

### 2. `toggleMobileSubmenu(button)`
Fungsi ini:
- Toggle submenu pada mobile view
- Rotate icon chevron saat submenu dibuka/ditutup

## Mapping Halaman ke Submenu

### Transparansi
- statistik.html
- apbdes.html
- penduduk.html

### Informasi
- berita.html
- kalender-kegiatan.html
- galeri.html
- faq.html

### Layanan
- layanan-surat.html
- cek-bansos.html
- pengaduan.html

## File yang Diupdate (17 file)

1. ✓ index.html
2. ✓ profil.html
3. ✓ statistik.html
4. ✓ penduduk.html
5. ✓ apbdes.html
6. ✓ peta-potensi.html
7. ✓ umkm.html
8. ✓ umkm-detail.html
9. ✓ partisipasi.html
10. ✓ program-pemberdayaan.html
11. ✓ berita.html
12. ✓ kalender-kegiatan.html
13. ✓ galeri.html
14. ✓ kontak.html
15. ✓ faq.html
16. ✓ cek-bansos.html
17. ✓ pengaduan.html
18. ✓ layanan-surat.html

## Cara Kerja

1. Ketika halaman dimuat, event listener `DOMContentLoaded` akan memanggil fungsi `highlightActiveSubmenu()`
2. Fungsi akan:
   - Mengambil nama file dari URL saat ini
   - Mencari submenu parent yang sesuai dari mapping
   - Menemukan button submenu di desktop dan mobile navigation
   - Menambahkan styling untuk highlight submenu yang aktif

## Contoh Penggunaan

Ketika user berada di halaman `statistik.html`:
- Submenu "Transparansi" akan di-highlight dengan warna primary-700 dan font bold
- Ini berlaku untuk desktop dan mobile view

## Styling yang Diterapkan

**Desktop:**
- Menambah: `text-primary-700`, `font-bold`
- Menghapus: `text-slate-500`

**Mobile:**
- Menambah: `text-primary-700`, `font-bold`
- Menghapus: `text-slate-700`

## Testing

Untuk memverifikasi implementasi:
1. Buka halaman statistik.html → Submenu "Transparansi" harus highlight
2. Buka halaman berita.html → Submenu "Informasi" harus highlight
3. Buka halaman layanan-surat.html → Submenu "Layanan" harus highlight
4. Test di mobile view untuk memastikan highlight juga bekerja di mobile menu
