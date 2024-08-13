import React from 'react';
import './TestimonialsSection.css'; 
import imgClients1 from '../../assets/images/imgClients/joyce_ledi.jpg';
import imgClients2 from '../../assets/images/imgClients/nathan_kalenga.jpg';
import imgClients3 from '../../assets/images/imgClients/Aristote.jpg';
import imgClients4 from '../../assets/images/imgClients/caleb.jpg';

const testimonials = [
    {
        id: 1,
        rating: '★★★★★',
        text: "WiseTech is a company you hire to outsource your digital marketing efforts, instead of handling them in-house...",
        clientPhoto: imgClients1,
        clientName: 'Joyce Ledi',
        clientCompany: 'Base Inc.',
    },
    {
        id: 2,
        rating: '★★★★★',
        text: "Provide your business with a variety, of digital solutions to promote your product or service online...",
        clientPhoto: imgClients2,
        clientName: 'Nathan Kalenga',
        clientCompany: 'Photo Inc.',
    },
    {
        id: 3,
        rating: '★★★★★',
        text: "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.",
        clientPhoto: imgClients3,
        clientName: 'Aristote Dilomba',
        clientCompany: 'API Inc.',
    },
    {
        id: 4,
        rating: '★★★★★',
        text: "Promote your product or service online and help you hit your marketing goals and grow your business.",
        clientPhoto: imgClients4,
        clientName: 'Caleb Ramazani',
        clientCompany: 'Chat Inc.',
    },
    ];

    const TestimonialItem = ({ rating, text, clientPhoto, clientName, clientCompany }) => (
    <div className="testimonial-item">
        <div className="rating">{rating}</div>
        <p>{text}</p>
        <div className="client-info">
        <div className="client-photo" style={{ backgroundImage: `url(${clientPhoto})` }}></div>
        <div>
            <h4>{clientName}</h4>
            <p className="company">{clientCompany}</p>
        </div>
        </div>
    </div>
    );

    const TestimonialsSection = () => (
    <section className="testimonials-section">
        <h3>TESTIMONIALS</h3>
        <h2>What Our <br /> Clients Saying</h2>
        <div className="testimonials-grid">
        {testimonials.map(testimonial => (
            <TestimonialItem
            key={testimonial.id}
            rating={testimonial.rating}
            text={testimonial.text}
            clientPhoto={testimonial.clientPhoto}
            clientName={testimonial.clientName}
            clientCompany={testimonial.clientCompany}
            />
        ))}
        </div>
        <button className="see-all-btn">SEE ALL</button>
    </section>
    );

export default TestimonialsSection;
