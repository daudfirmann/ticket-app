alert("Aplikasi Tiket");

const nama = prompt(`Masukkan nama anda`);
const usia = parseInt(prompt(`Masukkan usia anda`));
const batasUsia = 13;

if (usia > batasUsia) {
    alert(`Anda diperbolehkan masuk studio`);
    const studio = prompt(`Pilih studio (A/B/C)`).toUpperCase();
    if (studio == "A" || studio == "B" || studio == "C") {
        alert(`Tiket ${nama}, Studio ${studio}, Usia ${usia} tahun`);
    } else {
        alert(`Input tidak valid`);
    }
} else {
    alert(`Anda tidak boleh masuk\nAnda harus berusia di atas ${batasUsia} tahun`);
}
