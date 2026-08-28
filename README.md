# Denha Motor Group

เว็บไซต์ต้นแบบของ Denha Motor Group สำหรับแสดงรถ โปรโมชั่น บริการ บทความความรู้ และระบบจัดการหลังบ้าน

## ไฟล์หลัก

- `index.html` — โครงสร้างหน้าเว็บไซต์และหน้า Admin Demo
- `styles.css` — รูปแบบและ responsive design
- `app.js` — การทำงานของหน้าเว็บ การจัดการสินค้า และบทความแบบ local storage
- `DENHA_MOTOR_GROUP_IMPLEMENTATION_SPEC.md` — สเปกสำหรับพัฒนาระบบจริง

## เปิดดูเว็บไซต์แบบ local

เปิดโฟลเดอร์นี้ด้วย web server เช่น Live Server หรือรันคำสั่ง:

```bash
python3 -m http.server 4174
```

จากนั้นเปิด `http://127.0.0.1:4174/`

> ข้อมูลสินค้าและบทความในเวอร์ชันต้นแบบถูกเก็บใน browser localStorage เพื่อสาธิตการทำงานเท่านั้น การใช้งานจริงควรเชื่อมต่อฐานข้อมูลและ API ตาม implementation spec
