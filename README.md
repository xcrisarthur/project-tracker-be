# Cara Menjalankan Proyek

Ikuti langkah-langkah berikut untuk menjalankan proyek ini:

1. **Clone Repository**

   * Pertama, clone repository ini dengan menjalankan perintah berikut:

     ```bash
     git clone https://github.com/xcrisarthur/project-tracker-be.git
     ```

2. **Masuk ke Direktori Proyek**

   * Pindah ke direktori proyek yang telah di-clone:

     ```bash
     cd project-tracker-be
     ```

3. **Buat Database MySQL Lokal**

   * Buatlah database MySQL lokal dengan nama `project_tracker`.

4. **Lakukan Migrasi Database**

   * Jalankan perintah berikut untuk melakukan migrasi database:

     ```bash
     npx sequelize-cli db:migrate --env development
     ```

5. **Isi Database dengan Data Seeder**

   * Setelah migrasi selesai, jalankan perintah berikut untuk mengisi database dengan data seed:

     ```bash
     npx sequelize-cli db:seed:all --env development
     ```

6. **Install Dependencies**

   * Install semua dependencies yang diperlukan dengan perintah:

     ```bash
     npm install
     ```

7. **Jalankan Server**

   * Terakhir, jalankan server dengan perintah:

     ```bash
     node server.js
     ```

