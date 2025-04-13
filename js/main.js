document.addEventListener('DOMContentLoaded', function() {
    // This would be replaced with your actual content loading logic
    // For example, using fetch API to load markdown files
    
    // For demonstration, we'll simulate loading content
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post') || 'first-post';
    
    // In a real implementation, you would fetch the markdown file here
    // fetch(`/posts/${postId}.md`)
    //     .then(response => response.text())
    //     .then(text => {
    //         // Parse front matter and content
    //         // Update the page
    //     });
    
    // Simulated data - in real app this would come from the markdown file
    const postData = {
        title: "My First Blog Post",
        date: "May 15, 2023",
        author: "Jane Doe",
        content: "<h1>Welcome to My Blog</h1><p>This is my first post in this new blog...</p>",
        description: "This is my first blog post about web development and design.",
        image: "/images/first-post.jpg",
        url: window.location.href
    };
    
    // Update page with post data
    document.getElementById('page-title').textContent = `${postData.title} | My Blog`;
    
    // Update Open Graph meta tags
    document.getElementById('og-title').content = postData.title;
    document.getElementById('og-description').content = postData.description;
    document.getElementById('og-image').content = postData.image;
    document.getElementById('og-url').content = postData.url;
    
    // Update content
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = `
        <article class="post">
            <header class="post-header">
                <h1 class="post-title">${postData.title}</h1>
                <div class="post-meta">
                    <span class="post-author">By ${postData.author}</span>
                    <span class="post-date"> | ${postData.date}</span>
                </div>
            </header>
            <div class="post-content">
                ${postData.content}
            </div>
        </article>
    `;
    
    // Add syntax highlighting (you would include a library like Prism.js for this)
    // Prism.highlightAll();
});
