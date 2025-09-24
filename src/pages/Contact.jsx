import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showEmailFallback, setShowEmailFallback] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setShowEmailFallback(false);

    try {
      // EmailJS Integration
      await sendEmailJS(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      setShowEmailFallback(true);
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // EmailJS Integration with Axios
  const sendEmailJS = async (data) => {
    const emailjs = await import('emailjs-com');
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      to_name: 'Tomasz Gajda',
    };

    return emailjs.default.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    );
  };


  // Generate email body for fallback
  const generateEmailBody = () => {
    return `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
  };

  return (
    <section id="contact" className="bg-gray-200 py-20 px-6 min-h-screen scroll-mt-24">
      <div className="max-w-2xl mx-auto">
        {/* Contact Heading */}
        <SectionHeading title="CONTACT" className="mb-5" />
        
        {/* Description */}
        <div className="text-center mb-10">
          <p className="text-sm text-gray-700 leading-relaxed max-w-xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you! 
            Whether you're looking for web development services, collaboration opportunities, 
            or simply want to connect, don't hesitate to reach out. I typically respond within 24 hours.
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-12 h-px bg-black"></div>
          <div className="flex gap-1">
            <div className="w-3 h-px bg-black transform rotate-45"></div>
            <div className="w-3 h-px bg-black transform -rotate-45"></div>
            <div className="w-3 h-px bg-black transform rotate-45"></div>
            <div className="w-3 h-px bg-black transform -rotate-45"></div>
          </div>
          <div className="w-12 h-px bg-black"></div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="ENTER YOUR NAME*"
              required
              className="w-full bg-transparent border-0 border-b-2 border-black pb-2 text-sm font-medium tracking-wider placeholder-gray-600 focus:outline-none focus:border-gray-600"
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ENTER YOUR EMAIL*"
              required
              className="w-full bg-transparent border-0 border-b-2 border-black pb-2 text-sm font-medium tracking-wider placeholder-gray-600 focus:outline-none focus:border-gray-600"
            />
          </div>

          {/* Phone Field */}
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="PHONE NUMBER"
              className="w-full bg-transparent border-0 border-b-2 border-black pb-2 text-sm font-medium tracking-wider placeholder-gray-600 focus:outline-none focus:border-gray-600"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="YOUR MESSAGE*"
              required
              rows="6"
              className="w-full bg-transparent border-2 border-black p-4 text-sm font-medium tracking-wider placeholder-gray-600 focus:outline-none focus:border-gray-600 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <div className="flex items-center gap-8">
              <div className="w-8 h-px bg-black"></div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="border-2 border-black px-12 py-3 text-sm font-bold tracking-[0.2em] hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SENDING...' : 'SUBMIT'}
              </button>
              <div className="w-8 h-px bg-black"></div>
            </div>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="text-center text-green-600 font-medium">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && !showEmailFallback && (
            <div className="text-center text-red-600 font-medium">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}

          {/* Email Fallback */}
          {showEmailFallback && (
            <div className="text-center bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
              <p className="text-sm text-gray-700 mb-4">
                Form submission is currently unavailable. You can reach me directly via email:
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:your-email@example.com?subject=Contact Form Inquiry&body=${generateEmailBody()}`}
                  className="inline-block border-2 border-black px-8 py-2 text-sm font-bold tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
                >
                  SEND EMAIL
                </a>
                <p className="text-xs text-gray-600">
                  Click above to open your email client with pre-filled message
                </p>
                <div className="text-sm text-gray-700 mt-3">
                  <strong>Direct Email:</strong> 
                  <a 
                    href="mailto:your-email@example.com" 
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    your-email@example.com
                  </a>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
