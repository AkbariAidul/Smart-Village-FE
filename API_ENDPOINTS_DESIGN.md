# API ENDPOINTS DESIGN
## Smart Village PERN Stack - Express.js REST API

---

## 🔐 AUTHENTICATION ENDPOINTS

### POST /api/auth/register
**Deskripsi:** Register user baru
**Role:** Public
**Request Body:**
```json
{
  "nik": "1234567890123456",
  "nama": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "telepon": "08123456789",
  "alamat": "Jl. Raya",
  "rt": "01",
  "rw": "02"
}
```
**Response:** 201 Created
```json
{
  "success": true,
  "message": "Registrasi berhasil",
  "data": {
    "id": 1,
    "email": "john@example.com",
    "nama": "John Doe"
  }
}
```

### POST /api/auth/login
**Deskripsi:** Login user/admin
**Role:** Public
**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
**Response:** 200 OK
```json
{
  "success": true,
  "message": "Login berhasil",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": 1,
      "email": "john@example.com",
      "nama": "John Doe",
      "role": "user"
    }
  }
}
```

### POST /api/auth/logout
**Deskripsi:** Logout user
**Role:** User, Admin, Super Admin
**Headers:** Authorization: Bearer {token}
**Response:** 200 OK

### POST /api/auth/refresh-token
**Deskripsi:** Refresh access token
**Role:** Public
**Request Body:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```
**Response:** 200 OK

---

## 👤 USER ENDPOINTS

### GET /api/users/profile
**Deskripsi:** Get profil user yang login
**Role:** User, Admin, Super Admin
**Response:** 200 OK
```json
{
  "success": true,
  "data": {
    "id": 1,
    "nik": "1234567890123456",
    "nama": "John Doe",
    "email": "john@example.com",
    "telepon": "08123456789",
    "alamat": "Jl. Raya",
    "rt": "01",
    "rw": "02",
    "dusun": "Dusun 1",
    "jenis_kelamin": "L",
    "tanggal_lahir": "1990-01-01",
    "pekerjaan": "Petani",
    "pendidikan": "SMA",
    "status_perkawinan": "Kawin",
    "foto_profil": "/images/profile.jpg"
  }
}
```

### PUT /api/users/profile
**Deskripsi:** Update profil user
**Role:** User, Admin, Super Admin
**Request Body:**
```json
{
  "nama": "John Doe Updated",
  "telepon": "08123456789",
  "alamat": "Jl. Raya Baru",
  "pekerjaan": "Pedagang"
}
```
**Response:** 200 OK

### PUT /api/users/password
**Deskripsi:** Ubah password user
**Role:** User, Admin, Super Admin
**Request Body:**
```json
{
  "password_lama": "password123",
  "password_baru": "password456"
}
```
**Response:** 200 OK

### GET /api/users/dashboard
**Deskripsi:** Get dashboard user
**Role:** User
**Response:** 200 OK
```json
{
  "success": true,
  "data": {
    "greeting": "Selamat datang, John Doe",
    "statistik": {
      "total_surat": 5,
      "total_pengaduan": 2,
      "total_program": 1,
      "total_bansos": 3
    },
    "notifikasi_penting": [
      {
        "id": 1,
        "judul": "Surat Anda Disetujui",
        "pesan": "Surat pengantar Anda telah disetujui",
        "created_at": "2026-01-17T10:00:00Z"
      }
    ],
    "aktivitas_terbaru": []
  }
}
```

### GET /api/users/riwayat
**Deskripsi:** Get riwayat layanan user
**Role:** User
**Query Params:** type (surat, pengaduan, program, bansos), page, limit
**Response:** 200 OK

---

## 📰 BERITA ENDPOINTS

### GET /api/berita
**Deskripsi:** Get daftar berita
**Role:** Public
**Query Params:** kategori, page, limit, search
**Response:** 200 OK
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "judul": "Pembangunan Jalan Desa Tahap 2",
      "slug": "pembangunan-jalan-desa-tahap-2",
      "kategori": "infrastruktur",
      "ringkasan": "Pemerintah desa memulai pembangunan jalan...",
      "foto_utama": "/images/berita1.jpg",
      "penulis": "Admin Desa",
      "tanggal_publikasi": "2026-01-15T10:00:00Z",
      "views": 245,
      "likes": 12
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50
  }
}
```

### GET /api/berita/:id
**Deskripsi:** Get detail berita
**Role:** Public
**Response:** 200 OK

### POST /api/berita
**Deskripsi:** Buat berita baru
**Role:** Admin, Super Admin
**Request Body:**
```json
{
  "judul": "Pembangunan Jalan Desa Tahap 2",
  "kategori": "infrastruktur",
  "konten": "Pemerintah desa memulai pembangunan jalan...",
  "ringkasan": "Ringkasan berita",
  "foto_utama": "file"
}
```
**Response:** 201 Created

### PUT /api/berita/:id
**Deskripsi:** Update berita
**Role:** Admin, Super Admin
**Response:** 200 OK

### DELETE /api/berita/:id
**Deskripsi:** Hapus berita
**Role:** Admin, Super Admin
**Response:** 200 OK

### POST /api/berita/:id/like
**Deskripsi:** Like berita
**Role:** User, Admin, Super Admin
**Response:** 200 OK

---

## 📋 SURAT ENDPOINTS

### GET /api/surat
**Deskripsi:** Get daftar permohonan surat
**Role:** User (own), Admin, Super Admin
**Query Params:** status, page, limit
**Response:** 200 OK

### GET /api/surat/:id
**Deskripsi:** Get detail permohonan surat
**Role:** User (own), Admin, Super Admin
**Response:** 200 OK

### POST /api/surat
**Deskripsi:** Buat permohonan surat baru
**Role:** User
**Request Body:**
```json
{
  "jenis_surat": "pengantar",
  "data_surat": {
    "keperluan": "Membuat KTP",
    "keterangan": "Untuk keperluan administrasi"
  },
  "dokumen_pendukung": "file"
}
```
**Response:** 201 Created

### PUT /api/surat/:id
**Deskripsi:** Update permohonan surat (draft)
**Role:** User (own)
**Response:** 200 OK

### POST /api/surat/:id/submit
**Deskripsi:** Submit permohonan surat
**Role:** User (own)
**Response:** 200 OK

### POST /api/surat/:id/approve
**Deskripsi:** Approve permohonan surat
**Role:** Admin, Super Admin
**Request Body:**
```json
{
  "catatan": "Disetujui"
}
```
**Response:** 200 OK

### POST /api/surat/:id/reject
**Deskripsi:** Reject permohonan surat
**Role:** Admin, Super Admin
**Request Body:**
```json
{
  "alasan_penolakan": "Data tidak lengkap"
}
```
**Response:** 200 OK

### GET /api/surat/:id/download
**Deskripsi:** Download surat digital
**Role:** User (own), Admin, Super Admin
**Response:** 200 OK (file)

---

## 🎓 PROGRAM ENDPOINTS

### GET /api/program
**Deskripsi:** Get daftar program pemberdayaan
**Role:** Public
**Query Params:** kategori, status, page, limit, search
**Response:** 200 OK

### GET /api/program/:id
**Deskripsi:** Get detail program
**Role:** Public
**Response:** 200 OK

### POST /api/program
**Deskripsi:** Buat program baru
**Role:** Admin, Super Admin
**Request Body:**
```json
{
  "nama_program": "Pelatihan Menjahit",
  "kategori": "pelatihan",
  "deskripsi": "Program pelatihan menjahit untuk meningkatkan keterampilan",
  "target_peserta": 25,
  "tanggal_mulai": "2026-02-01",
  "tanggal_selesai": "2026-03-15",
  "durasi_minggu": 8,
  "lokasi": "Balai Desa"
}
```
**Response:** 201 Created

### PUT /api/program/:id
**Deskripsi:** Update program
**Role:** Admin, Super Admin
**Response:** 200 OK

### DELETE /api/program/:id
**Deskripsi:** Hapus program
**Role:** Admin, Super Admin
**Response:** 200 OK

### POST /api/program/:id/daftar
**Deskripsi:** Daftar program
**Role:** User
**Response:** 201 Created

### GET /api/program/:id/peserta
**Deskripsi:** Get daftar peserta program
**Role:** Admin, Super Admin
**Response:** 200 OK

### POST /api/program/:id/peserta/:pesertaId/approve
**Deskripsi:** Approve peserta program
**Role:** Admin, Super Admin
**Response:** 200 OK

---

## 🎤 PENGADUAN ENDPOINTS

### GET /api/pengaduan
**Deskripsi:** Get daftar pengaduan
**Role:** User (own), Admin, Super Admin
**Query Params:** status, kategori, page, limit
**Response:** 200 OK

### GET /api/pengaduan/:id
**Deskripsi:** Get detail pengaduan
**Role:** User (own), Admin, Super Admin
**Response:** 200 OK

### POST /api/pengaduan
**Deskripsi:** Buat pengaduan baru
**Role:** User
**Request Body:**
```json
{
  "kategori": "infrastruktur",
  "judul": "Jalan Rusak di Dusun 1",
  "deskripsi": "Jalan di depan rumah saya rusak parah",
  "lokasi": "Dusun 1, RT 01",
  "bukti_foto": "file"
}
```
**Response:** 201 Created

### PUT /api/pengaduan/:id
**Deskripsi:** Update pengaduan (draft)
**Role:** User (own)
**Response:** 200 OK

### POST /api/pengaduan/:id/submit
**Deskripsi:** Submit pengaduan
**Role:** User (own)
**Response:** 200 OK

### POST /api/pengaduan/:id/assign
**Deskripsi:** Assign pengaduan ke petugas
**Role:** Admin, Super Admin
**Request Body:**
```json
{
  "admin_id": 2
}
```
**Response:** 200 OK

### PUT /api/pengaduan/:id/status
**Deskripsi:** Update status pengaduan
**Role:** Admin, Super Admin
**Request Body:**
```json
{
  "status": "selesai",
  "respons_pemerintah": "Jalan sudah diperbaiki"
}
```
**Response:** 200 OK

### POST /api/pengaduan/:id/rating
**Deskripsi:** Beri rating pengaduan
**Role:** User (own)
**Request Body:**
```json
{
  "rating_kepuasan": 4
}
```
**Response:** 200 OK

---

## 🤝 PARTISIPASI ENDPOINTS

### GET /api/musyawarah
**Deskripsi:** Get daftar musyawarah
**Role:** Public
**Query Params:** status, page, limit
**Response:** 200 OK

### GET /api/musyawarah/:id
**Deskripsi:** Get detail musyawarah
**Role:** Public
**Response:** 200 OK

### POST /api/musyawarah
**Deskripsi:** Buat musyawarah baru
**Role:** Admin, Super Admin
**Request Body:**
```json
{
  "nama_musyawarah": "Musyawarah Pembangunan Infrastruktur",
  "deskripsi": "Pembahasan rencana pembangunan jalan desa",
  "tanggal": "2026-01-25T19:00:00Z",
  "lokasi": "Balai Desa",
  "peserta_target": 50
}
```
**Response:** 201 Created

### POST /api/musyawarah/:id/daftar
**Deskripsi:** Daftar musyawarah
**Role:** User
**Response:** 201 Created

### GET /api/forum-diskusi
**Deskripsi:** Get daftar forum diskusi
**Role:** Public
**Query Params:** kategori, page, limit, search
**Response:** 200 OK

### POST /api/forum-diskusi
**Deskripsi:** Buat topik forum baru
**Role:** User
**Request Body:**
```json
{
  "judul": "Bagaimana cara mengurus surat pengantar?",
  "deskripsi": "Saya ingin tahu prosesnya",
  "kategori": "layanan"
}
```
**Response:** 201 Created

### POST /api/forum-diskusi/:id/komentar
**Deskripsi:** Beri komentar di forum
**Role:** User
**Request Body:**
```json
{
  "komentar": "Anda bisa datang ke kantor desa dengan membawa KTP"
}
```
**Response:** 201 Created

### GET /api/polling
**Deskripsi:** Get daftar polling
**Role:** Public
**Response:** 200 OK

### POST /api/polling/:id/vote
**Deskripsi:** Vote polling
**Role:** User
**Request Body:**
```json
{
  "opsi_id": 1
}
```
**Response:** 200 OK

---

## 🏪 UMKM ENDPOINTS

### GET /api/umkm
**Deskripsi:** Get daftar UMKM
**Role:** Public
**Query Params:** kategori, page, limit, search
**Response:** 200 OK

### GET /api/umkm/:id
**Deskripsi:** Get detail UMKM
**Role:** Public
**Response:** 200 OK

### POST /api/umkm
**Deskripsi:** Daftar UMKM baru
**Role:** User
**Request Body:**
```json
{
  "nama_umkm": "Toko Kelontong Jaya",
  "kategori": "perdagangan",
  "deskripsi": "Toko kelontong menjual kebutuhan sehari-hari",
  "alamat": "Jl. Raya Dusun 1",
  "telepon": "08123456789",
  "jam_operasional": "08:00 - 20:00"
}
```
**Response:** 201 Created

### PUT /api/umkm/:id
**Deskripsi:** Update UMKM
**Role:** User (owner)
**Response:** 200 OK

### GET /api/umkm/:id/produk
**Deskripsi:** Get daftar produk UMKM
**Role:** Public
**Response:** 200 OK

### POST /api/umkm/:id/produk
**Deskripsi:** Tambah produk UMKM
**Role:** User (owner)
**Request Body:**
```json
{
  "nama_produk": "Mie Instan",
  "harga": 3000,
  "stok": 100,
  "kategori": "makanan"
}
```
**Response:** 201 Created

### POST /api/umkm/:id/review
**Deskripsi:** Beri review UMKM
**Role:** User
**Request Body:**
```json
{
  "rating": 4,
  "komentar": "Pelayanan bagus, harga terjangkau"
}
```
**Response:** 201 Created

---

## 🖼️ GALERI ENDPOINTS

### GET /api/galeri
**Deskripsi:** Get daftar galeri
**Role:** Public
**Query Params:** kategori, tipe, page, limit
**Response:** 200 OK

### POST /api/galeri
**Deskripsi:** Upload galeri baru
**Role:** Admin, Super Admin
**Request Body:** FormData
```
judul: "Kegiatan Musyawarah Desa"
deskripsi: "Dokumentasi musyawarah desa bulan Januari"
kategori: "kegiatan"
tipe: "foto"
file: <file>
```
**Response:** 201 Created

### POST /api/galeri/:id/like
**Deskripsi:** Like galeri
**Role:** User, Admin, Super Admin
**Response:** 200 OK

---

## 📊 ADMIN ENDPOINTS

### GET /api/admin/dashboard
**Deskripsi:** Get admin dashboard
**Role:** Admin, Super Admin
**Response:** 200 OK
```json
{
  "success": true,
  "data": {
    "statistik": {
      "total_berita": 25,
      "total_pengaduan": 15,
      "total_surat": 42,
      "total_program": 8
    },
    "pending": {
      "surat_pending": 5,
      "pengaduan_pending": 3,
      "program_pending": 2
    },
    "aktivitas_terbaru": []
  }
}
```

### GET /api/admin/laporan
**Deskripsi:** Get laporan admin
**Role:** Admin, Super Admin
**Query Params:** tipe (berita, pengaduan, surat, program), periode, format (json, pdf, excel)
**Response:** 200 OK

### GET /api/admin/notifikasi
**Deskripsi:** Get notifikasi admin
**Role:** Admin, Super Admin
**Response:** 200 OK

---

## 👥 SUPER ADMIN ENDPOINTS

### GET /api/superadmin/dashboard
**Deskripsi:** Get super admin dashboard
**Role:** Super Admin
**Response:** 200 OK

### GET /api/superadmin/users
**Deskripsi:** Get daftar user
**Role:** Super Admin
**Query Params:** page, limit, search, status
**Response:** 200 OK

### POST /api/superadmin/users/:id/deactivate
**Deskripsi:** Deactivate user
**Role:** Super Admin
**Response:** 200 OK

### GET /api/superadmin/admins
**Deskripsi:** Get daftar admin
**Role:** Super Admin
**Response:** 200 OK

### POST /api/superadmin/admins
**Deskripsi:** Buat admin baru
**Role:** Super Admin
**Request Body:**
```json
{
  "username": "admin1",
  "email": "admin1@example.com",
  "password": "password123",
  "nama": "Admin Desa",
  "jabatan": "Sekretaris Desa",
  "role_id": 2
}
```
**Response:** 201 Created

### PUT /api/superadmin/admins/:id
**Deskripsi:** Update admin
**Role:** Super Admin
**Response:** 200 OK

### DELETE /api/superadmin/admins/:id
**Deskripsi:** Hapus admin
**Role:** Super Admin
**Response:** 200 OK

### GET /api/superadmin/settings
**Deskripsi:** Get pengaturan sistem
**Role:** Super Admin
**Response:** 200 OK

### PUT /api/superadmin/settings
**Deskripsi:** Update pengaturan sistem
**Role:** Super Admin
**Request Body:**
```json
{
  "nama_desa": "Desa Sungai Pitung",
  "email_desa": "info@sungaipitung.id",
  "telepon_desa": "08123456789"
}
```
**Response:** 200 OK

### GET /api/superadmin/audit-log
**Deskripsi:** Get audit log
**Role:** Super Admin
**Query Params:** user_id, aksi, modul, page, limit
**Response:** 200 OK

### POST /api/superadmin/backup
**Deskripsi:** Buat backup database
**Role:** Super Admin
**Response:** 200 OK

### GET /api/superadmin/backup
**Deskripsi:** Get daftar backup
**Role:** Super Admin
**Response:** 200 OK

### POST /api/superadmin/restore
**Deskripsi:** Restore database dari backup
**Role:** Super Admin
**Request Body:**
```json
{
  "backup_id": 1
}
```
**Response:** 200 OK

---

## 🔔 NOTIFIKASI ENDPOINTS

### GET /api/notifikasi
**Deskripsi:** Get notifikasi user
**Role:** User, Admin, Super Admin
**Query Params:** is_read, page, limit
**Response:** 200 OK

### PUT /api/notifikasi/:id/read
**Deskripsi:** Mark notifikasi sebagai read
**Role:** User, Admin, Super Admin
**Response:** 200 OK

### PUT /api/notifikasi/read-all
**Deskripsi:** Mark semua notifikasi sebagai read
**Role:** User, Admin, Super Admin
**Response:** 200 OK

---

## 📝 ERROR RESPONSES

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validasi gagal",
  "errors": {
    "email": "Email tidak valid",
    "password": "Password minimal 8 karakter"
  }
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Token tidak valid atau expired"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "message": "Anda tidak memiliki akses ke resource ini"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Resource tidak ditemukan"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Terjadi kesalahan pada server"
}
```

---

**API endpoints ini dirancang untuk mendukung Smart Village system dengan PERN stack.**

