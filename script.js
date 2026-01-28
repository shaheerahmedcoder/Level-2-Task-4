
    const posts = [
      { title: "Latest in AI", category: "Tech", img: "ai.jpg", desc: "Exploring AI trends in 2025.", date: "Aug 10, 2025" },
      { title: "Top 10 Travel Spots", category: "Travel", img: "travel.jpg", desc: "Must-visit places this year.", date: "Aug 8, 2025" },
      { title: "Best Coding Practices", category: "Tech", img: "coding.jpg", desc: "Clean code and standards.", date: "Aug 5, 2025" },
      { title: "Street Food Around the World", category: "Food", img: "street.jpg", desc: "Tasty bites from every corner.", date: "Aug 3, 2025" },
      { title: "My Trip to Bali", category: "Travel", img: "bali.jpg", desc: "A week in paradise.", date: "Aug 1, 2025" },
      { title: "Gourmet Desserts", category: "Food", img: "desserts.jpg", desc: "Sweet treats to try.", date: "Jul 28, 2025" },
      { title: "Cloud Computing Simplified", category: "Tech", img: "cloud.jpg", desc: "Understanding the basics.", date: "Jul 25, 2025" },
      { title: "Backpacking Europe", category: "Travel", img: "europe.jpg", desc: "Budget-friendly tips.", date: "Jul 20, 2025" },
      { title: "Healthy Breakfast Ideas", category: "Food", img: "brek.jpg", desc: "Start your day right.", date: "Jul 15, 2025" },
        { title: "Juices", category: "Food", img: "juic.jpg", desc: "Juices are love.", date: "Jul 17, 2025" },
          { title: "Fast Food", category: "Food", img: "fastfood.jpg", desc: "Varaiations in Fast food", date: "Jul 19, 2025" },
    ];

    const postsPerPage = 4;
    let currentPage = 1;
    let filteredPosts = posts;

   const postsPerPage = 4;
    let currentPage = 1;
    let filteredPosts = posts;

   const postsPerPage = 4;
    let currentPage = 1;
    let filteredPosts = posts;

    function displayPosts(page) {
      const start = (page - 1) * postsPerPage;
      const end = start + postsPerPage;
      const visiblePosts = filteredPosts.slice(start, end);

      const container = document.getElementById("postContainer");
      container.innerHTML = visiblePosts.map(post => `
        <div class="card">
          <img src="${post.img}" alt="${post.title}">
          <div class="card-content">
            <h3>${post.title}</h3>
            <p class="date">${post.date} | ${post.category}</p>
            <p>${post.desc}</p>
          </div>
        </div>
      `).join('');

      displayPagination();
    }

    function displayPagination() {
      const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
      const pagination = document.getElementById("pagination");
      pagination.innerHTML = '';

      for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `<button class="${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
      }
    }

    function goToPage(page) {
      currentPage = page;
      displayPosts(page);
    }

    function filterPosts(category) {
      document.querySelectorAll('.filter button').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');

      filteredPosts = category === 'all' ? posts : posts.filter(post => post.category === category);
      currentPage = 1;
      displayPosts(currentPage);
    }

    displayPosts(currentPage);
