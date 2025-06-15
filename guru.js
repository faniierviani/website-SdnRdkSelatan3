document.addEventListener("DOMContentLoaded", function () {
  const guruList = document.getElementById("guru-list");

  const guruData = [
    { foto: "kepsek.jpeg" },
    { foto: "guru1.jpeg" },
    { foto: "guru2.jpeg" },
    { foto: "guru3.jpeg" },
    { foto: "guru4.jpeg" },
    { foto: "guru5.jpeg" },
    { foto: "guru6.jpeg" },
    { foto: "guru7.jpeg" },
    { foto: "guru8.jpeg" },
    { foto: "guru9.jpeg" },
    { foto: "guru10.jpeg" },
    { foto: "guru11.jpeg" },
    { foto: "guru12.jpeg" },
    { foto: "guru13.jpeg" },
    { foto: "guru14.jpeg" },
    { foto: "guru15.jpeg" },
    { foto: "guru16.jpeg" },
    { foto: "guru17.jpeg" },
    { foto: "guru18.jpeg" },
    { foto: "guru19.jpeg" },
    { foto: "guru20.jpeg" },
  ];

  guruData.forEach(guru => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-3 mb-4"; // 4 guru per baris di layar besar




    const img = document.createElement("img");
    img.src = guru.foto;
    img.alt = "Foto Guru";
    img.className = "img-fluid rounded shadow-sm";

    col.appendChild(img);
    guruList.appendChild(col);
  });
});
