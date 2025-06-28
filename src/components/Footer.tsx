import * as React from 'react';

export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  companyName: string;
  description: string;
  sections: FooterSection[];
  socialLinks: FooterLink[];
  copyright: string;
}

export const Footer: React.FC<FooterProps> = ({
  companyName,
  description,
  sections,
  socialLinks,
  copyright,
}) => {
  return (
    <footer className="bg-neutro-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">{companyName}</h3>
            <p className="text-neutro-300 mb-6">{description}</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-neutro-300 hover:text-white transition-colors duration-200"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-neutro-300 hover:text-white transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-neutro-700 mt-12 pt-8">
          <p className="text-center text-neutro-300">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 