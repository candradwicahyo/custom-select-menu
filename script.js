window.onload = () => {
  
  window.addEventListener("click", event => {
    // ketika element yang ditekan memiliki class "select-menu"
    if (event.target.classList.contains('select-menu')) {
      // berikan class "active" pada element yang ditekan
      event.target.classList.toggle('active');
    }
  });
  
  const title = document.querySelector('.title');
  const list = document.querySelectorAll('.list-group-item');
  list.forEach(li => {
    li.addEventListener("click", function() {
      // teks dari list yang ditekan
      const value = this.textContent;
      title.textContent = value;
    });
  });
  
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener("keyup", function() {
    // value input
    const value = this.value.trim().toLowerCase();
    /*
      jalankan fungsi searchData() dengan 
      mengirimkan argumen vriabel value
    */
    searchData(value);
  });
  
  function searchData(value) {
    list.forEach(li => {
      // teks list 
      const text = li.textContent.toLowerCase();
      /*
        jika ada teks list yang mirip dengan isi value 
        input, maka tampilkan list tersebut. tapi jika tidak mirip 
        dengan isi value input, maka sembunyikan list tersebut
      */
      li.style.display = (text.indexOf(value) != -1) ? '' : 'none';
    });
  }
  
}