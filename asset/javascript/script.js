function showToast(message, type = 'success')
  {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.className = '';
  toast.textContent = message;
  toast.classList.add('show', type);

  setTimeout(() =>
  {
    toast.classList.remove('show');
  }, 3000);
}

function handleSubmit()
{
  const nama = document.getElementById('nama');
  const nik = document.getElementById('nik');
  const jalur = document.getElementById('jalur');

  if (!nama.value.trim())
  {
    showToast('⚠️ Nama Lengkap tidak boleh kosong!', 'error');
    nama.focus();
    return;
  }

  if (!nik.value.trim())
  {
    showToast('⚠️ NIK tidak boleh kosong!', 'error');
    nik.focus();
    return;
  }

  const nikValue = nik.value.trim();
  if (!/^\d{16}$/.test(nikValue))
  {
    showToast('⚠️ NIK harus berisi tepat 16 digit angka!', 'error');
    nik.focus();
    return;
  }

  if (!jalur.value)
  {
    showToast('⚠️ Jalur Pendaftaran belum dipilih!', 'error');
    jalur.focus();
    return;
  }

  showToast('✅ Pendaftaran berhasil dikirim!', 'success');

  setTimeout(() =>
  {
    nama.value = '';
    nik.value = '';
    jalur.value = '';
  }, 500);
}
