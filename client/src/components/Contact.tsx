import React, { useState, useEffect } from "react";
import { portfolioConfig } from "../data/portfolioConfig";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Check
} from "./Icons";

interface ContactProps {
  prefilledSubject?: string;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledSubject }) => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<"idle" | "ready" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [hasCopied, setHasCopied] = useState(false);

  // Update subject if passed from Services
  useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: `Project Inquiry: ${prefilledSubject}`
      }));
    }
  }, [prefilledSubject]);

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please provide a valid email address (e.g. name@example.com).";
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject for your inquiry.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const backendEndpoint = portfolioConfig.contactConfig.backendEndpoint;

    // IF A REAL BACKEND IS CONFIGURED:
    if (backendEndpoint && backendEndpoint.trim() !== "") {
      try {
        const response = await fetch(backendEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmittedStatus("sent");
          setStatusMessage("Thank you! Your message has been sent successfully.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setSubmittedStatus("error");
          setStatusMessage("Unable to send message via server. Please use the direct email button below.");
        }
      } catch (err) {
        setSubmittedStatus("error");
        setStatusMessage("Network error occurred. Please use the direct email link or copy the message.");
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    // DEFAULT SECURE MAILTO FALLBACK:
    // Honest handling: Does not falsely claim the message was dispatched over the wire.
    // Instead prepares the prefilled email and triggers default mail client.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus("ready");
      setStatusMessage(
        "Form validated! We have prepared your email. Click 'Launch Email Client' to send, or use the 'Copy Message' button."
      );

      // Launch mailto
      const mailtoUrl = `mailto:${portfolioConfig.owner.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Hello Tekeste,\n\nMy name is: ${formData.name}\nMy email is: ${formData.email}\n\nProject Details:\n${formData.message}\n`
      )}`;

      window.location.href = mailtoUrl;
    }, 400);
  };

  const handleCopyMessage = () => {
    const summary = `To: ${portfolioConfig.owner.email}\nSubject: ${formData.subject || "Project Inquiry"}\nFrom: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(summary);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-navy-950"
      aria-label="Contact and Inquiries"
    >
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="section-tag">
            <Mail size={14} className="text-cyan-400" />
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Have an idea for a website, software product, or web application? Let&apos;s discuss how to bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Email Direct Card */}
              <div className="glass-panel p-6 sm:p-7 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">Direct Email Address</span>
                    <h3 className="text-base font-bold text-white break-all">
                      {portfolioConfig.owner.email}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  Available for new project contracts, website redesigns, application builds, and collaborative software roles.
                </p>

                <a
                  href={`mailto:${portfolioConfig.owner.email}`}
                  className="btn-primary w-full text-center text-sm"
                  aria-label={`Send an email directly to ${portfolioConfig.owner.email}`}
                >
                  <Mail size={16} />
                  <span>Send Me an Email</span>
                </a>
              </div>

              {/* Communication Guarantee */}
              <div className="glass-card p-6 border-white/5 space-y-4">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>What you can expect:</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>Direct response within 24–48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>Honest technical advice &amp; scope estimation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>Clear roadmap, milestone definition, and transparent updates</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Backend Integration Note */}
            <div className="p-4 rounded-xl border border-white/5 bg-slate-950/60 text-[11px] text-slate-400 font-mono">
              <span className="text-slate-300 font-semibold block mb-1">
                🔒 Privacy &amp; Form Architecture:
              </span>
              This form verifies input client-side and triggers a mailto link with encoded parameters. No credentials or third-party trackers are exposed. Formspree or EmailJS can be plugged in by setting <code className="text-cyan-300">backendEndpoint</code> in <code className="text-cyan-300">portfolioConfig.ts</code>.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 border border-white/10">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your details and requirements. All fields marked with * are required.
              </p>

              {/* Status Banner */}
              {submittedStatus === "ready" && (
                <div className="mb-6 p-4 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-xs text-cyan-200 space-y-3">
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 size={16} className="text-cyan-400" />
                    <span>{statusMessage}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={`mailto:${portfolioConfig.owner.email}?subject=${encodeURIComponent(
                        formData.subject
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="btn-primary text-xs py-1.5 px-3"
                    >
                      <ExternalLink size={13} />
                      <span>Launch Email Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="btn-secondary text-xs py-1.5 px-3"
                    >
                      {hasCopied ? <Check size={13} /> : <Copy size={13} />}
                      <span>{hasCopied ? "Copied to Clipboard!" : "Copy Details"}</span>
                    </button>
                  </div>
                </div>
              )}

              {submittedStatus === "sent" && (
                <div className="mb-6 p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-xs text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {submittedStatus === "error" && (
                <div className="mb-6 p-4 rounded-lg border border-rose-500/30 bg-rose-500/10 text-xs text-rose-200 flex items-center gap-2">
                  <AlertCircle size={16} className="text-rose-400" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Interactive Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`form-input ${
                        errors.name ? "border-rose-500 focus:ring-rose-500" : ""
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-rose-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className={`form-input ${
                        errors.email ? "border-rose-500 focus:ring-rose-500" : ""
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-rose-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-slate-300 mb-1.5"
                  >
                    Subject / Project Type <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. New Website Build or Web App Concept"
                    className={`form-input ${
                      errors.subject ? "border-rose-500 focus:ring-rose-500" : ""
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-rose-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-300 mb-1.5"
                  >
                    Message / Project Details <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your vision, goals, timeline, and any specific functionality you need..."
                    className={`form-input resize-y ${
                      errors.message ? "border-rose-500 focus:ring-rose-500" : ""
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-rose-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto px-8"
                    id="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                        <span>Validating...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
