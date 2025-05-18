
import {
  Mail,
  Linkedin,
  Instagram,
  Twitter,
  Phone,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl relative inline-block">
            Get In Touch
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-600"></div>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'm always
            open to new opportunities and challenges.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            {/* Email */}
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-base font-medium text-gray-900">john.doe@example.com</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="text-base font-medium text-gray-900">+1 (234) 567-890</p>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-center mb-8">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Location</p>
                <p className="text-base font-medium text-gray-900">San Francisco, California</p>
              </div>
            </div>
            
            {/* Let's Connect Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-gray-600">
                Whether you have a question, project inquiry, or just want to say hello, 
                I'll get back to you as soon as possible.
              </p>
            </div>
          </div>
          
          {/* Right Column - Social Media Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
            
            <div className="grid grid-cols-3 gap-4">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-indigo-50"
              >
                <div className="bg-[#0A66C2] p-4 rounded-full mb-2">
                  <Linkedin className="h-8 w-8 text-white" />
                </div>
                <span className="text-gray-800 font-medium">LinkedIn</span>
              </a>
              
              {/* Gmail */}
              <a 
                href="mailto:john.doe@example.com" 
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-indigo-50"
              >
                <div className="bg-[#EA4335] p-4 rounded-full mb-2">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <span className="text-gray-800 font-medium">Gmail</span>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-indigo-50"
              >
                <div className="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-4 rounded-full mb-2">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <span className="text-gray-800 font-medium">Instagram</span>
              </a>
              
              {/* Twitter */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-indigo-50"
              >
                <div className="bg-[#1DA1F2] p-4 rounded-full mb-2">
                  <Twitter className="h-8 w-8 text-white" />
                </div>
                <span className="text-gray-800 font-medium">Twitter</span>
              </a>
              
              {/* Placeholder boxes to complete the 3x3 grid */}
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm opacity-0">
                <span>Placeholder</span>
              </div>
              
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm opacity-0">
                <span>Placeholder</span>
              </div>
              
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm opacity-0">
                <span>Placeholder</span>
              </div>
              
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm opacity-0">
                <span>Placeholder</span>
              </div>
              
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm opacity-0">
                <span>Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
