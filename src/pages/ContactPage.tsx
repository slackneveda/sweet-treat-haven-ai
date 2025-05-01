
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Have a question about our desserts or need to make a special order?
          We'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full dessert-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-dessert mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">
                    Address
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    123 Sweet Street, Bakery Lane
                    <br />
                    Dessert City, DC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-dessert mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">
                    Phone
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-dessert mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    info@sweettreathaven.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 text-dessert mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">
                    Business Hours
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Monday - Friday: 8:00 AM - 8:00 PM
                    <br />
                    Saturday: 9:00 AM - 7:00 PM
                    <br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-300 dark:bg-gray-700 relative">
              <iframe
                title="Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830872278!2d-74.11976364143518!3d40.69766374871393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1629220086126!5m2!1sen!2sca"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
