# PERN STACK RBAC - QUICK REFERENCE GUIDE
## Smart Village Desa Sungai Pitung

---

## 🎯 RINGKASAN SINGKAT

Sistem Smart Village akan memiliki **4 role** dengan akses dan tampilan yang berbeda:

### 1️⃣ GUEST (Pengunjung Tanpa Login)
- **Akses:** Informasi publik saja
- **Fitur:** View berita, kalender, galeri, UMKM, peta potensi
- **Navbar:** [Logo] [Menu Publik] [Login] [Daftar]
- **Dashboard:** Tidak ada
- **Contoh:** Orang yang baru pertama kali kunjung website

### 2️⃣ USER (Penduduk/Pengunjung Terdaftar)
- **Akses:** Layanan publik + partisipasi
- **Fitur:** Buat surat, pengaduan, daftar program, partisipasi musyawarah
- **Navbar:** [Logo] [Menu] [🔔] [👤 Nama] [Logout]
- **Dashboard:** User dashboard dengan statistik personal
- **Contoh:** Penduduk desa yang sudah login

### 3️⃣ ADMIN (Aparat/Perangkat Desa)
- **Akses:** Kelola konten & layanan
- **Fitur:** CRUD berita, kalender, program; Approve surat & pengaduan
- **Navbar:** [Logo] [Menu] [🔔] [👤 Admin] [Logout]
- **Sidebar:** Dashboard, Berita, Kalender, Program, Surat, Pengaduan, dll
- **Dashboard:** Admin dashboard dengan pending tasks
- **Contoh:** Sekretaris desa, bendahara, kepala bidang

### 4️⃣ SUPER ADMIN (Kepala Desa)
- **Akses:** Kontrol penuh sistem
- **Fitur:** Kelola user, admin, pengaturan, audit log, backup
- **Navbar:** [Logo] [Menu] [🔔] [👤 Super Admin] [Logout]
- **Sidebar:** Dashboard, User, Admin, Settings, Audit Log, Backup, Laporan
- **Dashboard:** Super admin dashboard dengan system overview
- **Contoh:** Kepala desa

---

## 📊 PERMISSION MATRIX SINGKAT

```
                    Guest  User  Admin  Super Admin
Lihat Berita         ✅    ✅    ✅      ✅
Kelola Berita        ❌    ❌    ✅      ✅
Buat Surat           ❌    ✅    ✅      ✅
Approve Surat        ❌    ❌    ✅      ✅
Buat Pengaduan       ❌    ✅    ✅      ✅
Kelola Pengaduan     ❌    ❌    ✅      ✅
Daftar Program       ❌    ✅    ✅      ✅
Kelola Program       ❌    ❌    ✅      ✅
Partisipasi          ❌    ✅    ✅      ✅
Kelola User          ❌    ❌    ❌      ✅
Kelola Admin         ❌    ❌    ❌      ✅
Pengaturan Sistem    ❌    ❌    ❌      ✅
Audit Log            ❌    ❌    ❌      ✅
```

---

## 🔐 AUTHENTICATION FLOW

```
1. User buka website
   ↓
2. Jika belum login → GUEST (akses publik)
   ↓
3. User klik Login → Masuk email + password
   ↓
4. Backend validasi credentials
   ↓
5. Generate JWT token + refresh token
   ↓
6. Frontend simpan token di localStorage
   ↓
7. User sekarang → USER/ADMIN/SUPER ADMIN (sesuai role)
   ↓
8. Setiap request, kirim token di header Authorization
   ↓
9. Backend verify token & check permission
   ↓
10. Jika authorized → lanjut ke controller
    Jika tidak → return 403 Forbidden
```

---

## 🎨 UI LAYOUT DIFFERENCES

### GUEST LAYOUT
```
┌─────────────────────────────────────────┐
│ [Logo] [Menu Publik] [Login] [Daftar]   │
├─────────────────────────────────────────┤
│                                         │
│  Dashboard (Limited)                    │
│  - Berita                               │
│  - Kalender                             │
│  - Galeri                               │
│  - UMKM                                 │
│                                         │
│  [Silakan login untuk akses penuh]      │
│                                         │
└─────────────────────────────────────────┘
```

### USER LAYOUT
```
┌──────────────────────────────────────────┐
│ [Logo] [Menu] [🔔] [👤 John] [⋮]        │
├──────────────────────────────────────────┤
│                                          │
│  Dashboard User                          │
│  ┌────────────────────────────────────┐  │
│  │ Selamat datang, John Doe           │  │
│  │ Surat: 5 | Pengaduan: 2 | ...      │  │
│  └────────────────────────────────────┘  │
│                                          │
│  Notifikasi Penting                      │
│  Quick Links: [Surat] [Pengaduan] [...] │
│                                          │
└──────────────────────────────────────────┘
```

### ADMIN LAYOUT
```
┌──────────────────────────────────────────┐
│ [Logo] [Menu] [🔔] [👤 Admin] [⋮]       │
├──────────────────────────────────────────┤
│ ┌─────────────┐ ┌──────────────────────┐ │
│ │  SIDEBAR    │ │ Admin Dashboard      │ │
│ │             │ │                      │ │
│ │ • Dashboard │ │ Statistik:           │ │
│ │ • Berita    │ │ • Berita: 25         │ │
│ │ • Kalender  │ │ • Pengaduan: 15      │ │
│ │ • Program   │ │ • Surat: 42          │ │
│ │ • Surat     │ │                      │ │
│ │ • Pengaduan │ │ Pending:             │ │
│ │ • Laporan   │ │ • Surat: 5           │ │
│ │             │ │ • Pengaduan: 3       │ │
│ │ [Logout]    │ │                      │ │
│ └─────────────┘ └──────────────────────┘ │
└──────────────────────────────────────────┘
```

### SUPER ADMIN LAYOUT
```
┌──────────────────────────────────────────┐
│ [Logo] [Menu] [🔔] [👤 Super Admin] [⋮] │
├──────────────────────────────────────────┤
│ ┌─────────────┐ ┌──────────────────────┐ │
│ │  SIDEBAR    │ │ Super Admin Dashboard│ │
│ │             │ │                      │ │
│ │ • Dashboard │ │ System Overview:     │ │
│ │ • User      │ │ • Total User: 250    │ │
│ │ • Admin     │ │ • Total Admin: 8     │ │
│ │ • Settings  │ │ • Berita: 25         │ │
│ │ • Audit Log │ │                      │ │
│ │ • Backup    │ │ Health Check:        │ │
│ │ • Laporan   │ │ • Database: ✅       │ │
│ │             │ │ • API: ✅            │ │
│ │ [Logout]    │ │                      │ │
│ └─────────────┘ └──────────────────────┘ │
└──────────────────────────────────────────┘
```

---

## 📋 HALAMAN PER ROLE

### GUEST PAGES
- ✅ Home/Dashboard (limited)
- ✅ Profil Desa
- ✅ Berita
- ✅ Kalender Kegiatan
- ✅ Galeri
- ✅ UMKM
- ✅ Peta Potensi
- ✅ FAQ
- ✅ Kontak
- ✅ Login
- ✅ Register

### USER PAGES (+ semua Guest pages)
- ✅ User Dashboard
- ✅ User Profile
- ✅ User History
- ✅ Buat Surat
- ✅ Tracking Surat
- ✅ Buat Pengaduan
- ✅ Tracking Pengaduan
- ✅ Daftar Program
- ✅ Partisipasi Musyawarah
- ✅ Forum Diskusi
- ✅ Polling

### ADMIN PAGES (+ semua User pages)
- ✅ Admin Dashboard
- ✅ Manage Berita (CRUD)
- ✅ Manage Kalender (CRUD)
- ✅ Manage Program (CRUD)
- ✅ Approve Surat
- ✅ Manage Pengaduan
- ✅ Manage Musyawarah
- ✅ Manage UMKM
- ✅ Upload Galeri
- ✅ Laporan
- ✅ Manage Konten

### SUPER ADMIN PAGES (+ semua Admin pages)
- ✅ Super Admin Dashboard
- ✅ Manage Users
- ✅ Manage Admins
- ✅ System Settings
- ✅ Audit Log
- ✅ Backup & Restore
- ✅ Laporan Komprehensif
- ✅ Role & Permission Management

---

## 🔑 KEY DIFFERENCES

| Aspek | Guest | User | Admin | Super Admin |
|-------|-------|------|-------|------------|
| **Login** | ❌ | ✅ | ✅ | ✅ |
| **Dashboard** | Limited | Personal | System | System + Management |
| **Sidebar** | ❌ | ❌ | ✅ | ✅ |
| **Kelola Konten** | ❌ | ❌ | ✅ | ✅ |
| **Approve Layanan** | ❌ | ❌ | ✅ | ✅ |
| **Kelola User** | ❌ | ❌ | ❌ | ✅ |
| **Pengaturan Sistem** | ❌ | ❌ | ❌ | ✅ |
| **Audit Log** | ❌ | ❌ | ❌ | ✅ |

---

## 🚀 IMPLEMENTATION PRIORITY

### Phase 1: Authentication & Authorization
1. Setup JWT authentication
2. Create login/register pages
3. Create role-based middleware
4. Create permission system

### Phase 2: User Features
1. User dashboard
2. User profile
3. Buat surat & pengaduan
4. Tracking status

### Phase 3: Admin Features
1. Admin dashboard
2. Manage berita, kalender, program
3. Approve workflow
4. Admin analytics

### Phase 4: Super Admin Features
1. Super admin dashboard
2. User management
3. Admin management
4. System settings & audit log

---

## 💾 DATABASE TABLES NEEDED

### Core Tables
- `users` - Data user (penduduk)
- `admins` - Data admin (aparat desa)
- `roles` - Role (user, admin, super_admin)
- `permissions` - Permission per role
- `role_permissions` - Mapping role ke permission

### Content Tables
- `berita` - Berita & informasi
- `kalender` - Kalender kegiatan
- `program` - Program pemberdayaan
- `surat` - Permohonan surat
- `pengaduan` - Pengaduan masyarakat
- `musyawarah` - Musyawarah & partisipasi
- `umkm` - Data UMKM
- `galeri` - Galeri foto/video

### System Tables
- `audit_log` - Audit trail
- `settings` - Pengaturan sistem
- `notifikasi` - Notifikasi user

---

## 🔗 API ENDPOINTS PATTERN

### Public Endpoints (Guest)
```
GET /api/berita
GET /api/kalender
GET /api/umkm
GET /api/galeri
GET /api/profil
```

### User Endpoints
```
POST /api/auth/login
POST /api/auth/register
GET /api/users/profile
PUT /api/users/profile
POST /api/surat
GET /api/surat
POST /api/pengaduan
GET /api/pengaduan
```

### Admin Endpoints
```
POST /api/berita
PUT /api/berita/:id
DELETE /api/berita/:id
POST /api/surat/:id/approve
PUT /api/pengaduan/:id/status
GET /api/admin/dashboard
GET /api/admin/laporan
```

### Super Admin Endpoints
```
GET /api/superadmin/users
POST /api/superadmin/admins
PUT /api/superadmin/settings
GET /api/superadmin/audit-log
POST /api/superadmin/backup
```

---

## 🛡️ SECURITY BEST PRACTICES

1. **Password Hashing:** Gunakan bcryptjs
2. **JWT Token:** Simpan di localStorage/sessionStorage
3. **HTTPS Only:** Semua komunikasi harus HTTPS
4. **CORS:** Configure CORS untuk frontend URL
5. **Rate Limiting:** Limit login attempts
6. **Input Validation:** Validate semua input
7. **SQL Injection Prevention:** Gunakan parameterized queries
8. **XSS Prevention:** Sanitize output
9. **CSRF Protection:** Implement CSRF tokens
10. **Audit Logging:** Log semua aktivitas admin

---

## 📱 RESPONSIVE DESIGN

Semua role harus responsive di:
- **Desktop:** 1440px+
- **Tablet:** 768px - 1023px
- **Mobile:** 320px - 767px

Untuk Admin & Super Admin, sidebar bisa di-collapse di mobile.

---

## 🧪 TESTING CHECKLIST

- [ ] Test login dengan berbagai role
- [ ] Test permission untuk setiap endpoint
- [ ] Test token expiry & refresh
- [ ] Test unauthorized access
- [ ] Test CRUD operations per role
- [ ] Test approval workflow
- [ ] Test notification system
- [ ] Test file upload
- [ ] Test pagination & filtering
- [ ] Test error handling

---

## 📚 DOKUMENTASI LENGKAP

Lihat file-file berikut untuk detail lebih lanjut:

1. **ROLE_BASED_ACCESS_CONTROL.md** - Detail lengkap setiap role
2. **DATABASE_SCHEMA_DESIGN.md** - Schema database PostgreSQL
3. **API_ENDPOINTS_DESIGN.md** - Semua API endpoints
4. **PERN_STACK_IMPLEMENTATION_GUIDE.md** - Panduan implementasi teknis
5. **ROLE_COMPARISON_SUMMARY.md** - Perbandingan visual antar role

---

## 🎯 NEXT STEPS

1. **Setup Backend:**
   - Initialize Node.js project
   - Setup Express server
   - Setup PostgreSQL database
   - Create database schema
   - Implement authentication

2. **Setup Frontend:**
   - Initialize React + Vite project
   - Setup routing
   - Create login/register pages
   - Implement role-based rendering
   - Setup API integration

3. **Development:**
   - Implement user features
   - Implement admin features
   - Implement super admin features
   - Testing & QA
   - Deployment

---

**Dokumentasi ini memberikan panduan cepat untuk memahami RBAC system Smart Village dengan PERN stack.**

