const barangData ={
    {kode: "001", nama, "A", harga, 10000}
    {kode: "002", nama, "B", harga, 20000}
    {kode: "003", nama, "C", harga, 30000}
};

function tampilkanDataBarang(){
    const barangTable = document.getElementById("barangTable");
    barangData.forEach((barang, index) => {
        const row= barangTable.insertRow(index + 1);
        const kodeCell = row.insertCell(0);
        const namaCell = row.insertCell(1);
        const hargaCell = row.insertCell(2);

        kodeCell.textContent = barang.kode;
        namaCell.textContent = barang.nama;
        hargaCell.textContent = barang.harga;
    });
}
function tambahTransaksi(event) {
    event.preventDefault();
    const kodeInput = document.getElementById("KodeInput");
    const quantityInput = document.getElementById("quantityInput");

    const selectedBarang = barangData.find(
        (barang) => barang.kode === kodeInput.value
    );
    if (!selectedBarang) {
        alert("Barang tidak ditemukan!");
        return;
    }
    const jumlah = parseInt(quantityInput.value);
    const totalHarga= selectedBarang.harga * jumlah;

    const bayar = window.prompt(
        "Total yang harus dibayar: "+
        totalHarga+
        "\n\n" +
        "Masukkan nominal yang ingin Anda bayarkan:"
    );
    if (bayar === null || bayar === "") {
        alert("pemayaran dibatalkan");
        return;
    }

    const jumlahBayar = parseFloat(bayar);
    if (isNaN(jumlahBayar) || jumlahBayar < totalHarga) {
        alert("Nominal yang dimasukkan salah atau kurang!");
        return;
    }
    const kembalian = jumlahBayar - totalHarga;
    alert(
        "Pembayaran Berhasil\n\n" +
        "Nominal yang harus dibayarkan: "+
        totalHarga+
        "\n" +
        "Nominal yang dibayarkan :"+
        jumlahBayar +
        "\n\n" +
        "Kembalian: "+
        kembalian
    );
}
document.addEventListener("DOMContentLoaded", () => {
    tampilkanDataBarang();
});