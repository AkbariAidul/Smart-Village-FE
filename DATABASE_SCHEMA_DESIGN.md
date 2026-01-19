# DATABASE SCHEMA DESIGN
## Smart Village PERN Stack - PostgreSQL

---

## 📊 CORE TABLES

### 1. USERS TABLE
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  nik VARCHAR(16) UNIQUE NOT NULL,
  kk VARCHAR(16),
  nama VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  telepon VARCHAR(20),
  alamat TEXT,
  rt VARCHAR(5),
  rw VARCHAR(5),
  dusun VARCHAR(100),
  jenis_kelamin ENUM('L', 'P'),
  tanggal_lahir DATE,
  pekerjaan VARCHAR(100),
  pendidikan VARCHAR(50),
  status_perkawinan ENUM('Belum Kawin', 'Kawin', 'Cerai Hidup', 'Cerai Mati'),
  foto_profil VARCHAR(255),
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. ADMINS TABLE
```sql
CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  nama VARCHAR(255) NOT NULL,
  jabatan VARCHAR(100),
  bidang VARCHAR(100),
  telepon VARCHAR(20),
  foto_profil VARCHAR(255),
  role_id INTEGER NOT NULL REFERENCES roles(id),
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. ROLES TABLE
```sql
CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  nama VARCHAR(50) UNIQUE NOT NULL,
  deskripsi TEXT,
  level INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default roles
INSERT INTO roles (nama, deskripsi, level) VALUES
('user', 'Penduduk/Pengunjung', 1),
('admin', 'Aparat Desa', 2),
('super_admin', 'Kepala Desa', 3);
```

### 4. PERMISSIONS TABLE
```sql
CREATE TABLE permissions (
  id SERIAL PRIMARY KEY,
  nama VARCHAR(100) UNIQUE NOT NULL,
  deskripsi TEXT,
  modul VARCHAR(50),
  aksi VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Example permissions
INSERT INTO permissions (nama, deskripsi, modul, aksi) VALUES
('berita.view', 'Lihat berita', 'berita', 'view'),
('berita.create', 'Buat berita', 'berita', 'create'),
('berita.edit', 'Edit berita', 'berita', 'edit'),
('berita.delete', 'Hapus berita', 'berita', 'delete'),
('surat.approve', 'Approve surat', 'surat', 'approve'),
('pengaduan.manage', 'Kelola pengaduan', 'pengaduan', 'manage'),
('user.manage', 'Kelola user', 'user', 'manage'),
('admin.manage', 'Kelola admin', 'admin', 'manage'),
('system.settings', 'Pengaturan sistem', 'system', 'settings');
```

### 5. ROLE_PERMISSIONS TABLE
```sql
CREATE TABLE role_permissions (
  id SERIAL PRIMARY KEY,
  role_id INTEGER NOT NULL REFERENCES roles(id),
  permission_id INTEGER NOT NULL REFERENCES permissions(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(role_id, permission_id)
);
```

---

## 📰 CONTENT MANAGEMENT TABLES

### 6. BERITA TABLE
```sql
CREATE TABLE berita (
  id SERIAL PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  kategori VARCHAR(50),
  konten TEXT NOT NULL,
  ringkasan VARCHAR(500),
  foto_utama VARCHAR(255),
  penulis_id INTEGER NOT NULL REFERENCES admins(id),
  status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  tanggal_publikasi TIMESTAMP,
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 7. KALENDER TABLE
```sql
CREATE TABLE kalender (
  id SERIAL PRIMARY KEY,
  nama_kegiatan VARCHAR(255) NOT NULL,
  deskripsi TEXT,
  kategori VARCHAR(50),
  tanggal_mulai TIMESTAMP NOT NULL,
  tanggal_selesai TIMESTAMP,
  waktu_mulai TIME,
  waktu_selesai TIME,
  lokasi VARCHAR(255),
  peserta_target INTEGER,
  peserta_terdaftar INTEGER DEFAULT 0,
  penyelenggara_id INTEGER NOT NULL REFERENCES admins(id),
  status ENUM('draft', 'published', 'ongoing', 'completed') DEFAULT 'draft',
  foto VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 8. KALENDER_PESERTA TABLE
```sql
CREATE TABLE kalender_peserta (
  id SERIAL PRIMARY KEY,
  kalender_id INTEGER NOT NULL REFERENCES kalender(id),
  user_id INTEGER NOT NULL REFERENCES users(id),
  status ENUM('registered', 'attended', 'absent') DEFAULT 'registered',
  registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(kalender_id, user_id)
);
```

---

## 🎓 PROGRAM PEMBERDAYAAN TABLES

### 9. PROGRAM TABLE
```sql
CREATE TABLE program (
  id SERIAL PRIMARY KEY,
  nama_program VARCHAR(255) NOT NULL,
  deskripsi TEXT,
  kategori VARCHAR(50),
  tujuan TEXT,
  target_peserta INTEGER,
  peserta_terdaftar INTEGER DEFAULT 0,
  peserta_lulus INTEGER DEFAULT 0,
  tanggal_mulai DATE NOT NULL,
  tanggal_selesai DATE,
  durasi_minggu INTEGER,
  lokasi VARCHAR(255),
  penyelenggara_id INTEGER NOT NULL REFERENCES admins(id),
  status ENUM('draft', 'active', 'completed', 'cancelled') DEFAULT 'draft',
  foto VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 10. PROGRAM_PESERTA TABLE
```sql
CREATE TABLE program_peserta (
  id SERIAL PRIMARY KEY,
  program_id INTEGER NOT NULL REFERENCES program(id),
  user_id INTEGER NOT NULL REFERENCES users(id),
  status ENUM('registered', 'active', 'completed', 'dropped') DEFAULT 'registered',
  nilai_akhir DECIMAL(5,2),
  sertifikat_url VARCHAR(255),
  registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP,
  UNIQUE(program_id, user_id)
);
```

### 11. PROGRAM_JADWAL TABLE
```sql
CREATE TABLE program_jadwal (
  id SERIAL PRIMARY KEY,
  program_id INTEGER NOT NULL REFERENCES program(id),
  tanggal DATE NOT NULL,
  waktu_mulai TIME,
  waktu_selesai TIME,
  topik VARCHAR(255),
  pembimbing VARCHAR(255),
  lokasi VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📋 LAYANAN PUBLIK TABLES

### 12. SURAT TABLE
```sql
CREATE TABLE surat (
  id SERIAL PRIMARY KEY,
  nomor_surat VARCHAR(50) UNIQUE,
  user_id INTEGER NOT NULL REFERENCES users(id),
  jenis_surat VARCHAR(50),
  status ENUM('draft', 'submitted', 'approved', 'rejected', 'completed') DEFAULT 'draft',
  data_surat JSONB,
  dokumen_pendukung VARCHAR(255),
  alasan_penolakan TEXT,
  disetujui_oleh INTEGER REFERENCES admins(id),
  tanggal_permohonan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  tanggal_disetujui TIMESTAMP,
  tanggal_selesai TIMESTAMP,
  file_surat VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 13. BANSOS TABLE
```sql
CREATE TABLE bansos (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  jenis_bansos VARCHAR(100),
  jumlah DECIMAL(15,2),
  periode VARCHAR(20),
  status ENUM('eligible', 'ineligible', 'pending', 'received') DEFAULT 'pending',
  tanggal_pencairan DATE,
  keterangan TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 14. PENGADUAN TABLE
```sql
CREATE TABLE pengaduan (
  id SERIAL PRIMARY KEY,
  nomor_pengaduan VARCHAR(50) UNIQUE,
  user_id INTEGER NOT NULL REFERENCES users(id),
  kategori VARCHAR(50),
  judul VARCHAR(255) NOT NULL,
  deskripsi TEXT NOT NULL,
  lokasi VARCHAR(255),
  bukti_foto VARCHAR(255),
  status ENUM('baru', 'proses', 'selesai', 'ditolak') DEFAULT 'baru',
  prioritas ENUM('rendah', 'sedang', 'tinggi') DEFAULT 'sedang',
  ditangani_oleh INTEGER REFERENCES admins(id),
  respons_pemerintah TEXT,
  rating_kepuasan INTEGER,
  tanggal_pengaduan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  tanggal_selesai TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🤝 PARTISIPASI MASYARAKAT TABLES

### 15. MUSYAWARAH TABLE
```sql
CREATE TABLE musyawarah (
  id SERIAL PRIMARY KEY,
  nama_musyawarah VARCHAR(255) NOT NULL,
  deskripsi TEXT,
  tanggal TIMESTAMP NOT NULL,
  lokasi VARCHAR(255),
  peserta_target INTEGER,
  peserta_hadir INTEGER DEFAULT 0,
  agenda TEXT,
  hasil_keputusan TEXT,
  dokumentasi_foto VARCHAR(255),
  dokumentasi_video VARCHAR(255),
  status ENUM('draft', 'scheduled', 'ongoing', 'completed') DEFAULT 'draft',
  dibuat_oleh INTEGER NOT NULL REFERENCES admins(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 16. MUSYAWARAH_PESERTA TABLE
```sql
CREATE TABLE musyawarah_peserta (
  id SERIAL PRIMARY KEY,
  musyawarah_id INTEGER NOT NULL REFERENCES musyawarah(id),
  user_id INTEGER NOT NULL REFERENCES users(id),
  status ENUM('registered', 'attended', 'absent') DEFAULT 'registered',
  registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(musyawarah_id, user_id)
);
```

### 17. FORUM_DISKUSI TABLE
```sql
CREATE TABLE forum_diskusi (
  id SERIAL PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  deskripsi TEXT,
  kategori VARCHAR(50),
  dibuat_oleh INTEGER NOT NULL REFERENCES users(id),
  views INTEGER DEFAULT 0,
  replies INTEGER DEFAULT 0,
  status ENUM('active', 'closed', 'archived') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 18. FORUM_KOMENTAR TABLE
```sql
CREATE TABLE forum_komentar (
  id SERIAL PRIMARY KEY,
  forum_id INTEGER NOT NULL REFERENCES forum_diskusi(id),
  user_id INTEGER NOT NULL REFERENCES users(id),
  komentar TEXT NOT NULL,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 19. POLLING TABLE
```sql
CREATE TABLE polling (
  id SERIAL PRIMARY KEY,
  pertanyaan VARCHAR(255) NOT NULL,
  deskripsi TEXT,
  dibuat_oleh INTEGER NOT NULL REFERENCES admins(id),
  tanggal_mulai TIMESTAMP,
  tanggal_selesai TIMESTAMP,
  status ENUM('draft', 'active', 'closed') DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 20. POLLING_OPSI TABLE
```sql
CREATE TABLE polling_opsi (
  id SERIAL PRIMARY KEY,
  polling_id INTEGER NOT NULL REFERENCES polling(id),
  opsi VARCHAR(255) NOT NULL,
  jumlah_vote INTEGER DEFAULT 0
);
```

### 21. POLLING_VOTE TABLE
```sql
CREATE TABLE polling_vote (
  id SERIAL PRIMARY KEY,
  polling_id INTEGER NOT NULL REFERENCES polling(id),
  opsi_id INTEGER NOT NULL REFERENCES polling_opsi(id),
  user_id INTEGER NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(polling_id, user_id)
);
```

---

## 🏪 UMKM TABLES

### 22. UMKM TABLE
```sql
CREATE TABLE umkm (
  id SERIAL PRIMARY KEY,
  nama_umkm VARCHAR(255) NOT NULL,
  pemilik_id INTEGER NOT NULL REFERENCES users(id),
  kategori VARCHAR(50),
  deskripsi TEXT,
  alamat VARCHAR(255),
  rt VARCHAR(5),
  rw VARCHAR(5),
  telepon VARCHAR(20),
  email VARCHAR(255),
  website VARCHAR(255),
  jam_operasional VARCHAR(100),
  foto_utama VARCHAR(255),
  omset_tahunan DECIMAL(15,2),
  jumlah_tenaga_kerja INTEGER,
  status ENUM('aktif', 'tidak_aktif') DEFAULT 'aktif',
  rating DECIMAL(3,2) DEFAULT 0,
  jumlah_review INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 23. UMKM_PRODUK TABLE
```sql
CREATE TABLE umkm_produk (
  id SERIAL PRIMARY KEY,
  umkm_id INTEGER NOT NULL REFERENCES umkm(id),
  nama_produk VARCHAR(255) NOT NULL,
  deskripsi TEXT,
  harga DECIMAL(15,2),
  stok INTEGER,
  foto VARCHAR(255),
  kategori VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 24. UMKM_REVIEW TABLE
```sql
CREATE TABLE umkm_review (
  id SERIAL PRIMARY KEY,
  umkm_id INTEGER NOT NULL REFERENCES umkm(id),
  user_id INTEGER NOT NULL REFERENCES users(id),
  rating INTEGER,
  komentar TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🖼️ GALERI TABLES

### 25. GALERI TABLE
```sql
CREATE TABLE galeri (
  id SERIAL PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  deskripsi TEXT,
  kategori VARCHAR(50),
  tipe ENUM('foto', 'video') DEFAULT 'foto',
  file_url VARCHAR(255) NOT NULL,
  thumbnail_url VARCHAR(255),
  dibuat_oleh INTEGER NOT NULL REFERENCES admins(id),
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  status ENUM('draft', 'published') DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔐 SYSTEM TABLES

### 26. AUDIT_LOG TABLE
```sql
CREATE TABLE audit_log (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  admin_id INTEGER REFERENCES admins(id),
  aksi VARCHAR(100),
  modul VARCHAR(50),
  deskripsi TEXT,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 27. SETTINGS TABLE
```sql
CREATE TABLE settings (
  id SERIAL PRIMARY KEY,
  kunci VARCHAR(100) UNIQUE NOT NULL,
  nilai TEXT,
  tipe VARCHAR(50),
  deskripsi TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Example settings
INSERT INTO settings (kunci, nilai, tipe, deskripsi) VALUES
('nama_desa', 'Desa Sungai Pitung', 'string', 'Nama desa'),
('kabupaten', 'Barito Kuala', 'string', 'Kabupaten'),
('provinsi', 'Kalimantan Selatan', 'string', 'Provinsi'),
('email_desa', 'info@sungaipitung.id', 'string', 'Email desa'),
('telepon_desa', '08123456789', 'string', 'Telepon desa'),
('alamat_desa', 'Jl. Raya Sungai Pitung', 'string', 'Alamat desa'),
('logo_url', '/images/logo.png', 'string', 'URL logo'),
('maintenance_mode', 'false', 'boolean', 'Mode maintenance');
```

### 28. NOTIFIKASI TABLE
```sql
CREATE TABLE notifikasi (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  judul VARCHAR(255),
  pesan TEXT,
  tipe VARCHAR(50),
  referensi_id INTEGER,
  referensi_tipe VARCHAR(50),
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📊 INDEXES

```sql
-- Performance indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_nik ON users(nik);
CREATE INDEX idx_admins_email ON admins(email);
CREATE INDEX idx_berita_slug ON berita(slug);
CREATE INDEX idx_berita_status ON berita(status);
CREATE INDEX idx_surat_user_id ON surat(user_id);
CREATE INDEX idx_surat_status ON surat(status);
CREATE INDEX idx_pengaduan_user_id ON pengaduan(user_id);
CREATE INDEX idx_pengaduan_status ON pengaduan(status);
CREATE INDEX idx_program_peserta_user_id ON program_peserta(user_id);
CREATE INDEX idx_audit_log_user_id ON audit_log(user_id);
CREATE INDEX idx_audit_log_created_at ON audit_log(created_at);
CREATE INDEX idx_notifikasi_user_id ON notifikasi(user_id);
CREATE INDEX idx_notifikasi_is_read ON notifikasi(is_read);
```

---

## 🔄 RELATIONSHIPS DIAGRAM

```
users (1) ──→ (M) surat
users (1) ──→ (M) pengaduan
users (1) ──→ (M) program_peserta
users (1) ──→ (M) musyawarah_peserta
users (1) ──→ (M) kalender_peserta
users (1) ──→ (M) forum_diskusi
users (1) ──→ (M) forum_komentar
users (1) ──→ (M) umkm
users (1) ──→ (M) umkm_review
users (1) ──→ (M) bansos
users (1) ──→ (M) notifikasi

admins (1) ──→ (M) berita
admins (1) ──→ (M) kalender
admins (1) ──→ (M) program
admins (1) ──→ (M) musyawarah
admins (1) ──→ (M) galeri
admins (1) ──→ (M) polling
admins (1) ──→ (M) surat (disetujui_oleh)
admins (1) ──→ (M) pengaduan (ditangani_oleh)

roles (1) ──→ (M) role_permissions
roles (1) ──→ (M) admins

permissions (1) ──→ (M) role_permissions

program (1) ──→ (M) program_peserta
program (1) ──→ (M) program_jadwal

kalender (1) ──→ (M) kalender_peserta

musyawarah (1) ──→ (M) musyawarah_peserta

forum_diskusi (1) ──→ (M) forum_komentar

polling (1) ──→ (M) polling_opsi
polling_opsi (1) ──→ (M) polling_vote

umkm (1) ──→ (M) umkm_produk
umkm (1) ──→ (M) umkm_review
```

---

**Database schema ini dirancang untuk mendukung Smart Village system dengan PERN stack.**

