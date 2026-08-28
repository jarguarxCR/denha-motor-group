# Denha Motor Group Website
## Implementation Specification สำหรับ Codex

เอกสารนี้เป็นสเปกสำหรับพัฒนาเว็บไซต์ Denha Motor Group ตาม sitemap และ wireframe ที่อ้างอิงจากบทสนทนา “เพิ่มอะไรในเว็บไซต์” โดยเน้นให้เว็บไซต์ทำหน้าที่เป็น Sales Website ที่พาลูกค้าจากการค้นหารถไปสู่การติดต่อ ทดลองขับ ขอสินเชื่อ และปิดการขายได้จริง

เอกสารนี้ครอบคลุม

- เว็บไซต์ฝั่งลูกค้าและโครงสร้าง URL
- หน้ารายการรถและหน้ารายละเอียดรถแบบแยก URL
- ระบบค้นหารถตามประเภทรถ ราคา และงบผ่อนต่อเดือน
- ระบบโปรโมชั่น คำนวณค่างวด ทดลองขับ สินเชื่อ และเทิร์นรถ
- ระบบหลังบ้านสำหรับ Admin และ Staff
- ปุ่ม “แก้ไขสินค้า” จากหน้ารายการสินค้าและหน้ารายละเอียดสินค้าเมื่อผู้ใช้มีสิทธิ์
- CRUD สินค้า สต๊อก ราคา โปรโมชั่น รูปภาพ สาขา SEO และผู้ใช้
- Data model, API, UX flow, security, responsive design, testing และ acceptance criteria

---

## 1. เป้าหมายและหลักการผลิต

### 1.1 เป้าหมายธุรกิจ

1. ทำให้ลูกค้าหารถจากงบและความต้องการได้เร็ว
2. แสดงรถที่มีอยู่จริงแยกตามสาขา
3. ทำให้ลูกค้าเห็นราคา โปรโมชัน และค่างวดอย่างเข้าใจง่าย
4. เปลี่ยนทุกหน้าสำคัญให้สร้าง Lead ได้
5. ให้พนักงานอัปเดตสินค้าและสต๊อกได้เองโดยไม่ต้องแก้โค้ด
6. ให้แต่ละสาขามีหน้า Landing Page และข้อมูลติดต่อที่ถูกต้อง
7. รองรับ SEO สำหรับรุ่นรถ แบรนด์ สาขา บทความ และ FAQ

### 1.2 หลักการ UX

- เริ่มจากคำถาม “อยากได้รถแบบไหน?” หรือ “มีงบผ่อนเดือนละเท่าไหร่?” ไม่ใช่เริ่มด้วยข้อความต้อนรับยาว ๆ
- CTA หลักต้องเห็นชัด: ดูรถพร้อมส่ง, คำนวณค่างวด, ทดลองขับ, ขอสินเชื่อ, สอบถาม LINE/โทร
- ราคาและค่างวดต้องมีคำอธิบายว่าเป็นราคา/การคำนวณเบื้องต้นและอาจเปลี่ยนตามไฟแนนซ์
- หน้าสินค้าต้องใช้ข้อมูลจากฐานข้อมูลเดียวกับหลังบ้าน
- เมื่อสต๊อกเป็นศูนย์ ห้ามแสดงข้อความว่า “พร้อมส่ง” และต้องเปลี่ยน CTA เป็น “สอบถามรถเข้าใหม่” หรือ “ดูรุ่นใกล้เคียง”
- ผู้ใช้ทั่วไปเห็นเฉพาะข้อมูลที่เผยแพร่แล้ว
- ผู้ใช้หลังบ้านต้องเห็นปุ่มและฟังก์ชันตามสิทธิ์จริง ไม่ใช่พิจารณาจากการซ่อนปุ่มฝั่ง client เพียงอย่างเดียว

### 1.3 สมมติฐานสำหรับเวอร์ชันแรก

- เว็บไซต์เป็นภาษาไทยเป็นหลัก และเตรียมโครงสร้างให้รองรับภาษาอังกฤษภายหลัง
- สต๊อกและข้อมูลสินค้าจะถูกดูแลผ่านระบบหลังบ้านของเว็บไซต์
- การจองรถใน Phase แรกเป็นการส่ง Lead ยังไม่บังคับชำระมัดจำออนไลน์
- สาขาและช่องทาง LINE/โทรศัพท์ต้องถูกตั้งค่าในระบบหลังบ้าน ไม่ hard-code ในหน้าเว็บ
- จำนวนและชื่อสาขาจริงให้ทีมธุรกิจยืนยันก่อน seed ข้อมูลจริง
- ข้อมูลในโฟลเดอร์ sources/ เป็น reference แบบอ่านอย่างเดียว ห้ามแก้ไขหรือลบ

---

## 1.4 การยึดโครงสร้างจากภาพตัวอย่าง

ภาพตัวอย่างที่ผู้ใช้ส่งล่าสุดให้ถือเป็น visual reference ของโครงสร้างหน้าเว็บ ไม่ใช่เอกสารคำสั่งที่ต้องคัดลอกข้อความทุกตัวอักษร โดย implementation ต้องรักษาแนวคิดต่อไปนี้:

- Header มีเมนูหลัก 10 กลุ่ม: หน้าแรก, รถ, ซื้อรถ, โปรโมชั่น, บริการ, รีวิวลูกค้า, ความรู้, สาขา, เกี่ยวกับเรา และติดต่อเรา
- ใช้ visual hierarchy แบบการ์ดและ section ที่แยกชัดเจน พร้อม icon และ CTA
- ใช้สีแดงเป็นสี action/brand, สีกรมท่าหรือ navy เป็นสี service/ข้อมูล และสีดำ/เทาเป็นสีข้อความกับพื้นหลัง
- หน้าหลักต้องนำผู้ใช้ไปสู่ “ค้นหารถ”, “รถพร้อมส่ง”, “คำนวณค่างวด”, “เช็กสินเชื่อ”, “ทดลองขับ” และ “เทิร์นรถ” ได้จากพื้นที่เดียว
- แถบจุดเด่นท้ายหน้าใช้สื่อสาร 6 คุณค่าหลัก: หารถง่าย, ผ่อนสบาย, มั่นใจทุกขั้นตอน, บริการครบวงจร, ใกล้คุณ และเชื่อถือได้
- ฝั่งขวาหรือส่วนที่มองเห็นเด่นของ wireframe สื่อสารรายการระบบที่ต้องมี: Product Detail แยก URL, คำนวณค่างวด, Lead Management, จอง/มัดจำออนไลน์ในอนาคต, LINE/Messenger, mobile-first, SEO, page speed และ analytics
- กลุ่ม Admin ใน wireframe ประกอบด้วย จัดการสต๊อกรถ, จัดการโปรโมชั่น, จัดการ Lead, รายงานยอดขาย และตั้งค่าระบบ

### 1.5 หน้าตัวอย่างที่ต้องใช้เป็น visual QA baseline

ภาพตัวอย่างแสดงหน้าตัวอย่าง 5 หน้าหลัก ให้สร้างเป็น acceptance flow ดังนี้:

1. Home
   - hero โปรโมชั่น
   - เลือกรถตามงบผ่อน 1,500 / 2,000 / 3,000 / 4,000+ บาท
   - รถพร้อมส่ง
   - CTA ดูทั้งหมด
2. Product Detail
   - รูปรถ, รุ่น, ราคา, ดาวน์, ค่างวด, สี, สเปก, โปร และ CTA
   - ปุ่มคำนวณค่างวด, ขอสินเชื่อ, ทดลองขับ, สอบถาม LINE
3. Loan Calculator
   - เลือกรถ, ราคาขาย, ดาวน์, ระยะเวลา
   - แสดงยอดจัดไฟแนนซ์และค่างวดต่อเดือน
4. Pre-Approval
   - อายุ, อาชีพ, รายได้, อายุงาน, ภาระผ่อน, จังหวัด
   - แสดงผลเป็น “มีโอกาสผ่าน” หรือระดับความเหมาะสมเท่านั้น
5. Branch Page
   - ชื่อสาขา, รูปหน้าร้าน, โทร, LINE, แผนที่, ที่อยู่, เวลาเปิด
   - รายการรถที่มีในสาขาและ CTA สอบถามรถเข้าใหม่

---

## 2. โครงสร้าง Sitemap

### 2.1 เมนูหลักฝั่งลูกค้า

หน้าแรก

├── รถ
│   ├── รถพร้อมส่ง
│   ├── รถจักรยานยนต์ทั่วไปและรถครอบครัว
│   ├── Royal Alloy
│   ├── รถมอเตอร์ไซค์ไฟฟ้าและสามล้อไฟฟ้า
│   ├── ATV และรถใช้งานอเนกประสงค์
│   ├── รถมือสองและบิ๊กไบค์
│   └── เปรียบเทียบรถ
├── ซื้อรถ
│   ├── ค้นหารถตามงบ
│   ├── คำนวณค่างวด
│   ├── เช็กสินเชื่อเบื้องต้น
│   ├── ยื่นไฟแนนซ์ออนไลน์
│   ├── ทดลองขับ
│   └── เทิร์นรถ / ขายรถให้เรา
├── โปรโมชั่นและไฟแนนซ์
├── บริการหลังการขาย
│   ├── ศูนย์บริการ
│   ├── นัดหมายซ่อม
│   ├── Mobile Service
│   ├── อะไหล่
│   └── Warranty
├── รีวิวจากลูกค้า
├── ความรู้เรื่องรถ
├── FAQ
├── สาขา
├── เกี่ยวกับเรา
└── ติดต่อเรา

### 2.2 Frontend route map

| Route | หน้า | ความสามารถหลัก | SEO |
|---|---|---|---|
| / | Home | Hero, value proposition, quick finder, แบรนด์, รีวิว, CTA | index |
| /vehicles | รถทั้งหมด | ค้นหา กรอง เรียง เปรียบเทียบ | index |
| /vehicles/ready-to-deliver | รถพร้อมส่ง | กรองตามสาขา สต๊อก และงบ | index |
| /vehicles/category/[slug] | รถตามหมวด | แสดงสินค้าในหมวด | index |
| /vehicles/[slug] | รายละเอียดรถ | รูป สเปก ราคา โปร สต๊อก ค่างวด CTA | index |
| /compare | เปรียบเทียบรถ | เทียบรถ 2–3 รายการ | index ได้ถ้ามีข้อมูล |
| /buy/budget | ค้นหารถตามงบ | เลือกงบผ่อนและแนะนำรถ | index |
| /finance/calculator | คำนวณค่างวด | คำนวณราคา ดาวน์ อัตรา ระยะเวลา | index |
| /finance/pre-check | เช็กสินเชื่อเบื้องต้น | แบบสอบถาม 5–7 ข้อและสร้าง Lead | index |
| /finance/apply | ยื่นไฟแนนซ์ออนไลน์ | ฟอร์มข้อมูลลูกค้าและเอกสารตามนโยบาย | noindex |
| /test-drive | ทดลองขับ | เลือกรถ สาขา วัน เวลา และข้อมูลติดต่อ | index |
| /trade-in | เทิร์นรถ | รับข้อมูลรถเก่าและรูปภาพ | index |
| /promotions | โปรโมชั่น | รายการโปรโมชันและกรอง | index |
| /services | บริการหลังการขาย | ศูนย์ซ่อม อะไหล่ Warranty | index |
| /services/booking | นัดหมายซ่อม | ฟอร์มนัดหมายบริการ | noindex |
| /reviews | รีวิวลูกค้า | รีวิวส่งมอบ รีวิวรถ รีวิวบริการ | index |
| /knowledge | คลังความรู้ | รายการบทความและหมวด | index |
| /knowledge/[slug] | บทความ | บทความ FAQ related content CTA | index |
| /faq | FAQ | คำถามที่พบบ่อย | index |
| /branches | สาขาทั้งหมด | รายการสาขา แผนที่ และช่องทางติดต่อ | index |
| /branches/[slug] | หน้าสาขา | ที่อยู่ เวลา รถในสาขา โปร รีวิว แผนที่ | index |
| /about | เกี่ยวกับเรา | ประวัติ จุดเด่น ตัวแทนจำหน่าย | index |
| /contact | ติดต่อเรา | ข้อมูลติดต่อและฟอร์ม | index |
| /privacy | นโยบายความเป็นส่วนตัว | Privacy notice | index |
| /terms | เงื่อนไขการใช้งาน | Terms | index |

### 2.3 Admin route map

ทุก route ใต้ /admin ต้องผ่าน authentication และ authorization ฝั่ง server

| Route | ความสามารถ | Permission ขั้นต่ำ |
|---|---|---|
| /admin | Dashboard | dashboard.read |
| /admin/products | รายการสินค้า | product.read |
| /admin/products/new | เพิ่มสินค้า | product.create |
| /admin/products/[id]/edit | แก้ไขสินค้า | product.update |
| /admin/products/[id]/stock | สต๊อกสินค้ารายสาขา | inventory.read/update |
| /admin/inventory | สต๊อกรวมและประวัติการเคลื่อนไหว | inventory.read |
| /admin/promotions | CRUD โปรโมชั่น | promotion.read/create/update |
| /admin/branches | CRUD สาขา | branch.read/update |
| /admin/media | จัดการรูปภาพ/วิดีโอ | media.read/update |
| /admin/leads | ดูและเปลี่ยนสถานะ Lead | lead.read/update |
| /admin/test-drives | จัดการนัดทดลองขับ | lead.read/update |
| /admin/trade-ins | จัดการคำขอเทิร์นรถ | lead.read/update |
| /admin/content | บทความ FAQ รีวิว | content.read/update |
| /admin/seo | ค่า SEO และ redirect | seo.read/update |
| /admin/users | ผู้ใช้งาน | user.read/invite/update |
| /admin/roles | บทบาทและสิทธิ์ | role.read/update |
| /admin/audit-logs | ประวัติการแก้ไข | audit.read |
| /admin/settings | ตั้งค่าระบบ | settings.read/update |

---

## 3. โครงสร้างหน้าและ wireframe implementation

### 3.1 Global layout

Desktop

1. Top bar: สาขาเด่น, โทร, LINE, เวลาเปิดทำการ
2. Header: โลโก้, เมนูหลัก, search, ปุ่ม CTA
3. Breadcrumb ในหน้าภายใน
4. Main content
5. Footer: ลิงก์เมนู, สาขา, ช่องทางติดต่อ, Social, นโยบาย

Mobile

1. Header แบบ compact พร้อมปุ่มเมนู
2. CTA sticky ด้านล่างสำหรับ โทร, LINE, ทดลองขับ
3. เมนูเป็น drawer
4. Filter เป็น bottom sheet
5. ตารางสเปกใช้ accordion หรือ horizontal scroll

### 3.2 Home page

เรียง section ตาม wireframe และปรับให้เป็น funnel:

1. Hero banner slider
   - สื่อสารโปรโมชัน รถเด่น Royal Alloy, EV, ATV และข้อเสนอรายเดือน
   - แต่ละ slide มี headline, supporting copy, image, CTA 1–2 ปุ่ม
   - ตั้งค่า slide, ลำดับ, alt text, link, วันเริ่ม/สิ้นสุดได้จาก Admin
2. Quick intent finder
   - “อยากได้รถแบบไหน?”
   - ปุ่ม: รถทั่วไป, รถไฟฟ้า, สกู๊ตเตอร์, รถลุยงาน/ATV, รถมือสอง
3. Budget finder
   - “มีงบผ่อนเดือนละเท่าไหร่?”
   - ตัวเลือกเริ่มต้น 1,500 / 2,000 / 3,000 / 4,000+ บาท
   - ส่งไป /buy/budget พร้อม query parameters
4. Value proposition
   - ออกทุกอาชีพ/ประชาชนทั่วไป
   - ดันทุกเคส/ปรับตัวช่วยตามข้อมูลจริง
   - ส่งฟรี/สอนใช้งาน
   - รถโมบายเซอร์วิส
   - ข้อความทั้งหมดต้องแก้จาก CMS ได้
5. Authorized dealer showcase
   - โลโก้แบรนด์จากข้อมูลที่ตั้งค่าได้
   - คลิกไปหน้าหมวดแบรนด์หรือสินค้า
6. Featured ready-to-deliver
   - แสดงรถที่มีสต๊อกจริงและเผยแพร่แล้ว
   - ป้ายสาขา, จำนวนคงเหลือหรือ “พร้อมส่ง”
7. Promotions and finance teaser
   - โปรเด่น, 0 บาท, ดอกเบี้ยพิเศษ, ของแถม
   - ต้องมี disclaimer
8. Customer testimonials
   - รูป/วิดีโอ รีวิวส่งมอบ รีวิวไฟแนนซ์ รีวิวบริการ
9. Branch finder
   - เลือกสาขาแล้วเห็นโทร, LINE, แผนที่, รถในสาขา
10. Footer CTA
   - โทร, LINE, ทดลองขับ, ขอสินเชื่อ

### 3.3 Vehicle listing page

องค์ประกอบ:

- Heading และจำนวนผลลัพธ์
- Search โดยยี่ห้อ รุ่น หรือ keyword
- Filter: ประเภทรถ, แบรนด์, น้ำมัน/ไฟฟ้า, ใหม่/มือสอง, ช่วงราคา, งบผ่อน, สาขา, สถานะ
- Sort: แนะนำ, ราคาต่ำไปสูง, ใหม่ล่าสุด, พร้อมส่งก่อน
- Product card:
  - รูปหลัก
  - แบรนด์ รุ่น และ variant
  - ราคาเงินสด
  - ผ่อนเริ่มต้น
  - ป้ายโปร
  - สี/สเปกเด่น
  - สาขาที่มีรถ
  - ปุ่มดูรายละเอียด
  - ปุ่ม “แก้ไขสินค้า” เฉพาะผู้มี product.update
- Empty state:
  - แนะนำล้าง filter
  - แสดงรุ่นใกล้เคียง
  - CTA ให้ฝากข้อมูล/สอบถามรถเข้าใหม่

### 3.4 Product detail page

URL ต้องเป็น static-friendly slug เช่น /vehicles/gpx-dz3-red-2026

ส่วนประกอบ:

1. Breadcrumb
2. Gallery 8–15 รูป
   - รูปหลัก, thumbnail, fullscreen, lazy loading
   - รองรับวิดีโอสั้น
   - รูปทุกใบมี alt text
3. Product summary
   - แบรนด์, รุ่น, variant, ปี, สี
   - ราคาเงินสด, ราคาพิเศษ, ราคาเริ่มต้น
   - ค่างวดประมาณต่อเดือน
   - status: พร้อมส่ง, เหลือน้อย, สั่งจอง, สินค้าหมด
   - สาขาที่มีรถ
4. Primary CTA
   - คำนวณค่างวด
   - ทดลองขับคันนี้
   - ขอสินเชื่อ
   - สอบถาม LINE
   - โทรหาสาขา
5. Promotion block
   - โปรที่ active ตามสินค้า/สาขา
   - วันหมดเขตและเงื่อนไข
6. Specification table
   - เครื่องยนต์/มอเตอร์, CC/กำลัง, ระบบเบรก, ABS/TCS, น้ำหนัก, ความสูงเบาะ, มิติ, warranty
7. Finance calculator embedded
8. Branch stock table
   - สาขา, จำนวนพร้อมขาย, ระยะเวลาจัดส่ง, โทร/LINE
9. Used-bike condition report เมื่อเป็นรถมือสอง
   - ตรวจแล้วกี่จุด
   - เครื่องยนต์, เบรก, ไฟ, ช่วงล่าง, ยาง, เลขเครื่อง/ตัวถัง, ประวัติน้ำท่วม
   - รูปตำหนิจริงและวิดีโอรอบคัน
10. Related products
11. FAQ และ disclaimer
12. ปุ่ม “แก้ไขสินค้า”
   - แสดงเมื่อผู้ใช้ login แล้วและมี product.update
   - สำหรับ editor/admin/staff ที่ได้รับสิทธิ์
   - คลิกแล้วไป /admin/products/[id]/edit?returnTo=[current-url]
   - ผู้ใช้ทั่วไปและ staff ที่ไม่มีสิทธิ์ต้องไม่เห็นปุ่ม

### 3.5 Finance calculator

Inputs

- ราคารถ
- เงินดาวน์เป็นจำนวนเงินหรือเปอร์เซ็นต์
- อัตราดอกเบี้ยต่อปี หรือเลือกแผนที่ Admin เปิดใช้งาน
- ระยะเวลาผ่อน

Outputs

- เงินดาวน์
- ยอดจัดโดยประมาณ
- ค่างวดต่อเดือนโดยประมาณ
- ยอดชำระรวมโดยประมาณ
- CTA ขอสินเชื่อ

ข้อกำหนด:

- แยก “ค่างวดคำนวณโดยประมาณ” ออกจาก “ข้อเสนอที่อนุมัติจริง”
- ห้ามแสดงข้อความอนุมัติแน่นอน
- สูตรและค่าที่ใช้ต้องถูกส่งกลับจาก API ที่ version ได้
- ถ้าค่าดอกเบี้ยไม่มี ให้แสดงช่วงหรือระบุว่าให้เจ้าหน้าที่ประเมิน

### 3.6 Lead forms

ทุกฟอร์มต้องเก็บ source, campaign, landing page, product, branch และ consent

Form ทดลองขับ:

รถ → สาขา → วันที่ → ช่วงเวลา → ชื่อ → เบอร์ → LINE/ช่องทางติดต่อ → หมายเหตุ → consent

Form เช็กสินเชื่อเบื้องต้น:

อายุ → อาชีพ → รายได้ → อายุงาน → ภาระผ่อน → จังหวัด → รถที่สนใจ → ช่องทางติดต่อ → consent

Form เทิร์นรถ:

ยี่ห้อ → รุ่น → ปี → เลขไมล์ → จังหวัด → รูป 4–6 รูป → เบอร์/LINE → หมายเหตุ → consent

หลัง submit:

- สร้าง Lead/Request ในระบบ
- แสดงเลขอ้างอิง
- แจ้งเจ้าหน้าที่ตามสาขา
- แสดง success state ที่ไม่ทำให้ผู้ใช้ submit ซ้ำ
- บันทึก event สำหรับ analytics

---

## 4. ระบบ Admin และปุ่มแก้ไขสินค้า

### 4.1 Roles

| Role | สิทธิ์ |
|---|---|
| super_admin | ทุกอย่าง รวมจัดการ role และ settings |
| admin | CRUD สินค้า ราคา โปร รูป สต๊อก สาขา และดู Lead |
| editor | แก้ข้อมูลสินค้า รูป SEO content แต่แก้สิทธิ์/ผู้ใช้ไม่ได้ |
| branch_manager | ดู/แก้สต๊อกและข้อมูลสินค้าของสาขาตัวเอง ดู Lead ของสาขา |
| sales_staff | ดูสินค้า สร้าง/อัปเดต Lead และนัดหมาย ไม่ลบสินค้า |
| service_staff | จัดการนัดหมายซ่อมและ warranty ที่เกี่ยวข้อง |
| analyst | อ่าน dashboard, products, inventory, leads, audit logs |

ใช้ permission เป็นตัวตัดสินจริง เช่น product.update, inventory.update, promotion.update ไม่ตรวจจากชื่อ role อย่างเดียว

### 4.2 Product list ใน Admin

ต้องมี:

- Search: SKU, ชื่อรุ่น, slug, แบรนด์
- แถบกรอง “ประเภทรถ” แยกเป็น รถสวย (รถมือสอง), รถไฟฟ้าสองล้อ, รถไฟฟ้าสามล้อ, รถ ATV, รถสามล้อบรรทุก และรถจักรยานยนต์
- แถบกรอง “แบรนด์” แยกเป็น Zontes, GPX, EM, Royal alloy และแบรนด์อื่นที่มีในระบบ
- ทุกตัวกรองต้องแสดงจำนวนสินค้าในกลุ่ม และใช้ร่วมกับ search ได้
- Filter: ประเภท, แบรนด์, สถานะเผยแพร่, สถานะสต๊อก, สาขา, รถใหม่/มือสอง
- Columns: รูป, SKU, รุ่น, ราคา, สต๊อกรวม, สาขา, สถานะ, updated_at, ผู้แก้ไขล่าสุด
- Actions: ดูหน้าเว็บ, แก้ไข, แก้สต๊อก, duplicate, archive
- Bulk action เฉพาะสิทธิ์ที่อนุญาต: publish, unpublish, archive, เปลี่ยนหมวด
- Confirm dialog สำหรับ archive/delete

### 4.3 Product edit form

แบ่งเป็น tab เพื่อไม่ให้ฟอร์มยาวเกินไป:

1. Basic
   - ชื่อแสดงผล, แบรนด์, รุ่น, variant, SKU, slug, ประเภทสินค้า
2. Classification
   - หมวด, fuel type, condition, tags
3. Pricing
   - ราคาเงินสด, ราคาพิเศษ, ราคาเริ่มต้น, เงินดาวน์เริ่มต้น
   - ช่วงค่างวดและแผนไฟแนนซ์ที่ใช้อ้างอิง
4. Inventory
   - สาขา, on hand, reserved, sold, reorder threshold
   - ห้ามแก้ยอดคงเหลือโดยไม่มี stock movement
5. Media
   - อัปโหลดหลายไฟล์, เรียงลำดับ, ตั้งภาพหลัก, alt text, caption
6. Specifications
   - ฟิลด์มาตรฐานและ custom specs
7. Promotion
   - ผูกโปรโมชั่นที่ใช้งานได้
8. Used condition
   - แสดงเมื่อ condition = used
9. SEO
   - meta title, meta description, canonical, OG image, schema override
10. Publishing
   - draft, publish, unpublish, archive
   - preview ก่อนเผยแพร่

ปุ่ม:

- Save draft
- Preview
- Publish
- Update and return
- Cancel

การบันทึก:

- validate ฝั่ง client เพื่อ UX
- validate ซ้ำฝั่ง server
- บันทึก audit log
- เพิ่ม version หรือตรวจ updated_at เพื่อป้องกัน overwrite จากผู้แก้สองคน
- purge/revalidate cache ของหน้าที่เกี่ยวข้องหลัง publish/update

### 4.4 สถานะสินค้าและสต๊อก

แยก 2 ส่วน:

1. publication_status
   - draft
   - published
   - archived
2. availability_status
   - available
   - low_stock
   - preorder
   - sold_out
   - hidden

availability_status ควรคำนวณจาก inventory:

available_quantity = on_hand - reserved - sold

- available เมื่อ available_quantity > reorder_threshold
- low_stock เมื่อมากกว่า 0 แต่ไม่เกิน reorder_threshold
- sold_out เมื่อเท่ากับ 0
- preorder/hidden เป็น override ที่ต้องบันทึกเหตุผล

เมื่อยอดเป็น 0:

- หน้ารายการไม่ติดป้ายพร้อมส่ง
- หน้า Product แสดง “สอบถามรถเข้าใหม่” หรือ “เลือกสาขาอื่น”
- แนะนำสินค้าที่ใกล้เคียง

### 4.5 Promotion CRUD

ฟิลด์:

- ชื่อโปร
- ประเภท: discount_amount, discount_percent, freebie, low_interest, custom
- จำนวน/มูลค่า
- start_at, end_at
- สินค้าที่ร่วมรายการ
- สาขาที่ร่วมรายการ
- banner/image
- terms
- priority
- status

กติกา:

- โปรหมดอายุไม่แสดงฝั่ง public
- เวลาเก็บเป็น UTC และแสดงตาม Asia/Bangkok
- ห้ามซ้อนโปรโดยไม่มีกติกา priority
- หน้า Product ต้องคำนวณโปรเฉพาะที่ active และตรง product/branch

### 4.6 Article / Knowledge CRUD

ใน Admin ให้มี module “บทความความรู้” แยกจากสินค้า โดยรองรับ:

- รายการบทความพร้อม search, filter ตามหมวด และ filter ตามสถานะ
- หมวดตัวอย่าง: รถและการใช้งาน, การเงิน / ไฟแนนซ์, ดูแลรถ, เทคนิคการขับขี่ และ FAQ
- ปุ่ม เพิ่มบทความ, แก้ไข และลบ
- ฟิลด์: ชื่อบทความ, หมวด, สถานะ draft/published, ผู้เขียน, คำโปรย, เนื้อหา, SEO title, SEO description และบทความเด่น
- รองรับรูปหน้าปกบทความ: JPG, PNG, WebP พร้อม alt text/metadata และการเปลี่ยนหรือลบรูป
- รองรับลิงก์วิดีโอ YouTube และ TikTok โดยตรวจ protocol เป็น HTTPS และ allow-list domain ก่อนบันทึก
- หน้า Knowledge แสดงป้ายสื่อแนบและลิงก์วิดีโอแบบเปิดแท็บใหม่
- เมื่อ publish ให้แสดงในเมนูความรู้ฝั่งลูกค้า
- เมื่อแก้ไขบทความที่เผยแพร่แล้ว ต้อง revalidate หน้า Knowledge และบันทึก audit log
- การลบต้องมี confirm dialog และควรใช้ soft delete/archive ใน production เพื่อรักษาประวัติ

---

## 5. Data model

ใช้ relational database เช่น PostgreSQL โดยใช้ UUID เป็น primary key, created_at/updated_at ทุกตาราง และ soft delete กับข้อมูลที่ต้องรักษาประวัติ

### 5.1 users

- id
- email
- name
- phone
- password_hash หรือ external_auth_id
- status: active, invited, suspended
- last_login_at
- created_at, updated_at

### 5.2 roles, permissions, user_roles, role_permissions

- roles: id, key, name
- permissions: id, key, description
- user_roles: user_id, role_id
- role_permissions: role_id, permission_id

### 5.3 branches

- id
- slug
- name
- short_name
- address
- province
- phone
- line_url
- map_url
- latitude, longitude
- opening_hours JSON
- image_media_id
- is_active
- seo_title, seo_description

### 5.4 products

- id
- sku
- slug unique
- brand
- model
- variant_name
- display_name
- vehicle_type: used, ev2, ev3, atv, cargo3, standard
- vehicle_category
- fuel_type: gasoline, electric, hybrid, other
- condition: new, used
- model_year
- colors JSON
- description
- short_description
- cash_price
- sale_price nullable
- starting_down_payment nullable
- starting_monthly_payment nullable
- warranty_text
- publication_status
- availability_override nullable
- availability_override_reason nullable
- specs JSON
- used_condition_report JSON nullable
- seo_title
- seo_description
- canonical_url nullable
- og_image_media_id nullable
- published_at nullable
- archived_at nullable
- created_by, updated_by
- created_at, updated_at

### 5.5 product_media

- id
- product_id
- media_type: image, video
- storage_key
- url
- alt_text
- caption
- sort_order
- is_primary
- width, height, mime_type, size_bytes
- created_at

### 5.6 inventories

- id
- product_id
- branch_id
- on_hand integer
- reserved integer
- sold integer
- reorder_threshold integer
- updated_by
- unique(product_id, branch_id)

### 5.7 stock_movements

- id
- product_id
- branch_id
- type: receive, reserve, release, sale, adjustment, transfer_in, transfer_out
- quantity
- before_quantity
- after_quantity
- reference_type
- reference_id
- note
- created_by
- created_at

ห้าม update on_hand แบบเงียบ ๆ โดยไม่มี stock_movement ยกเว้น migration ที่จำกัดสิทธิ์

### 5.8 price_history

- id
- product_id
- cash_price
- sale_price
- starting_down_payment
- starting_monthly_payment
- effective_from
- effective_to nullable
- changed_by
- reason

### 5.9 promotions, promotion_products, promotion_branches

- promotions: id, name, slug, type, value, terms, start_at, end_at, image_media_id, priority, status
- promotion_products: promotion_id, product_id
- promotion_branches: promotion_id, branch_id

### 5.10 leads

- id
- type: inquiry, finance_precheck, finance_application, test_drive, trade_in, service
- name
- phone
- line_id nullable
- email nullable
- product_id nullable
- branch_id nullable
- source
- campaign
- landing_page
- status: new, contacted, waiting_documents, finance_submitted, approved, appointment, delivered, rejected, lost
- assigned_to nullable
- notes
- consent_at
- created_at, updated_at

### 5.11 test_drive_bookings

- id, lead_id, product_id, branch_id
- booking_date
- time_slot
- status: requested, confirmed, completed, cancelled, no_show
- staff_note

### 5.12 trade_in_requests

- id, lead_id
- make, model, model_year, mileage
- province
- photos JSON
- estimated_price nullable
- evaluation_status
- evaluator_id nullable

### 5.13 content, reviews, faq_items

ใช้สำหรับคลังความรู้ รีวิว และ FAQ พร้อม slug, status, publish_at, author, SEO fields และ media relationships

ฟิลด์ขั้นต่ำของ content:

- id
- slug unique
- title
- category
- excerpt
- body/content
- author_id
- status: draft, published, archived
- featured
- seo_title, seo_description
- cover_media_id nullable
- youtube_url nullable
- tiktok_url nullable
- published_at
- created_at, updated_at, updated_by

### 5.14 audit_logs

- id
- actor_user_id
- action
- entity_type
- entity_id
- before JSON nullable
- after JSON nullable
- ip_address
- user_agent
- created_at

ห้ามเก็บ password, token หรือข้อมูลเอกสารสำคัญแบบ plaintext ใน audit log

---

## 6. API endpoints

ตัวอย่าง prefix: /api/v1

### 6.1 Public read APIs

| Method | Endpoint | ความสามารถ |
|---|---|---|
| GET | /products | ค้นหาและกรองสินค้า |
| GET | /products/ready-to-deliver | รถพร้อมส่ง |
| GET | /products/[slug] | รายละเอียดรถ |
| GET | /products/[id]/availability | สต๊อกตามสาขา |
| GET | /categories | รายการหมวดรถ |
| GET | /brands | แบรนด์ |
| GET | /promotions | โปรโมชั่นที่ active |
| GET | /branches | สาขาที่ active |
| GET | /branches/[slug] | รายละเอียดสาขา |
| GET | /finance/plans | แผนค่างวดที่เปิดใช้ |
| POST | /leads | สร้าง Lead |
| POST | /test-drive-bookings | สร้างคำขอทดลองขับ |
| POST | /trade-in-requests | สร้างคำขอเทิร์นรถ |
| POST | /finance/pre-check | สร้างผลประเมินเบื้องต้น |
| POST | /finance/calculate | คำนวณค่างวด |

Public API ต้องคืนเฉพาะ field ที่ผู้ใช้จำเป็นต้องเห็น ห้ามส่ง cost, internal note, audit, หรือข้อมูลส่วนตัวของพนักงาน

### 6.2 Admin product APIs

| Method | Endpoint | Permission |
|---|---|---|
| POST | /admin/products | product.create |
| GET | /admin/products | product.read |
| GET | /admin/products/[id] | product.read |
| PATCH | /admin/products/[id] | product.update |
| POST | /admin/products/[id]/publish | product.publish |
| POST | /admin/products/[id]/unpublish | product.publish |
| POST | /admin/products/[id]/archive | product.archive |
| POST | /admin/products/[id]/duplicate | product.create |
| DELETE | /admin/products/[id] | product.delete, จำกัด super_admin |
| POST | /admin/products/[id]/media | media.update |
| DELETE | /admin/products/[id]/media/[mediaId] | media.update |
| PATCH | /admin/products/[id]/media/reorder | media.update |

### 6.3 Inventory APIs

| Method | Endpoint | Permission |
|---|---|---|
| GET | /admin/inventory | inventory.read |
| GET | /admin/products/[id]/inventory | inventory.read |
| POST | /admin/products/[id]/inventory/movements | inventory.update |
| PATCH | /admin/products/[id]/inventory/[branchId] | inventory.update |
| GET | /admin/inventory/movements | inventory.read |

PATCH ที่ inventory ต้องรับเหตุผลและสร้าง stock movement ใน transaction เดียวกัน

### 6.4 Promotion, branch, lead, user APIs

| Method | Endpoint | Permission |
|---|---|---|
| POST/PATCH/DELETE | /admin/promotions, /admin/promotions/[id] | promotion.create/update/delete |
| POST/PATCH | /admin/branches, /admin/branches/[id] | branch.create/update |
| GET/PATCH | /admin/leads, /admin/leads/[id] | lead.read/update |
| POST/PATCH | /admin/users, /admin/users/[id] | user.create/update |
| GET/PATCH | /admin/roles, /admin/roles/[id] | role.read/update |
| GET | /admin/audit-logs | audit.read |

### 6.5 API behavior ที่ต้องมี

- pagination แบบ cursor หรือ page/limit ที่กำหนด max limit
- filter และ sort แบบ allow-list
- validation ด้วย schema ฝั่ง server
- error format เดียวกัน: code, message, field_errors, request_id
- idempotency key สำหรับการ submit Lead และ booking
- rate limit สำหรับ public form และ login
- optimistic concurrency ด้วย version หรือ updated_at
- log request_id สำหรับ trace

---

## 7. UX flow สำคัญ

### 7.1 ลูกค้าหารถตามงบ

หน้าแรก → เลือก “ผ่อนไม่เกิน 2,000” → /buy/budget?monthlyMax=2000 → ระบบเรียกสินค้า published ที่มี monthly payment เข้าเงื่อนไข → ลูกค้ากรองสาขา/ประเภทรถ → ดูรายละเอียด → กดทดลองขับ/สินเชื่อ/LINE

### 7.2 ลูกค้าดูรถพร้อมส่ง

/vehicles/ready-to-deliver → เลือกสาขาและประเภท → เห็นจำนวนรถพร้อมขาย → เปิด Product Detail → เลือกสาขา → ส่ง Lead หรือโทร/LINE

### 7.3 Admin แก้ไขสินค้าจากหน้ารายการ

ผู้ใช้ login → GET /vehicles หรือ /vehicles/[category] → server ตรวจ session และ permission product.update → แสดงปุ่ม “แก้ไขสินค้า” บน card → คลิก → /admin/products/[id]/edit?returnTo=... → โหลดข้อมูล → แก้ไข → validate → Save → API บันทึก + audit + revalidate → แสดง toast → กลับหน้าสินค้าเดิมหรือหน้า edit ตามปุ่มที่เลือก

### 7.4 Admin แก้ไขสินค้าจากหน้ารายละเอียด

ผู้ใช้ login → /vehicles/[slug] → แสดงปุ่ม “แก้ไขสินค้า” ใกล้ชื่อสินค้า → คลิกไป edit route → หลัง save กลับ Product Detail → ข้อมูลราคา/สต๊อก/โปรใหม่แสดงทันทีหลัง cache revalidation

### 7.5 Admin รับรถเข้า

/admin/products/[id]/stock → เลือกสาขา → เลือก Receive stock → ระบุจำนวนและเอกสารอ้างอิง → transaction สร้าง stock movement → inventory เพิ่ม → availability status คำนวณใหม่ → public page อัปเดต

### 7.6 Admin ขายรถ/ตัดสต๊อก

เลือก product + branch → Sale/Adjustment → ระบุจำนวน เหตุผล และ reference → ตรวจว่าจำนวนไม่ติดลบ → บันทึก movement → ถ้าเหลือ 0 เปลี่ยนเป็น sold_out และ CTA ฝั่ง public เปลี่ยนอัตโนมัติ

### 7.7 โปรโมชั่น

สร้าง promotion → ตั้งช่วงเวลา → ผูก product/branch → preview → publish → หน้าโปรโมชั่นและ Product Detail แสดงโปร → เมื่อหมดเวลา API ไม่ส่งโปรนั้นใน public response

---

## 8. SEO และ content requirements

ทุกหน้าที่ index ได้ต้องมี:

- unique title
- meta description
- canonical
- Open Graph title/description/image
- breadcrumb
- heading hierarchy ที่ถูกต้อง
- internal links
- sitemap.xml และ robots.txt

Structured data ตามประเภทหน้า:

- Product + Offer สำหรับ Product Detail
- LocalBusiness สำหรับ Branch
- FAQPage สำหรับ FAQ
- Article สำหรับบทความ
- BreadcrumbList สำหรับหน้าภายใน

กติกา:

- URL ใช้ slug อ่านง่ายและคงที่
- เปลี่ยน slug ต้องสร้าง 301 redirect จาก slug เดิม
- /admin, หน้าฟอร์ม, ข้อมูลส่วนตัว และหน้าผลลัพธ์ที่มี query ซับซ้อนไม่ควร index
- สินค้าหมดอาจยังคง index ได้ถ้ายังเป็นรุ่นที่ค้นหา แต่ต้องเปลี่ยน Offer/status และมีรุ่นใกล้เคียง
- ราคาและ availability ใน schema ต้องตรงกับข้อมูลที่แสดงจริง

---

## 9. Security และ privacy

### Authentication

- ใช้ secure, httpOnly, sameSite cookie หรือมาตรฐาน session ที่เทียบเท่า
- password ต้อง hash ด้วย Argon2id หรือ bcrypt cost ที่เหมาะสม
- รองรับ invite flow และ password reset แบบ token หมดอายุ
- จำกัด login attempts และบันทึก security event
- แนะนำ MFA สำหรับ super_admin/admin

### Authorization

- ตรวจ permission ฝั่ง server ทุก admin route และทุก admin API
- branch_manager จำกัดข้อมูลตาม branch scope
- ห้ามใช้ hidden button เป็น security control
- ใช้ deny-by-default

### Input และ file upload

- validate ทุก payload ด้วย schema
- sanitize rich text และป้องกัน XSS
- ใช้ allow-list สำหรับ sort/filter/field ที่แก้ได้
- upload ต้องตรวจ MIME, extension, ขนาด, image dimensions และ malware policy
- เก็บไฟล์ใน object storage ที่เข้าถึงผ่าน signed URL หรือ CDN policy
- ห้ามใช้ filename ของผู้ใช้เป็น path โดยตรง

### Data protection

- เก็บ consent timestamp และ privacy version ของแต่ละ Lead
- จำกัดการเห็นเบอร์โทรและข้อมูลสินเชื่อตาม role
- ไม่ log เอกสารหรือข้อมูลอ่อนไหวโดยไม่จำเป็น
- กำหนด retention และขั้นตอนลบ/anonimize ตามนโยบายบริษัทและกฎหมายที่เกี่ยวข้อง
- ใช้ HTTPS, secret manager และไม่ commit secret

### Audit

บันทึกการสร้าง แก้ไข publish unpublish archive ลบสินค้า ปรับสต๊อก แก้สิทธิ์ และเปลี่ยนข้อมูลผู้ใช้ โดยเก็บ actor, เวลา, entity, before/after, IP และ request_id

---

## 10. Responsive, accessibility และ performance

### Breakpoints

- mobile: 0–767px
- tablet: 768–1023px
- desktop: 1024px ขึ้นไป

### Responsive requirements

- Product grid: 2 columns mobile, 3 tablet, 4 desktop ตามพื้นที่
- Filter mobile เป็น bottom sheet
- Product Detail mobile ใช้ gallery เต็มความกว้างและ sticky CTA
- ตารางสเปกอ่านได้โดยไม่ทำให้ layout พัง
- Form ใช้ input ขนาดที่แตะง่ายและ keyboard type ถูกต้อง
- Admin table mobile ใช้ card/priority columns หรือ horizontal scroll ที่ใช้งานได้จริง

### Accessibility

- รองรับ keyboard navigation
- มี visible focus state
- alt text รูปภาพทุกใบ
- contrast ผ่านมาตรฐาน WCAG AA เป้าหมาย
- label/error ของ form เชื่อมกับ input
- ไม่สื่อสารด้วยสีอย่างเดียว
- modal และ drawer จัดการ focus ถูกต้อง

### Performance

- ใช้ responsive images และ lazy loading
- ตั้ง width/height ลด layout shift
- preload เฉพาะ hero asset ที่จำเป็น
- cache public GET และ revalidate หลังแก้ข้อมูล
- เป้าหมาย Core Web Vitals อยู่ในระดับที่เหมาะสมก่อนเปิดตัว
- query รายการรถต้องมี index และ pagination

---

## 11. แนวทางสถาปัตยกรรมที่แนะนำ

Codex สามารถเลือก stack ที่เข้ากับ repository ได้ แต่หากเริ่มจากศูนย์ให้ใช้แนวทางนี้:

- Frontend + server routes: Next.js + TypeScript
- UI: component system ที่รองรับ responsive และ accessible
- Database: PostgreSQL
- ORM/migrations: Prisma หรือ Drizzle
- Auth: session-based auth พร้อม RBAC
- Storage: S3-compatible object storage
- Validation: Zod หรือเทียบเท่า
- Testing: unit, integration, Playwright E2E
- Observability: structured logs, error tracking, request_id

แยกชั้น:

1. UI components
2. page/server actions/API handlers
3. application services: ProductService, InventoryService, PromotionService, LeadService
4. repository/data access
5. database and storage adapters

อย่าใส่ business rule เช่น การคำนวณ availability หรือสิทธิ์การแก้ไขไว้ใน component อย่างเดียว

---

## 12. Acceptance criteria

### Public website

- [ ] ผู้ใช้เปิดหน้าแรกและเข้าถึงรถตามประเภทหรือค่างวดได้ไม่เกิน 2 คลิก
- [ ] Header มีเมนูหลัก 10 กลุ่มตาม visual reference และเมนูทำงานได้ทั้ง desktop/mobile
- [ ] Home มี hero, budget finder, รถพร้อมส่ง, โปรโมชัน, รีวิว และแถบจุดเด่น 6 คุณค่า
- [ ] มี visual QA ของหน้าตัวอย่าง Home, Product Detail, Loan Calculator, Pre-Approval และ Branch Page
- [ ] หน้ารถทั้งหมดค้นหา/กรองตามแบรนด์ ประเภท ราคา งบผ่อน และสาขาได้
- [ ] รถทุกคันที่เผยแพร่มี URL รายการของตัวเอง
- [ ] Product Detail แสดงรูป สเปก ราคา โปร สต๊อกสาขา และ CTA ครบ
- [ ] หน้าเว็บไม่แสดงสินค้าที่เป็น draft หรือ archived
- [ ] สินค้าที่สต๊อกเป็นศูนย์ไม่แสดงเป็นพร้อมส่ง
- [ ] ค่างวดระบุชัดว่าเป็นการประมาณการ
- [ ] ลูกค้าส่งฟอร์มทดลองขับ สินเชื่อ เทิร์นรถ และติดต่อได้
- [ ] Lead ถูกผูกกับสินค้า สาขา source และ consent
- [ ] หน้าสาขามีข้อมูลติดต่อ รถในสาขา และลิงก์แผนที่
- [ ] เมนูความรู้แสดงเฉพาะบทความที่มีสถานะ published
- [ ] SEO metadata และ structured data ถูกสร้างจากข้อมูลจริง

### Admin และปุ่มแก้ไขสินค้า

- [ ] ผู้ใช้ทั่วไปไม่เห็นปุ่ม “แก้ไขสินค้า”
- [ ] ผู้ใช้ที่มี product.update เห็นปุ่มบน product card ในหน้ารายการ
- [ ] ผู้ใช้ที่มี product.update เห็นปุ่มบน Product Detail
- [ ] Admin dashboard มีทางลัดไปยังจัดการสต๊อก โปรโมชั่น Lead รายงานยอดขาย และตั้งค่าระบบ
- [ ] การเข้าหน้า /admin/products/[id]/edit โดยผู้ไม่มีสิทธิ์ได้ 403 หรือถูก redirect อย่างเหมาะสม
- [ ] Admin สร้างสินค้า แก้ไขสินค้า publish unpublish archive และค้นหาได้
- [ ] Admin แก้ราคาและเห็น price history
- [ ] Admin อัปโหลด เรียง ตั้งภาพหลัก แก้ alt text และลบรูปได้ตามสิทธิ์
- [ ] Admin ผูก promotion กับสินค้าและสาขาได้
- [ ] Admin ปรับสต๊อกผ่าน stock movement ที่มีเหตุผลทุกครั้ง
- [ ] ระบบไม่ยอมให้สต๊อกติดลบ
- [ ] เมื่อสต๊อกเป็น 0 สถานะและ CTA ฝั่ง public เปลี่ยนตามกติกา
- [ ] branch_manager แก้ได้เฉพาะข้อมูลในสาขาที่ตนดูแล
- [ ] Admin เพิ่ม แก้ไข กรอง เผยแพร่ และลบบทความความรู้ได้
- [ ] การลบบทความมีการยืนยัน และบทความที่ลบไม่แสดงในหน้า public
- [ ] บทความที่ publish หรือแก้ไขแล้วแสดงบนหน้า Knowledge หลัง revalidate
- [ ] ทุกการแก้ไขสำคัญมี audit log
- [ ] Save จากหน้า edit revalidate หน้า public และไม่ทำให้ข้อมูลเดิมหายจาก concurrent edit

### Security และคุณภาพ

- [ ] Admin API ตรวจ session และ permission ฝั่ง server
- [ ] มี rate limit ที่ login และ public forms
- [ ] มี validation และ error state ที่อ่านเข้าใจได้
- [ ] upload ไม่รับไฟล์ต้องห้ามหรือไฟล์ที่เกินขนาด
- [ ] ไม่มี secret หรือ PII สำคัญใน source และ log
- [ ] responsive ใช้งานได้ที่ mobile/tablet/desktop
- [ ] keyboard navigation และ form accessibility ผ่านการตรวจ
- [ ] มี unit/integration/E2E test สำหรับ product CRUD, permission และ inventory movement

---

## 13. แผนพัฒนาแนะนำ

### Phase 0: Foundation

- ตั้งค่า project, design tokens, layout, auth, database, migrations
- สร้าง RBAC และ audit log
- สร้าง media storage abstraction
- สร้าง seed สำหรับหมวด แบรนด์ และสาขาแบบ placeholder

### Phase 1: Sales Website MVP

- Home
- Vehicle listing
- Ready-to-deliver
- Product Detail
- Product/branch availability
- Promotions
- Finance calculator
- Test drive form
- Finance pre-check form
- Branch pages
- Contact
- SEO พื้นฐาน

### Phase 2: Admin Product and Inventory

- Admin dashboard
- Product CRUD
- ปุ่มแก้ไขสินค้าจาก listing และ Product Detail
- Media management
- Price history
- Inventory per branch
- Stock movements
- Publish/unpublish/archive
- Promotion CRUD
- Permission scope ตามสาขา

### Phase 3: Lead Operations

- Lead inbox
- Assign staff
- Lead statuses
- Test drive calendar
- Trade-in requests
- แจ้งเตือนภายในหรือเชื่อม LINE/CRM ตาม connector ที่เลือก
- Dashboard conversion เบื้องต้น

### Phase 4: Content and SEO Growth

- Knowledge base
- FAQ
- Reviews
- Structured data
- Redirect management
- SEO dashboard และ content workflow

### Phase 5: Advanced Features

- Compare vehicles
- Condition report สำหรับมือสอง
- Online deposit ถ้าธุรกิจต้องการ
- Import/export จาก Google Sheet หรือระบบสต๊อกเดิม
- Branch-specific pricing
- Analytics funnel และ campaign attribution

ลำดับที่ควรทำก่อนเปิดใช้งานจริงคือ Phase 1 และ Phase 2 เพราะเว็บไซต์จะมีประโยชน์ต่อยอดขายก็ต่อเมื่อข้อมูลรถ ราคา และสต๊อกถูกดูแลได้ต่อเนื่อง

---

## 14. Definition of Done สำหรับ Codex

งานถือว่าเสร็จเมื่อ:

1. มี route ฝั่งลูกค้าและ admin ตามเอกสารนี้ หรือมีเหตุผลบันทึกไว้หากปรับชื่อ route
2. Product CRUD ทำงานครบทั้ง validation, permission, media, SEO และ publishing
3. ปุ่มแก้ไขสินค้าปรากฏจากทั้ง product listing และ Product Detail เฉพาะผู้มีสิทธิ์
4. สต๊อกทุกการเปลี่ยนแปลงสร้าง stock movement และไม่ติดลบ
5. ข้อมูล public มาจาก database/API เดียวกับ admin
6. หลังแก้ไขข้อมูล หน้า public revalidate และแสดงข้อมูลใหม่
7. Lead forms สร้างข้อมูลพร้อม source, branch, product และ consent
8. มี seed/demo data ที่ทำให้ทดสอบ flow ได้ครบ
9. มี automated tests สำหรับ auth, RBAC, product CRUD และ inventory
10. ผ่าน responsive/accessibility/SEO smoke test
11. README ของ repository ระบุวิธีติดตั้ง migration seed รัน test และสร้าง admin user
12. ไม่มีการแก้ไขหรือลบไฟล์ reference ใน sources/

---

## 15. ข้อมูลที่ต้องยืนยันก่อนเชื่อม production

ทีมธุรกิจควรยืนยันค่าต่อไปนี้ก่อนเปิดระบบจริง:

- ชื่อและข้อมูลสาขาทั้งหมด
- แบรนด์และรุ่นรถที่เป็นตัวแทนจำหน่าย
- รูปแบบการเก็บสต๊อกเดิมและวิธี import
- ตารางไฟแนนซ์และสูตรค่างวดที่อนุมัติให้ใช้แสดง
- เงื่อนไขโปรโมชั่นและข้อความ disclaimer
- ช่องทาง LINE OA แยกตามสาขาหรือใช้ช่องทางกลาง
- ขั้นตอนรับ Lead และผู้รับผิดชอบแต่ละสถานะ
- ระยะเวลาเก็บข้อมูลส่วนบุคคลและนโยบายความเป็นส่วนตัว
- ต้องการรับมัดจำออนไลน์ใน Phase ใด

เอกสารนี้ตั้งใจให้ Codex เริ่มสร้างโครงสร้างและ MVP ได้ทันที โดยจุดที่ยังต้องรอข้อมูลธุรกิจให้ใช้ configuration/seed data แยกจาก logic และห้าม hard-code ลงใน component หน้าเว็บ
