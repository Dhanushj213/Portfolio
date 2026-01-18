import React from 'react';

const blogPosts = [
    {
        id: 1,
        title: "Understanding Zero Trust Architecture",
        excerpt: "Why traditional perimeter security is no longer enough in the modern cloud era.",
        date: "July 12, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1558494949-efc0257bb3af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 2,
        title: "React 19: What's New?",
        excerpt: "A deep dive into the latest features and hooks introduced in React 19.",
        date: "June 28, 2025",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 3,
        title: "Securing IoT Devices with Blockchain",
        excerpt: "Exploring the HoneyChain concept and how permissioned ledgers add a layer of trust.",
        date: "May 15, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 4,
        title: "Optimizing Web Performance",
        excerpt: "Techniques and tools to ensure your React apps load lightning fast.",
        date: "April 03, 2025",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

const BlogSection = () => {
    return (
        <section id="blog" className="content-row" style={{
            padding: '2rem 4%',
            backgroundColor: '#141414'
        }}>
            <h2 className="row-title" style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.8rem',
                marginBottom: '1rem',
                color: '#FFFFFF'
            }}>
                Tech Insights & Articles
            </h2>

            <div className="horizontal-scroll" style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '1rem',
                paddingBottom: '1rem',
                scrollbarWidth: 'thin'
            }}>
                {blogPosts.map(post => (
                    <div
                        key={post.id}
                        className="card blog-card"
                        style={{
                            minWidth: '300px',
                            backgroundColor: '#181818',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease'
                        }}
                        onClick={() => window.open('https://www.techinsights.com/about-techinsights/overview/newsroom/news-articles', '_blank')}
                    >
                        <div className="card-img-container" style={{
                            height: '160px',
                            overflow: 'hidden'
                        }}>
                            <img
                                src={post.image}
                                alt={post.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease'
                                }}
                            />
                        </div>
                        <div className="card-content" style={{ padding: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ fontSize: '0.8rem', color: '#E50914', fontWeight: 'bold' }}>New</span>
                                <span style={{ fontSize: '0.8rem', color: '#808080' }}>{post.readTime}</span>
                            </div>
                            <h3 style={{
                                color: '#fff',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                lineHeight: '1.2'
                            }}>
                                {post.title}
                            </h3>
                            <p style={{
                                color: '#b3b3b3',
                                fontSize: '0.9rem',
                                lineHeight: '1.4',
                                margin: 0
                            }}>
                                {post.excerpt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
