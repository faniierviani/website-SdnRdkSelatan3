fetch('fasilitas.json')
  .then(response => response.json())
  .then(data => {
    const fasilitasList = document.getElementById('fasilitas-list');
    fasilitasList.innerHTML = data.map(item => `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm">
          <img src="${item.foto}" class="card-img-top" alt="${item.nama}">
          <div class="card-body">
            <h5 class="card-title">${item.nama}</h5>
            <p class="card-text">${item.deskripsi}</p>
          </div>
        </div>
      </div>
    `).join('');
  });