import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you offer free shipping?",
      a: "Yes, free shipping is available on orders above ₹1,999."
    },
    {
      q: "What is your return policy?",
      a: "Returns are accepted within 30 days of purchase."
    },
    {
      q: "How can I track my order?",
      a: "You can track your order using the tracking link sent via email after dispatch."
    }
  ];

  return (
    <div className="bg-gray-50 py-20 pb-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-600">We'd love to hear from you!</p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-gray-900">Address</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">
                    123 Fashion Street,<br />New Delhi, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-gray-900">Email</h3>
                  <a href="mailto:support@footfusion.com" className="mt-1 text-indigo-600 hover:text-indigo-500 font-medium transition">
                    support@footfusion.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-gray-900">Working Hours</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">
                    Monday – Saturday<br />9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 border p-3" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 border p-3" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 border p-3" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 border p-3" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 border p-3"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 px-4 rounded-md hover:bg-indigo-700 transition shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border text-left border-gray-200 rounded-lg overflow-hidden transition-all duration-200">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between focus:outline-none hover:bg-gray-50"
                >
                  <span className="font-bold text-gray-900">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-gray-600">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
