function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact</h1>
      <p className="text-gray-600 leading-relaxed mb-6">
        Have a question or feedback? Reach out using the details below.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li>
          <span className="font-medium">Email:</span>{' '}
          <a href="mailto:hello@example.com" className="text-blue-600 hover:underline">
           Ahmed@gmail.com
          </a>
        </li>
        <li>
          <span className="font-medium">Phone:</span> +252619855422
        </li>
        <li>
          <span className="font-medium">Location:</span> Mogadishu, Somalia
        </li>
      </ul>
    </div>
  );
}

export default Contact;
