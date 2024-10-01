import Link from "next/link";

function About() {
  return (
    <div className="FeatureBooksbg px-6 py-12 lg:px-24 lg:py-24 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">About Us</h1>
          <p className="text-lg leading-relaxed ">
            Welcome to our website! We are passionate about providing you with the best books and resources on programming, data science, AI, and computer science. Our carefully curated collection is designed to help learners of all levels, from beginners to experts, succeed in the ever-evolving tech industry.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to deliver high-quality, up-to-date learning materials that empower you to enhance your skills and knowledge. Whether you are looking to dive into a new programming language or advance your career with the latest in machine learning and AI, we have got you covered.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Values</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Customer Focus:</strong> Your learning journey is our top priority.
            </li>
            <li>
              <strong>Transparency:</strong> We believe in open and honest practices.
            </li>
            <li>
              <strong>Passion for Innovation:</strong> We are driven by a love for technology and innovation.
            </li>
            <li>
              <strong>Quality Assurance:</strong> We offer only the best books to help you succeed.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg leading-relaxed">
            Have any questions or concerns? Feel free to{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              contact us
            </Link>
            , and our support team will get back to you as soon as possible.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
