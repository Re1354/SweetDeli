import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus({
        type: 'success',
        message: 'Successfully subscribed to our newsletter!',
      });
      setEmail('');
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 pb-0 bg-[#FCFCFD]">
      <div className="max-w-container mx-auto px-20">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Join Our Newsletter
          </h2>

          <p className="text-gray-600 leading-relaxed px-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <div className="flex gap-3">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {status.message && (
              <div
                className={`mt-4 p-3 rounded-lg text-sm ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-red-50 text-red-600'
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>

        {/* Image Row */}
        <div className="mt-10  -mx-20 px-20 py-12">
          <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
            {['cake2.jpeg', 'cake3.jpeg', 'cake4.jpeg', 'cake5.jpeg'].map(
              (image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={
                      new URL(`../../images/picture/${image}`, import.meta.url)
                        .href
                    }
                    alt={`Featured cake ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
