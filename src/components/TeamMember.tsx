import React from 'react';
import { User } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
}

export default function TeamMember({ name, role }: TeamMemberProps) {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition group">
      <div className="w-20 h-20 mx-auto mb-4 bg-[#138f1d] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <User className="h-10 w-10 text-white" />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}