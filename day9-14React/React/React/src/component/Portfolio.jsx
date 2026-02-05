import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Portfolio.css';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Contact Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [msgStatus, setMsgStatus] = useState('');

    // Fetch projects from the MERN backend
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:5000/api/projects');
                setProjects(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching projects:", err);
                // Fallback to local data if backend is not running
                setProjects([
                    {
                        _id: '1',
                        title: "Expense Tracker",
                        description: "Feature-rich personal finance manager built with React.",
                        tags: ["React", "State", "CSS"],
                        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600"
                    },
                    {
                        _id: '2',
                        title: "Movie Fetcher",
                        description: "Real-time movie data discovery tool.",
                        tags: ["React", "API", "Axios"],
                        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600"
                    }
                ]);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        setMsgStatus('Sending...');
        try {
            const res = await axios.post('http://127.0.0.1:5000/api/messages', formData);
            if (res.data.success) {
                setMsgStatus('Message Sent Successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setMsgStatus(''), 3000);
            }
        } catch (err) {
            console.error("Error sending message:", err);
            setMsgStatus('Failed to send message: ' + (err.response?.data?.message || err.message));
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="portfolio-wrapper">
            <nav className="nav reveal">
                <div className="logo">SURYA.</div>
                <div className="nav-links">
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <section className="hero reveal">
                <h1 className="gradient-text">Surya Teja<br />Full Stack Dev.</h1>
                <p>MERN Stack Developer specializing in high-performance web applications and premium user interfaces. Check out my projects from GitHub and my local workspace.</p>
                <div className="cta-buttons">
                    <a href="#projects" className="btn-glow primary">View My Work</a>
                    <a href="https://github.com/Suryateja28" target="_blank" rel="noopener noreferrer" className="btn-glow outline">GitHub</a>
                </div>
            </section>

            <div id="projects" className="section-title reveal">
                <h2>{loading ? 'Connecting to Database...' : 'Selected Works'}</h2>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <a
                        key={project._id}
                        href={project.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div className="project-card reveal">
                            <div className="project-image">
                                <img
                                    src={project.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"}
                                    alt={project.title}
                                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"; }}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                                />
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tags?.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div id="about" className="about-section reveal">
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
                        alt="Surya Teja"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        Hello! I'm Surya Teja, a passionate Full Stack Developer currently deep-diving into the MERN stack (MongoDB, Express, React, Node.js).
                        I love building scalable web applications and exploring the intersection of design and technology.
                    </p>
                    <p>
                        My journey started with electronic systems, which gave me a strong foundation in logic and hardware.
                        Now, I apply that same problem-solving mindset to software development, creating seamless digital experiences.
                    </p>
                    <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--accent)' }}>20+</h3>
                            <p style={{ fontSize: '0.8rem' }}>Projects</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--accent)' }}>8+</h3>
                            <p style={{ fontSize: '0.8rem' }}>Daily Tasks</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="contact-section reveal">
                <div className="section-title">
                    <h2>Get In Touch</h2>
                    <p style={{ color: 'var(--text-dim)' }}>Have a project in mind? Let's talk.</p>
                </div>

                <form className="contact-form" onSubmit={handleMessageSubmit}>
                    <div className="form-row">
                        <input name="name" type="text" placeholder="Full Name" className="contact-input" value={formData.name} onChange={handleInputChange} required />
                        <input name="email" type="email" placeholder="Email Address" className="contact-input" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <input name="subject" type="text" placeholder="Subject" className="contact-input" value={formData.subject} onChange={handleInputChange} required />
                    <textarea name="message" placeholder="Your Message" className="contact-input" rows="5" value={formData.message} onChange={handleInputChange} required style={{ resize: 'none' }}></textarea>
                    <button type="submit" className="btn-glow primary" style={{ width: '100%', border: 'none' }}>
                        {msgStatus === 'Sending...' ? 'Sending...' : 'Send Message'}
                    </button>
                    {msgStatus && <p style={{ marginTop: '10px', color: msgStatus.includes('Successfully') ? 'var(--accent)' : '#ff4444' }}>{msgStatus}</p>}
                </form>

                <div className="social-links">
                    <a href="https://github.com/Suryateja28" target="_blank" rel="noreferrer" className="social-icon">GH</a>
                    <a href="#" className="social-icon">LI</a>
                    <a href="#" className="social-icon">TW</a>
                    <a href="mailto:surya@example.com" className="social-icon">EM</a>
                </div>
            </div>

            <footer className="portfolio-footer reveal">
                <div className="logo" style={{ marginBottom: '20px' }}>SURYA.</div>
                <p>© {new Date().getFullYear()} MERN Portfolio by Surya Teja</p>
                <div style={{ marginTop: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <a href="#projects" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.8rem' }}>Projects</a>
                    <a href="#about" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.8rem' }}>About</a>
                    <a href="#contact" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.8rem' }}>Contact</a>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
