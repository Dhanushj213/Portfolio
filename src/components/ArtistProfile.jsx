import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaTimes, FaInstagram, FaBehance, FaEnvelope, FaBars, FaPlay, FaYoutube, FaVimeo, FaArrowUp } from 'react-icons/fa';

/**
 * "Hybrid Portfolio" - Artist + Video Editor
 * Architecture: Unified app with split pathways for Art and Video.
 */

// --- MOCK DATA ---
const VIDEO_DATA = [
    { id: 'v1', title: 'Cyberpunk City', category: 'Short Film', duration: '03:45', src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: '/thumb-cyber.jpg' },
    { id: 'v2', title: 'Fashion Week 2025', category: 'Reels', duration: '00:30', src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: '/thumb-fashion.jpg' },
    { id: 'v3', title: 'Neon Nights', category: 'Music Video', duration: '04:12', src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: '/thumb-neon.jpg' },
    { id: 'v4', title: 'Tech Launch', category: 'Ads', duration: '01:00', src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: '/thumb-tech.jpg' },
    { id: 'v5', title: 'Abstract flow', category: 'Reels', duration: '00:15', src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: '/thumb-abs.jpg' },
];

const ArtistProfile = ({ projects, skills, experiences, certifications, contactInfo, aboutContent, extraGalleryImages, onBack }) => {
    const [activeView, setActiveView] = useState('home'); // home, works, video, projects, process, about, contact, detail
    const [selectedItem, setSelectedItem] = useState(null); // For Art Detail or Video Player
    const [videoCategory, setVideoCategory] = useState('All');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Derived state for Art Gallery
    const fullGallery = [
        ...(projects || []).map(p => ({ ...p, type: 'project' })),
        ...(extraGalleryImages || []).map((img, i) => ({ id: `img-${i}`, src: img, title: `Composition ${i + 1}`, year: '2025', medium: 'Digital', type: 'artwork' }))
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
    }, [activeView]);

    const navigateTo = (view, item = null) => {
        if (item) setSelectedItem(item);
        setActiveView(view);
    };

    // --- VIEWS ---

    // 1. HOME VIEW (Hybrid Hero)
    const HomeView = () => (
        <div style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {/* Background Looping Video (Simulated) */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                {/* Placeholder for actual video bg */}
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #1a1a1a, #0d0d0d)', opacity: 0.8 }} />
                <img src={extraGalleryImages?.[0] || '/bg-hero.jpg'} alt="bg" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2, filter: 'grayscale(100%)' }} />
            </div>

            <div style={{ zIndex: 10, textAlign: 'center', marginBottom: '60px' }}>
                <h1 className="fade-in-up" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '2px', marginBottom: '10px' }}>
                    DHANUSH J.
                </h1>
                <p className="fade-in-up delay-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#aaa' }}>
                    Visual Artist & Video Editor
                </p>
            </div>

            {/* Split Cards */}
            <div className="fade-in-up delay-2" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', padding: '0 20px' }}>
                {/* Art Card */}
                <div className="split-card" onClick={() => navigateTo('works')}>
                    <div className="card-bg" style={{ backgroundImage: `url(${extraGalleryImages?.[1] || '/art-bg.jpg'})` }} />
                    <div className="card-content">
                        <h2>Visual Art</h2>
                        <span>Silent Gallery</span>
                    </div>
                </div>

                {/* Video Card */}
                <div className="split-card" onClick={() => navigateTo('video')}>
                    <div className="card-bg" style={{ backgroundImage: `url(${extraGalleryImages?.[2] || '/video-bg.jpg'})`, filter: 'hue-rotate(180deg) contrast(1.2)' }} />
                    <div className="card-content">
                        <h2>Video Editing</h2>
                        <span>Motion & Story</span>
                    </div>
                </div>
            </div>
            <style>{`
                .split-card {
                    width: 300px; height: 400px;
                    background: #111;
                    position: relative;
                    cursor: pointer;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.1);
                    transition: transform 0.5s ease;
                }
                .split-card:hover { transform: translateY(-10px); }
                .card-bg {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                    background-size: cover; background-position: center;
                    opacity: 0.4; transition: transform 0.7s ease, opacity 0.5s;
                }
                .split-card:hover .card-bg { transform: scale(1.1); opacity: 0.6; }
                .card-content {
                    position: absolute; bottom: 0; left: 0; width: 100%; padding: 30px;
                    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
                }
                .card-content h2 { font-family: 'Playfair Display', serif; font-size: 2rem; margin: 0; color: #fff; }
                .card-content span { font-family: 'Inter', sans-serif; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; color: #ccc; }
            `}</style>
        </div>
    );

    // 2. VISUAL ART VIEW ("Silent Gallery")
    const WorksView = () => (
        <div style={{ padding: '120px 4vw' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '10px' }}>Silent Gallery</h2>
            <div style={{ height: '1px', width: '50px', background: '#fff', marginBottom: '60px' }}></div>

            <div style={{ columnCount: 3, columnGap: '40px' }} className="masonry-grid">
                {fullGallery.map((item, i) => (
                    <div key={i} onClick={() => navigateTo('detail', item)} style={{ marginBottom: '40px', breakInside: 'avoid', cursor: 'pointer', position: 'relative' }} className="gallery-item">
                        <img src={item.image || item.src} alt={item.title} style={{ width: '100%', display: 'block', transition: 'all 0.5s' }} />
                    </div>
                ))}
            </div>
            <style>{`
                .gallery-item:hover img { transform: scale(1.02); filter: brightness(1.1); }
                @media(max-width: 768px) { .masonry-grid { column-count: 1 !important; } }
            `}</style>
        </div>
    );

    // 3. VIDEO EDITING VIEW
    const VideoView = () => {
        const categories = ['All', 'Short Film', 'Reels', 'Ads', 'Music Video'];
        const filteredVideos = videoCategory === 'All' ? VIDEO_DATA : VIDEO_DATA.filter(v => v.category === videoCategory);

        return (
            <div style={{ paddingTop: '80px' }}>
                {/* Video Hero / Showreel */}
                <div style={{ position: 'relative', height: '70vh', width: '100%', background: '#000', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: 'absolute', zIndex: 10, textAlign: 'center' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', cursor: 'pointer' }}>
                            <FaPlay style={{ marginLeft: '5px' }} color="#fff" size={24} />
                        </div>
                        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '10px' }}>Showreel 2025</h1>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#aaa' }}>Editing • Motion • Storytelling</p>
                    </div>
                    {/* BG Video Placeholder */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, #222, #000)', opacity: 0.5 }}></div>
                </div>

                {/* Video Grid */}
                <div style={{ padding: '60px 4vw' }}>
                    {/* Categories */}
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', overflowX: 'auto', paddingBottom: '10px' }}>
                        {categories.map(cat => (
                            <button key={cat}
                                onClick={() => setVideoCategory(cat)}
                                style={{
                                    background: videoCategory === cat ? '#fff' : 'transparent',
                                    color: videoCategory === cat ? '#000' : '#fff',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    padding: '8px 24px',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px',
                                    transition: 'all 0.3s'
                                }}>
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
                        {filteredVideos.map((video) => (
                            <div key={video.id} onClick={() => setSelectedItem(video)} style={{ cursor: 'pointer', group: 'video-card' }}>
                                <div style={{ position: 'relative', aspectRatio: '16/9', background: '#222', borderRadius: '4px', overflow: 'hidden', marginBottom: '15px' }}>
                                    <img src={video.thumbnail || `https://via.placeholder.com/640x360/111/555?text=${video.title}`} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
                                        <FaPlay color="#fff" size={16} />
                                    </div>
                                    <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: '#000', padding: '2px 6px', fontSize: '0.7rem', borderRadius: '4px', fontFamily: "'Inter', sans-serif" }}>{video.duration}</div>
                                </div>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', marginBottom: '5px' }}>{video.title}</h3>
                                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#666', textTransform: 'uppercase' }}>{video.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    // 4. PROCESS VIEW (Split Layout)
    const ProcessView = () => (
        <div style={{ padding: '120px 4vw' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '60px', textAlign: 'center' }}>The Studio</h2>

            <div className="process-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
                {/* Art Process */}
                <div>
                    <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#aaa', marginBottom: '40px', borderBottom: '1px solid #333', paddingBottom: '20px' }}>
                        Visual Art Workflow
                    </h3>
                    <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.1rem', lineHeight: '1.8', color: '#ddd' }}>
                        <p style={{ marginBottom: '20px' }}>My art begins where words fail. I focus on texture, void, and the interplay of light.</p>
                        <ul style={{ listStyle: 'none', padding: 0, color: '#888', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}>
                            <li style={{ marginBottom: '15px' }}>01. Conceptual Sketching &mdash; Procreate</li>
                            <li style={{ marginBottom: '15px' }}>02. Composition & Asset Gen &mdash; Blender</li>
                            <li style={{ marginBottom: '15px' }}>03. Post-Processing & Grading &mdash; Photoshop</li>
                        </ul>
                    </div>
                </div>

                {/* Video Process */}
                <div>
                    <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#aaa', marginBottom: '40px', borderBottom: '1px solid #333', paddingBottom: '20px' }}>
                        Video Editing Workflow
                    </h3>
                    <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.1rem', lineHeight: '1.8', color: '#ddd' }}>
                        <p style={{ marginBottom: '20px' }}>Rhythm is everything. I cut to the beat of the narrative, ensuring every frame serves the story.</p>
                        <ul style={{ listStyle: 'none', padding: 0, color: '#888', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}>
                            <li style={{ marginBottom: '15px' }}>01. Narrative Arc, Selects &mdash; Premiere Pro</li>
                            <li style={{ marginBottom: '15px' }}>02. Motion Graphics & VFX &mdash; After Effects</li>
                            <li style={{ marginBottom: '15px' }}>03. Color Grading & Sound Design &mdash; DaVinci</li>
                        </ul>
                    </div>
                </div>
            </div>
            <style>{`
                @media(max-width: 768px) { .process-split { grid-template-columns: 1fr !important; gap: 60px !important; } }
            `}</style>
        </div>
    );

    // 5. PROJECTS VIEW
    const ProjectsView = () => (
        <div style={{ padding: '120px 4vw' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '60px' }}>Featured Case Studies</h2>
            <div style={{ display: 'grid', gap: '80px' }}>
                {['Brand Identity Revamp', 'The Silent Short'].map((title, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px', alignItems: 'center' }}>
                        <div style={{ height: '400px', background: '#222', borderRadius: '4px', overflow: 'hidden' }}>
                            <img src={extraGalleryImages?.[i + 2] || '/placeholder.jpg'} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#E50914', marginBottom: '10px' }}>Hybrid Project</div>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', marginBottom: '20px' }}>{title}</h3>
                            <p style={{ fontFamily: "'Libre Baskerville', serif", color: '#aaa', lineHeight: '1.6', marginBottom: '30px' }}>
                                A complete visual overhaul combining 3D motion graphics with high-end video editing to tell a compelling brand story.
                            </p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <span style={{ fontSize: '0.8rem', border: '1px solid #333', padding: '5px 15px', borderRadius: '50px' }}>Art Direction</span>
                                <span style={{ fontSize: '0.8rem', border: '1px solid #333', padding: '5px 15px', borderRadius: '50px' }}>Video Editing</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
                @media(max-width: 768px) { div[style*="grid-template-columns: 1.5fr"] { grid-template-columns: 1fr !important; } }
            `}</style>
        </div>
    );

    // 6. CONTACT VIEW
    const ContactView = () => (
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 20px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '20px' }}>Let's Create</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#888', marginBottom: '60px' }}>Select an inquiry type to get started</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', width: '100%', maxWidth: '800px' }}>
                {['Art Commission', 'Video Editing', 'Collaboration'].map(type => (
                    <button key={type} style={{
                        padding: '30px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff',
                        fontSize: '1.2rem', fontFamily: "'Playfair Display', serif", cursor: 'pointer', transition: 'all 0.3s'
                    }}
                        onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
                        onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.05)'}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div style={{ marginTop: '80px', display: 'flex', gap: '40px', opacity: 0.6 }}>
                <a href={contactInfo?.email ? `mailto:${contactInfo.email}` : '#'} style={{ color: '#fff', fontSize: '1.5rem' }}><FaEnvelope /></a>
                <a href="#" style={{ color: '#fff', fontSize: '1.5rem' }}><FaInstagram /></a>
                <a href="#" style={{ color: '#fff', fontSize: '1.5rem' }}><FaYoutube /></a>
                <a href="#" style={{ color: '#fff', fontSize: '1.5rem' }}><FaBehance /></a>
            </div>
        </div>
    );

    // --- RENDER ---
    return (
        <div style={{ backgroundColor: '#0E0E0E', color: '#E0E0E0', minHeight: '100vh', fontFamily: "'Inter', sans-serif", position: 'relative' }}>
            {/* Grain Overlay */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999, opacity: 0.04, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            {/* Navigation */}
            <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000, mixBlendMode: 'difference' }}>
                <div onClick={() => navigateTo('home')} style={{ fontSize: '1.1rem', fontFamily: "'Playfair Display', serif", fontWeight: '700', cursor: 'pointer', letterSpacing: '1px' }}>DJ.</div>

                {/* Desktop Nav */}
                <div className="desktop-nav" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    {['Works', 'Video', 'Projects', 'Process', 'About', 'Contact'].map(item => (
                        <button key={item} onClick={() => navigateTo(item.toLowerCase())} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: activeView === item.toLowerCase() ? 1 : 0.5 }}>
                            {item}
                        </button>
                    ))}
                    {/* Button Removed from here */}
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-nav-toggle" style={{ display: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', background: '#0E0E0E', zIndex: 900, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                    {['Home', 'Works', 'Video', 'Projects', 'Process', 'About', 'Contact'].map(item => (
                        <button key={item} onClick={() => navigateTo(item.toLowerCase())} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '2rem', fontFamily: "'Playfair Display', serif" }}>{item}</button>
                    ))}
                    <button onClick={onBack} style={{ marginTop: '20px' }}>Exit</button>
                </div>
            )}

            {/* Video Player Modal */}
            {selectedItem && activeView === 'video' && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2000, background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <button onClick={() => setSelectedItem(null)} style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', color: '#fff' }}><FaTimes size={30} /></button>
                    <div style={{ width: '80%', maxWidth: '1000px', aspectRatio: '16/9', background: '#000' }}>
                        {/* Placeholder Player */}
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" title="Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <h2 style={{ marginTop: '20px', fontFamily: "'Playfair Display', serif" }}>{selectedItem.title}</h2>
                </div>
            )}

            {/* Detail View for Art */}
            {selectedItem && activeView === 'detail' && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2000, background: '#0E0E0E', overflowY: 'auto' }}>
                    <button onClick={() => { setSelectedItem(null); navigateTo('works'); }} style={{ position: 'fixed', top: '30px', right: '30px', background: 'none', border: 'none', color: '#fff', zIndex: 2001 }}><FaTimes size={30} /></button>
                    <div style={{ width: '100%', height: '80vh' }}> <img src={selectedItem.src} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> </div>
                    <div style={{ maxWidth: '800px', margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
                        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem' }}>{selectedItem.title}</h1>
                        <p style={{ fontFamily: "'Libre Baskerville', serif", color: '#aaa', marginTop: '20px', fontSize: '1.2rem', lineHeight: '1.8' }}>A detailed exploration of form and void, created using digital mediums.</p>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main style={{ minHeight: '100vh', paddingTop: activeView === 'home' ? 0 : '0px' }}>
                {activeView === 'home' && <HomeView />}
                {activeView === 'works' && <WorksView />}
                {activeView === 'video' && <VideoView />}
                {activeView === 'projects' && <ProjectsView />}
                {activeView === 'process' && <ProcessView />}
                {activeView === 'contact' && <ContactView />}
                {activeView === 'about' && (
                    <div style={{ padding: '120px 4vw', textAlign: 'center' }}>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem' }}>The Artist</h2>
                        <img src={aboutContent?.image} style={{ width: '200px', height: '200px', borderRadius: '50%', margin: '40px auto', objectFit: 'cover', filter: 'grayscale(100%)' }} />
                        <p style={{ maxWidth: '600px', margin: '0 auto', fontFamily: "'Libre Baskerville', serif", fontSize: '1.2rem', lineHeight: '1.8' }}>I work across still and motion visuals, crafting visual narratives through art and editing.</p>
                    </div>
                )}
            </main>

            {/* UNDER CONSTRUCTION OVERLAY */}
            <div style={{
                position: 'fixed',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'rgba(0,0,0,0.4)', // Slightly dimmed background
                backdropFilter: 'blur(2px)', // Minimal blur
                zIndex: 10000, // Above everything else except exit button
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'auto', // Capture all clicks
                cursor: 'not-allowed'
            }}>
                <div style={{
                    background: '#E50914',
                    color: '#000',
                    padding: '20px 40px',
                    borderRadius: '20px',
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                    letterSpacing: '2px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    transform: 'rotate(-5deg)',
                    textAlign: 'center',
                    maxWidth: '90%'
                }}>
                    CURRENTLY UNDER CONSTRUCTION
                </div>

                {/* Visual Arrow connecting Message to Exit Button */}
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10002 }} viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Desktop Curve */}
                    <path className="arrow-desktop" d="M 58 42 C 70 35, 80 25, 92 8" stroke="#ffffff" strokeWidth="0.5" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="3,2" strokeLinecap="round" />
                    {/* Mobile Curve */}
                    <path className="arrow-mobile" d="M 50 45 Q 80 35 88 10" stroke="#ffffff" strokeWidth="1" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="3,2" strokeLinecap="round" />
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto" markerUnits="strokeWidth">
                            <polygon points="0 0, 6 2, 0 4" fill="#ffffff" />
                        </marker>
                    </defs>
                    <style>{`
                        @media (max-width: 768px) {
                            .arrow-desktop { display: none; }
                            .arrow-mobile { display: block; }
                        }
                        @media (min-width: 769px) {
                            .arrow-mobile { display: none; }
                        }
                    `}</style>
                </svg>
            </div>

            {/* EXIT BUTTON - ROOT LEVEL */}
            <div style={{ position: 'fixed', top: 'clamp(15px, 5vw, 24px)', right: 'clamp(20px, 5vw, 40px)', zIndex: 20001, pointerEvents: 'auto' }}>
                <button onClick={onBack} className="glowing-exit-btn" style={{
                    background: '#E50914',
                    border: '2px solid #ff4d4d',
                    padding: '12px 35px',
                    borderRadius: '50px',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    marginLeft: '20px',
                    fontWeight: '900',
                    boxShadow: '0 0 20px rgba(229,9,20,0.8), 0 0 40px rgba(229,9,20,0.4)',
                    transition: 'all 0.3s ease'
                }}>
                    EXIT
                </button>
                <style>{`
                    @keyframes glowPulse {
                        0% { box-shadow: 0 0 20px rgba(229,9,20,0.8), 0 0 40px rgba(229,9,20,0.4); transform: scale(1); }
                        50% { box-shadow: 0 0 40px rgba(229,9,20,1), 0 0 80px rgba(229,9,20,0.6); transform: scale(1.05); }
                        100% { box-shadow: 0 0 20px rgba(229,9,20,0.8), 0 0 40px rgba(229,9,20,0.4); transform: scale(1); }
                    }
                    .glowing-exit-btn {
                        animation: glowPulse 2s infinite ease-in-out;
                    }
                    .glowing-exit-btn:hover {
                        background: #ff1f1f !important;
                        transform: scale(1.1) !important;
                    }
                `}</style>
            </div>

            <style>{`
                 @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                 .fade-in-up { opacity: 0; animation: fadeInUp 1s ease forwards; }
                 .delay-1 { animation-delay: 0.2s; }
                 .delay-2 { animation-delay: 0.4s; }
                 @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-nav-toggle { display: block !important; } }
             `}</style>
        </div>
    );
};

export default ArtistProfile;
