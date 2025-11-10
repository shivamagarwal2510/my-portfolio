import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Code as LeetcodeIcon,
  Sparkles,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setIsLoading(true);

    try {
      const serviceId = "service_69ln76e";
      const templateId = "template_pcjs1fm";
      const publicKey = "tjPD-r3k8BQ5JDq3V";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Shivam Agarwal"
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setStatusMessage(
        "Thank you! Your message has been sent successfully. I'll get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setStatusMessage(
        "Sorry, there was an error sending your message. Please try again or contact me directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary-foreground" size={24} sm:size={28} />,
      title: "Email",
      value: "agarwalshivam503@gmail.com",
      href: "mailto:agarwalshivam503@gmail.com",
    },
    {
      icon: <Phone className="text-primary-foreground" size={24} sm:size={28} />,
      title: "Phone",
      value: "+91 7571094727",
      href: "tel:+917571094727",
    },
    {
      icon: <MapPin className="text-primary-foreground" size={24} sm:size={28} />,
      title: "Location",
      value: "Uttar Pradesh, India",
      href: "#",
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} sm:size={22} />,
      href: "https://www.linkedin.com/in/shivam-agarwal-b88a04201/",
      description: "Professional Network"
    },
    {
      name: "GitHub",
      icon: <Github size={20} sm:size={22} />,
      href: "https://github.com/shivamagarwal2510",
      description: "Code Repository"
    },
    {
      name: "LeetCode",
      icon: <LeetcodeIcon size={20} sm:size={22} />,
      href: "https://leetcode.com/u/Shivamagarwal2510/",
      description: "Coding Challenges"
    }
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 }
    }
  };

  const columnLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 }
    }
  };

  const columnRightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 }
    }
  };

  const listItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 15, delay: i * 0.1 }
    })
  };

  const formItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18, delay: delay }
    })
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-56 h-56 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 border border-primary/30"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
          >
            <MessageSquare className="text-primary" size={18} sm:size={20} />
            <span className="text-foreground font-medium text-sm sm:text-base">Let's Connect</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Get
            <span className="text-primary block">
              In Touch
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto">
            Ready to discuss your next project or collaboration? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          <motion.div
            variants={columnLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 flex items-center">
                <Sparkles className="text-primary mr-2 sm:mr-3" size={28} sm:size={32} />
                Contact Details
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    custom={index}
                    variants={listItemVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{
                      scale: 1.02,
                      x: 5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="group relative block"
                  >
                    <div
                      className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl blur-lg transition-all duration-500"
                    ></div>
                    <div className="relative flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 bg-surface/60 backdrop-blur-md rounded-xl sm:rounded-2xl border border-border hover:border-border/80 transition-all duration-300">
                      <motion.div
                        whileHover={{ rotate: 10, transition: { type: "spring", stiffness: 400 } }}
                        className="p-3 sm:p-4 bg-primary rounded-lg sm:rounded-xl shadow-md"
                      >
                        {info.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-foreground text-base sm:text-lg mb-0.5 sm:mb-1">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200 text-sm sm:text-base">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Connect with me
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={index}
                    variants={listItemVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="group relative"
                  >
                    <div
                      className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 rounded-lg sm:rounded-xl blur-md transition-all duration-500"
                    ></div>
                    <div
                      className="relative flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-surface rounded-lg sm:rounded-xl text-foreground transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      {link.icon}
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{link.name}</div>
                        <div className="text-xs opacity-80">{link.description}</div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={columnRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-2xl sm:rounded-3xl blur-xl"></div>
            <div className="relative bg-surface/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <motion.div
                    variants={formItemVariant}
                    custom={0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-background/50 border border-border rounded-lg sm:rounded-xl text-foreground placeholder-muted-foreground/70 focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  <motion.div
                    variants={formItemVariant}
                    custom={0.15}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-background/50 border border-border rounded-lg sm:rounded-xl text-foreground placeholder-muted-foreground/70 focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  variants={formItemVariant}
                  custom={0.2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="subject"
                    className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-background/50 border border-border rounded-lg sm:rounded-xl text-foreground placeholder-muted-foreground/70 focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm sm:text-base"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  variants={formItemVariant}
                  custom={0.25}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-background/50 border border-border rounded-lg sm:rounded-xl text-foreground placeholder-muted-foreground/70 focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  variants={formItemVariant}
                  custom={0.3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    scale: isLoading ? 1 : 1.02,
                    y: isLoading ? 0 : -1,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className={`w-full text-primary-foreground px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isLoading
                      ? "bg-surface cursor-not-allowed"
                      : "bg-primary hover:shadow-md hover:shadow-primary/25"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitStatus !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-2 p-3 rounded-lg ${
                      submitStatus === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircle size={18} />
                    ) : (
                      <AlertCircle size={18} />
                    )}
                    <span className="text-xs sm:text-sm">{statusMessage}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
