import { CalendarIcon, FigmaLogoIcon } from "@radix-ui/react-icons";
import { Avatar } from "@radix-ui/react-avatar";
import { ExperienceTimer } from "./ExperienceTimer";
import { H2Heading } from "./UI/H2Heading";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Sr. Full-stack Software Engineer",
    company: "CareerBuilder.com, Noida",
    logo: "assets/icons/cb.png",
    date: "June 2020 - Current",
    description: [
      "CareerBuilder is an employment website that operates in the United States and Europe. Here, We use data-driven technology and personalized tools to help match employers with great candidates based on individual wants, needs, and unique skill sets. I'm working on the Talent Discovery Platform of CareerBuilder.com that provides solutions and services to employers and recruiters. Recruiters can perform semantic search for the candidates, send messages and jobs from the system, and clients can also add candidates to their ATS.",
      "We recently developed two new solutions: Pay Per Resume and Pay For Performance.",
      [
        '"Pay Per Resume" is an innovative approach to recruitment that allows clients and their recruitment team to pay only for the resumes they view instead of a monthly license.',
        '"Pay For Performance" offers a flexible way to advertise all client jobs, aligning cost with results. Clients only spend when candidates apply.',
      ],
    ],
  },
  {
    title: "Senior Web Developer",
    company: "Admiral Group Plc, InspopIndia.com Pvt. Ltd, Gurugram",
    logo: "assets/icons/admiral.png",
    date: "Nov 2015 - Jun 2020",
    description: [
      "InspopIndia.com was a branch of Admiral Group Plc in India to provide the technical support for the Insurance based products like Rastreator. Rastreator.com is Spain’s most popular online insurance broker and price comparison platform. Rastreator.com Provide different comparison products for Car, Telephony, Travel, Energy and Finance.",
      "I worked as a Senior Web Developer for 7 projects of company. I provided support for Rastreator.com and upgraded their projects from old technologies to .net core and Angular like Car-Insurance and Telephony. I also developed new projects from scratch Like:",
      [
        "Wakeel.com – It is an insurance comparison project which provide services for Gulf and MENA countries",
        "MultiProduct – Amazon affiliate for car products",
        "Viajes – Booking.com & Kayak.com affiliate",
        "adopta-un-perro.rastreator.com – Dog adoption welfare project",
      ],
    ],
  },
  {
    title: "Junior Web Developer",
    company: "E2E Research Pvt. Ltd, New Delhi",
    logo: "assets/icons/E2E.png",
    date: "Nov 2013 - Nov 2015",
    description: [
      "Worked as a Junior Software developer on .Net platform and handled the top three revenue generating projects of organization. I Created survey based web-projects for Nickelodeon and The Guardian which show the comparison and statics between different brand of UK, US and Aus. Also developed a cycle-training project for UK users that helped organization to register their users online as well as track the learning performance.",
      "In projects, we also provided D3.js based charts. User were able to download reports in pptx and pdf formats which we created using OpenXML 2.0. I also wrote a library based on OpenXML that could generate Powerpoint Presentations files with dynamic data",
      "In addition to client projects, I also developed an internal MIS project that worked as HR panel, Leave Management System, Task Management System as well as Project Management System",
    ],
  },
  /* {
    title: "WinForm and ASP.Net Developer",
    company: "Freelancer",
    logo: "assets/icons/freelancer.png",
    date: "Dec 2012 - Nov 2013",
    description: [
      "Worked with GIIT Pvt. Ltd and others on full project lifecycle.",
      "Delivered tools for School Management, Leave management, and an online exam portal.",
      "Built a store-management portal with product/order/reports access, upgraded from Web Forms to MVC.",
    ],
  },
  {
    title: "XML & VB Programmer",
    company: "Aptara Pvt. Ltd., New Delhi",
    logo: "assets/icons/aptara.jpg",
    date: "Nov 2011 - Nov 2012",
    description: [
      "Handled digital content transformation using XML/XSLT and PDF generation.",
      "Created VB.Net plugins for automating XML to PDF workflows.",
    ],
  }, */
];

export default function ExperienceTimeline() {
  return (
    <motion.section
      id="experienceSection"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="sm:px-4 py-12 mt-10 scroll-mt-12"
    >
      <H2Heading>Experience:</H2Heading>

      <div className="relative mb-6 flex flex-col sm:flex-row-reverse items-center sm:items-start">
        <ExperienceTimer />
      </div>

      <div className="relative border-l-2 border-blue-300 dark:border-blue-600 sm:ml-4 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative sm:pl-8">
            {/* Dot on timeline */}
            <span className="absolute -left-2 top-12 w-3 h-3 bg-blue-500 rounded-full shadow-md" />

            <div className="rounded-xl dark:hover:bg-[#1b1b1bed] p-4 sm:p-6 hover:shadow-lg transition-shadow">
              {/* Header: Logo and title */}
              <div className="grid grid-cols-[50px_1fr] sm:flex sm:flex-row sm:items-center gap-4 mb-3">
                <Avatar>
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-16 h-16 rounded-full object-cover border border-gray-200 dark:border-gray-600"
                  />
                </Avatar>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-400">
                    {exp.title}
                  </h3>
                  <div className="flex justify-start sm:justify-start text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-1">
                    <CalendarIcon className="mr-1 w-4 h-4" />
                    {exp.date}
                  </div>
                </div>
              </div>

              {/* Company Name */}
              <h4 className="text-sm sm:text-base font-medium text-gray-700 dark:text-amber-100 mb-2 flex items-center">
                <FigmaLogoIcon className="mr-2" /> {exp.company}
              </h4>

              {/* Description */}
              <div className="text-gray-700 dark:text-gray-100 text-justify text-base leading-relaxed space-y-2">
                {exp.description.map((para, i) =>
                  Array.isArray(para) ? (
                    <ul key={i} className="list-disc ml-5 space-y-1">
                      {para.map((li, j) => (
                        <li key={j}>{li}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i}>{para}</p>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
