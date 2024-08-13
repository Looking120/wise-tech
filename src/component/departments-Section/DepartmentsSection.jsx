import React from 'react';
import './DepartmentsSection.css'; 

const Department = ({ number, title, subtitle, description,titleDescription, linkText, subtitleDescription }) => (
    <div className="department">
        <div className="step-departments">
        <h3>{number}</h3>
        <div className="department-title">
            <h4>{title}</h4>
            <h4>{subtitle}</h4>
        </div>
        </div>
        <hr />
        <div className="department-description">
        <span>{titleDescription}</span>
        <span>{subtitleDescription}</span>
        </div>
        <p>{description}</p>
        <a href="#" className="explore">{linkText}</a>
    </div>
);

const DepartmentsSection = () => (
    <section className="departments-section">
        <h4 className="department-title">OUR DEPARTMENTS</h4>
        <h2>We are a team made up <span className="line-break">of experienced professionals.</span></h2>
        <div className="departments">
        <Department
            number="1"
            title="Developer"
            subtitle="Department"
            titleDescription="It is divided into two"
            subtitleDescription =" parts"
            description="Our department is divided into two teams: backend developers and frontend developers."
            linkText="Explore Now"
        />
        <Department
            number="2"
            title="Marketing"
            subtitle="Department"
            titleDescription="Work of the "
            subtitleDescription =" department"
            description="The marketing department is responsible for improving the visibility of the company and highlighting our brand in the market"
            linkText="Explore Now"
        />
        <Department
            number="3"
            title="Sales"
            subtitle="Department"
            titleDescription="work of the "
            subtitleDescription =" department"
            description="Offer your business a full range of digital solutions to boost your visibility. Improve your online presence ."
            linkText="Explore Now"
        />
        </div>
    </section>
);

export default DepartmentsSection;
