# ROLE-BASED ACCESS CONTROL (RBAC) SYSTEM
## Smart Village Desa Sungai Pitung - PERN Stack Implementation

**Tanggal:** 17 Januari 2026  
**Status:** Design & Architecture  
**Stack:** PostgreSQL, Express, React, Node.js

---

## 📋 OVERVIEW SISTEM ROLE

Sistem akan memiliki **4 role utama** dengan permission dan tampilan yang berbeda:

### Role Hierarchy
```
Super Admin (Kepala Desa)
    ↓
Admin (Aparat/Perangkat Desa)
    ↓
User (Penduduk/Pengunjung)
    ↓
Guest (Pengunjung Tanpa Login)
```

---

## 🔐 ROLE 1: GUEST (Pengunjung Tanpa Login)

### Akses & Tampilan
- **Status:** Public/Tidak perlu login
- **Tujuan:** Melihat informasi publik desa
- **Durasi Akses:** Unlimited

### Halaman yang Bisa Diakses
✅ Dashboard (index.html) - Limited view
✅ Profil Desa (profil.html)
✅ Peta Potensi (peta-potensi.html)
✅ UMKM (umkm.html, umkm-detail.html)
✅ Berita (berita.html)
✅ Kalender Kegiatan (kalender-kegiatan.html)
✅ Galeri (galeri.html)
✅ FAQ (faq.html)
✅ Kontak (kontak.html)

### Fitur yang TIDAK Bisa Diakses
❌ Partisipasi Masyarakat (perlu login)
❌ Program Pemberdayaan (perlu login)
❌ Layanan Surat (perlu login)
❌ Cek Bansos (perlu login)
❌ Pengaduan (perlu login)
❌ Dashboard Admin
❌ Data Kependudukan (perlu login)
❌ Transparansi APBDes (limited)

### Fitur Khusus Guest
- Lihat berita & informasi
- Lihat kalender kegiatan
- Lihat galeri
- Lihat profil UMKM
- Lihat peta potensi
- Hubungi desa (form kontak)

### UI/UX Khusus
- Tombol "Login" di navbar
- Tombol "Daftar" di navbar
- CTA (Call-to-Action) untuk login di fitur-fitur tertentu
- Limited view untuk statistik/data sensitif
- Watermark "Silakan login untuk akses penuh" pada beberapa section

---

## 👤 ROLE 2: USER (Penduduk/Pengunjung Terdaftar)

### Akses & Tampilan
- **Status:** Perlu login dengan email/NIK
- **Tujuan:** Mengakses layanan publik & partisipasi
- **Durasi Akses:** Unlimited (sampai logout)

### Halaman yang Bisa Diakses
✅ Semua halaman Guest
✅ Partisipasi Masyarakat (partisipasi.html)
✅ Program Pemberdayaan (program-pemberdayaan.html)
✅ Layanan Surat (layanan-surat.html)
✅ Cek Bansos (cek-bansos.html)
✅ Pengaduan (pengaduan.html)
✅ Dashboard User (user-dashboard.html) - NEW
✅ Profil User (user-profile.html) - NEW
✅ Riwayat Layanan (user-history.html) - NEW

### Fitur yang TIDAK Bisa Diakses
❌ Dashboard Admin
❌ Manajemen Data
❌ Laporan Sistem
❌ Manajemen User
❌ Approval Workflow

### Fitur Khusus User

#### A. Partisipasi Masyarakat
- Daftar musyawarah
- Berpartisipasi dalam forum diskusi
- Vote/polling
- Lihat hasil keputusan musyawarah
- Lihat dokumentasi musyawarah

#### B. Program Pemberdayaan
- Lihat daftar program
- Daftar program pemberdayaan
- Lihat jadwal kegiatan
- Download materi pembelajaran
- Lihat sertifikat (jika sudah selesai)
- Beri rating & feedback

#### C. Layanan Publik
- Buat surat (pengantar, domisili, usaha, dll)
- Tracking status permohonan
- Upload dokumen pendukung
- Download surat digital
- Riwayat permohonan surat

#### D. Cek Bansos
- Cek status penerima bansos
- Lihat detail bansos yang diterima
- Lihat jadwal pencairan
- Lihat riwayat bansos

#### E. Pengaduan & Aspirasi
- Buat pengaduan
- Upload bukti/foto
- Tracking status pengaduan
- Lihat respons pemerintah
- Beri rating kepuasan
- Lihat riwayat pengaduan

#### F. Dashboard User
- Ringkasan aktivitas (permohonan surat, pengaduan, program, dll)
- Notifikasi penting
- Shortcut ke layanan favorit
- Statistik personal (surat yang dibuat, pengaduan, dll)

#### G. Profil User
- Edit profil (nama, email, telepon, alamat, RT/RW, dll)
- Ubah password
- Lihat data pribadi (NIK, KK, dll)
- Preferensi notifikasi
- Riwayat login

#### H. Riwayat Layanan
- Riwayat permohonan surat
- Riwayat pengaduan
- Riwayat program yang diikuti
- Riwayat bansos
- Export riwayat (PDF)

### UI/UX Khusus User
- Greeting "Selamat datang, [Nama]" di dashboard
- User avatar/profile picture
- Notifikasi bell icon
- Dropdown menu user (Profile, Settings, Logout)
- Dashboard dengan widget ringkasan
- Sidebar untuk navigasi layanan

---

## 👨‍💼 ROLE 3: ADMIN (Aparat/Perangkat Desa)

### Akses & Tampilan
- **Status:** Perlu login dengan email/username
- **Tujuan:** Mengelola data, layanan, & konten
- **Durasi Akses:** Unlimited (sampai logout)
- **Contoh:** Sekretaris Desa, Bendahara, Kepala Bidang, dll

### Halaman yang Bisa Diakses
✅ Semua halaman User
✅ Admin Dashboard (admin-dashboard.html) - NEW
✅ Manajemen Berita (admin-berita.html) - NEW
✅ Manajemen Kalender (admin-kalender.html) - NEW
✅ Manajemen Program (admin-program.html) - NEW
✅ Manajemen Layanan Surat (admin-layanan-surat.html) - NEW
✅ Manajemen Pengaduan (admin-pengaduan.html) - NEW
✅ Manajemen Partisipasi (admin-partisipasi.html) - NEW
✅ Manajemen UMKM (admin-umkm.html) - NEW
✅ Manajemen Galeri (admin-galeri.html) - NEW
✅ Laporan & Analytics (admin-laporan.html) - NEW
✅ Manajemen Konten (admin-konten.html) - NEW

### Fitur yang TIDAK Bisa Diakses
❌ Manajemen User (hanya Super Admin)
❌ Manajemen Admin (hanya Super Admin)
❌ Pengaturan Sistem (hanya Super Admin)
❌ Audit Log (hanya Super Admin)
❌ Backup & Restore (hanya Super Admin)

### Fitur Khusus Admin

#### A. Admin Dashboard
- Ringkasan statistik (berita, pengaduan, surat, program, dll)
- Chart/grafik aktivitas
- Notifikasi pending (surat, pengaduan, program, dll)
- Quick actions (buat berita, approve surat, dll)
- Aktivitas terbaru

#### B. Manajemen Berita
- CRUD berita (Create, Read, Update, Delete)
- Kategori berita
- Publish/unpublish berita
- Schedule publikasi
- Upload gambar/video
- Preview berita
- Lihat statistik (views, likes, comments)

#### C. Manajemen Kalender
- CRUD kegiatan
- Kategori kegiatan
- Jadwal kegiatan
- Peserta terdaftar
- Dokumentasi kegiatan
- Notifikasi peserta

#### D. Manajemen Program Pemberdayaan
- CRUD program
- Kategori program
- Peserta program
- Jadwal kegiatan
- Materi pembelajaran
- Sertifikat peserta
- Hasil/dampak program

#### E. Manajemen Layanan Surat
- Lihat permohonan surat
- Approve/reject permohonan
- Generate surat digital
- Tracking status
- Notifikasi pemohon
- Laporan surat

#### F. Manajemen Pengaduan
- Lihat pengaduan masuk
- Assign pengaduan ke petugas
- Update status pengaduan
- Beri respons pengaduan
- Tracking penyelesaian
- Laporan pengaduan

#### G. Manajemen Partisipasi
- CRUD musyawarah
- Peserta musyawarah
- Dokumentasi musyawarah
- Hasil voting/polling
- Keputusan musyawarah
- Tracking implementasi

#### H. Manajemen UMKM
- CRUD UMKM
- Kategori UMKM
- Profil UMKM
- Produk UMKM
- Rating & review
- Promosi UMKM

#### I. Manajemen Galeri
- Upload foto/video
- Kategori galeri
- Deskripsi media
- Publish/unpublish
- Lihat statistik (views, likes)

#### J. Laporan & Analytics
- Laporan berita
- Laporan pengaduan
- Laporan surat
- Laporan program
- Laporan partisipasi
- Export laporan (PDF, Excel)
- Grafik & visualisasi data

#### K. Manajemen Konten
- Edit halaman statis (Profil, FAQ, dll)
- Manajemen menu navigasi
- Pengaturan tampilan
- SEO settings

### UI/UX Khusus Admin
- Sidebar navigasi dengan menu admin
- Admin dashboard dengan widget
- Table/list view untuk data
- Form untuk CRUD
- Modal untuk konfirmasi
- Notifikasi untuk pending tasks
- Breadcrumb navigation
- Search & filter functionality

---

## 👑 ROLE 4: SUPER ADMIN (Kepala Desa)

### Akses & Tampilan
- **Status:** Perlu login dengan email/username khusus
- **Tujuan:** Mengelola sistem, user, & approval
- **Durasi Akses:** Unlimited (sampai logout)
- **Contoh:** Kepala Desa, Sekretaris Desa (jika ditunjuk)

### Halaman yang Bisa Diakses
✅ Semua halaman Admin
✅ Super Admin Dashboard (superadmin-dashboard.html) - NEW
✅ Manajemen User (superadmin-user.html) - NEW
✅ Manajemen Admin (superadmin-admin.html) - NEW
✅ Pengaturan Sistem (superadmin-settings.html) - NEW
✅ Audit Log (superadmin-audit.html) - NEW
✅ Backup & Restore (superadmin-backup.html) - NEW
✅ Laporan Komprehensif (superadmin-laporan.html) - NEW
✅ Manajemen Role & Permission (superadmin-role.html) - NEW

### Fitur Khusus Super Admin

#### A. Super Admin Dashboard
- Ringkasan sistem (total user, admin, berita, pengaduan, dll)
- Health check sistem
- Aktivitas user terbaru
- Notifikasi penting
- Quick actions

#### B. Manajemen User
- CRUD user
- Aktivasi/deaktivasi user
- Reset password user
- Lihat aktivitas user
- Lihat riwayat login
- Export user list

#### C. Manajemen Admin
- CRUD admin
- Assign role admin
- Lihat aktivitas admin
- Audit trail admin
- Deaktivasi admin

#### D. Pengaturan Sistem
- Pengaturan umum (nama desa, logo, kontak, dll)
- Pengaturan email (SMTP, template)
- Pengaturan SMS (jika ada)
- Pengaturan notifikasi
- Pengaturan backup otomatis
- Pengaturan maintenance mode

#### E. Audit Log
- Lihat semua aktivitas sistem
- Filter by user, action, date
- Export audit log
- Monitoring keamanan

#### F. Backup & Restore
- Backup database
- Restore database
- Schedule backup otomatis
- Lihat history backup
- Download backup file

#### G. Laporan Komprehensif
- Laporan SDGS progress
- Laporan Smart Village implementation
- Laporan keuangan (APBDes)
- Laporan partisipasi masyarakat
- Laporan pemberdayaan
- Laporan transparansi
- Export laporan (PDF, Excel)

#### H. Manajemen Role & Permission
- CRUD role
- Assign permission per role
- Lihat permission matrix
- Edit permission

### UI/UX Khusus Super Admin
- Sidebar navigasi dengan menu super admin
- Super admin dashboard dengan widget komprehensif
- Advanced analytics & reporting
- System health monitoring
- User management interface
- Settings panel
- Audit log viewer

---

## 📊 PERMISSION MATRIX

| Fitur | Guest | User | Admin | Super Admin |
|-------|-------|------|-------|------------|
| **Dashboard** | Limited | Full | Full | Full |
| **Profil Desa** | View | View | View/Edit | View/Edit |
| **Berita** | View | View | CRUD | CRUD |
| **Kalender** | View | View | CRUD | CRUD |
| **Program** | View | View/Join | CRUD | CRUD |
| **Layanan Surat** | - | CRUD | Approve | Approve |
| **Cek Bansos** | - | View | View | View |
| **Pengaduan** | - | CRUD | CRUD | CRUD |
| **Partisipasi** | - | View/Join | CRUD | CRUD |
| **UMKM** | View | View | CRUD | CRUD |
| **Galeri** | View | View | CRUD | CRUD |
| **Laporan** | - | - | View | View/Export |
| **Manajemen User** | - | - | - | CRUD |
| **Manajemen Admin** | - | - | - | CRUD |
| **Pengaturan Sistem** | - | - | - | CRUD |
| **Audit Log** | - | - | - | View |

---

## 🔑 AUTHENTICATION & AUTHORIZATION

### Login Methods
1. **User:** Email + Password / NIK + Password
2. **Admin:** Email + Password / Username + Password
3. **Super Admin:** Email + Password (dengan 2FA optional)
4. **Guest:** Tidak perlu login

### Token & Session
- JWT token untuk authentication
- Refresh token untuk session management
- Token expiry: 24 jam (User), 7 hari (Admin), 30 hari (Super Admin)
- Logout akan invalidate token

### Security
- Password hashing (bcrypt)
- HTTPS only
- CSRF protection
- Rate limiting untuk login
- Account lockout setelah 5 failed attempts
- 2FA untuk Super Admin (optional)

---

## 🎨 UI/UX DIFFERENCES

### Navigation Bar
**Guest:**
- Logo & Branding
- Menu publik (Beranda, Profil, Berita, Kalender, Galeri, FAQ, Kontak)
- Tombol Login
- Tombol Daftar

**User:**
- Logo & Branding
- Menu publik + Menu user (Partisipasi, Program, Layanan, Pengaduan)
- User avatar
- Notifikasi bell
- Dropdown menu (Profile, Settings, Logout)

**Admin:**
- Logo & Branding
- Menu publik + Menu admin
- Sidebar navigasi admin
- Admin avatar
- Notifikasi bell
- Dropdown menu (Profile, Settings, Logout)

**Super Admin:**
- Logo & Branding
- Menu publik + Menu admin + Menu super admin
- Sidebar navigasi super admin
- Super admin avatar
- Notifikasi bell
- Dropdown menu (Profile, Settings, Logout)

### Dashboard
**Guest:** Tidak ada dashboard

**User Dashboard:**
- Greeting message
- Ringkasan aktivitas (surat, pengaduan, program, dll)
- Notifikasi penting
- Shortcut ke layanan
- Statistik personal

**Admin Dashboard:**
- Ringkasan statistik sistem
- Chart/grafik aktivitas
- Pending tasks (surat, pengaduan, program, dll)
- Quick actions
- Aktivitas terbaru

**Super Admin Dashboard:**
- Ringkasan sistem komprehensif
- Health check
- User statistics
- Admin activity
- System performance
- Advanced analytics

---

## 📱 RESPONSIVE DESIGN

Semua role harus responsive di:
- Desktop (1440px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

Untuk Admin & Super Admin, sidebar bisa di-collapse di mobile untuk lebih banyak space.

---

## 🔄 WORKFLOW EXAMPLES

### Workflow Permohonan Surat
1. **User** → Buat permohonan surat
2. **Admin** → Lihat permohonan, approve/reject
3. **User** → Terima notifikasi, download surat
4. **Super Admin** → Monitor laporan surat

### Workflow Pengaduan
1. **User** → Buat pengaduan
2. **Admin** → Lihat pengaduan, assign ke petugas, update status
3. **User** → Terima notifikasi status, beri rating
4. **Super Admin** → Monitor laporan pengaduan

### Workflow Program Pemberdayaan
1. **Admin** → Buat program
2. **User** → Lihat program, daftar
3. **Admin** → Approve peserta, manage kegiatan
4. **User** → Ikuti kegiatan, download materi, terima sertifikat
5. **Super Admin** → Monitor laporan program

---

## 📋 DATABASE SCHEMA OVERVIEW

### Tables yang Perlu Dibuat
- `users` - Data user (penduduk)
- `admins` - Data admin (aparat desa)
- `roles` - Role (user, admin, super_admin)
- `permissions` - Permission per role
- `berita` - Berita & informasi
- `kalender` - Kalender kegiatan
- `program` - Program pemberdayaan
- `program_peserta` - Peserta program
- `surat` - Permohonan surat
- `pengaduan` - Pengaduan masyarakat
- `partisipasi` - Musyawarah & partisipasi
- `umkm` - Data UMKM
- `galeri` - Galeri foto/video
- `audit_log` - Audit trail
- `settings` - Pengaturan sistem

---

## 🚀 IMPLEMENTATION ROADMAP

### Phase 1: Authentication & Authorization
- Setup JWT authentication
- Create login/register pages
- Create role-based middleware
- Create permission system

### Phase 2: User Dashboard & Profile
- Create user dashboard
- Create user profile page
- Create user history page
- Create notification system

### Phase 3: Admin Dashboard & Management
- Create admin dashboard
- Create admin management pages (berita, kalender, program, dll)
- Create approval workflow
- Create admin analytics

### Phase 4: Super Admin Dashboard & System Management
- Create super admin dashboard
- Create user management
- Create admin management
- Create system settings
- Create audit log
- Create backup system

### Phase 5: Integration & Testing
- Integrate all components
- Testing & QA
- Performance optimization
- Security audit

---

**Dokumen ini akan menjadi blueprint untuk implementasi PERN stack Smart Village system.**

