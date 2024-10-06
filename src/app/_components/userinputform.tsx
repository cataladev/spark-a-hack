import React, { useState, useRef, useEffect } from 'react';
import { api } from '~/trpc/react';
import ReactMarkdown from 'react-markdown';
import { Noto_Sans } from "next/font/google";
import { useInView } from 'react-intersection-observer';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const UserInputForm: React.FC = () => {
  const generateIdea = api.post.generateIdea.useMutation({
    onSuccess(data) {
      console.log("This works");
      console.log(data);
      setResponse(data);
    },
    onError() {
      console.log("This is not working");
      setError('Failed to fetch data from the server.');
    },
  });

  const [schoolName, setSchoolName] = useState('');
  const [hackathonName, setHackathonName] = useState('');
  const [grade, setGrade] = useState('');
  const [techStack, setTechStack] = useState('');
  const [challenges, setChallenges] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { ref: responseRef, inView: responseInView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      console.log('Sending request to /api/generateIdea with data:', {
        schoolName,
        hackathonName,
        grade,
        techStack,
        challenges,
      });
      generateIdea.mutate({
        schoolName,
        hackathonName,
        grade,
        techStack,
        challenges,
      });
    } catch (error) {
      console.error('Error fetching data from the server:', error);
      setError('Failed to fetch data from the server.');
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h2 className="text-[#3C3744] bg-[#f1d302] mt-3 text-2xl font-bold mb-4 rounded-full px-2 py-1">
          Enter Your Detailed Info
        </h2>
        <input
          type="text"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          placeholder="Enter school name"
          className="mb-4 p-2 border border-[#f1d302] rounded text-[#f1d302] bg-[#3C3744] placeholder-[#969195]"
        />
        <input
          type="text"
          value={hackathonName}
          onChange={(e) => setHackathonName(e.target.value)}
          placeholder="Enter hackathon name"
          className="mb-4 p-2 border border-[#f1d302] rounded text-[#f1d302] bg-[#3C3744] placeholder-[#969195]"
        />
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Enter grade level"
          className="mb-4 p-2 border border-[#f1d302] rounded text-[#f1d302] bg-[#3C3744] placeholder-[#969195]"
        />
        <input
          type="text"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          placeholder="Enter technologies"
          className="mb-4 p-2 border border-[#f1d302] rounded text-[#f1d302] bg-[#3C3744] placeholder-[#969195]"
        />
        <input
          type="text"
          value={challenges}
          onChange={(e) => setChallenges(e.target.value)}
          placeholder="Enter challenges"
          className="mb-4 p-2 border border-[#f1d302] hover:border-[#f1d302] rounded text-[#f1d302] bg-[#3C3744] placeholder-[#969195]"
        />
        <div className={notoSans.className}></div>
        <button
          type="submit"
          className="rounded-full px-10 py-5 text-[#f1d302] bg-[#3C3744] font-bold hover:text-[#3c3744] hover:bg-[#f1d302] shadow animate-pulse transform transition hover:scale-110"
        >
          Submit
        </button>
      </form>

          {response && (
      <div
        ref={responseRef}
        className={`mt-4 p-6 bg-[#f1d302] border-gray-300 rounded-lg shadow-lg transition-all duration-700 ease-in-out ${
          responseInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        } max-w-screen-md w-full mx-auto`}
      >
        <h3 className="text-xl font-bold text-[#3C3744] mb-2">Response:</h3>
        <div className="space-y-4 text-[#3C3744] overflow-auto max-h-64 break-words">
          <ReactMarkdown>{response}</ReactMarkdown>
        </div>
      </div>
    )}

      {error && (
        <div className="mt-4 p-4 border border-red-500 rounded bg-red-100 text-red-700">
          <h3 className="text-xl font-bold">Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default UserInputForm;
