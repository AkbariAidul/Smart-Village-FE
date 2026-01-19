# KOMPONEN UI & WIREFRAME SMART VILLAGE PAGES
## Desa Sungai Pitung - Barito Kuala

---

## KOMPONEN UI YANG HARUS DIBUAT

### 1. SDGS Goals Widget
**Digunakan di:** Dashboard, Profil Desa
**Deskripsi:** Menampilkan 17 SDGS Goals dengan progress indicator

```html
<!-- SDGS Goals Grid -->
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
  <!-- Goal Card -->
  <div class="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition">
    <div class="aspect-square bg-gradient-to-br from-[color1] to-[color2] rounded-lg flex items-center justify-center mb-3">
      <img src="sdg-icon.png" alt="Goal 1" class="w-12 h-12">
    </div>
    <h3 class="text-xs font-bold text-center mb-2">No Poverty</h3>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div class="bg-[color] h-2 rounded-full" style="width: 65%"></div>
    </div>
    <p class="text-xs text-center text-gray-600 mt-2">65% Progress</p>
  </div>
</div>
```

**Fitur:**
- 17 goal cards dengan warna unik
- Progress bar per goal
- Hover effect untuk detail
- Klik untuk lihat program terkait
- Responsive grid (2-6 kolom)

---

### 2. Program Card Component
**Digunakan di:** Program Pemberdayaan, Berita, Kalender
**Deskripsi:** Card untuk menampilkan program/berita/kegiatan

```html
<!-- Program Card -->
<div class="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group">
  <!-- Image -->
  <div class="relative h-48 overflow-hidden bg-gray-200">
    <img src="program.jpg" alt="Program" class="w-full h-full object-cover group-hover:scale-105 transition">
    <div class="absolute top-3 right-3">
      <span class="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold">Pelatihan</span>
    </div>
  </div>
  
  <!-- Content -->
  <div class="p-4">
    <h3 class="font-bold text-base mb-2 line-clamp-2">Nama Program</h3>
    <p class="text-sm text-gray-600 mb-3 line-clamp-2">Deskripsi singkat program</p>
    
    <!-- Meta Info -->
    <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
      <i class="fa-regular fa-calendar"></i>
      <span>15 Jan 2024</span>
      <span class="mx-1">•</span>
      <i class="fa-solid fa-users"></i>
      <span>45 peserta</span>
    </div>
    
    <!-- CTA -->
    <a href="#" class="block text-center bg-primary-600 text-white py-2 rounded-lg font-bold text-sm hover:bg-primary-700 transition">
      Daftar Sekarang
    </a>
  </div>
</div>
```

**Fitur:**
- Image dengan hover zoom effect
- Category badge
- Title & description
- Meta info (tanggal, peserta, dll)
- CTA button
- Responsive

---

### 3. Kalender Interaktif Component
**Digunakan di:** Kalender Kegiatan
**Deskripsi:** Kalender bulan dengan highlight kegiatan

```html
<!-- Calendar Component -->
<div class="bg-white rounded-xl shadow-md p-6">
  <!-- Header -->
  <div class="flex items-center justify-between mb-6">
    <button class="p-2 hover:bg-gray-100 rounded-lg">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <h3 class="font-bold text-lg">Januari 2024</h3>
    <button class="p-2 hover:bg-gray-100 rounded-lg">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>
  
  <!-- Day Headers -->
  <div class="grid grid-cols-7 gap-2 mb-4">
    <div class="text-center font-bold text-sm text-gray-600">Min</div>
    <div class="text-center font-bold text-sm text-gray-600">Sen</div>
    <!-- ... -->
  </div>
  
  <!-- Calendar Grid -->
  <div class="grid grid-cols-7 gap-2">
    <!-- Empty cells -->
    <div></div>
    
    <!-- Date cells -->
    <button class="aspect-square rounded-lg border-2 border-gray-200 hover:border-primary-600 transition relative group">
      <span class="text-sm font-bold">1</span>
      <!-- Dot indicator for events -->
      <div class="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
        <div class="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
      </div>
    </button>
    
    <!-- Date with event -->
    <button class="aspect-square rounded-lg bg-primary-100 border-2 border-primary-600 relative group">
      <span class="text-sm font-bold text-primary-600">15</span>
      <div class="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
        <div class="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
        <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
      </div>
    </button>
  </div>
</div>
```

**Fitur:**
- Navigasi bulan (prev/next)
- Highlight tanggal dengan kegiatan
- Dot indicator untuk kategori
- Hover effect
- Klik untuk lihat detail

---

### 4. Polling/Voting Component
**Digunakan di:** Partisipasi Masyarakat
**Deskripsi:** Component untuk polling & voting

```html
<!-- Polling Component -->
<div class="bg-white rounded-xl shadow-md p-6">
  <!-- Question -->
  <h3 class="font-bold text-lg mb-4">Apa prioritas pembangunan desa tahun ini?</h3>
  
  <!-- Options -->
  <div class="space-y-3">
    <!-- Option 1 -->
    <button class="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-primary-600 transition group">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-sm">Infrastruktur Jalan</span>
        <span class="text-xs text-gray-600">45%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div class="bg-primary-600 h-2 rounded-full" style="width: 45%"></div>
      </div>
      <p class="text-xs text-gray-500 mt-2">234 suara</p>
    </button>
    
    <!-- Option 2 -->
    <button class="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-primary-600 transition group">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-sm">Pendidikan</span>
        <span class="text-xs text-gray-600">30%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div class="bg-blue-600 h-2 rounded-full" style="width: 30%"></div>
      </div>
      <p class="text-xs text-gray-500 mt-2">156 suara</p>
    </button>
  </div>
  
  <!-- Status -->
  <p class="text-xs text-gray-600 mt-6 text-center">Polling berakhir dalam 5 hari</p>
</div>
```

**Fitur:**
- Pertanyaan polling
- Multiple options dengan progress bar
- Vote count
- Countdown timer
- Responsive

---

### 5. Accordion Component (FAQ)
**Digunakan di:** FAQ, Partisipasi
**Deskripsi:** Accordion untuk FAQ & diskusi

```html
<!-- Accordion Item -->
<div class="border-b border-gray-200 last:border-b-0">
  <button class="w-full py-4 px-6 flex items-center justify-between hover:bg-gray-50 transition group">
    <span class="font-bold text-left text-sm md:text-base">Bagaimana cara membuat surat pengantar?</span>
    <i class="fa-solid fa-chevron-down text-gray-400 group-hover:text-gray-600 transition transform group-[.active]:rotate-180"></i>
  </button>
  
  <!-- Content (hidden by default) -->
  <div class="hidden px-6 pb-4 text-sm text-gray-600 space-y-3">
    <p>Berikut langkah-langkah membuat surat pengantar:</p>
    <ol class="list-decimal list-inside space-y-2">
      <li>Klik menu "Layanan Surat"</li>
      <li>Pilih "Surat Pengantar"</li>
      <li>Isi form dengan data diri Anda</li>
      <li>Upload dokumen pendukung (KTP, KK)</li>
      <li>Klik "Ajukan"</li>
    </ol>
    <p>Surat akan selesai dalam 1-2 hari kerja.</p>
    
    <!-- Helpful buttons -->
    <div class="flex gap-2 mt-4 pt-4 border-t border-gray-200">
      <button class="text-xs px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition">
        <i class="fa-solid fa-thumbs-up mr-1"></i> Membantu
      </button>
      <button class="text-xs px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition">
        <i class="fa-solid fa-thumbs-down mr-1"></i> Tidak Membantu
      </button>
    </div>
  </div>
</div>
```

**Fitur:**
- Expand/collapse
- Smooth animation
- Helpful/not helpful buttons
- Responsive

---

### 6. Statistik Widget
**Digunakan di:** Dashboard, Profil, Data Kependudukan
**Deskripsi:** Widget untuk menampilkan statistik

```html
<!-- Stat Widget -->
<div class="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-6 shadow-lg">
  <div class="flex items-start justify-between mb-4">
    <div>
      <p class="text-sm opacity-90 mb-1">Total Penduduk</p>
      <h3 class="text-4xl font-extrabold">1,450</h3>
    </div>
    <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
      <i class="fa-solid fa-users"></i>
    </div>
  </div>
  
  <!-- Change indicator -->
  <div class="flex items-center gap-2 text-sm">
    <span class="bg-green-400/30 text-green-100 px-2 py-1 rounded text-xs font-bold">
      <i class="fa-solid fa-arrow-up mr-1"></i> +2.5%
    </span>
    <span class="opacity-75">dari bulan lalu</span>
  </div>
</div>
```

**Fitur:**
- Gradient background
- Icon
- Value & label
- Change indicator
- Responsive

---

### 7. Timeline Component
**Digunakan di:** APBDes, Pengaduan, Kalender
**Deskripsi:** Timeline untuk menampilkan progress

```html
<!-- Timeline -->
<div class="relative">
  <!-- Timeline line -->
  <div class="absolute left-4 top-0 bottom-0 w-1 bg-gray-200"></div>
  
  <!-- Timeline items -->
  <div class="space-y-8">
    <!-- Item 1 - Completed -->
    <div class="relative pl-16">
      <div class="absolute left-0 top-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
        <i class="fa-solid fa-check text-sm"></i>
      </div>
      <div class="bg-white rounded-lg p-4 border border-gray-200">
        <h4 class="font-bold text-sm mb-1">Pengajuan Diterima</h4>
        <p class="text-xs text-gray-600">15 Januari 2024</p>
      </div>
    </div>
    
    <!-- Item 2 - In Progress -->
    <div class="relative pl-16">
      <div class="absolute left-0 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white animate-pulse">
        <i class="fa-solid fa-spinner text-sm"></i>
      </div>
      <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h4 class="font-bold text-sm mb-1">Sedang Diproses</h4>
        <p class="text-xs text-gray-600">Estimasi selesai: 17 Januari 2024</p>
      </div>
    </div>
    
    <!-- Item 3 - Pending -->
    <div class="relative pl-16">
      <div class="absolute left-0 top-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
        <i class="fa-solid fa-circle text-xs"></i>
      </div>
      <div class="bg-white rounded-lg p-4 border border-gray-200 opacity-50">
        <h4 class="font-bold text-sm mb-1">Siap Diambil</h4>
        <p class="text-xs text-gray-600">Menunggu tahap sebelumnya selesai</p>
      </div>
    </div>
  </div>
</div>
```

**Fitur:**
- Vertical timeline
- Status indicator (completed, in progress, pending)
- Dates & descriptions
- Responsive

---

### 8. Filter & Search Component
**Digunakan di:** Semua halaman dengan list
**Deskripsi:** Filter & search untuk list data

```html
<!-- Filter & Search -->
<div class="bg-white rounded-xl shadow-md p-6 mb-6">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <!-- Search -->
    <div class="md:col-span-2">
      <label class="block text-sm font-bold mb-2">Cari</label>
      <div class="relative">
        <input type="text" placeholder="Cari program..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600">
        <i class="fa-solid fa-magnifying-glass absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
      </div>
    </div>
    
    <!-- Category Filter -->
    <div>
      <label class="block text-sm font-bold mb-2">Kategori</label>
      <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600">
        <option>Semua Kategori</option>
        <option>Pelatihan</option>
        <option>Bantuan</option>
        <option>Mentoring</option>
      </select>
    </div>
    
    <!-- Status Filter -->
    <div>
      <label class="block text-sm font-bold mb-2">Status</label>
      <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600">
        <option>Semua Status</option>
        <option>Akan Datang</option>
        <option>Sedang Berlangsung</option>
        <option>Selesai</option>
      </select>
    </div>
  </div>
  
  <!-- Filter Tags -->
  <div class="flex flex-wrap gap-2 mt-4">
    <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
      Kategori: Pelatihan
      <button class="hover:text-primary-900"><i class="fa-solid fa-times"></i></button>
    </span>
  </div>
</div>
```

**Fitur:**
- Search input
- Multiple filters
- Filter tags
- Clear filters
- Responsive

---

### 9. Notifikasi Component
**Digunakan di:** Semua halaman
**Deskripsi:** Notifikasi untuk alert & info

```html
<!-- Success Notification -->
<div class="fixed top-4 right-4 bg-green-500 text-white rounded-lg shadow-lg p-4 flex items-center gap-3 animate-slide-in">
  <i class="fa-solid fa-check-circle text-xl"></i>
  <div>
    <h4 class="font-bold">Berhasil!</h4>
    <p class="text-sm opacity-90">Pengaduan Anda telah diterima</p>
  </div>
  <button class="ml-4 hover:opacity-75">
    <i class="fa-solid fa-times"></i>
  </button>
</div>

<!-- Error Notification -->
<div class="fixed top-4 right-4 bg-red-500 text-white rounded-lg shadow-lg p-4 flex items-center gap-3">
  <i class="fa-solid fa-exclamation-circle text-xl"></i>
  <div>
    <h4 class="font-bold">Error!</h4>
    <p class="text-sm opacity-90">Terjadi kesalahan, silakan coba lagi</p>
  </div>
  <button class="ml-4 hover:opacity-75">
    <i class="fa-solid fa-times"></i>
  </button>
</div>

<!-- Info Notification -->
<div class="fixed top-4 right-4 bg-blue-500 text-white rounded-lg shadow-lg p-4 flex items-center gap-3">
  <i class="fa-solid fa-info-circle text-xl"></i>
  <div>
    <h4 class="font-bold">Info</h4>
    <p class="text-sm opacity-90">Musyawarah desa akan dimulai dalam 2 jam</p>
  </div>
  <button class="ml-4 hover:opacity-75">
    <i class="fa-solid fa-times"></i>
  </button>
</div>
```

**Fitur:**
- Multiple types (success, error, info, warning)
- Auto-dismiss
- Close button
- Animation
- Responsive

---

### 10. Modal/Dialog Component
**Digunakan di:** Semua halaman
**Deskripsi:** Modal untuk form & konfirmasi

```html
<!-- Modal -->
<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div class="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 animate-scale-in">
    <!-- Header -->
    <div class="flex items-center justify-between p-6 border-b border-gray-200">
      <h3 class="font-bold text-lg">Daftar Program</h3>
      <button class="text-gray-400 hover:text-gray-600">
        <i class="fa-solid fa-times text-xl"></i>
      </button>
    </div>
    
    <!-- Content -->
    <div class="p-6 space-y-4">
      <div>
        <label class="block text-sm font-bold mb-2">Nama Lengkap</label>
        <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600">
      </div>
      <div>
        <label class="block text-sm font-bold mb-2">Email</label>
        <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600">
      </div>
    </div>
    
    <!-- Footer -->
    <div class="flex gap-3 p-6 border-t border-gray-200">
      <button class="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-bold hover:bg-gray-50 transition">
        Batal
      </button>
      <button class="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition">
        Daftar
      </button>
    </div>
  </div>
</div>
```

**Fitur:**
- Header, content, footer
- Close button
- Form inputs
- Action buttons
- Animation
- Responsive

---

## WIREFRAME HALAMAN UTAMA

### Wireframe: Partisipasi Masyarakat
```
┌─────────────────────────────────────────┐
│ NAVBAR                                  │
├─────────────────────────────────────────┤
│ HERO SECTION                            │
│ "Partisipasi Masyarakat"                │
├─────────────────────────────────────────┤
│ SECTION 1: JADWAL MUSYAWARAH            │
│ ┌─────────────────────────────────────┐ │
│ │ Kalender Mini | Daftar Musyawarah   │ │
│ │ [Musyawarah 1] [Musyawarah 2]       │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│ SECTION 2: FORUM DISKUSI                │
│ ┌─────────────────────────────────────┐ │
│ │ [Topik 1] [Topik 2] [Topik 3]       │ │
│ │ [Topik 4] [Topik 5] [Topik 6]       │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│ SECTION 3: POLLING                      │
│ ┌─────────────────────────────────────┐ │
│ │ Pertanyaan: ...                     │ │
│ │ [Option 1] ████████░░ 45%           │ │
│ │ [Option 2] ██████░░░░ 30%           │ │
│ │ [Option 3] ████░░░░░░ 25%           │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│ SECTION 4: DOKUMENTASI                  │
│ ┌─────────────────────────────────────┐ │
│ │ [Foto 1] [Foto 2] [Foto 3]          │ │
│ │ [Foto 4] [Foto 5] [Foto 6]          │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│ FOOTER                                  │
└─────────────────────────────────────────┘
```

### Wireframe: Program Pemberdayaan
```
┌─────────────────────────────────────────┐
│ NAVBAR                                  │
├─────────────────────────────────────────┤
│ HERO SECTION                            │
│ "Program Pemberdayaan Masyarakat"       │
├─────────────────────────────────────────┤
│ FILTER & SEARCH                         │
│ [Search] [Kategori ▼] [Status ▼]       │
├─────────────────────────────────────────┤
│ PROGRAM CARDS (GRID)                    │
│ ┌──────────────┐ ┌──────────────┐      │
│ │ [Foto]       │ │ [Foto]       │      │
│ │ Program 1    │ │ Program 2    │      │
│ │ [Daftar]     │ │ [Daftar]     │      │
│ └──────────────┘ └──────────────┘      │
│ ┌──────────────┐ ┌──────────────┐      │
│ │ [Foto]       │ │ [Foto]       │      │
│ │ Program 3    │ │ Program 4    │      │
│ │ [Daftar]     │ │ [Daftar]     │      │
│ └──────────────┘ └──────────────┘      │
├─────────────────────────────────────────┤
│ PAGINATION                              │
│ [< Prev] [1] [2] [3] [Next >]          │
├─────────────────────────────────────────┤
│ FOOTER                                  │
└─────────────────────────────────────────┘
```

---

## COLOR PALETTE YANG DIREKOMENDASIKAN

```
Primary Colors:
- Primary-600: #059669 (Emerald - Smart Village)
- Primary-700: #047857
- Primary-50: #F0FDF4

Secondary Colors:
- Blue-600: #2563EB (Transparansi)
- Orange-600: #EA580C (Ekonomi)
- Purple-600: #9333EA (Pemberdayaan)
- Red-600: #DC2626 (Pengaduan)

SDGS Colors:
- Goal 1: #E5243B (Red)
- Goal 2: #DDA250 (Gold)
- Goal 3: #4C9F38 (Green)
- Goal 4: #C6192B (Red)
- Goal 5: #DD3E39 (Red)
- Goal 6: #26BDE2 (Blue)
- Goal 7: #FCC30B (Yellow)
- Goal 8: #A21942 (Purple)
- Goal 9: #DD1C3B (Red)
- Goal 10: #DD1C3B (Red)
- Goal 11: #FD6925 (Orange)
- Goal 12: #BF8B2E (Brown)
- Goal 13: #407D52 (Green)
- Goal 14: #0A97D9 (Blue)
- Goal 15: #56C596 (Green)
- Goal 16: #00689D (Blue)
- Goal 17: #1F4788 (Dark Blue)

Neutral Colors:
- Gray-50: #F9FAFB
- Gray-100: #F3F4F6
- Gray-200: #E5E7EB
- Gray-600: #4B5563
- Gray-900: #111827
```

---

## RESPONSIVE BREAKPOINTS

```
Mobile: 320px - 640px
Tablet: 641px - 1024px
Desktop: 1025px - 1440px
Large: 1441px+

Grid Columns:
- Mobile: 1-2 columns
- Tablet: 2-3 columns
- Desktop: 3-4 columns
- Large: 4-6 columns
```

---

**Dokumen ini adalah referensi komponen UI untuk Smart Village Pages**
