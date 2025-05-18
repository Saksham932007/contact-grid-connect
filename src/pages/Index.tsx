
import {
  Mail,
  Linkedin,
  Instagram,
  Twitter,
  Phone,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

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
            
            <div className="grid grid-cols-3 gap-6">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredIcon('linkedin')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full mb-3 transform transition-all duration-500 ${hoveredIcon === 'linkedin' ? 'scale-110 bg-[#0A66C2]' : 'bg-blue-100'}`}>
                  <Linkedin className={`h-8 w-8 transition-all duration-500 ${hoveredIcon === 'linkedin' ? 'text-white' : 'text-[#0A66C2]'}`} />
                </div>
                <span className={`font-medium transition-all duration-500 ${hoveredIcon === 'linkedin' ? 'text-white' : 'text-gray-800'}`}>LinkedIn</span>
                <div className="absolute inset-0 bg-[#0A66C2] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 z-0"></div>
              </a>
              
              {/* Gmail */}
              <a 
                href="mailto:john.doe@example.com" 
                className="group relative flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredIcon('gmail')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full mb-3 transform transition-all duration-500 ${hoveredIcon === 'gmail' ? 'scale-110 bg-[#EA4335]' : 'bg-red-100'}`}>
                  <Mail className={`h-8 w-8 transition-all duration-500 ${hoveredIcon === 'gmail' ? 'text-white' : 'text-[#EA4335]'}`} />
                </div>
                <span className={`font-medium transition-all duration-500 ${hoveredIcon === 'gmail' ? 'text-white' : 'text-gray-800'}`}>Gmail</span>
                <div className="absolute inset-0 bg-[#EA4335] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 z-0"></div>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredIcon('instagram')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full mb-3 transform transition-all duration-500 ${hoveredIcon === 'instagram' ? 'scale-110 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]' : 'bg-pink-100'}`}>
                  <Instagram className={`h-8 w-8 transition-all duration-500 ${hoveredIcon === 'instagram' ? 'text-white' : 'text-[#DD2A7B]'}`} />
                </div>
                <span className={`font-medium transition-all duration-500 ${hoveredIcon === 'instagram' ? 'text-white' : 'text-gray-800'}`}>Instagram</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 z-0"></div>
              </a>
              
              {/* Twitter */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredIcon('twitter')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full mb-3 transform transition-all duration-500 ${hoveredIcon === 'twitter' ? 'scale-110 bg-[#1DA1F2]' : 'bg-blue-100'}`}>
                  <Twitter className={`h-8 w-8 transition-all duration-500 ${hoveredIcon === 'twitter' ? 'text-white' : 'text-[#1DA1F2]'}`} />
                </div>
                <span className={`font-medium transition-all duration-500 ${hoveredIcon === 'twitter' ? 'text-white' : 'text-gray-800'}`}>Twitter</span>
                <div className="absolute inset-0 bg-[#1DA1F2] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 z-0"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
