import React from 'react';

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Project Lead at TechCorp",
        text: "Dhanush is an exceptional developer who brings creativity and technical expertise to every project. His work on the supply chain system was outstanding.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Senior Security Analyst",
        text: "Rarely do you find a student with such a deep understanding of cybersecurity protocols. His implementation of the HoneyChain project showed professional-grade maturity.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Dr. Emily Wong",
        role: "Professor of Computer Science",
        text: "A standout student who consistently goes above and beyond. His academic projects set a benchmark for his peers.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        id: 4,
        name: "David Miller",
        role: "Hackathon Teammate",
        text: "Working with Dhanush on the Permutation Engine was a blast. He writes clean, efficient code and is a great team player under pressure.",
        avatar: "https://randomuser.me/api/portraits/men/86.jpg"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="content-row" style={{
            padding: '2rem 4%',
            backgroundColor: '#141414'
        }}>
            <h2 className="row-title" style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.8rem',
                marginBottom: '1rem',
                color: '#FFFFFF'
            }}>
                Endorsements & Recommendations
            </h2>

            <div className="horizontal-scroll" style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '1rem',
                paddingBottom: '1rem',
                scrollbarWidth: 'thin'
            }}>
                {testimonials.map(item => (
                    <div
                        key={item.id}
                        className="card testimonial-card"
                        style={{
                            minWidth: '350px',
                            backgroundColor: '#181818',
                            borderRadius: '4px',
                            padding: '1.5rem',
                            cursor: 'default',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            border: '1px solid #333'
                        }}
                    >
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        marginRight: '1rem',
                                        border: '2px solid #E50914'
                                    }}
                                />
                                <div>
                                    <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 'bold', margin: 0 }}>{item.name}</h3>
                                    <p style={{ color: '#E50914', fontSize: '0.85rem', margin: 0 }}>{item.role}</p>
                                </div>
                            </div>
                            <p style={{ color: '#e5e5e5', fontSize: '0.95rem', fontStyle: 'italic', lineHeight: '1.5' }}>
                                "{item.text}"
                            </p>
                        </div>
                        <div style={{ marginTop: '1rem', display: 'flex', gap: '5px' }}>
                            {[1, 2, 3, 4, 5].map(star => (
                                <span key={star} style={{ color: '#E50914', fontSize: '0.8rem' }}>★</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
